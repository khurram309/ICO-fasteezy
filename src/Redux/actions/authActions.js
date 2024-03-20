import { SET_TOKEN, SET_ACCOUNT_BALANCE, SET_SIGN_UP, LOGOUT, UPDATE_USER, SET_AUTH_POINTS, SET_AUTH_CART } from './authActionTypes';

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const setAccountBalance = (payload) => ({
  type: SET_ACCOUNT_BALANCE,
  payload: payload,
});

export const setProgram = (payload) => ({
  type: SET_PROGRAM,
  payload: payload
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

export const setAuthPoints = (payload) => ({
  type: SET_AUTH_POINTS,
  payload: payload
});

export const setAuthCart = (payload) => ({
  type: SET_AUTH_CART,
  payload: payload
});