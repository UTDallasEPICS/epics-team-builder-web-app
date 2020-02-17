import { combineReducers } from 'redux';
import { CHANGE_NUM_PROJECT_SLIDER } from '../actions/actionTypes/setupPageActionTypes';

const students = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const projects = (state = [], { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const projectByStudentId = (state = {}, { type, payload }) => {
  switch (type) {
    default:
      return state;
  }
};

const numOfPreferredProjects = (state = 5, { type, payload }) => {
  switch (type) {
    case CHANGE_NUM_PROJECT_SLIDER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  students,
  projects,
  projectByStudentId,
  numOfPreferredProjects
});
