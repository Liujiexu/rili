import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/demo/demo'
import DemoDate from '@/demo/date'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: HelloWorld
    },
    {
        path: '/date/:id',
        component: DemoDate
    }]
})