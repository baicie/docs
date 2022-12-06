
            export default [
      
          {
            path: 'centos:lang(-cn)?',
            meta: {"title":"centos.md","category":"Tools"},
            component: () => import('../../src/md/Tools/centos.md'),
          },
          {
            path: 'Docker:lang(-cn)?',
            meta: {"title":"Docker.md","category":"Tools"},
            component: () => import('../../src/md/Tools/Docker.md'),
          },
          {
            path: 'index:lang(-cn)?',
            meta: {"title":"index.md","category":"Tools"},
            component: () => import('../../src/md/Tools/index.md'),
          },
          {
            path: 'java:lang(-cn)?',
            meta: {"title":"java.md","category":"Tools"},
            component: () => import('../../src/md/Tools/java.md'),
          },
          {
            path: 'Jenkins:lang(-cn)?',
            meta: {"title":"Jenkins.md","category":"Tools"},
            component: () => import('../../src/md/Tools/Jenkins.md'),
          },
          {
            path: 'mongodb:lang(-cn)?',
            meta: {"title":"mongodb.md","category":"Tools"},
            component: () => import('../../src/md/Tools/mongodb.md'),
          },
          {
            path: 'mvn:lang(-cn)?',
            meta: {"title":"mvn.md","category":"Tools"},
            component: () => import('../../src/md/Tools/mvn.md'),
          },
          {
            path: 'mysql:lang(-cn)?',
            meta: {"title":"mysql.md","category":"Tools"},
            component: () => import('../../src/md/Tools/mysql.md'),
          },
          {
            path: 'Nginx:lang(-cn)?',
            meta: {"title":"Nginx.md","category":"Tools"},
            component: () => import('../../src/md/Tools/Nginx.md'),
          },
          {
            path: 'redis:lang(-cn)?',
            meta: {"title":"redis.md","category":"Tools"},
            component: () => import('../../src/md/Tools/redis.md'),
          },
          {
            path: 'Supervisord:lang(-cn)?',
            meta: {"title":"Supervisord.md","category":"Tools"},
            component: () => import('../../src/md/Tools/Supervisord.md'),
          },
          {
            path: 'Yapi:lang(-cn)?',
            meta: {"title":"Yapi.md","category":"Tools"},
            component: () => import('../../src/md/Tools/Yapi.md'),
          },
          {
            path: '%E5%89%8D%E7%AB%AF%E6%9D%82%E9%A1%B9:lang(-cn)?',
            meta: {"title":"前端杂项.md","category":"Tools"},
            component: () => import('../../src/md/Tools/前端杂项.md'),
          },
          {
            path: '%E6%9C%8D%E5%8A%A1%E5%99%A8%E6%9D%82%E9%A1%B9:lang(-cn)?',
            meta: {"title":"服务器杂项.md","category":"Tools"},
            component: () => import('../../src/md/Tools/服务器杂项.md'),
          },
          {
            path: '%E9%98%B2%E7%81%AB%E5%A2%99%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8:lang(-cn)?',
            meta: {"title":"防火墙基本使用.md","category":"Tools"},
            component: () => import('../../src/md/Tools/防火墙基本使用.md'),
          }
    ];