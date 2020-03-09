import { combineReducers } from 'redux';
import {
  CHANGE_NUM_PROJECT_SLIDER,
  CHANGE_STUDENTS_ARRAY,
  CHANGE_PROJECTS_ARRAY,
  ASSIGN_PROJ_TO_STUD
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

const projectByStudentId = (state = {}, { type, payload }) => {
  switch (type) {
    case ASSIGN_PROJ_TO_STUD:
      return {
        ...state,
        ...payload
      };
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
