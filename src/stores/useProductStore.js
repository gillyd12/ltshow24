import { defineStore } from 'pinia'
import product from '@/services/product'

const { getProducts, getProduct } = product()

export const useProductStore = defineStore('product', {
  state: () => ({
    types: [],
    products: [],
    filters: [],
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
      this.products = (await getProducts(query)).data.products;
    },
    async getProduct(id) {
      return await getProduct(id)
    }
  }
})
