<template>
  <div class="sorting d-flex pe-2">
    <div class="form-floating sort-by pe-2">
      <select
        class="form-select"
        id="floatingSelect"
        aria-label="Sort By"
        v-model="sortBy"
        @change="sort()"
      >
        <option value="" selected>Choose</option>
        <option value="price">Price</option>
        <option value="discountPercentage">Discount</option>
        <option value="stock">Hot Products</option>
      </select>
      <label for="floatingSelect">Sort By</label>
    </div>
    <div class="form-floating order-by">
      <select
        class="form-select"
        id="floatingSelect"
        aria-label="Order By"
        v-model="orderBy"
        @change="sort()"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <label for="floatingSelect">Order By</label>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { useProductStore } from '@/stores/useProductStore'
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Sorting',
  props: {},
  components: {},
  methods: {},
  setup() {
    const sortBy = ref('')
    const orderBy = ref('asc')

    const productStore = useProductStore()

    async function sort() {
      productStore.sort(sortBy.value, orderBy.value)
    }

    return { sort, sortBy, orderBy }
  }
}
</script>

<style scoped lang="scss">
@import './sorting.scss';
</style>
