import type { NextApiRequest, NextApiResponse } from "next";
import { XMLParser } from "fast-xml-parser";

type MediumPost = {
  title: string;
  link: string;
  description: string;
  thumbnail: string | null;
  fallbackThumbnail: string | null;
  pubDate: string;
};

type MediumApiResponse = {
  posts: MediumPost[];
};

const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME ?? "nickk2305";
const MEDIUM_FEED_URL = `https://medium.com/feed/@${MEDIUM_USERNAME}`;

const xmlParser = new XMLParser({
  ignoreAttributes: false,
  removeNSPrefix: true,
});

const stripHtml = (html: string) =>
  html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();

const normalizeMediumImageUrl = (url: string | null | undefined) => {
  if (!url) {
    return null;
  }

  try {
    const parsed = new URL(url);

    if (parsed.hostname === "miro.medium.com") {
      return url;
    }

    const filename = parsed.pathname.split("/").pop();
    if (!filename) {
      return url;
    }

    return `https://miro.medium.com/v2/resize:fit:1400/format:webp/${filename}`;
  } catch (error) {
    console.error("Failed to normalize Medium image URL", error);
    return url;
  }
};

export default async function handler(
  _: NextApiRequest,
  res: NextApiResponse<MediumApiResponse | { error: string }>
) {
  try {
    const response = await fetch(MEDIUM_FEED_URL, {
      headers: {
        Accept: "application/rss+xml",
      },
    });

    if (!response.ok) {
      throw new Error(`Medium feed responded with ${response.status}`);
    }

    const xml = await response.text();
    const parsedFeed = xmlParser.parse(xml);

    const items = parsedFeed?.rss?.channel?.item;
    if (!items || (Array.isArray(items) && items.length === 0)) {
      throw new Error("No posts found in Medium feed");
    }

    const normalizedItems = Array.isArray(items) ? items : [items];

    const posts: MediumPost[] = normalizedItems.slice(0, 4).map((item: any) => {
      const encodedContent =
        typeof item.encoded === "string" ? item.encoded : "";
      const descriptionSource =
        encodedContent || item.description || "Read on Medium.";

      const imageFromMedia =
        item["media:thumbnail"]?.["@_url"] ||
        item["media:content"]?.["@_url"] ||
        (Array.isArray(item["media:content"])
          ? item["media:content"][0]?.["@_url"]
          : undefined);

      const imageFromContent = encodedContent.match(
        /<img[^>]+src="([^"]+)"/i
      );

      const thumbnail =
        imageFromMedia ||
        (imageFromContent ? imageFromContent[1] : null) ||
        null;

      const normalizedThumbnail = normalizeMediumImageUrl(thumbnail);

      const descriptionText = stripHtml(descriptionSource);

      return {
        title: item.title ?? "Untitled",
        link: item.link,
        description:
          descriptionText.length > 220
            ? `${descriptionText.slice(0, 217)}...`
            : descriptionText,
        thumbnail: normalizedThumbnail,
        fallbackThumbnail: thumbnail,
        pubDate: item.pubDate ?? "",
      };
    });

    res.setHeader(
      "Cache-Control",
      "s-maxage=3600, stale-while-revalidate=86400"
    );
    res.status(200).json({ posts });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to load Medium posts" });
  }
}
