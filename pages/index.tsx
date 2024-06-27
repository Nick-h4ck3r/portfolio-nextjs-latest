import Head from "next/head";

import {
  Header,
  Hero,
  About,
  Experience,
  Skills,
  Projects,
  Blogs,
  Contact,
} from "@/components";

export default function Home({ data }: any) {
  return (
    <div
      id="mainBody"
      className="dark:bg-black bg-white text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-transparent scrollbar-thumb-slate-500/20 scrollbar-thin select-none"
    >
      <Head>
        <title>Nikhil Kadam</title>
        <meta
          name="description"
          content="Nikhil Kadam is a software developer and the founder of localhostcoders, a community that provides valuable resources for beginner developers. Explore Nikhil's latest projects and accomplishments, and learn more about his expertise in software development. Connect with Nikhil today to collaborate on your next software development project."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Header />

      <section
        id="hero"
        className="snap-start"
      >
        <Hero />
      </section>

      <section
        id="about"
        className="snap-center"
      >
        <About />
      </section>

      <section
        id="experience"
        className="snap-center"
      >
        <Experience />
      </section>

      <section
        id="skills"
        className="snap-center"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="snap-center"
      >
        <Projects data={data.data} />
      </section>

      <section
        id="blogs"
        className="snap-center"
      >
        <Blogs />
      </section>

      <section
        id="contact"
        className="snap-start"
      >
        <Contact />
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const fs = require("fs/promises");
  const path = require("path");
  const filePath = path.join(process.cwd(), "/data", "/data.json");

  var data = await fs.readFile(filePath);
  data = JSON.parse(data);

  return {
    props: {
      data: data.data,
    },
  };
}
