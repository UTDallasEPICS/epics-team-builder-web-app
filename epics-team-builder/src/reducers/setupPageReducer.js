import { combineReducers } from 'redux';
import {
  CHANGE_NUM_PROJECT_SLIDER,
  CHANGE_STUDENTS_ARRAY,
  CHANGE_PROJECTS_ARRAY,
  ASSIGN_PROJ_TO_STUDENT,
  REMOVE_STUDENT,
  SET_MAX_POSSIBLE_CHOICES
} from '../actions/actionTypes/setupPageActionTypes';

const students = (state = [], { type, payload }) => {
  switch (type) {
    case CHANGE_STUDENTS_ARRAY:
      return payload;
    default:
      return state;
  }
};

const projects = (state = [], { type, payload }) => {
  switch (type) {
    case CHANGE_PROJECTS_ARRAY:
      return payload;
    default:
      return state;
  }
};

const manuallyAssignedStudents = (state = {}, { type, payload }) => {
  switch (type) {
    case REMOVE_STUDENT:
      return payload;
    case ASSIGN_PROJ_TO_STUDENT:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
};

const numOfPreferredProjects = (state = 6, { type, payload }) => {
  switch (type) {
    case CHANGE_NUM_PROJECT_SLIDER:
      return payload;
    default:
      return state;
  }
};

const maxChoicesConsidered = (state = 0, { type, payload }) => {
  switch (type) {
    case SET_MAX_POSSIBLE_CHOICES:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  students,
  projects,
  manuallyAssignedStudents,
  numOfPreferredProjects,
  maxChoicesConsidered
});
