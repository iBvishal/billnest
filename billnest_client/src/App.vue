<script>
// import envUtil from './lib/env-util';

export default {

  computed: {
    // classes () {
    //   const classes = ['dialtone-theme-light'];
    //   if (this.isMobile) {
    //     classes.push('app--small-screen');
    //   } else {
    //     classes.push('app--regular-screen');
    //   }
    //   return classes;
    // },

    // isMobile () {
    //   return envUtil.isMobile;
    // }
  }
};
</script>

<template>
  <div class="app dialtone-theme-light">
    <main class="app-content">
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </main>
  </div>
</template>
