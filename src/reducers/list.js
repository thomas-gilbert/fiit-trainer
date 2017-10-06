import {
  ADD_EXERCISE,
  REMOVE_EXERCISE,
} from '../actions/types.js';

export default function (state = {
  items: [],
}, action) {
  switch (action.type) {
  case ADD_EXERCISE:
    return {
      items: [...state.items, action.payload],
    };
  case REMOVE_EXERCISE:
    return {
      items: state.items.filter((item, index) => index !== action.payload),
    };
  default:
    return state;
  }
}
