import authRoutes from "@/views/Auth/auth.routes";
import companiesRoutes from "@/views/Companies/companies.routes";
import plansRoutes from "@/views/Plans/plans.routes";
import secondSideRoutes from "@/views/SecondSide/secondSide.routes";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...authRoutes.routes,
    ...companiesRoutes.routes,
    ...plansRoutes.routes,
    ...secondSideRoutes.routes,
  ],
});

export default router;
