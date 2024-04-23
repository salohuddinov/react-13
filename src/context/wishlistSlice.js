import { createSlice } from '@reduxjs/toolkit'


export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        value: []
    },
    reducers: {
        toggleToWishles(state, action) {
            let index = state.value.findIndex((el) => el.id === action.payload.id)
            if (index < 0) {
                state.value = [...state.value, action.payload]
            } else {
                state.value = state.value.filter(el => el.id !== action.payload.id)
            }
        },
    },
})

export const { toggleToWishles } = wishlistSlice.actions

export default wishlistSlice.reducer