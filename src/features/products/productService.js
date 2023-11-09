import axios from 'axios'
import { base_url, config } from '../../utils/axiosconfig'

const getProducts = async () => {
   const response = await axios.get(`${base_url}product?page=1&limit=30`)
   if (response.data) {
      return response.data
   }
}

const getSingleProduct = async (id) => {
   const response = await axios.get(`${base_url}product/${id}`)
   if (response.data) {
      return response.data
   }
}

const addToWishList = async (prodId) => {
   const response = await axios.put(`${base_url}product/wishlist`, { prodId }, config)
   if (response.data) {
      return response.data
   }
}

const rateProduct = async (data) => {
   const response = await axios.put(`${base_url}product/rating`, data, config)
   if (response.data) {
      return response.data
   }
}


export const productService = {
   getProducts,
   addToWishList,
   getSingleProduct,
   rateProduct,
}