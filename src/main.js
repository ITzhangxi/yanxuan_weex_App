import index from './index.vue'
import router from './router'
import mixins from './mixins'
// import './assets/base.css'
Vue.mixin(mixins)
new Vue({
    el:'#root',
    router,
    render:createHTML => createHTML(index)
})