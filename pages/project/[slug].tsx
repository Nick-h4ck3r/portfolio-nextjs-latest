import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import fs from "fs/promises";
import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

import slugify from "@/lib/slugify";

type ProjectTech = {
  tech: string;
};

type Project = {
  id: number;
  title: string;
  content: string;
  imgurl: string;
  githubLink: string;
  deployedLink: string;
  tech: ProjectTech[];
};

type ProjectPageProps = {
  project: Project;
  readme: string | null;
};

const loadProjects = async (): Promise<Project[]> => {
  const filePath = path.join(process.cwd(), "data", "data.json");
  const raw = await fs.readFile(filePath, "utf-8");
  const parsed = JSON.parse(raw);
  return parsed.data.data;
};

const fetchGithubReadme = async (githubLink: string) => {
  try {
    const url = new URL(githubLink);
    const segments = url.pathname.split("/").filter(Boolean);
    if (segments.length < 2) return null;
    const [owner, repo] = segments;

    for (const branch of ["main", "master"]) {
      const rawUrl = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}/README.md`;
      const response = await fetch(rawUrl);
      if (response.ok) {
        return await response.text();
      }
    }

    return null;
  } catch {
    return null;
  }
};

const extractSection = (markdown: string | null, heading: string) => {
  if (!markdown) return null;
  const regex = new RegExp(`## ${heading}[\\s\\S]*?(?=\\n## |$)`, "i");
  const match = markdown.match(regex);
  if (!match) return null;

  return match[0].replace(new RegExp(`## ${heading}\\s*`, "i"), "").trim();
};

const extractListSection = (markdown: string | null, heading: string) => {
  const section = extractSection(markdown, heading);
  if (!section) return [];

  return section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("-"))
    .map((line) => line.replace(/^-\s*/g, ""))
    .filter(Boolean);
};

const extractTechnologies = (markdown: string | null) => {
  const section = extractSection(markdown, "Technologies Used");
  if (!section) return [];

  return section
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.startsWith("-"))
    .map((line) => {
      const match = line.match(/- \[([^\]]+)\]\(([^)]+)\):?\s*(.*)/);
      if (!match) {
        return { name: line.replace("- ", ""), url: "", description: "" };
      }
      const [, name, url, description] = match;
      return { name, url, description };
    });
};

const markdownComponents: Components = {
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-black dark:text-white mt-6 first:mt-0">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-gray-700 dark:text-gray-200 leading-relaxed mt-3">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200 mt-3">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-200 mt-3">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="text-gray-700 dark:text-gray-200">{children}</li>
  ),
  code: ({ inline, children }) => {
    if (inline) {
      return (
        <code className="px-1 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-sm">
          {children}
        </code>
      );
    }

    return (
      <pre className="bg-slate-900 text-slate-100 rounded-2xl p-4 overflow-x-auto text-sm mt-4 shadow-inner">
        <code>{children}</code>
      </pre>
    );
  },
};

const MarkdownRenderer = ({ content }: { content: string }) => (
  <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
    {content}
  </ReactMarkdown>
);

export default function ProjectPage({ project, readme }: ProjectPageProps) {
  const featureList = extractListSection(readme, "Key Features");
  const techDetails = extractTechnologies(readme);
  const setupGuide = extractSection(readme, "Setting Up the Project Locally");
  const deploymentGuide = extractSection(readme, "Deployment");
  const contributing = extractSection(readme, "Contributing");
  const license = extractSection(readme, "License");

  return (
    <>
      <Head>
        <title>{project.title} | Project</title>
        <meta name="description" content={project.content} />
      </Head>

      <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 space-y-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-fit"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
              Back to home
            </Link>

            <div className="flex items-center gap-4 text-sm font-medium">
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-blue-600 dark:hover:text-blue-400"
              >
                Github
              </Link>
              <Link
                href={project.deployedLink}
                target="_blank"
                rel="noreferrer"
                className="underline hover:text-blue-600 dark:hover:text-blue-400"
              >
                Live
              </Link>
            </div>
          </div>

          <section className="grid gap-6 lg:grid-cols-[1.7fr,1fr]">
            <div className="bg-surface-card border border-surface rounded-3xl backdrop-blur-md shadow-lg p-8 space-y-6">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[6px] text-gray-600 dark:text-gray-400">
                  Case Study
                </p>
                <h1 className="text-3xl md:text-5xl font-semibold text-black dark:text-white">
                  {project.title}
                </h1>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                  {project.content}
                </p>
              </div>

              {featureList.length > 0 && (
                <div className="pt-2">
                  <p className="text-xs uppercase tracking-[4px] text-gray-500 dark:text-gray-400 mb-3">
                    Highlights
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    {featureList.slice(0, 3).map((feature, idx) => (
                      <div
                        key={`${feature}-${idx}`}
                        className="rounded-2xl border border-surface bg-white/20 dark:bg-black/20 p-4 shadow-sm"
                      >
                        <p className="text-[11px] uppercase tracking-[3px] text-gray-500">
                          Feature {idx + 1}
                        </p>
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-2">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="bg-surface-card border border-surface rounded-3xl backdrop-blur-md shadow-lg p-8 flex flex-col gap-6">
              <div>
                <p className="text-xs uppercase tracking-[4px] text-gray-500 dark:text-gray-400">
                  Project Links
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <Link
                    href={project.deployedLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[120px] text-center rounded-2xl border border-surface py-3 font-medium text-sm hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
                  >
                    View Live
                  </Link>
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 min-w-[120px] text-center rounded-2xl border border-surface py-3 font-medium text-sm hover:bg-white/50 dark:hover:bg-white/10 transition-colors"
                  >
                    GitHub
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-surface bg-white/30 dark:bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[4px] text-gray-500">
                    Key Features
                  </p>
                  <p className="text-2xl font-semibold text-black dark:text-white mt-2">
                    {featureList.length || "—"}
                  </p>
                </div>
                <div className="rounded-2xl border border-surface bg-white/30 dark:bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[4px] text-gray-500">
                    Tech Mentioned
                  </p>
                  <p className="text-2xl font-semibold text-black dark:text-white mt-2">
                    {techDetails.length || project.tech.length}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[4px] text-gray-500 dark:text-gray-400">
                  In this build
                </p>
                <div className="flex flex-wrap gap-3 mt-3">
                  {project.tech.map((stack, index) => (
                    <div
                      key={`${stack.tech}-${index}`}
                      className="flex items-center gap-2 rounded-full border border-surface bg-white/40 dark:bg-black/30 py-1.5 px-3"
                    >
                      <Image
                        src={stack.tech}
                        alt="tech logo"
                        width={20}
                        height={20}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="relative rounded-3xl overflow-hidden border border-surface shadow-xl">
            <Image
              src={project.imgurl}
              alt={`${project.title} screenshot`}
              width={1400}
              height={800}
              className="w-full object-cover"
              priority
            />
          </div>

          {featureList.length > 0 && (
            <section className="grid gap-6 lg:grid-cols-[1.5fr,1fr]">
              <div className="bg-surface-card border border-surface rounded-3xl p-8 space-y-6 backdrop-blur">
                <div>
                  <p className="text-xs uppercase tracking-[4px] text-gray-500 dark:text-gray-400">
                    Product Story
                  </p>
                  <h2 className="text-2xl font-semibold text-black dark:text-white mt-2">
                    Key features shipped
                  </h2>
                </div>
                <ul className="space-y-4 text-gray-800 dark:text-gray-100">
                  {featureList.map((feature, index) => (
                    <li key={`${feature}-${index}`} className="flex gap-4">
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 pt-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {techDetails.length > 0 && (
                <div className="bg-surface-card border border-surface rounded-3xl p-8 space-y-5 backdrop-blur">
                  <div>
                    <p className="text-xs uppercase tracking-[4px] text-gray-500 dark:text-gray-400">
                      Stack reasoning
                    </p>
                    <h3 className="text-xl font-semibold text-black dark:text-white mt-2">
                      Why these tools
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      Pulled straight from the project README for transparency.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {techDetails.map((tech) => (
                      <div
                        key={tech.name}
                        className="rounded-2xl border border-surface bg-white/40 dark:bg-black/30 p-4"
                      >
                        <div className="flex items-center justify-between gap-4">
                          <p className="font-semibold text-gray-900 dark:text-gray-100">
                            {tech.name}
                          </p>
                          {tech.url && (
                            <Link
                              href={tech.url}
                              target="_blank"
                              rel="noreferrer"
                              className="text-xs font-medium text-blue-600 dark:text-blue-400 underline"
                            >
                              Docs
                            </Link>
                          )}
                        </div>
                        {tech.description && (
                          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                            {tech.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {(setupGuide || deploymentGuide) && (
            <section className="grid gap-6 lg:grid-cols-2">
              {setupGuide && (
                <div className="bg-surface-card border border-surface rounded-3xl p-8 backdrop-blur">
                  <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                    Setup guide
                  </h2>
                  <MarkdownRenderer content={setupGuide} />
                </div>
              )}

              {deploymentGuide && (
                <div className="bg-surface-card border border-surface rounded-3xl p-8 backdrop-blur">
                  <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                    Deployment notes
                  </h2>
                  <MarkdownRenderer content={deploymentGuide} />
                </div>
              )}
            </section>
          )}

          {(contributing || license) && (
            <section className="grid gap-6 lg:grid-cols-2">
              {contributing && (
                <div className="bg-surface-card border border-surface rounded-3xl p-8 backdrop-blur">
                  <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                    Contributing
                  </h2>
                  <MarkdownRenderer content={contributing} />
                </div>
              )}

              {license && (
                <div className="bg-surface-card border border-surface rounded-3xl p-8 backdrop-blur">
                  <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">
                    License
                  </h2>
                  <MarkdownRenderer content={license} />
                </div>
              )}
            </section>
          )}
        </div>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = await loadProjects();
  const paths = projects.map((project) => ({
    params: { slug: slugify(project.title) },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const projects = await loadProjects();
  const slug = params?.slug as string;
  const project = projects.find((item) => slugify(item.title) === slug);

  if (!project) {
    return {
      notFound: true,
    };
  }

  const readme = await fetchGithubReadme(project.githubLink);

  return {
    props: {
      project,
      readme,
    },
  };
};
