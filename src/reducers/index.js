import { combineReducers } from 'redux';
import exercises from './exercises.js';
import list from './list.js';

export default combineReducers({
  exercises,
  list,
});
