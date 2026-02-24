// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from "prism-react-renderer";
import llmsTxtPlugin from "./plugins/llms-txt-plugin";

const locale = process.env.DOCUSAURUS_CURRENT_LOCALE || 'en';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SaaSus Platform Document",
  // tagline: 'SaaSus Platform are cool',
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
          onlyIncludeVersions: ["1.12"],
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        googleTagManager: {
          containerId: 'GTM-5T68ML2',
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
            id: "apigatewayapi-spec",
            spec: "./api/apigatewayapi.yml",
          },
          {
            id: "analysisapi-spec",
            spec: "./api/analysisapi.yml",
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
          {
            id: "apigatewayapi-spec-jpn",
            spec: "./api/apigatewayapi.jpn.yml",
          },
          {
            id: "analysisapi-spec-jpn",
            spec: "./api/analysisapi.jpn.yml",
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
      image: 'https://docs.saasus.io/img/logo.png',

      // サイトの基本的なメタ情報を設定
      metadata: [
        { name: 'og:type', content: 'website' },
        { name: 'og:site_name', content: 'SaaSus Platform Documentation' },
        { name: 'og:title', content: 'SaaSus Platform Documentation' },
        { name: 'og:description', content: 'Official documentation for SaaSus Platform' },
        { name: 'og:url', content: 'https://docs.saasus.io/' },
        { name: 'og:image', content: 'https://docs.saasus.io/img/logo.png' },
      ],

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
            sidebarId: "docsSidebar",
            position: "left",
            label: "Docs",
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
            title: 'Service', // 1列目のタイトル
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/saasus-platform/',
              },
              {
                label: '10 Days SaaSification',
                href: 'https://saasus.io/10-days-saasification',
              },
              {
                label: 'Blog',
                href: 'https://saasus.io/blog',
              },
              {
                label: 'Case Studies',
                href: 'https://saasus.io/customer-success-stories',
              },
            ],
          },
          {
            title: 'Company information', // 2列目のタイトル
            items: [
              {
                label: 'Service Provider',
                href: 'https://anti-pattern.co.jp/',
              },
              {
                label: 'Privacy Policy',
                href: 'https://anti-pattern.co.jp/legal',
              },
              {
                label: 'Terms of Service',
                href: 'https://saasus.io/terms',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Anti-Pattern Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["php", "java", "scala", "csharp"],
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
    llmsTxtPlugin,
    [
      require.resolve("docusaurus-plugin-image-zoom"),
      {
        selector: ".markdown img",
        background: {
          light: "rgb(255, 255, 255)",
          dark: "rgb(50, 50, 50)",
        },
        config: {},
      },
    ],
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "ja"],
      },
    ],
    [
      require.resolve('@docusaurus/plugin-client-redirects'),
      {
        // 英語ページのリダイレクト設定（固定で設定）
        redirects: [
        // 構造変更前のトップページが指定された場合のリダイレクト処理
          {
            from: '/docs/saasus-platform-document/',
            to: '/docs/part-1/purpose-and-overview',
          },
          // SaaS Infra Management
          {
            to: '/docs/part-4/saas-infra-management',
            from: ['/docs/part-4/single-tenant-management'],
          },
          // AWS Marketplace Integration
          {
            to: '/docs/part-4/aws-marketplace-integration/aws-marketplace-integration',
            from: ['/docs/aws-marketplace-integration/aws-marketplace-integration'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration',
            from: ['/docs/aws-marketplace-integration/aws-marketplace-seller-registration'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration/aws-marketplace-seller-registration',
            from: ['/docs/aws-marketplace-integration/aws-marketplace-seller-registration/aws-marketplace-seller-registration'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration/public-profile-settings',
            from: ['/docs/aws-marketplace-integration/aws-marketplace-seller-registration/public-profile-settings'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration/tax-information-interview',
            from: ['/docs/aws-marketplace-integration/aws-marketplace-seller-registration/tax-information-interview'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration/dac7-tax-survey',
            from: ['/docs/aws-marketplace-integration/aws-marketplace-seller-registration/dac7-tax-survey'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration/register-bank-account',
            from: ['/docs/aws-marketplace-integration/aws-marketplace-seller-registration/register-bank-account'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/aws-marketplace-seller-registration/register-disbursement-methods',
            from: ['/docs/aws-marketplace-integration/aws-marketplace-seller-registration/register-disbursement-methods'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/product-submission',
            from: ['/docs/aws-marketplace-integration/product-submission'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/product-submission/generate-product-code',
            from: ['/docs/aws-marketplace-integration/product-submission/generate-product-code'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/product-submission/step1-provide-product-information',
            from: ['/docs/aws-marketplace-integration/product-submission/step1-provide-product-information'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/product-submission/step2-configure-fulfillment-options',
            from: ['/docs/aws-marketplace-integration/product-submission/step2-configure-fulfillment-options'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/product-submission/step3-configure-product-pricing',
            from: ['/docs/aws-marketplace-integration/product-submission/step3-configure-product-pricing'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/product-submission/step4-set-prices',
            from: ['/docs/aws-marketplace-integration/product-submission/step4-set-prices'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/product-submission/step5-specify-refund-policy',
            from: ['/docs/aws-marketplace-integration/product-submission/step5-specify-refund-policy'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/product-submission/step6-configure-eula',
            from: ['/docs/aws-marketplace-integration/product-submission/step6-configure-eula'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/product-submission/step7-configure-offer-availability',
            from: ['/docs/aws-marketplace-integration/product-submission/step7-configure-offer-availability'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/product-submission/step8-configure-allowlist',
            from: ['/docs/aws-marketplace-integration/product-submission/step8-configure-allowlist'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/embedding-products',
            from: ['/docs/aws-marketplace-integration/embedding-products'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/supplementary',
            from: ['/docs/aws-marketplace-integration/supplementary'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/supplementary/integration-test',
            from: ['/docs/aws-marketplace-integration/supplementary/integration-test'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/supplementary/self-up-setting',
            from: ['/docs/aws-marketplace-integration/supplementary/self-up-setting'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/supplementary/user-judgment-method',
            from: ['/docs/aws-marketplace-integration/supplementary/user-judgment-method'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/supplementary/supplementary-1',
            from: ['/docs/aws-marketplace-integration/supplementary/supplementary-1'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/supplementary/supplementary-2',
            from: ['/docs/aws-marketplace-integration/suppplementary/supplementary-2'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/supplementary/supplementary-3',
            from: ['/docs/aws-marketplace-integration/supplementary/supplementary-3'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/supplementary/final-review-request',
            from: ['/docs/aws-marketplace-integration/supplementary/final-review-request'],
          },
          {
            to: '/docs/part-4/aws-marketplace-integration/supplementary/public-request',
            from: ['/docs/aws-marketplace-integration/supplementary/public-request'],
          },
          // Smart API Gateway Function
          {
            to: '/docs/part-4/smart-api-gateway-features/overview',
            from: ['/docs/api-gateway-function/overview'],
          },
          {
            to: '/docs/part-4/smart-api-gateway-features/manual',
            from: ['/docs/api-gateway-function/manual'],
          },
          // Integrate with Amazon EventBridge
          {
            to: '/docs/part-4/integrate-with-amazon-eventbridge/',
            from: ['/docs/integrate-with-amazon-eventbridge'],
          },
          // Implementation Guide
          {
            to: '/docs/part-6/implementation-guide/sample-application/overview',
            from: ['/docs/implementation-guide/implementing-authentication-using-saasus-platform-apiserver'],
          },
          {
            to: '/docs/part-6/implementation-guide/implementing-authentication-using-saasus-serverless',
            from: ['/docs/implementation-guide/implementing-authentication-using-saasus-serverless'],
          },
          {
            to: '/docs/part-6/implementation-guide/sample-application/metering-api',
            from: ['/docs/implementation-guide/metering-api-sample'],
          },
          {
            to: '/docs/part-6/implementation-guide/sample-application/multi-factor-authentication',
            from: ['/docs/implementation-guide/implementing-multi-factor-authentication-apiserver'],
          },
          // Other redirects (e.g., from legacy URLs or structural changes)
          {
            to: '/docs/part-6/developer-sdk-api-overview',
            from: ['/docs/sdk-list'],
          },
          {
            to: '/docs/part-7/faq',
            from: ['/docs/faq'],
          },
          {
            to: '/docs/part-4/pricing-and-billing/tiered-unit',
            from: ['/docs/saas-development-console/tiered_unit'],
          },
          {
            to: '/docs/part-4/pricing-and-billing/tiered-unit',
            from: ['/docs/saas-development-console/procedure-for-applying-for-a-paid-plan'],
          },
          {
            to: '/docs/part-5/user-management/user-activity-history-log',
            from: ['/docs/saas-operation-console/user-activity-history-log'],
          },
          {
            to: '/docs/part-5/price-plan',
            from: ['/docs/saas-operation-console/price-plan'],
          },
        ]
      },
    ],
  ],
};

module.exports = config;
