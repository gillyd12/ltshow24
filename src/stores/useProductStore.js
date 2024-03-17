import { defineStore } from 'pinia'
import product from '@/services/product'

const { getProducts, getProduct } = product()

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    filters: [],
    selectedFilters: []
  }),

  getters: {},

  actions: {
    async getProducts(search) {
      let query = ''
      if (search !== null && search !== '') {
        query = '/search?q=' + search
      } else {
        query = '?limit=100'
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
    },

    sort(property = '', order = 'asc') {
      this.products = this.products.sort((a, b) => {
        if (order === 'asc') {
          return a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0
        } else {
          return b[property] > a[property] ? 1 : b[property] < a[property] ? -1 : 0
        }
      })
    }
  }
})
