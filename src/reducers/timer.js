import {
  GET_EXERCISES_BY_TYPE,
  SET_CARDIO_EXERCISES,
  SET_WEIGHT_EXERCISES,
} from '../actions/types.js';

export default function (state = {
  exerciseList: [],
  totalTime: 20,
  restInterval: 20,
  workoutInterval: 20,
}, action) {
  switch (action.type) {
  case GET_EXERCISES_BY_TYPE:
    return {
      [action.payload]: action.payload,
    };
  case SET_CARDIO_EXERCISES:
    return {
      ...state,
      cardio: action.payload,
    };
  case SET_WEIGHT_EXERCISES:
    return {
      ...state,
      weight: action.payload,
    };
  default:
    return state;
  }
}
