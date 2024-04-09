import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import RestaurantPage from "./pages/RestaurantPage.vue";

const routes = [
  { path: "/", component: HomePage },
  { name: "Restaurant", path: "/restaurant/:name", component: RestaurantPage },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const VueApp = createApp(App);

VueApp.use(router);
VueApp.mount("#app");
