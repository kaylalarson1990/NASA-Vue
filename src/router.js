import Vue from "vue";
import Router from "vue-router";
import Home from "./Home";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/imageOfTheDay",
      name: "Image of the Day",
      component: () => import("./components/ImageOfTheDay.vue")
    },
    {
      path: "/imageOfTheMonth",
      name: "Image of the Month",
      component: () => import("./components/ImageOfTheMonth.vue")
    }
  ]
});
