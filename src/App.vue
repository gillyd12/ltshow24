<template>
  <div class="container-fluid g-0">
    <div class="content">
      <Header></Header>
      <div class="controls d-flex pt-3 ps-3 pe-3">
        <Search class="pe-1"></Search>
        <Sorting class="ps-1"></Sorting>
      </div>
      <div class="d-flex p-3">
        <Filter class="pe-3"></Filter>
        <div class="routed-content">
          <router-view class="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Filter from '@/components/filter/Filter.vue'
import Search from '@/components/search/Search.vue'
import Sorting from '@/components/sorting/Sorting.vue'

export default {
  name: 'App',
  props: {},
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Header, Filter, Search, Sorting },
  methods: {},
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss"></style>
