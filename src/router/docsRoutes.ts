
    export default [
      
          {
            path: '2.%20%E4%B8%AD%E6%96%87:lang(-cn)?',
            meta: {"category":"Components","subtitle":"固钉","type":"导航","title":"Affix"},
            component: () => import('../../src/md/2. 中文.md'),
          },
          {
            path: 'home:lang(-cn)?',
            meta: {"path":"home"},
            component: () => import('../../src/md/index.md'),
          },
          {
            path: 'index2:lang(-cn)?',
            meta: {"category":"Components","subtitle":"固钉","type":"导航","title":"Affix","path":"index2"},
            component: () => import('../../src/md/index2.md'),
          },
          {
            path: 'nopath:lang(-cn)?',
            meta: {},
            component: () => import('../../src/md/nopath.md'),
          }
    ];