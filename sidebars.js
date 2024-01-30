/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    {
      type: 'category',
      label: 'はじめに',
      items: ['saasus-platform-document', 'faq'],
      collapsed: false,
      collapsible: false,
    },
    {
      type: 'doc',
      label: 'Tutorials for Business Users',
      id: "tutorials-for-business-users",
    },
    {
      type: 'category',
      label: 'チュートリアル',
      items: [
        'tutorial/prepare-sample-application',
        'tutorial/prepare-saasus-platform',
        'tutorial/saas-management-using-the-saas-operation-console',
        'tutorial/embed-the-saasus-sdk-into-your-web-application-and-make-int-multi-tenant'
      ],
    },
    {
      type: "category",
      label: "実装ガイド",
      items: [
        "implementation-guide/implementing-authentication-using-saasus-platform-apiserver",
        "implementation-guide/implementing-authentication-using-saasus-serverless",
        {
          type: "category",
          label: "メータリングAPIの実装サンプルと使用例(Laravel)",
          link: {
            type: "doc",
            id: "implementation-guide/meteringapisamplelaravelandusecase"
          },
          items: ["implementation-guide/example_implementation_using_metering_api"]
        }
      ]
    },
    {
      type: 'category',
      label: 'ユースケース',
      items: [
        {
          type: 'category',
          label: 'SaaS利用者（ユーザー）のアカウントについて',
          link: {
            type: 'doc',
            id: 'usecase/about-saas-user-accounts',
          },
          items: [
            'usecase/about-saas-user-accounts/create-tenant',
            'usecase/about-saas-user-accounts/add-tenant-user',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'AWS Marketplace連携機能',
      items: [
        'aws-marketplace-integration/aws-marketplace-integration',
        {
          type: 'category',
          label: 'セラー登録から銀行口座の設定',
          link: {
            type: 'doc',
            id: 'aws-marketplace-integration/aws-marketplace-seller-registration',
          },
          items: [
            'aws-marketplace-integration/aws-marketplace-seller-registration/aws-marketplace-seller-registration',
            'aws-marketplace-integration/aws-marketplace-seller-registration/public-profile-settings',
            'aws-marketplace-integration/aws-marketplace-seller-registration/tax-information-interview',
            'aws-marketplace-integration/aws-marketplace-seller-registration/dac7-tax-survey',
            'aws-marketplace-integration/aws-marketplace-seller-registration/register-bank-account',
            'aws-marketplace-integration/aws-marketplace-seller-registration/hyperwallet-registration',
          ],
        },
        {
          type: 'category',
          label: 'SaaS製品情報の登録',
          link: {
            type: 'doc',
            id: 'aws-marketplace-integration/product-submission',
          },
          items: [
            'aws-marketplace-integration/product-submission/onboarding',
            'aws-marketplace-integration/product-submission/general',
            'aws-marketplace-integration/product-submission/pricing',
            'aws-marketplace-integration/product-submission/notes',
          ],
        },
        'aws-marketplace-integration/embedding-products',
        {
          type: 'category',
          label: '補足',
          link: {
            type: 'doc',
            id: 'aws-marketplace-integration/supplementary',
          },
          items: [
          ],
        },
      ],
    },
  ],

  apiDocSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      link: {
        type: 'doc',
        id: 'reference/getting-started-with-your-api',
      },
      items: [],
    },
    {
      type: 'category',
      label: 'API Docs',
      items: [
        'reference/auth-api',
        'reference/billing-api',
        'reference/pricing-api',
        'reference/communication-api',
        'reference/apilog-api',
        'reference/awsmarketplace-api',
        'reference/integration'
      ],
    }
  ]
};

module.exports = sidebars;
