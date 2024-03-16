<template>
  <div class="header d-flex justify-content-center p-1">
    <div class="brand">
      <img class="logo" :src="logo" />
    </div>
  </div>
</template>
<script>
import logo from '@/assets/product-showcase-logo.png'
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Header',
  props: {},
  components: {},
  methods: {},
  setup() {
    return {
      logo
    }
  }
}
</script>

<style scoped lang="scss">
@import './header.scss';
</style>
