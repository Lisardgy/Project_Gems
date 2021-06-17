import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

import position from './data/position'
import user_config from './data/user_config'
import databaseUrl from './data/databaseurl'
import document from './data/document'
import location_condo from './data/location_condo'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      // example
      databaseUrl,
      position,
      user_config,
      document,
      location_condo,
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
