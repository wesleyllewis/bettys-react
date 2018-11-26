import {
  ADD_SHOW,
  GET_SHOWS,
  GET_SHOW,
  DELETE_SHOW,
  SHOW_LOADING
} from '../actions/types';

const initialState = {
  calendarItems: [],
  calendarItem: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SHOW_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_SHOWS:
      return {
        ...state,
        calendarItems: action.payload,
        loading: false
      };
    case GET_SHOW:
      return {
        ...state,
        calendarItem: action.payload,
        loading: false
      };
    case ADD_SHOW:
      return {
        ...state,
        calendarItems: [action.payload, ...state.calendarItems]
      };
    case DELETE_SHOW:
      return {
        ...state,
        calendarItems: state.calendarItems.filter(
          calendarItem => calendarItem._id !== action.payload
        )
      };
    default:
      return state;
  }
}
