<template>
  <div class="container-fluid g-0">
    <div class="content">
      <Header></Header>
      <div class="navigation p-3">This is where the product navigation will go</div>
      <div class="controls d-flex flex-fill p-3">
        <div class="search flex-fill">search</div>
        <Filter></Filter>        
        <div class="sorting flex-fill">sorting</div>
      </div>
      <div class="routed-content p-3">
        <router-view class="" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Filter from '@/components/filter/Filter.vue'

export default {
  name: 'App',
  props: {},
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Header, Filter },
  methods: {},
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss"></style>
