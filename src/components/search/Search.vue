<template>
  <div class="search">
    <div class="form-floating">
      <input type="input" class="form-control" id="search" placeholder="Search Title or Description" v-model="query" @keyup="searchProducts()" />
      <label for="search">Search Title or Description</label>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
import { useProductStore } from '@/stores/useProductStore'
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Search',
  props: {},
  components: {},
  methods: {},
  setup() {
    const query = ref('');
    const productStore = useProductStore()

    async function searchProducts() {
      productStore.getProducts(query.value)
    }


    return { query, searchProducts }
  }
}
</script>

<style scoped lang="scss">
@import './search.scss';
</style>
