// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Saasus Platform Document",
  // tagline: 'Saasus Platform are cool',
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.saasus.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Anti-Pattern-Inc", // Usually your GitHub org/user name.
  projectName: "saasus-platform-document", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "ja" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["ja", "en"],
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // バージョンファイルを作成した後に、公開したいバージョンを指定する
          // docs:version　{ver} する場合はonlyIncludeVersionsに{ver}が含まれていたり、空配列だとエラーになる
          onlyIncludeVersions: ["1.10"],
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      "redocusaurus",
      {
        specs: [
          {
            id: "authapi-spec",
            spec: "./api/authapi.yml",
          },
          {
            id: "billingapi-spec",
            spec: "./api/billingapi.yml",
          },
          {
            id: "pricingapi-spec",
            spec: "./api/pricingapi.yml",
          },
          {
            id: "communicationapi-spec",
            spec: "./api/communicationapi.yml",
          },
          {
            id: "apilogapi-spec",
            spec: "./api/apilogapi.yml",
          },
          {
            id: "awsmarketplaceapi-spec",
            spec: "./api/awsmarketplaceapi.yml",
          },
          {
            id: "integration-spec",
            spec: "./api/integration.yml",
          },
          {
            id: "pricingapi-spec-jpn",
            spec: "./api/pricingapi.jpn.yml",
          },
          {
            id: "apilogapi-spec-jpn",
            spec: "./api/apilogapi.jpn.yml",
          },
          {
            id: "authapi-spec-jpn",
            spec: "./api/authapi.jpn.yml",
          },
          {
            id: "awsmarketplaceapi-spec-jpn",
            spec: "./api/awsmarketplaceapi.jpn.yml",
          },
          {
            id: "billingapi-spec-jpn",
            spec: "./api/billingapi.jpn.yml",
          },
          {
            id: "communicationapi-spec-jpn",
            spec: "./api/communicationapi.jpn.yml",
          },
          {
            id: "integration-spec-jpn",
            spec: "./api/integrationapi.jpn.yml",
          },
        ],
        theme: {
          primaryColor: "#1A75FF",
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
          srcDark: "img/logo-dark.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "guideSidebar",
            position: "left",
            label: "Guides",
          },
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          {
            type: "docSidebar",
            sidebarId: "apiDocSidebar",
            position: "left",
            label: "API Docs",
          },
          {
            type: "docSidebar",
            position: "left",
            sidebarId: "changelogSidebar",
            label: "Changelog",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            position: "left",
            dropdownActiveClassDisabled: true,
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/saasus-platform-document",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Anti-Pattern Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["php"],
      },
    }),

  plugins: [
    // [
    //   '@docusaurus/plugin-ideal-image',
    //   {
    //     size: 500,
    //     // quality: 70,
    //     // max: 640, // max resized image's size.
    //     // min: 640, // min resized image's size. if original is lower, use that size.
    //     // steps: 1, // the max number of images generated between min and max (inclusive)
    //     disableInDev: false,
    //   },
    // ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "ja"]
      },
    ],
  ],
};

module.exports = config;
