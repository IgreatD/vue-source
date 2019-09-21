module.exports = {
  base: '/vue-source/',
  dest: 'dist',
  title: 'Vue.js 源码解析',
  description: '解析 vue.js 源码',
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
  ],
  serviceWorker: false,
  themeConfig: {
    repo: 'ustbhuangyi/vue-analysis',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      {
        text: '配套视频',
        link: 'https://coding.imooc.com/class/228.html',
      },
    ],
    sidebar: [
      {
        title: '数据驱动',
        collapsable: false,
        children: [['data-driven/', 'Introduction']],
      },
    ],
  },
};
