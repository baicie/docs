
            export default [
      
          {
            path: '2.%20%E4%B8%AD%E6%96%87:lang(-cn)?',
            meta: {"category":"docs","subtitle":"固钉","type":"导航","title":"docs"},
            component: () => import('../../src/md/docs/2. 中文.md'),
          },
          {
            path: 'button:lang(-cn)?',
            meta: {"category":"docs","subtitle":"按钮","type":"导航","title":"docs"},
            component: () => import('../../src/md/docs/button.md'),
          },
          {
            path: 'index:lang(-cn)?',
            meta: {"category":"docs","subtitle":"按钮index","type":"导航","title":"docs"},
            component: () => import('../../src/md/docs/index.md'),
          },
          {
            path: 'index2:lang(-cn)?',
            meta: {"category":"docs","title":"docs","path":"index2"},
            component: () => import('../../src/md/docs/index2.md'),
          },
          {
            path: 'nopath:lang(-cn)?',
            meta: {"category":"docs","title":"docs"},
            component: () => import('../../src/md/docs/nopath.md'),
          }
    ];