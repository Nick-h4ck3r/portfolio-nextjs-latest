import {
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJquery,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostman,
  SiPrisma,
  SiPwa,
  SiPython,
  SiReact,
  SiRedux,
  SiShadcnui,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiWordpress
} from "@icons-pack/react-simple-icons";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  JavaScript: (
    <SiJavascript
      size={iconSize}
      color="default"
    />
  ),
  TypeScript: (
    <SiTypescript
      size={iconSize}
      color="default"
    />
  ),
  "Next.js": (
    <SiNextdotjs
      size={iconSize}
      color="default"
    />
  ),
  "React.js": (
    <SiReact
      size={iconSize}
      color="default"
    />
  ),
  TailwindCSS: (
    <SiTailwindcss
      size={iconSize}
      color="default"
    />
  ),
  WordPress: <SiWordpress size={iconSize} />,
  "Material UI": (
    <SiMui
      size={iconSize}
      color="default"
    />
  ),
  Vite: (
    <SiVite
      size={iconSize}
      color="default"
    />
  ),
  Prisma: (
    <SiPrisma
      size={iconSize}
      color="default"
    />
  ),
  Firebase: (
    <SiFirebase
      size={iconSize}
      color="default"
    />
  ),
  "Node.js": (
    <SiNodedotjs
      size={iconSize}
      color="default"
    />
  ),
  Redux: (
    <SiRedux
      size={iconSize}
      color="default"
    />
  ),
  Webpack: (
    <SiWebpack
      size={iconSize}
      color="default"
    />
  ),
  "Styled Components": (
    <SiStyledcomponents
      size={iconSize}
      color="default"
    />
  ),
  PWA: (
    <SiPwa
      size={iconSize}
      color="default"
    />
  ),
  Docker: (
    <SiDocker
      size={iconSize}
      color="default"
    />
  ),
  Nginx: (
    <SiNginx
      size={iconSize}
      color="default"
    />
  ),
  Postman: (
    <SiPostman
      size={iconSize}
      color="default"
    />
  ),
  Jest: (
    <SiJest
      size={iconSize}
      color="default"
    />
  ),
  HTML5: (
    <SiHtml5
      size={iconSize}
      color="default"
    />
  ),
  CSS: (
    <SiCss3
      size={iconSize}
      color="default"
    />
  ),
  Bootstrap: (
    <SiBootstrap
      size={iconSize}
      color="default"
    />
  ),
  Express: (
    <SiExpress
      size={iconSize}
      color="default"
    />
  ),
  Git: (
    <SiGit
      size={iconSize}
      color="default"
    />
  ),
  Github: (
    <SiGithub
      size={iconSize}
      color="default"
    />
  ),
  Jquery: (
    <SiJquery
      size={iconSize}
      color="default"
    />
  ),
  Python: (
    <SiPython
      size={iconSize}
      color="default"
    />
  ),
  Shadcn: (
    <SiShadcnui
      size={iconSize}
      color="default"
    />
  ),
};
