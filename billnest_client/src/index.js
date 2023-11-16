import { createApp } from 'vue';
import router from './router';
import store from './store';

import App from "./App.vue";

// const appErrorHandler = (ex, vm, info) => {
//   console.error('VUE_UNCAUGHT_ERROR:', ex);
//   try {
//       console.warn(`${vm.$vnode && vm.$vnode.tag}: ${info}`);
//   } catch (ex) {
//       // Ignore as of now
//   }
// };

// function initializeApp () {
//   const app = createApp(App);
//   // global._app = app;
//   // app.config.errorHandler = appErrorHandler;
  
//   app.use(router);
//   app.use(store);
//   app.mount('#app');
// };

// initializeApp();

createApp(App)
    .use(router)
    .use(store)
    .mount('#app');