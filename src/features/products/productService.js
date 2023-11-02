import axios from 'axios'
import { base_url } from '../../utils/axiosconfig'

const getProducts = async () => {
   const response = await axios.get(`${base_url}product?page=1&limit=30`)
   if (response.data) {
      return response.data
   }
}

const addToWishList = async () => {
   const response = await axios.get(`${base_url}product/wishlist`)
   if (response.data) {
      return response.data
   }
}

export const productService = {
   getProducts
}