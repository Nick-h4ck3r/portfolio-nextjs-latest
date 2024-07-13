import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

export default function Blogs({}: Props) {
  const [posts, setPosts] = useState([]);

  const query = `query {
    publication(host: "nickk2305.hashnode.dev") {
      posts(first:4) {
        edges {
          node{
            title,
            slug,
            brief
            coverImage {
              url
            }
          }
        }
      }
    }
  }`;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch("https://gql.hashnode.com", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        // "Authorization": "Bearer {API-kEY}", if you're using token
      },
      body: JSON.stringify({ query }),
    });

    const data = await response.json();
    setPosts(data.data.publication.posts.edges);
  };

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

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 w-full">
          {posts.map((post: any, key: any) => (
            <a
              href={`https://nickk2305.hashnode.dev/${post.node.slug}`}
              key={key}
            >
              <div className="md:flex bg-slate-300/30 backdrop-blur-sm dark:bg-slate-400/20 rounded-md gap-4 mx-auto shadow-sm hover:scale-105 duration-300">
                <Image
                  className={`object-cover w-0 md:w-[50%] rounded-l-md`}
                  src={post.node.coverImage.url}
                  alt={post.node.title}
                  width={200}
                  height={200}
                />
                <div className="py-4 md:py-4 px-2 md:pl-0 md:pr-4">
                  <h2 className="font-outfit font-semibold text-sm md:text-lg md:font-bold md:leading-6 px-2 md:px-0 md:pt-2 text-black dark:text-white">
                    {post.node.title}
                  </h2>
                  <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm font-outfit line-clamp-2 font-light md:line-clamp-4 px-4 md:px-0 pt-3 md:pt-2">
                    {post.node.brief}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </>
  );
}
