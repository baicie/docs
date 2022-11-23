
    export default [
      
          {
            path: 'chinese:lang(-cn)?',
            meta: {"category":"Components","subtitle":"固钉","type":"导航","title":"Affix","path":"chinese"},
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