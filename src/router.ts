import {createRouter, createWebHistory} from 'vue-router'
import SpinnerPage from './components/SpinnerTask/SpinnerPage.vue'
import ChildParentPage from './components/ChildParentTask/ChildParentPage.vue'
import Menu from './Menu.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Menu,
        },
        {
            path: '/spinner',
            component: SpinnerPage,
        },
        {
            path: '/child-parent',
            component: ChildParentPage,
        },
    ],
})

export default router