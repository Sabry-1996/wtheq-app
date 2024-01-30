export default {
  routes: [
    {
      component: () => import("./Auth.vue"),
      redirect: { name: "sign-in" },
      path: "/auth",
      children: [
        {
          path: "/sign-in",
          name: "sign-in",
          component: () => import("./SingIn.vue"),
        },
        {
          path: "/sign-up",
          name: "sign-up",
          component: () => import("./SingUp.vue"),
        },
        {
          path: "/otp_password",
          name: "otp_password",
          component: () => import("./OTP.vue"),
        },
        {
          path: "/forget-password",
          name: "forget-password",
          component: () => import("./ForgetPassword.vue"),
        },
        {
          path: "/reset_password",
          name: "reset_password",
          component: () => import("./ResetPassword.vue"),
        },
      ],
    },
  ],
};
