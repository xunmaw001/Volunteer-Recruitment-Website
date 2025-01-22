import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import quxiaobaoming from '@/views/modules/quxiaobaoming/list'
    import news from '@/views/modules/news/list'
    import huodongdaka from '@/views/modules/huodongdaka/list'
    import discusszuzhixinxi from '@/views/modules/discusszuzhixinxi/list'
    import discusszhiyuanhuodong from '@/views/modules/discusszhiyuanhuodong/list'
    import zhiyuanzuzhi from '@/views/modules/zhiyuanzuzhi/list'
    import yonghu from '@/views/modules/yonghu/list'
    import huodongbaoming from '@/views/modules/huodongbaoming/list'
    import tongzhigonggao from '@/views/modules/tongzhigonggao/list'
    import zuzhixinxi from '@/views/modules/zuzhixinxi/list'
    import zuzhishenqing from '@/views/modules/zuzhishenqing/list'
    import config from '@/views/modules/config/list'
    import zhiyuanhuodong from '@/views/modules/zhiyuanhuodong/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/quxiaobaoming',
        name: '取消报名',
        component: quxiaobaoming
      }
      ,{
	path: '/news',
        name: '新闻资讯',
        component: news
      }
      ,{
	path: '/huodongdaka',
        name: '活动打卡',
        component: huodongdaka
      }
      ,{
	path: '/discusszuzhixinxi',
        name: '组织信息评论',
        component: discusszuzhixinxi
      }
      ,{
	path: '/discusszhiyuanhuodong',
        name: '志愿活动评论',
        component: discusszhiyuanhuodong
      }
      ,{
	path: '/zhiyuanzuzhi',
        name: '志愿组织',
        component: zhiyuanzuzhi
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/huodongbaoming',
        name: '活动报名',
        component: huodongbaoming
      }
      ,{
	path: '/tongzhigonggao',
        name: '通知公告',
        component: tongzhigonggao
      }
      ,{
	path: '/zuzhixinxi',
        name: '组织信息',
        component: zuzhixinxi
      }
      ,{
	path: '/zuzhishenqing',
        name: '组织申请',
        component: zuzhishenqing
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
      ,{
	path: '/zhiyuanhuodong',
        name: '志愿活动',
        component: zhiyuanhuodong
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
