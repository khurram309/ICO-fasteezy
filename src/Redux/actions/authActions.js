import { SET_TOKEN, SET_SIGN_UP, LOGOUT, UPDATE_USER, SET_AUTH_POINTS } from './authActionTypes';

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
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