import { createRouter, createWebHistory } from "vue-router";
import OneWay from "../views/OneWay.vue";
import RoundTrip from "../views/RoundTrip.vue";
import MultiCity from "../views/MultiCity.vue";

const routes = [
  {
    path: "/",
    name: "OneWay",
    component: OneWay,
  },
  {
    path: "/roundtrip",
    name: "RoundTrip",
    component: RoundTrip,
  },
  {
    path: "/multicity",
    name: "MultiCity",
    component: MultiCity,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
