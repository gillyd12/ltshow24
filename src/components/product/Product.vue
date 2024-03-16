<template>
  <div class="product">
    <div v-if="products">
      <div v-for="product in products" :key="product.id">
        <div class="card shadow mb-3">
          <div class="d-flex flex-fill">
            <div class="w-25">
              <img :src="product.thumbnail" class="thumbnail rounded-start" :alt="product.description" />
            </div>
            <div class="w-75">
              <div class="card-body">
                <h5 class="card-title">{{ product.title }}</h5>
                <p class="card-text">
                  {{ product.description }}
                </p>
                <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names, vue/no-reserved-component-names
  name: 'Product',
  props: {
    products: {
      type: Object
    }
  },
  components: {},
  methods: {},
  setup() {
    return {}
  }
}
</script>

<style scoped lang="scss">
@import './product.scss';
</style>
