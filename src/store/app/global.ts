import { createSlice } from '@reduxjs/toolkit'

export type GlobalState = {
  bigShoeImage: string
}

export type RootState = {
  global: GlobalState
}

const initialState: GlobalState = {
  bigShoeImage: '/big-shoe1.png'
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setBigShoeImage: (state, action) => {
      state.bigShoeImage = action.payload
    }
  }
})

export const { setBigShoeImage } = globalSlice.actions
export default globalSlice.reducer
