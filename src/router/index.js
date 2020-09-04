import Vue from "vue";
import VueRouter from "vue-router";
import Layout from '@/views/layout/index'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "/",
        component: () => import("@/views/home/index.vue")
      }
    ]
  },
  {
    path: "/home",
    name: "Home",
    component: Layout,
    children: [
      {
        path: "/",
        component: () => import("@/views/home/index.vue")
      }
    ]
  },
  {
    path: "/product-list",
    name: "ProductList",
    component: Layout,
    children: [
      {
        path: "/",
        component: () => import("@/views/productList/index.vue")
      }
    ]
  },
  {
    path: "/shopping-cart",
    name: "ShoppingCart",
    component: Layout,
    children: [
      {
        path: "/",
        component: () => import("@/views/shoppingCart/index.vue")
      }
    ]
  },
  {
    path: "/user-center",
    name: "UserCenter",
    component: Layout,
    children: [
      {
        path: "/",
        component: () => import("@/views/userCenter/index.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
