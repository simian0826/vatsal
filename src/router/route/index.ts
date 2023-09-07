import { RouteRecordRaw } from "vue-router";
import Layout from "@/layout/index.vue";

// export const RootRoute: RouteRecordRaw = {
//   path: "/",
//   name: "Root",
//   // redirect: PageEnum.BASE_HOME,
//   component: () => import("@/pages/home/index.vue"),
//   meta: {
//     title: "Root",
//   },
// };

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/pages/login/index.vue"),
    name: "Login",
  },
  {
    path: "/",
    name: "Root",
    redirect: "/home",
    component: Layout,
    meta: {
      title: "Root",
    },
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/pages/home/index.vue"),
      },
      {
        path: "/productList",
        name: "ProductList",
        component: () => import("@/pages/productList/index.vue"),
      },
      {
        path: "/productDetail",
        name: "ProductDetail",
        component: () => import("@/pages/productDetail/index.vue"),
      },
      {
        path: "/projectList",
        name: "ProjectList",
        component: () => import("@/pages/projectList/index.vue"),
      },
      {
        path: "/projectDetail",
        name: "ProjectDetail",
        component: () => import("@/pages/projectDetail/index.vue"),
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/pages/404/index.vue"),
    name: "404",
  },
  {
    path: "/:pathMath(.*)*",
    redirect: "/404",
    name: "Not Found",
  },
];
