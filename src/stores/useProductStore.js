import { defineStore } from 'pinia'
import product from '@/services/product'

const { getProducts, getProduct } = product()

export const useProductStore = defineStore('product', {
  state: () => ({
    types: [],
    products: [],
    filters: [],
    selectedFilters: [],
    sort_order: '',
    search: ''
  }),

  getters: {},

  actions: {
    async getProducts(search) {
      let query = ''
      if (search !== null) {
        query = 'q=' + search
      }
      this.products = (await getProducts(query)).data.products
      this.filters = [...new Set(this.products.map((product) => product.category))]
    },

    async getProduct(id) {
      return await getProduct(id)
    },

    toggleSelectedFilters(item) {
      const index = this.selectedFilters.indexOf(item)
      if (index > -1) {
        this.selectedFilters.splice(index, 1)
      } else {
        this.selectedFilters.push(item)
      }
    }
  }
})
