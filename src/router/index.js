import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/home.vue";
import Burger from "../pages/burger.vue";
import Bebidas from "../pages/bebidas.vue";
import Checkout from "../pages/checkout.vue";
import Entrega from "../pages/entrega.vue";
import Macarronada from "../pages/macarronada.vue";
import Batata from "../pages/batata.vue";
import Sobremesas from "../pages/sobremesas.vue";
import Combo from "../pages/combo.vue";
import Sopas from "../pages/sopas.vue";

const routes = [
  {
    path: "/",
    name: "app",
    component: Home,
  },
  {
    path: "/burger",
    name: "Burger",
    component: Burger,
  },
  {
    path: "/combo",
    name: "Combo",
    component: Combo,
  },
  {
    path: "/macarronada",
    name: "macarronada",
    component: Macarronada,
  },
  {
    path: "/batata",
    name: "batata",
    component: Batata,
  },
  {
    path: "/sopas",
    name: "sopa",
    component: Sopas,
  },
  {
    path: "/sobremesas",
    name: "sobremesas",
    component: Sobremesas,
  },
  {
    path: "/bebidas",
    name: "bebidas",
    component: Bebidas,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: Checkout,
  },
  {
    path: "/entrega",
    name: "entrega",
    component: Entrega,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
