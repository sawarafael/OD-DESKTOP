import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import userf from "./modules/userfriends";
import userdata from "./modules/userdata";
import library from "./modules/library";
import progressbar from "./modules/progress-bar";
// import VuexPersistence from "vuex-persist";

// const vuexLocal = new VuexPersistence({
//   storage: window.localStorage
// });

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth,
      userf,
      userdata,
      library,
      progressbar
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  });

  return Store;
}
