import { configureStore } from '@reduxjs/toolkit'
import fullWidthReducer from '../../Pages/System/Tasks/slices/fullWidthSlice'

export const store = configureStore({
  reducer: {
    tasksMenuCollapsed : fullWidthReducer
  },
})