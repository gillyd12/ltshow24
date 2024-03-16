import exception from '../helpers/exception'
import sendRequest from './sendRequest'

export default function parcel() {
  const { DataException } = exception()
  const { nonAuthClient } = sendRequest()

  const baseEndPoint = '/products/'

  async function getProducts(query) {
    try {
      return await nonAuthClient.get(`${baseEndPoint}${query}`)
    } catch (error) {
      throw new DataException(error)
    }
  }

  async function getProduct(id) {
    try {
      return await nonAuthClient.get(`${baseEndPoint}${id}`)
    } catch (error) {
      throw new DataException(error)
    }
  }

  return {
    getProducts,
    getProduct
  }
}
