import { createApp } from 'vue';
import store from './store';
import App from './components/App.vue';

const appErrorHandler = (ex, vm, info) => {
    console.error('VUE_UNCAUGHT_ERROR:', ex);
    try {
      console.warn(`${vm.$vnode && vm.$vnode.tag}: ${info}`);
    } catch (ex) {
      // Ignore
    }
  };

const initializeApp = async () => {
  const app = createApp(App);
  global._app = app;
  app.config.errorHandler = appErrorHandler;

  app.use(store);      
  app.use(router);

  app.mount('#app');
};

initializeApp();