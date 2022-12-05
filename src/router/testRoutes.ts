
            export default [
      
          {
            path: 'home:lang(-cn)?',
            meta: {"category":"docs","title":"docs"},
            component: () => import('../../src/md/test//home.md'),
          },
          {
            path: 'index:lang(-cn)?',
            meta: {"category":"docs2","subtitle":"固钉2","type":"导航2","title":"docs2"},
            component: () => import('../../src/md/test//index.md'),
          }
    ];