import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import setupPageReducer from './setupPageReducer';
import teamBuilderPageReducer from './teamBuilderPageReducer';

export default combineReducers({
  setupPage: setupPageReducer,
  teamCombos: teamBuilderPageReducer
});

//Setup Page Selectors
export const getStudents = state => state.setupPage.students;
export const getProjects = state => state.setupPage.projects;
export const getManuallyAssignedStudents = state => state.setupPage.manuallyAssignedStudents;
export const getNumOfPreferredProjects = state => state.setupPage.numOfPreferredProjects;
export const getMaxPossibleChoices = state => state.setupPage.maxChoicesConsidered;

//Team Builder Page Selectors
export const getTeamCombos = state => state.teamCombos.getTeamCombos;
export const getSelectedCombo = state => state.teamCombos.getSectedCombo;
