import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import setupPageReducer from './setupPageReducer';
import teamBuilderPageReducer from './teamBuilderPageReducer';

export default combineReducers({
  setupPage: setupPageReducer,
  teams: teamBuilderPageReducer
});

//Setup Page Selectors
export const getStudents = state => state.setupPage.students;
export const getProjects = state => state.setupPage.projects;
export const getProjectsByStudentId = state => state.setupPage.projectsByStudentId;

//Team Builder Page Selectors
export const getTeams = state => state.teams;
