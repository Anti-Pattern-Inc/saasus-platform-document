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
      type: 'category',
      label: 'ビジネスユーザー向けチュートリアル',
      items: ['tutorials-for-business-users'],
      collapsed: false,
      collapsible: false,
    },
    {
      type: 'category',
      label: 'チュートリアル',
      items: [
        'tutorial/prepare-sample-application',
        'tutorial/prepare-saasus-platform',
      ],
    },
  ],
};

module.exports = sidebars;
