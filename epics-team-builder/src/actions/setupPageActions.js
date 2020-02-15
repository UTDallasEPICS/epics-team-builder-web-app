import { CHANGE_NUM_PROJECT_SLIDER } from './actionTypes/setupPageActionTypes';

export const changeNumOfPreferredProjects = value => {
  return {
    type: CHANGE_NUM_PROJECT_SLIDER,
    payload: value
  };
};
