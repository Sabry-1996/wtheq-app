export default {
  routes: [
    {
      path: "/second-side",
      name: "second-side",
      component: () => import("./SecondSide.vue"),
      children: [],
    },
  ],
};
