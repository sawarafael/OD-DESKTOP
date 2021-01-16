// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ router, store, Vue }) => {
  // something to do
  router.beforeEach((to, from, next) => {
    // Pages loaded asynchronously when to.matched[0]?.components.default is function
    if (typeof to.matched[0]?.components.default === "function") {
      store.dispatch("progressbar/start");
    }
    next();
  });

  router.beforeResolve((to, from, next) => {
    store.dispatch("progressbar/stop");
    next();
  });
};
