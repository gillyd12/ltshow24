<template>
  <Product :products="productStore.products"></Product>
</template>

<script>
import { useProductStore } from '@/stores/useProductStore'
import Product from '@/components/product/Product.vue'

export default {
  name: 'ProductView',
  props: {},
  components: { Product },
  methods: {},
  setup() {
    const productStore = useProductStore()

    productStore.getProducts(null);

    return { Product, productStore }
  }
}
</script>

<style scoped lang="scss"></style>
