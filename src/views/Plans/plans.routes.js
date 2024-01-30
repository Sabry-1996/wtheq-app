export default {
  routes: [
    {
      path: "/plans",
      name: "plans",
      component: () => import("./Plans.vue"),
      children: [],
    },
  ],
};
