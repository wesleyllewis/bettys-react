import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import userReducer from './userReducer';
import calendarItemReducer from './calendarItemReducer';
import foodItemReducer from './foodItemReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  user: userReducer,
  calendarItem: calendarItemReducer,
  foodItem: foodItemReducer
});
