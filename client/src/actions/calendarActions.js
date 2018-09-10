import axios from 'axios';

import {
  ADD_ITEM,
  GET_ERRORS,
  GET_ITEMS,
  GET_ITEM,
  ITEM_LOADING,
  DELETE_ITEM,
  CLEAR_ERRORS
} from './types';

// Add Item
export const addItem = itemData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/api/calendarItems', itemData)
    .then(res =>
      dispatch({
        type: ADD_ITEM,
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

// Get Items
export const getItems = () => dispatch => {
  dispatch(setItemLoading());
  axios
    .get('/api/calendarItems')
    .then(res =>
      dispatch({
        type: GET_ITEMS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ITEMS,
        payload: null
      })
    );
};

// Delete Item
export const deletePost = id => dispatch => {
  axios
    .delete(`/api/calendarItems/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_ITEM,
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

// Get Item
export const getItem = id => dispatch => {
  dispatch(setItemLoading());
  axios
    .get(`/api/calendarItems/${id}`)
    .then(res =>
      dispatch({
        type: GET_ITEM,
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
export const setItemLoading = () => {
  return {
    type: ITEM_LOADING
  };
};

// Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
