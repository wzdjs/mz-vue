import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
// router.js 就是 vue-router 的配置文件

// 1. 引入 vue
// 2. 引入 vue-router
// 3. 使用 vue.use(vue-router)
// 4. 路由配置
// new VueRouter({
//   routes: [

//   ]
// })
// 5. 暴露这个配置

import Vue from 'vue';
import VueRouter from 'vue-router';
import Film from './views/Film.vue';
import Cinema from './views/Cinema.vue';
import Center from './views/Center.vue';
import City from './views/City.vue';
import Home from './views/Home.vue';
import Detail from './views/Detail.vue';
import Login from './views/Login.vue';
import Card from './views/Card.vue';
import Money from './views/Money.vue';
import System from './views/System.vue';

NProgress.configure({ showSpinner: false });

Vue.use(VueRouter);

let router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        // 不是一级路由。path路劲前面不要加/
        {
          path: 'films', // 就是url路径
          component: Film
        },
        {
          path: 'cinemas',
          component: Cinema
        },
        {
          path: 'center',
          component: Center
        },
        // 默认显示的页面
        // redirect地址从定向
        {
          path: '',
          redirect: '/films'
        }
      ]
    },
    {
      // 城市页面
      name: 'PgCity',
      path: '/city',
      alias: '/ccc',
      // component: City
      components: {
        top: City,
        default: Detail
      }

    },
    {
      // 详情页面
      path: '/detail/:id',
      component: Detail,
      // 路由组件传参
      props: true
    },
    {
      // 通配符显示的页面（错误的地址）
      // redirect地址从定向
      path: '*',
      redirect: '/films'
    },
    /*  {
      path: '/card/:asd',
      component: {
        render (h) {
          let _this = this;
          return h('div', [
            '卖座卡页面',
            h('button', {
              on: {
                click: function () {
                  _this.reload();
                }
              }
            },
            [
              'wo',
              h('span', '水水水水')
            ])
          ])
        },
        methods: {
          reload () {
            // console.log('zzz');
            // router.push('/card/ss');
            router.push({
              path: '/card/张三'
            })
          }
        },
        // 组件内的路由守卫
        beforeRouteEnter (to, from, next) {
          console.log('enter');
          next();
        },
        // 只有页面使用了路由参数才会进来
        beforeRouteUpdata (to, from, next) {
          console.log('22222');
          console.log('updata');
          next();
        },
        beforeRouteLeave (to, from, next) {
          console.log('leave');
          next();
        }
        // 路由独享的钩子函数
        // beforeEnter: (to, from, next) => {
        //   next(false);
        // }
      }
    }, */
    ,
    {
      path: '/card',
      component: {
        render (h) {
          return h('div', '卖座卡页面')
        }
      }
    },
    {
      path: '/money',
      component: {
        render (h) {
          return h('div', '余额页面')
        }
      } 
    },
    {
      path: '/system',
      component: {
        render (h) {
          return h('div', '设置页面')
        }
      }
    },
    {
      path: '/login',
      component: Login
    }
    // {
    //   path: '/card',
    //   component: Card
    // },
    // {
    //   path: '/money',
    //   component: Money
    // },
    // {
    //   path: '/system',
    //   component: System
    // }
  ]
})

// 全局前置守卫
// next 是否允许去 next()不用或者传入false就不去跳转（拦截），如果想调到某个页面只要传入对应页面的路由就可以了，不传npm 参数就是允许跳转，（不拦截）
router.beforeEach((to, from, next) => {
  NProgress.start();
  if (to.path === '/card' || to.path === '/money' || to.path === '/system') {
    // next(false);
    next('/login');
  } else {
    next();
  }
})

// // 全局后置守卫
router.afterEach((to, from) => {
  NProgress.done();
})
export default router;
