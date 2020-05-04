import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '@/pages/index/index.vue'
import login from '@/pages/login/index.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/index',
    name: 'index',
    component: index
  },
  {
    path: '/nav',
    name: 'NAv',
	component: () => import('../pages/Nav/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
  	component: login
  },
  {
      name: '404',
      path: '/404',
      component: () => import('../pages/other/page404.vue')
  },
  {
      name: 'editor',
      path: '/editor',
      component: () => import('../pages/editor.vue')
  },
  {
      name: 'dragList',
      path: '/dragList',
      component: () => import('../pages/dragList.vue')
  },
  {
      name: 'progress',
      path: '/progress',
      component: () => import('../pages/progress.vue')
  },
  {
      path: '*',
      redirect: '/404'
  }
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
	 if(to.path === '/login' ){
		 next();
	 }else{
		 let useName = localStorage.getItem('useName');
		 if(useName && useName.length!=0){
			 next();
		 }else{
			 next('/login')
		 }
	 }
})
export default router
