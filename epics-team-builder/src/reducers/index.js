import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import setupPageReducer from './setupPageReducer';

export default combineReducers({
  setupPage: setupPageReducer
});

export const getStudents = state => state.setupPage.students;
export const getProjects = state => state.setupPage.projects;
export const getProjectsByStudentId = state => state.setupPage.projectsByStudentId;
