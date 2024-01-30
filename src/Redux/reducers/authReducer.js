import { SET_TOKEN, SET_SIGN_UP, LOGOUT, UPDATE_USER } from "../actions/authActionTypes";

const initialState = {
token: localStorage.getItem('accessToken') || null,
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      localStorage.setItem('accessToken', action.payload.headers.authorization);
      localStorage.setItem('user', JSON.stringify(action.payload.data.data.attributes));
      return {
        ...state,
        token: action.payload.headers.authorization,
        user: action.payload.data.data.attributes,
      };
    case SET_SIGN_UP:
      localStorage.setItem('accessToken', action.payload.headers.authorization);
      localStorage.setItem('user', JSON.stringify(action.payload.data.data.attributes));
      return {
        ...state,
        token: action.payload.headers.authorization,
        user: action.payload.data.data.attributes,
      };
    case LOGOUT:
      return {
        ...state,
        token: null,
        user: null,
      };
    case UPDATE_USER:
      localStorage.setItem('user', JSON.stringify(action.payload.data.data.attributes));
      return {
        ...state,
        user: action.payload.data.data.attributes
      };
    default:
      return state;
  }
};

export default authReducer;