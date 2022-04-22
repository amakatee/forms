import React from 'react'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    items: [],
    status: 'idle', //loading succeeded, failed
    error: null

}
export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    try {
        const response = await axios.get('https://random-data-api.com/api/beer/random_beer')
        return [...response.data]
    }catch (err){
        return err.message

    }
})
const itemSlice = createSlice({
    name:"items",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchItems.pending, (state, action) => {
            state.status = 'loading' 
        })
        .addCase(fetchItems.fulfilled, (state, action) => {
            state.status = 'succeeded'
            const loadedItems = action.payload
            state.items = state.items.concat(loadedItems)
        })
        .addCase(fetchItems.rejected, (state,action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
        
    }
})
export const allItems = (state) => state.items.items
export const getItemsStatus = (state) => state.items.status
export const getItemsError = (state) => state.items.error
export default itemSlice.reducer