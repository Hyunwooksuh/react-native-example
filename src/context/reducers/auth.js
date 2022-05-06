import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_LOADING,
  CLEAR_AUTH_STATE,
} from "../../constants/actionTypes/index";

const auth = (state, { type, payload }) => {
  console.log(state, payload, type);
  switch (type) {
    case REGISTER_LOADING:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    case REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case CLEAR_AUTH_STATE:
      return {
        ...state,
        loading: false,
        data: null,
        error: null,
      };

    default:
      return state;
  }
};

export default auth;
