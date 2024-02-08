// import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import {
  SiAngular,
  SiApollographql,
  SiCss3,
  SiExpress,
  SiFirebase,
  SiGatsby,
  SiGraphql,
  SiJavascript,
  SiJest,
  SiJquery,
  SiLaravel,
  SiMui,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPrisma,
  SiPwa,
  SiReact,
  SiRedux,
  SiRemix,
  SiSocketdotio,
  SiStorybook,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack,
  SiWordpress,
} from "@icons-pack/react-simple-icons";

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 24;

export const STACKS: stacksProps = {
  PHP: (
    <SiPhp
      size={iconSize}
      color="default"
    />
  ),
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
  //   Bootstrap: (
  //     <BsFillBootstrapFill
  //       size={iconSize}
  //       className="text-purple-500"
  //     />
  //   ),
  GraphQL: (
    <SiGraphql
      size={iconSize}
      className="text-pink-600"
    />
  ),
  Apollo: <SiApollographql size={iconSize} />,
  WordPress: <SiWordpress size={iconSize} />,
  Laravel: (
    <SiLaravel
      size={iconSize}
      color="default"
    />
  ),
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
  Angular: (
    <SiAngular
      size={iconSize}
      color="default"
    />
  ),
  "Vue.js": (
    <SiVuedotjs
      size={iconSize}
      color="default"
    />
  ),
  "Nuxt.js": (
    <SiNuxtdotjs
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
  Gatsby: (
    <SiGatsby
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
  Nginx: (
    <SiNginx
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
  Storybook: (
    <SiStorybook
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
  Socket: (
    <SiSocketdotio
      size={iconSize}
      color="default"
    />
  ),
  Remix: (
    <SiRemix
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
  Jquery: (
    <SiJquery
      size={iconSize}
      color="default"
    />
  ),
};
