import Vue from 'vue'
import App from './App'//同级目录下的App.vue

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }//注册组件，就可以在index.html里直接使用<app></app>
})
