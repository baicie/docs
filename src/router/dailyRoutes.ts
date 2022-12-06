
            export default [
      
          {
            path: 'Daily:lang(-cn)?',
            meta: {"title":"Daily.md","category":"daily"},
            component: () => import('../../src/md/日程/Daily.md'),
          },
          {
            path: 'important:lang(-cn)?',
            meta: {"title":"important.md","category":"daily"},
            component: () => import('../../src/md/日程/important.md'),
          },
          {
            path: 'index:lang(-cn)?',
            meta: {"pathF":"daily","title":"index.md","category":"daily"},
            component: () => import('../../src/md/日程/index.md'),
          },
          {
            path: '%E5%9B%BE%E6%A0%87:lang(-cn)?',
            meta: {"title":"图标.md","category":"daily"},
            component: () => import('../../src/md/日程/图标.md'),
          }
    ];