// 入口，Vue将store与元素关联
import Vue from 'vue'
import store from './store'
import Counter from './components/Counter.vue'

new Vue({
    el: '#app',
    store,
    render: h => h(Counter),
})

