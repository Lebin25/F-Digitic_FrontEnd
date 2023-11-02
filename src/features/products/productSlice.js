import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';
import { productService } from './productService';

export const getAllProduct = createAsyncThunk('product/get', async (thunkAPI) => {
   try {
      return await productService.getProducts()
   } catch (error) {
      return thunkAPI.rejectWithValue(error)
   }
})

const initialState = {
   product: '',
   isError: false,
   isLoading: false,
   isSuccess: false,
   message: '',
}

export const productSlice = createSlice({
   name: 'product',
   initialState: initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getAllProduct.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(getAllProduct.fulfilled, (state, action) => {
            state.isError = false;
            state.isLoading = false;
            state.isSuccess = true;
            state.message = "Success";
            state.product = action.payload;
         })
         .addCase(getAllProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.isSuccess = false;
            state.message = action.error;
         })
   }
})

export default productSlice.reducer;