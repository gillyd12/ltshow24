<template>
  <Product :products="products"></Product>
</template>

<script>
import { ref } from 'vue'
import { useProductStore } from '@/stores/useProductStore'
import Product from '@/components/product/Product.vue'

export default {
  name: 'ProductView',
  props: {},
  components: { Product },
  methods: {},
  setup() {
    const productStore = useProductStore()

    const products = ref([])

    productStore.getProducts(null).then((response) => {
      products.value = response
    })

    return { products, Product }
  }
}
</script>

<style scoped lang="scss"></style>
