import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type MediumPost = {
  title: string;
  link: string;
  description: string;
  thumbnail: string | null;
  fallbackThumbnail: string | null;
  pubDate: string;
};

type MediumThumbnailProps = {
  primary: string | null;
  fallback: string | null;
  alt: string;
  className?: string;
};

function MediumThumbnail({
  primary,
  fallback,
  alt,
  className,
}: MediumThumbnailProps) {
  const [source, setSource] = useState<string | null>(primary ?? fallback ?? null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setSource(primary ?? fallback ?? null);
    setFailed(false);
  }, [primary, fallback]);

  if (!source || failed) {
    return null;
  }

  return (
    <div className={`relative h-48 w-full overflow-hidden ${className ?? ""}`}>
      <Image
        src={source}
        alt={alt}
        fill
        sizes="(min-width: 768px) 336px, 100vw"
        className="object-cover"
        loading="lazy"
        unoptimized
        onError={() => {
          if (fallback && source !== fallback) {
            setSource(fallback);
          } else {
            setFailed(true);
          }
        }}
      />
    </div>
  );
}

export default function Blogs() {
  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/medium");

        if (!response.ok) {
          throw new Error("Failed to fetch Medium posts");
        }

        const data = await response.json();
        setPosts(data.posts ?? []);
      } catch (error) {
        console.error(error);
        setPosts([]);
      }
    };

    fetchPosts();
  }, []);

  return (
    <>
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{
      once: true,
    }}
    className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center pt-16 lg:pt-28"
  >
    <h3 className="ml-6 absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
      Blogs
    </h3>

    <div className="grid gap-6 w-full md:grid-cols-6 md:grid-rows-2">
      {posts.slice(0, 3).map((post, index) => {
        const layoutConfig = [
          {
            grid: "md:col-span-3 md:row-span-2",
            card: "md:flex-col md:items-stretch md:gap-6",
            thumbnail: "md:w-full md:min-h-[320px] md:h-[320px]",
            paddingWithImage: "px-5 sm:px-6 md:px-8",
            paddingWithoutImage: "px-5 sm:px-6 md:px-8",
            surface: "bg-surface-card-strong",
          },
          {
            grid: "md:col-span-3 md:row-span-1",
            card: "md:flex-row md:items-stretch",
            thumbnail: "md:w-1/2 md:min-h-[220px] md:h-full",
            paddingWithImage: "px-5 sm:px-6 md:px-7",
            paddingWithoutImage: "px-5 sm:px-6 md:px-7",
            surface: "bg-surface-card",
          },
          {
            grid: "md:col-span-3 md:row-span-1",
            card: "md:flex-row md:items-stretch",
            thumbnail: "md:w-1/2 md:min-h-[220px] md:h-full",
            paddingWithImage: "px-5 sm:px-6 md:px-7",
            paddingWithoutImage: "px-5 sm:px-6 md:px-7",
            surface: "bg-surface-card",
          },
        ][index] ?? {
          grid: "md:col-span-3 md:row-span-1",
          card: "md:flex-row md:items-stretch",
          thumbnail: "md:w-1/2 md:min-h-[200px] md:h-full",
          paddingWithImage: "px-5 sm:px-6 md:px-7",
          paddingWithoutImage: "px-5 sm:px-6 md:px-7",
          surface: "bg-surface-card",
        };

        const primaryThumbnail = post.thumbnail ?? post.fallbackThumbnail;
        const hasThumbnail = Boolean(primaryThumbnail);
        const contentPadding = hasThumbnail
          ? layoutConfig.paddingWithImage
          : layoutConfig.paddingWithoutImage;

        return (
          <a
            href={post.link}
            key={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`block h-full ${layoutConfig.grid}`}
          >
            <div
              className={`flex h-full flex-col ${layoutConfig.surface} backdrop-blur-sm border border-surface rounded-md overflow-hidden shadow-sm transition-transform duration-300 hover:-translate-y-1 ${layoutConfig.card}`}
            >
              {hasThumbnail && (
                <MediumThumbnail
                  primary={primaryThumbnail}
                  fallback={post.fallbackThumbnail}
                  alt={post.title}
                  className={layoutConfig.thumbnail}
                />
              )}

              <div
                className={`flex flex-1 flex-col justify-between py-5 ${contentPadding}`}
              >
                <h2 className="font-outfit font-semibold text-sm md:text-lg md:font-bold md:leading-6 text-left text-black dark:text-white line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-outfit line-clamp-3 mt-3 md:mt-4 text-left">
                  {post.description}
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </div>
  </motion.div>
</>
  );
}
