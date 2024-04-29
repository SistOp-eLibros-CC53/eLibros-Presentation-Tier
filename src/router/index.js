import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/home/:id',
            name: 'home',
            component: () => import('../views/home.view.vue'),
            props: true,
            children: [
                {
                    path: '/home/:id',
                    name: 'home',
                    component: () => import('../books/components/books-list.component.vue'),
                    props: true,
                },
                {
                    path: '/my_cart/:id',
                    name: 'my_cart',
                    component: () => import('../books/components/myCart.component.vue'),
                    props: true,
                },
                {
                    path: '/payment/:id',
                    name: 'payment',
                    component: () => import('../books/components/payment.component.vue'),
                    props: true,
                },
                {
                    path: '/success/:id',
                    name: 'success',
                    component: () => import('../books/components/payment.component.vue'),
                    props: true,
                },
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