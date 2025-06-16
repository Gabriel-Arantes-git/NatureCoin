import { createRouter, createWebHistory } from "vue-router";

import Home_Page from "../pages/Home_Page.vue";
import Premios_Page from "../pages/Premios_Page.vue";
import Painel_Controle_Page from "../pages/Painel_Controle_Page.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home_Page
  },
  {
    path: "/premios",
    name: "Premios",
    component: Premios_Page
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Painel_Controle_Page
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
