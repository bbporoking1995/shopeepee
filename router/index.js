import Vue from "vue";
import VueRouter from "vue-router";
import wrapper from "../pages/HomeIndex.vue";
import home from "../pages/HomePage.vue";
import shirt from "../pages/ProductShirt.vue";
import game from "../pages/ProductGame.vue";
import animal from "../pages/ProductAnimal.vue";
import login from "../pages/LoginPage.vue";
import buy from "../pages/ShoppingCart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/",
    component: wrapper,
    children: [
      {
        path: "/",
        name: "home",
        component: home,
      },
      {
        path: "/shirt",
        name: "shirt",
        component: shirt,
      },
      {
        path: "/game",
        name: "game",
        component: game,
      },
      {
        path: "/animal",
        name: "animal",
        component: animal,
      },
      {
        path: "/login",
        name: "login",
        component: login,
      },
      {
        path: "/buy",
        name: "buy",
        component: buy,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  // 在路由切换时滚动页面到顶部
  window.scrollTo(0, 0);
  next();
});

export default router;
