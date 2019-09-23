module.exports = {
  base: '/vue-source/',
  dest: 'dist',
  title: 'Vue.js',
  description: 'Vue.js',
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
    repo: 'igreatd/vue-source',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    nav: [
      { text: 'Vue.js 源码解析', link: '/data-driven/' },
      { text: 'Vue.js 面试', link: '/interview/' },
    ],
    sidebar: {
      '/data-driven/': [
        {
          title: 'Vue.js 源码解析', // 数据驱动
          collapsable: false,
          children: [['', 'Introduction']],
        },
      ],
      '/interview/': [
        {
          title: 'Vue.js 面试', // 数据驱动
          collapsable: false,
          children: [
            ['', 'Introduction'],
            ['v-model-principle', 'v-model 原理'],
          ],
        },
      ],
    },
  },
};
