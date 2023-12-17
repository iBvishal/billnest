<script>
import { RouterLink, RouterView } from 'vue-router'
import envUtil from './lib/env-util';
import HelloWorld from './components/HelloWorld.vue'

export default {
  computed: {
    classes () {
      const classes = [];
      if (this.isMobile) {
        classes.push('app--small-screen');
      } else {
        classes.push('app--regular-screen');
      }
      return classes;
    },

    isMobile () {
      return envUtil.isMobile;
    },
  },

  beforeMount () {
    // TODO: make light and dark mode configurable
    this.setDialtoneThemeOnBody('LIGHT');
  },

  methods: {
    setDialtoneThemeOnBody (theme) {
      document.body.classList.remove('dialtone-theme-light', 'dialtone-theme-dark');
      if (theme === 'DARK') {
        document.body.classList.add('dialtone-theme-dark');
      } else {
        document.body.classList.add('dialtone-theme-light');
      }
    }
  }
};

</script>

<template>
<div class="app" :class="classes">
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</div>
</template>

<style lang="less">
</style>
