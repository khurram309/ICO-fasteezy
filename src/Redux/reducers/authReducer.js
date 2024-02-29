import { SET_TOKEN, SET_PROGRAM, SET_SIGN_UP, LOGOUT, UPDATE_USER } from "../actions/authActionTypes";

const initialState = {
token: localStorage.getItem('accessToken') || null,
  user: JSON.parse(localStorage.getItem('user')) || null,
  domain: JSON.parse(localStorage.getItem('domain')) || null,
  program: JSON.parse(localStorage.getItem('program')) || null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      console.log(action.payload);
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
    case SET_PROGRAM:
      localStorage.setItem('program', action.payload);
      return {
      ...state,
         program: action.payload
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