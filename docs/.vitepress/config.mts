import footnote from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Daily routine system",
  description: "日課表作成システム",
  base: '/DailyRoutineSystemHelpSite/',
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
  themeConfig: {
    logo: "/Daily routine favicon.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '使い方', link: '/use/' },
      { text: '著作権', link: '/copyRight' },
      { text: '利用規約', link: '/termsOfUse' },
      { text: 'プライバシーポリシー', link: '/privacyPolicy' }
    ],
    sidebar: [
      {
        text: '目次',
        items: [
          { text: '必要用件', link: '/requirements' },
          { text: '初期セットアップ', link: '/setup' },
          {
            text: '使い方', 
            link: '/use/',
            items: [
              {
                text: '基本機能',
                link: '/use/basic'
              },
              {
                text: '席替え',
                link: '/use/changeSeat'
              },
              {
                text: '新しいクラスを作成する',
                link: '/use/newClass'
              },
              {
                text: '集計作業',
                link: '/use/aggregationWork'
              }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/drthomas246' }
    ],
    footer: {
      message: 'This site was created using <a href="https://vitepress.dev/">VitePress</a>.',
      copyright: 'Copyright © 2024 Yamahara Yoshihiro'
    },
  }
})
