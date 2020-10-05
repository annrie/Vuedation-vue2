<template>
  <component :is="layout()"></component>
</template>

<script>
  import DefaultLayout from './layouts/DefaultLayout.vue'
  import NormalLayout from './layouts/NormalLayout.vue'

  export default {
    components: {
      DefaultLayout,
      NormalLayout,
    },
    methods: {
      layout() {
        let layout = this.$route.meta.layout
          ? this.$route.meta.layout + '-layout'
          : 'default-layout'
        return layout
      },
    },
  }
</script>
