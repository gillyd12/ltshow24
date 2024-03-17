<template>
  <Product :products="products" :filters="[]" :individual="true"></Product>
</template>

<script>
import { ref } from 'vue';
import { useProductStore } from '@/stores/useProductStore'
import Product from '@/components/product/Product.vue'

export default {
  name: 'ProductView',
  props: ['id'],
  components: { Product },
  methods: {},
  setup(prop) {
    const products = ref([]);
    const productStore = useProductStore()

    productStore.getProduct(prop.id).then((response) => {
      products.value.push(response.data)
    })

    return { Product, productStore, products }
  }
}
</script>

<style scoped lang="scss"></style>
