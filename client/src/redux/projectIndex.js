import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: -1,
}
export const projectIndexSlice = createSlice({
  name: 'projInd',
  initialState,
  reducers: {
    changeValue: (state, action) => {
      state.value = action.payload;
    },
  },
})
export const { changeValue } = projectIndexSlice.actions
export default projectIndexSlice.reducer