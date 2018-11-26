import axios from 'axios';

import {
  ADD_FOOD,
  GET_ERRORS,
  GET_FOODS,
  GET_FOOD,
  FOOD_ITEM_LOADING,
  DELETE_FOOD,
  CLEAR_ERRORS
} from './types';

// Add Food Item
export const addFoodItem = itemData => dispatch => {
  dispatch(clearErrors());
  axios
    .post('/api/foodItems', itemData)
    .then(res =>
      dispatch({
        type: ADD_FOOD,
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

// Get Food Items
export const getFoods = () => dispatch => {
  dispatch(setFoodItemLoading());
  axios
    .get('/api/foodItems')
    .then(res =>
      dispatch({
        type: GET_FOODS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_FOODS,
        payload: null
      })
    );
};

// Delete Food Item
export const deleteFoodItem = id => dispatch => {
  axios
    .delete(`api/foodItems/${id}`)
    .then(res =>
      dispatch({
        type: DELETE_FOOD,
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

// Get Food Item
export const getFoodItem = id => dispatch => {
  dispatch(setFoodItemLoading());
  axios
    .get(`/api/foodItems/${id}`)
    .then(res =>
      dispatch({
        type: GET_FOOD,
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
export const setFoodItemLoading = () => {
  return {
    type: FOOD_ITEM_LOADING
  };
};

// Clear Errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  };
};
