import { createSlice } from '@reduxjs/toolkit';

export const typeSlice = createSlice({
    name: 'filtertype',
    initialState: {
        typefilter: '',
    },
    reducers: {
        setType: (state, action) => {
            state.typefilter = action.payload;
        }
    }
});

export const { setType } = typeSlice.actions;

export const selectType = (state: { typefilter: string; }) => state.typefilter;
