import { createSlice } from '@reduxjs/toolkit';

export const categorySlice = createSlice({
    name: 'filtercategory',
    initialState: {
        categoryfilter: '',
    },
    reducers: {
        setCategory: (state, action) => {
            state.categoryfilter = action.payload;
        }
    }
});

export const { setCategory } = categorySlice.actions;

export const selectCategory = (state: { categoryfilter: string; }) => state.categoryfilter;