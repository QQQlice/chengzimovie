export default {
  path: "/cinema",
  component: () => import("@/views/Cinema"),
  children: [
    {
      path: "wholeCity",
      component: () => import("@/components/WholeCity")
    },
    {
      path: "brand",
      component: () => import("@/components/Brand")
    },
    {
      path: "special",
      component: () => import("@/components/Special")
    },
    {
      path: "/cinema",
      redirect: "/cinema/wholeCity"
    }
  ]
};
