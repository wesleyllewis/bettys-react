import {
  ADD_FOOD,
  GET_FOODS,
  GET_FOOD,
  DELETE_FOOD,
  FOOD_ITEM_LOADING
} from '../actions/types';

const initialState = {
  foodItems: [],
  foodItem: {},
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FOOD_ITEM_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_FOODS:
      return {
        ...state,
        foodItems: action.payload,
        loading: false
      };
    case GET_FOOD:
      return {
        ...state,
        foodItem: action.payload,
        loading: false
      };
    case ADD_FOOD:
      return {
        ...state,
        foodItems: [action.payload, ...state.foodItems]
      };
    case DELETE_FOOD:
      return {
        ...state,
        foodItems: state.foodItems.filter(
          foodItem => foodItem._id !== action.payload
        )
      };
    default:
      return state;
  }
}
