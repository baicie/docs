
            export default [
      
          {
            path: 'home:lang(-cn)?',
            meta: {"category":"test","title":"docs"},
            component: () => import('../../src/md/test/home.md'),
          },
          {
            path: 'index:lang(-cn)?',
            meta: {"category":"test","subtitle":"固钉2","type":"导航2","title":"docs2"},
            component: () => import('../../src/md/test/index.md'),
          }
    ];