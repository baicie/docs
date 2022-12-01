
    export default [
      
          {
            path: '2.%20%E4%B8%AD%E6%96%87:lang(-cn)?',
            meta: {"category":"docs","subtitle":"固钉","type":"导航","title":"docs"},
            component: () => import('../../src/md/2. 中文.md'),
          },
          {
            path: 'home:lang(-cn)?',
            meta: {"category":"docs","title":"docs"},
            component: () => import('../../src/md/home.md'),
          },
          {
            path: 'index2:lang(-cn)?',
            meta: {"category":"docs","title":"docs","path":"index2"},
            component: () => import('../../src/md/index2.md'),
          },
          {
            path: 'nopath:lang(-cn)?',
            meta: {"category":"docs","title":"docs"},
            component: () => import('../../src/md/nopath.md'),
          }
    ];