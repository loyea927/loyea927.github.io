module.exports = {
  title: '左毅的博客',
  description: '左毅的个人网站',
  head: [
    ['link', { rel: 'icon',href: '/logo.png' }]
  ],
  host: '0.0.0.0',
  port: '8099',
  base: '/',
  themeConfig: {
    sidebar: 'auto',
    sidebarDepth: 2,
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '前端杂烩',
        items: [
          {text: 'HTML', link: '/guide/frontend/html/'},
          {text: 'CSS', link: '/guide/frontend/css/'},
          {text: 'JS & JQuery', link: '/guide/frontend/js/'}
        ]
      },
      {
        text: 'Vue学习',
        link: '/guide/vue/'
      },
      {
        text: 'UI框架',
        items: [
          {text: 'vue-ant-design', link: '/guide/UI/ant-design/'},
          {text: 'mint-ui', link: '/guide/UI/mint-ui/'},
        ]
      },
      {
        text: '微信小程序',
        link: '/guide/weChat/'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Loyea927/Loyea927.github.io'
      }
    ]
  }
}