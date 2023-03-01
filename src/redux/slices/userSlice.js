import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {
      email: '',
      login: '',
      password: '',
      confirmPassword: '',
    },
  },
  reducers: {
    loginAccount(state, action) {
      state.user = action.payload
    },
    logOutAccount(state, action) {
      state.user = {
        email: '',
        login: '',
      }
    },
  },
})

export const { logOutAccount, loginAccount } = userSlice.actions
export default userSlice.reducer
