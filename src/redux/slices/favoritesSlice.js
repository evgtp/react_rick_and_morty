import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  locations: [],
  scenes: [],
  addedBtn: '',
  addAppend: false,
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    // addItem(state, action) {
    //   state.items.push(action.payload)
    // },
    addItem(state, action) {
      console.log('addItem', action)
      const findItem = state.items.find((obj) => obj.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        })
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
    },
    addLocation(state, action) {
      console.log('addItem', action)
      const findItem = state.locations.find(
        (obj) => obj.id === action.payload.id
      )

      if (findItem) {
        findItem.count++
      } else {
        state.locations.push({
          ...action.payload,
          count: 1,
        })
      }
    },
    removeLocation(state, action) {
      state.locations = state.locations.filter(
        (obj) => obj.id !== action.payload
      )
    },
    addScene(state, action) {
      const findItem = state.scenes.find((obj) => obj.id === action.payload.id)

      if (findItem) {
        findItem.count++
      } else {
        state.scenes.push(action.payload)
      }
    },
    removeScene(state, action) {
      state.scenes = state.scenes.filter((obj) => obj.id !== action.payload)
    },
    setAddedBtn(state, action) {
      state.activeBtn = action.payload
    },
    setAddAppend(state, action) {
      state.addAppend = action.payload
    },
  },
})

export const {
  addItem,
  removeItem,
  addLocation,
  removeLocation,
  addScene,
  removeScene,
  setAddedBtn,
  setAddAppend,
} = favoritesSlice.actions
export default favoritesSlice.reducer
