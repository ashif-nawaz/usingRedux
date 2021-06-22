import { createSlice } from "@reduxjs/toolkit";


const INITIAL_AUTH_STATE = {
    token: "",
    isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_AUTH_STATE,
  reducers: {
    onLogin(state, action) {
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    onLogout(state, action) {
      state.isLoggedIn = false;
      state.token = '';
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;