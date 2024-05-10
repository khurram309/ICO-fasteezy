import { SET_TOKEN, SET_PROGRAM, SET_SIGN_UP, LOGOUT, UPDATE_USER, SET_AUTH_POINTS, SET_AUTH_CART, SET_ACCOUNT_BALANCE } from "../actions/authActionTypes";

const initialState = {
  token: localStorage.getItem('accessToken') || null,
  user: JSON.parse(localStorage.getItem('user')) || null,
  domain: JSON.parse(localStorage.getItem('domain')) || null,
  program: JSON.parse(localStorage.getItem('program')) || null,
  authPoints: JSON.parse(localStorage.getItem('authPoints')) || null,
  authCart: JSON.parse(localStorage.getItem('authCart')) || null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      localStorage.setItem('accessToken', action.payload.data.access_token);
      localStorage.setItem('user', JSON.stringify(action.payload.data.user));
      localStorage.setItem('domain', JSON.stringify(action.payload.data.domain));
      localStorage.setItem('program', JSON.stringify(action.payload.data.domain.programs[0]));
      return {
        ...state,
        token: action.payload.data.access_token,
        user: action.payload.data.user,
        domain: action.payload.data.domain,
        program: action.payload.data.domain.programs[0]
      };
    case SET_ACCOUNT_BALANCE:
      localStorage.setItem('accountBalance', JSON.stringify(action.payload));
      return {
        ...state,
        accountBalance: action.payload
      };
    case SET_PROGRAM:
      localStorage.setItem('program', action.payload);
      return {
      ...state,
         program: action.payload
      };
    case SET_SIGN_UP:
      localStorage.setItem('accessToken', action.payload.data.access_token);
      localStorage.setItem('user', JSON.stringify(action.payload.data.user));
      return {
        ...state,
        token: action.payload.data.access_token,
        user: action.payload.data.user,
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
    case SET_AUTH_POINTS:
      localStorage.setItem('authPoints', JSON.stringify(action.payload));
      return {
        ...state,
        authPoints: action.payload
      };
    case SET_AUTH_CART:
      localStorage.setItem('authCart', JSON.stringify(action.payload));
      return {
        ...state,
        authCart: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;