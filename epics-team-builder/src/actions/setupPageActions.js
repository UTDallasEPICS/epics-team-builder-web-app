import { CHANGE_NUM_PROJECT_SLIDER } from './actionTypes/setupPageActionTypes';
import { CHANGE_PROJECTS_ARRAY } from './actionTypes/setupPageActionTypes';
import { CHANGE_STUDENTS_ARRAY } from './actionTypes/setupPageActionTypes';
import { MAP_STUDENTS_TO_PROJECT_MANUAL} from './actionTypes/setupPageActionTypes';

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

export const mapStudentsToProjectManual = value => {
  return {
    type: MAP_STUDENTS_TO_PROJECT_MANUAL,
    payload: value
  };
}