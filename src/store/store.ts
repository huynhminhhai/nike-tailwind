import { configureStore, Tuple } from '@reduxjs/toolkit'
import globalReducer from '@/store/app/global'

const store = configureStore({
  reducer: {
    global: globalReducer
  },
  middleware: (getDefault) => getDefault()
})

export default store
