import { configureStore } from '@reduxjs/toolkit'
import { serverCall } from './serverCall'
import { searchSlice } from './searchRedux'
import { typeSlice } from './typeRedux'
import { categorySlice } from './categoryRedux'

export default configureStore({
    reducer: {
    [serverCall.reducerPath]: serverCall.reducer,
    search: searchSlice.reducer,
    type: typeSlice.reducer,
    category: categorySlice.reducer
    },

})