import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "dashboard",
    meta: {
      title: "Dashboard",
      authRequired: true,
    },
    component: () => import("../views/home.vue"),
  },
  {
    path: "/admin/saas",
    meta: { title: "Saas", authRequired: true },
    component: () => import("../views/dashboard/saas.vue"),
  },
  {
    path: "/admin/setMgmp",
    meta: { title: "Set Mgmp", authRequired: true },
    component: () => import("../views/admin/setMgmp.vue"),
  },
  {
    path: "/sa/user",
    meta: { title: "role", authRequired: true },
    component: () => import("../views/users/user.vue"),
  },
  {
    path: "/sa/role",
    meta: { title: "role", authRequired: true },
    component: () => import("../views/role/role.vue"),
  },
  {
    path: "/admin/menu",
    meta: { title: "role", authRequired: true },
    component: () => import("../views/setting/index.vue"),
  },
  {
    path: "/admin/hasilDapo",
    meta: { title: "Saas", authRequired: true },
    component: () => import("../views/admin/dapodik/hasilDapo.vue"),
  },
  {
    path: "/admin/spm",
    meta: { title: "komite", authRequired: true },
    component: () => import("../views/dashboard/komite/komite.vue"),
  },
  {
    // guru izin disini / presensi
    path: "/guru/ijin",
    meta: { title: "guru", authRequired: true },
    component: () => import("../views/guru/ijin/index.vue"),
  },
  {
    path: "/cp/menu",
    meta: { title: "cp", authRequired: true },
    component: () => import("../views/guru/cp/index.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "Login" },
    component: () => import("../views/account/login.vue"),
  },
  {
    path: "/auth/register",
    name: "register",
    meta: { title: "Register" },
    component: () => import("../views/account/register.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("../views/utility/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Before each route evaluates...
router.beforeEach(async (routeTo, routeFrom, next) => {
  // set title name
  if (routeTo.meta.title != undefined) {
    ("SMAN 1 KRAKSAAN");
  }

  const authRequired = routeTo.matched.some((route) => route.meta.authRequired);
  if (!authRequired) return next();

  if (localStorage.getItem("user")) {
    next();
  } else {
    next({ name: "login", query: { redirectFrom: routeTo.fullPath } });
  }
});

export default router;
