import {
  CHANGE_NUM_PROJECT_SLIDER,
  CHANGE_PROJECTS_ARRAY,
  CHANGE_STUDENTS_ARRAY,
  ASSIGN_PROJ_TO_STUDENT,
  REMOVE_STUDENT,
  SET_MAX_POSSIBLE_CHOICES
} from './actionTypes/setupPageActionTypes';

export const removeStudent = value => {
  return {
    type: REMOVE_STUDENT,
    payload: value
  };
};

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

export const setMaxPossibleChoices = value => {
  return {
    type: SET_MAX_POSSIBLE_CHOICES,
    payload: value
  };
};
