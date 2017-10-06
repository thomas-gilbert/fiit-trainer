import axios from 'axios';
import {
  GET_EXERCISES_BY_TYPE,
  SET_CARDIO_EXERCISES,
  SET_WEIGHT_EXERCISES,
} from './types';

function getExercises(type) {
  return {
    type: GET_EXERCISES_BY_TYPE,
    payload: type,
  };
}

function setCardioExercises(data) {
  return {
    type: SET_CARDIO_EXERCISES,
    payload: data,
  };
}

function setWeightExercises(data) {
  return {
    type: SET_WEIGHT_EXERCISES,
    payload: data,
  };
}

export function getCardioExercisesAsync() {
  return (dispatch) => {
    axios.get('../../mocks/cardio-response.json')
      .then((res) => {
        const data = JSON.parse(res.data.body);
        const exerciseArray = data.map((value) =>
          value.exerciseName
        );

        dispatch(setCardioExercises(exerciseArray));
      });
  };
}

export function getWeightExercisesAsync() {
  return (dispatch) => {
    axios.get('../../mocks/weight-response.json')
      .then((res) => {
        const data = JSON.parse(res.data.body);
        const exerciseArray = data.map((value) =>
          value.exerciseName
        );

        dispatch(setWeightExercises(exerciseArray));
      });
  };
}

export function getExercisesByType(type) {
  return (dispatch) => {
    dispatch(getExercises(type));
  };
}
