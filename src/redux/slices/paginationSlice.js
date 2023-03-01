import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentPage: 1,
  nowValue: '',
  currentStatus: '',
  speciesValue: '',
  activeBtn: 0,
}

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setCurrentPage(state, action) {
      console.log(action)
      state.currentPage = action.payload
    },
    setNowValue(state, action) {
      console.log(action)
      state.nowValue = action.payload
    },
    setSpeciesValue(state, action) {
      console.log(action)
      state.speciesValue = action.payload
    },
    setCurrentStatus(state, action) {
      console.log(action)
      state.currentStatus = action.payload
    },
    setFilters(state, action) {
      state.nowValue = action.payload.nowValue
      state.currentStatus = action.payload.currentStatus
      state.speciesValue = action.payload.speciesValue
      state.currentPage = Number(action.payload.currentPage)
    },
    setActiveBtn(state, action) {
      state.activeBtn = action.payload
    },
  },
})

export const {
  setCurrentPage,
  setFilters,
  setCurrentStatus,
  setNowValue,
  setSpeciesValue,
  setActiveBtn,
} = paginationSlice.actions
export default paginationSlice.reducer
