import {
  GET_CURRENT_USER,
  CLEAR_CURRENT_PROFILE,
  PROFILE_LOADING
} from '../actions/types';

const initialState = {
  user: null,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case CLEAR_CURRENT_PROFILE:
      return {
        ...state,
        user: null
      };
    default:
      return state;
  }
}
