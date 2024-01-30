import { SET_TOKEN, SET_SIGN_UP, LOGOUT, UPDATE_USER } from './authActionTypes';

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const setSignUp = (payload) => ({
  type: SET_SIGN_UP,
  payload: payload
});

export const logout = () => ({
  type: LOGOUT,
});

export const updateUser = (payload) => ({
  type: UPDATE_USER,
  payload: payload
});