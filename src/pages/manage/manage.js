import Vue from 'vue'
import Manage from './Manage.vue'
import ElementUI from 'element-ui';
import router from '../../router/manage.js'

Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.config.debug = true

var routeList = [];
router.beforeEach((to, from, next) => {
  var index = -1;
  for(var i = 0; i < routeList.length; i++) {
    if(routeList[i].name == to.name) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
//如果存在路由列表，则把之后的路由都删掉
    routeList.splice(index + 1, routeList.length - index - 1);
  } else if(to.name != '登录'){
    routeList.push({"name":to.name,"path":to.fullPath});
  }
  to.meta.routeList = routeList;
  next()
});

new Vue({
  el:'#manage',
  router,
  components:{Manage},
  template:'<Manage/>'
})
