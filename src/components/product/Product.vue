<template>
  <div class="product">
    <div v-if="products">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="product in products" :key="product.id">
          <div class="card shadow">
            <img
              :src="product.thumbnail"
              class="card-img-top thumbnail"
              :alt="product.description"
            />
            <div class="card-body">
              <div class="rating-container pb-2">
                <svg v-for="index in 5" :key="index" width="22" height="22" class="circle">
                  <circle cx="11" cy="11" r="10" fill="#ddd" />
                  <circle
                    v-if="index <= Math.floor(product.rating)"
                    cx="11"
                    cy="11"
                    r="10"
                    fill="#f90"
                  />
                  <path
                    v-if="index - 1 < product.rating && index > product.rating"
                    :d="partialCircle(index - product.rating)"
                    fill="#f90"
                  />
                </svg>
              </div>
              <h5 class="card-title">{{ product.title }}</h5>
              <p class="card-text">{{ product.description }}</p>

              <div class="card-detail d-flex flex-column">
                <h4>
                  <span class="badge bg-success">Save {{ product.discountPercentage }}%</span>
                </h4>
                <div class="d-flex align-items-center">
                  <p class="card-text text-muted text-decoration-line-through ps-2 mb-0">
                    {{
                      formatCurrency(
                        Math.round(product.price * (1 + 0.01 * product.discountPercentage) * 100) /
                          100
                      )
                    }}
                  </p>
                  <h3 class="card-text fw-bold ps-2">{{ formatCurrency(product.price) }}</h3>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <div v-if="product.stock < 50" class="text-danger">
                <font-awesome-icon
                  class=""
                  icon="fire"
                />
                <span class="ps-2">Hurry, only {{ product.stock }} left!</span>
              </div>
              <div v-if="product.stock >= 50 && product.stock < 100" class="text-warning">
                <font-awesome-icon
                  class=""
                  icon="circle-exclamation"
                />
                <span class="ps-2">Time to buy! {{ product.stock }} left in stock.</span>
              </div>
              <div v-if="product.stock >= 100" class="text-body">
                <span class="ps-2">{{ product.stock }} in stock.</span>
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
    function formatCurrency(number) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(number)
    }

    function partialCircle(fraction) {
      return `M11 1 A10 10 0 ${fraction > 0.5 ? 1 : 0} 1 ${11 + 10 * Math.sin(2 * Math.PI * fraction)} ${11 - 10 * Math.cos(2 * Math.PI * fraction)} L11 11 Z`
    }

    return { formatCurrency, partialCircle }
  }
}
</script>

<style scoped lang="scss">
@import './product.scss';
</style>
