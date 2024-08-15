import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import JobView from "@/views/JobView.vue";
import JobDetailView from "@/views/JobDetailView.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/jobs",
    name: "job",
    component: JobView,
  },
  {
    path: "/job/detail/:id",
    name: "jobDetail",
    component: JobDetailView,
    // props: true,
    props: (route) => ({
      id: route.params.id,
      title: route.query.title,
      detail: route.query.detail,
    }),
  },
  {
    path: "/all/jobs",
    redirect: "/jobs",
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
