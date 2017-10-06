import {
  ADD_EXERCISE,
  REMOVE_EXERCISE,
} from './types';

function addExercise(exercise) {
  return {
    type: ADD_EXERCISE,
    payload: exercise,
  };
}

function removeExercise(index) {
  return {
    type: REMOVE_EXERCISE,
    payload: index,
  };
}

export function addExerciseToList(exercise) {
  return (dispatch) => {
    dispatch(addExercise(exercise));
  };
}

export function removeExerciseToList(index) {
  return (dispatch) => {
    dispatch(removeExercise(index));
  };
}

