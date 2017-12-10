import index from './index.vue'
import router from './router'
new Vue({
    el:'#root',
    router,
    render:createHTML => createHTML(index)
})