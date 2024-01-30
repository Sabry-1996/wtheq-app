export default {
  routes: [
    {
      path: "/companies",
      name: "companies",
      component: () => import("./Companies.vue"),
      children: [],
    },
  ],
};
