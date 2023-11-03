<script>
import envUtil from './lib/env-util';

export default {
    components: {},

    data: () => ({}),

    computed: {
        classes() {
            const classes = ['dialtone-theme-light'];
            if (this.isMobile) {
                classes.push('app--small-screen');
            } else {
                classes.push('app--regular-screen');
            }
            return classes;
        },

        isMobile() {
            return envUtil.isMobile;
        },
    },

    created() {},

    beforeMount() {},

    mounted() {},

    methods: {}
};
</script>

<template>
<div class="app" :class="classes">
</div>
</template>

<style lang="less">
</style>
