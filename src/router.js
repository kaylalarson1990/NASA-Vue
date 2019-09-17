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
      path: "/pictureOfTheDay",
      name: "Image of the Day",
      component: () =>
        /* webpackChunkName: "Image of the Day"" */ import(
          "./components/ImageOfTheDay.vue"
        )
    },
    {
      path: "/pictureOfTheMonth",
      name: "Image of the Month",
      component: () =>
        /* webpackChunkName: "Image of the Month"" */ import(
          "./components/ImageOfTheMonth.vue"
        )
    }
  ]
});
