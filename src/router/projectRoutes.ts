
            export default [
      
          {
            path: 'index:lang(-cn)?',
            meta: {"pathF":"project","title":"index.md","category":"project"},
            component: () => import('../../src/md/项目/index.md'),
          },
          {
            path: '%E6%9C%89%E8%B6%A3%E7%9A%84%E7%BD%91%E7%AB%99:lang(-cn)?',
            meta: {"title":"有趣的网站.md","category":"project"},
            component: () => import('../../src/md/项目/有趣的网站.md'),
          },
          {
            path: '%E9%A1%B9%E7%9B%AE:lang(-cn)?',
            meta: {"title":"项目.md","category":"project"},
            component: () => import('../../src/md/项目/项目.md'),
          }
    ];