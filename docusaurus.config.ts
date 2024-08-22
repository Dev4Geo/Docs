import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Dev4Geo",
  tagline: "Tech for Geologists",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "th"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/dev4geo/docs/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: 'https://github.com/dev4geo/docs/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/dev4geo_social_card.jpg",
    navbar: {
      title: "Dev4Geo",
      logo: {
        alt: "Logo",
        src: "img/dev4geo_logo.jpg",
      },
      items: [
        {
          to: "/docs/intro",
          label: "About",
          position: "left",
        },
        {
          to: "/docs/request-a-new-feature",
          label: "Request Feature",
          position: "left",
        },
        {
          to: "/docs/category/showcases",
          label: "Showcases",
          position: "left",
        },
        {
          to: "/docs/category/resources",
          label: "Resources",
          position: "left",
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "showcaseSidebar",
        //   position: "left",
        //   label: "Showcases",
        // },
        {
          to: "/docs/community",
          label: "Community",
          position: "left",
        },
        // {
        //   position: 'left',
        //   label: 'Manage',
        // },
        // {to: '/blog', label: 'Blogs', position: 'left'},
        {
          href: "https://github.com/dev4geo/docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "About",
          items: [
            {
              label: "Dev4Geo",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            // TODO: need permanent link for discord
            {
              label: "Discord",
              href: "https://discord.gg/tmnGnKsV",
            },
            {
              label: "Facebook",
              href: "https://www.facebook.com/dev4geo",
            },
            {
              label: "GitHub",
              href: "https://github.com/Dev4Geo/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub Repos",
              href: "https://github.com/orgs/Dev4Geo/repositories",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dev4Geo`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
