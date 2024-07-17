import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
  charset: "utf-8",
  title: "Nikhil Kadam - Portfolio",
  description:
    "A website about Nikhil Kadam, full stack developer, open source enthusiast, and tech creator.",
  keywords:
    "Nikhil Kadam, Full Stack Developer, Open Source, Tech Creator, Nashik, Maharashtra, India",
  author: "Nikhil Kadam",
  openGraph: {
    url: "https://nikhilkadam.vercel.app",
    title: "Nikhil Kadam - Portfolio",
    description:
      "A website about Nikhil Kadam, full stack developer, open source enthusiast, and tech creator.",
    siteName: "Nikhil Kadam - Portfolio",
    images: [
      {
        url: "https://nikhilkadam.vercel.app/images/profile.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nikhil Kadam - Portfolio",
    description:
      "A website about Nikhil Kadam, full stack developer, open source enthusiast, and tech creator.",
    images: [
      {
        url: "https://nikhilkadam.vercel.app/images/profile.jpg",
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function Document() {
  return (
    <Html
      lang="en"
      className={""}
    >
      <title>{metadata.title}</title>
      <Head>
        <meta charSet={metadata.charset} />
        <meta
          name="title"
          content={metadata.title}
        />
        <meta
          name="description"
          content={metadata.description}
        />
        <meta
          name="keywords"
          content={metadata.keywords}
        />
        <meta
          name="author"
          content={metadata.author}
        />
        <meta
          property="og:url"
          content={metadata.openGraph.url}
        />
        <meta
          property="og:title"
          content={metadata.openGraph.title}
        />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta
          property="og:image"
          content={metadata.openGraph.images[0].url}
        />
        <meta
          property="og:type"
          content={metadata.openGraph.type}
        />
        <meta
          property="og:locale"
          content={metadata.openGraph.locale}
        />
        <meta
          name="twitter:card"
          content={metadata.twitter.card}
        />
        <meta
          name="twitter:title"
          content={metadata.twitter.title}
        />
        <meta
          name="twitter:description"
          content={metadata.twitter.description}
        />
        <meta
          name="twitter:image"
          content={metadata.twitter.images[0].url}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
