<template>
  <div class="product">
    <div v-if="products">
      <div v-for="product in products" :key="product.id">
        <div class="card shadow mb-3">
          <div class="d-flex flex-fill">
            <div class="w-25">
              <img
                :src="product.thumbnail"
                class="thumbnail rounded-start"
                :alt="product.description"
              />
            </div>
            <div class="w-75">
              <div class="card-body d-flex">
                <div class="d-flex flex-column">
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
                  <p class="card-text">
                    {{ product.description }}
                  </p>
                  <div class="card-detail d-flex flex-column">
                    <h4>
                      <span class="badge bg-success">Save {{ product.discountPercentage }}%</span>
                    </h4>
                    <div class="d-flex align-items-center">
                      <p class="card-text text-muted text-decoration-line-through ps-2 mb-0">
                        {{
                          formatCurrency(
                            Math.round(
                              product.price * (1 + 0.01 * product.discountPercentage) * 100
                            ) / 100
                          )
                        }}
                      </p>
                      <h3 class="card-text fw-bold ps-2">{{ formatCurrency(product.price) }}</h3>
                    </div>
                  </div>
                </div>
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
      return `M11 1 A10 10 0 ${fraction > 0.5 ? 1 : 0} 1 ${11 + 10 * Math.sin(2 * Math.PI * fraction)} ${11 - 10 * Math.cos(2 * Math.PI * fraction)} L11 11 Z`;
    }

    return { formatCurrency, partialCircle }
  }
}
</script>

<style scoped lang="scss">
@import './product.scss';
</style>
