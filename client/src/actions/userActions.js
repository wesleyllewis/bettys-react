import axios from 'axios';

import {
  GET_CURRENT_USER,
  PROFILE_LOADING,
  CLEAR_CURRENT_USER,
  GET_ERRORS,
  SET_CURRENT_USER
} from './types';

// Get current user
export const getCurrentUser = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get('/api/users/')
    .then(res =>
      dispatch({
        type: GET_CURRENT_USER,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_CURRENT_USER,
        payload: {}
      })
    );
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};

// Clear user
export const clearCurrentUser = () => {
  return {
    type: CLEAR_CURRENT_USER
  };
};
