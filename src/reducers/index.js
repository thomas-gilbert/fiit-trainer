import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import exercises from './exercises.js';

export default combineReducers({
    exercises,
    routing: routerReducer
});