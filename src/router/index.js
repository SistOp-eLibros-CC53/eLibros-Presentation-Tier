import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home/:id',
            name: 'home',
            component: () => import('../views/home.view.vue'),
            children: [
                {
                    path: '/home/:id',
                    name: 'home',
                    component: () => import('../books/components/books-list.component.vue'),
                },
                {
                    path: '/home/:id/my_cart',
                    name: 'home/my_cart',
                }
            ]
        },
        {
            path: '/',
            name: 'login',
            component: () => import('../iam/pages/login.vue'),
        },
    ]
})
export default router