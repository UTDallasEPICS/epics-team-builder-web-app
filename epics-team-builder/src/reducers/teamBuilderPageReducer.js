import { INITIATE_TEAM_GENERATION } from '../actions/actionTypes/teamBuilderActionTypes';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case INITIATE_TEAM_GENERATION:
      return payload;
    default:
      return state;
  }
};
