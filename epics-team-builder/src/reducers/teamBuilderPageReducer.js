import { combineReducers } from 'redux';
import { INITIATE_TEAM_GENERATION } from '../actions/actionTypes/teamBuilderActionTypes';
import { SELECT_TEAM_COMBINATION } from '../actions/actionTypes/teamBuilderActionTypes';

const getTeamCombos = (state = {}, { type, payload }) => {
  switch (type) {
    case INITIATE_TEAM_GENERATION:
      return payload;
    default:
      return state;
  }
};
const getSectedCombo = (state = {}, { type, payload }) => {
  switch (type) {
    case SELECT_TEAM_COMBINATION:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  getSectedCombo,
  getTeamCombos
});
