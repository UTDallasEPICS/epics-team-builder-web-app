import { CHANGE_NUM_PROJECT_SLIDER } from './actionTypes/setupPageActionTypes';
import { CHANGE_PROJECTS_ARRAY } from './actionTypes/setupPageActionTypes';
import { CHANGE_STUDENTS_ARRAY } from './actionTypes/setupPageActionTypes';
import { ASSIGN_PROJ_TO_STUDENT } from './actionTypes/setupPageActionTypes';

export const changeNumOfPreferredProjects = value => {
  return {
    type: CHANGE_NUM_PROJECT_SLIDER,
    payload: value
  };
};

export const changeProjectsArray = value => {
  return {
    type: CHANGE_PROJECTS_ARRAY,
    payload: value
  };
};

export const changeStudentsArray = value => {
  return {
    type: CHANGE_STUDENTS_ARRAY,
    payload: value
  };
};

export const assignProjToStudents = value => {
  return {
    type: ASSIGN_PROJ_TO_STUDENT,
    payload: value
  };
};
