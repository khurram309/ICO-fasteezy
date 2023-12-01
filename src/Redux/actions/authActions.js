import { SET_TOKEN, LOGOUT } from './authActionTypes';

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const logout = () => ({
  type: LOGOUT,
});