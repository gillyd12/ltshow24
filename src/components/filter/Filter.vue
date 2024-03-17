<template>
  <div class="filter">
    <div class='border rounded ps-3 pt-1 pb-1' v-if="productStore.filters && productStore.filters.length > 0">
      <p class="fw-bold text-dark mb-0">Filter by Product Category</p>
      <div class="">
        <div class="options" v-for="(value, index) in productStore.filters" :key="index">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" :id="index" :value="value" @click="productStore.toggleSelectedFilters(value)"/>
            <label class="form-check-label" :for="index">{{ value }}</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useProductStore } from '@/stores/useProductStore'
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Filter',
  props: {},
  components: {},
  methods: {},
  setup() {
    const productStore = useProductStore()

    return { productStore }
  }
}
</script>

<style scoped lang="scss">
@import './filter.scss';
</style>
