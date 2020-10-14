const path = require('path')

module.exports = {
  title: '开发手册',
  description: '团队开发规范建议',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: 'favicon.ico',
      },
    ],
  ],
  themeConfig: {
    logo: '/logo.png',
    // 顶部栏菜单
    nav: [
      {
        text: 'iSee 导航',
        link: 'http://192.168.110.10/',
      },
    ],
    // 侧边栏菜单
    sidebarDepth: 2,
    sidebar: [
      {
        title: '前端',
        collapsable: false,
        children: [
          'frontend/',
          'frontend/HTML',
          'frontend/CSS',
          'frontend/JavaScript',
          'frontend/Vue',
          'frontend/Name',
          'frontend/Images',
          'frontend/VSCode',
        ],
      },
      {
        title: '后端',
        collapsable: false,
        children: [
          'backend/BaseCode',
          'backend/Dto',
          'backend/Database',
          'backend/Table',
          'backend/Common',
          'backend/API',
          'backend/Module',
          'backend/Nuget',
          'backend/Enumerate',
          'backend/Redis',
          'backend/RabbitMq',
          'backend/Helper',
        ],
      },
    ],
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, 'public'),
      },
    },
  },
  dest: './dist',
  ga: '',
  evergreen: true,
}
