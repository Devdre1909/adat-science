import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

import BuyTheBook from "../views/BuyTheBook.vue";
import ApplicationForm from "../views/ApplicationForm.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/buythebook/:id",
    name: "BuyTheBook",
    component: BuyTheBook
  },
  {
    path: "/applicationform/:id",
    name: "ApplicationForm",
    component: ApplicationForm
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
