import { configureStore } from '@reduxjs/toolkit'
import projectIndexReducer from './projectIndex'

export const store = configureStore({
  reducer: {
    projInd : projectIndexReducer
  }
})