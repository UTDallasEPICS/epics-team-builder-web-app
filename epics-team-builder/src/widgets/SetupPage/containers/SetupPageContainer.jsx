import SetupPage from '../components/SetupPage';
import { connect } from 'react-redux';
import {
  changeNumOfPreferredProjects,
  assignProjToStudents,
  changeProjectsArray,
  changeStudentsArray,
  removeStudent,
  setMaxPossibleChoices
} from '../../../actions/setupPageActions.js';

import { generateTeams, selectCombination } from '../../../actions/teamBuilderPageActions';
import {
  getNumOfPreferredProjects,
  getStudents,
  getProjects,
  getManuallyAssignedStudents,
  getMaxPossibleChoices
} from '../../../reducers';

const mapStateToProps = state => ({
  numOfPrefProjects: getNumOfPreferredProjects(state),
  students: getStudents(state),
  projects: getProjects(state),
  manuallyAssignedStudents: getManuallyAssignedStudents(state),
  maxPossibleChoices: getMaxPossibleChoices(state)
});

const mapDispatchToProps = dispatch => ({
  changeNumOfPreferredProjects: value => dispatch(changeNumOfPreferredProjects(value)),
  changeProjectsArray: value => dispatch(changeProjectsArray(value)),
  changeStudentsArray: value => dispatch(changeStudentsArray(value)),
  assignProjToStudents: value => dispatch(assignProjToStudents(value)),
  removeStudent: value => dispatch(removeStudent(value)),
  generateTeams: teamInformation => dispatch(generateTeams(teamInformation)),
  selectCombination: comboInformation => dispatch(selectCombination(comboInformation)),
  setMaxPossibleChoices: value => dispatch(setMaxPossibleChoices(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupPage);
