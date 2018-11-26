import axios from 'axios';

import {
  ADD_SHOW,
  GET_ERRORS,
  GET_SHOWS,
  GET_SHOW,
  SHOW_LOADING,
  DELETE_SHOW,
  CLEAR_ERRORS
} from './types';

// Add Calendar Item
export const addCalendarItem = itemData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/api/calendarItems', itemData)
    .then(res =>
      dispatch({
        type: ADD_SHOW,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Calendar Items
export const getCalendarItems = () => dispatch => {
  dispatch(setCalendarItemLoading());
  axios
    .get('/api/calendarItems')
    .then(res =>
      dispatch({
        type: GET_SHOWS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_SHOWS,
        payload: null
      })
    );
};

// Delete Calendar Item
export const deleteCalendarItem = id => dispatch => {
  axios
    .delete(`/api/calendarItems/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_SHOW,
        payload: id
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get Calendar Item
export const getCalendarItem = id => dispatch => {
  dispatch(setCalendarItemLoading());
  axios
    .get(`/api/calendarItems/${id}`)
    .then(res =>
      dispatch({
        type: GET_SHOW,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set Loading State
export const setCalendarItemLoading = () => {
  return {
    type: SHOW_LOADING
  };
};

// Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
