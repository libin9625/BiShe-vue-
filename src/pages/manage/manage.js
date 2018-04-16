import Vue from 'vue'
import Manage from './Manage.vue'
import ElementUI from 'element-ui';
import router from '../../router/manage.js'
import  VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import store from '../../components/store.js'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

Vue.use(VueQuillEditor);
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
  store,
  components:{Manage},
  template:'<Manage/>'
})
