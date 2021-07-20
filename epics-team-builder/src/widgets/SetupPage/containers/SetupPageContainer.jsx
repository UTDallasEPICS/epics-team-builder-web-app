import SetupPage from '../components/SetupPage';
import { connect } from 'react-redux';
import {
  changeNumOfPreferredProjects,
  assignProjToStudents,
  changeProjectsArray,
  changeStudentsArray,
  removeStudent,
  setMaxPossibleChoices,
  setMaxTeamSize
} from 'actions/setupPageActions.js';

import { selectCombination } from 'actions/teamBuilderPageActions';
import {
  getNumOfPreferredProjects,
  getMaxTeamSize,
  getStudents,
  getProjects,
  getManuallyAssignedStudents,
  getMaxPossibleChoices
} from 'reducers';

const mapStateToProps = state => ({
  numOfPrefProjects: getNumOfPreferredProjects(state),
  students: getStudents(state),
  projects: getProjects(state),
  manuallyAssignedStudents: getManuallyAssignedStudents(state),
  maxPossibleChoices: getMaxPossibleChoices(state),
  maxTeamSize: getMaxTeamSize(state)
});

const mapDispatchToProps = dispatch => ({
  changeNumOfPreferredProjects: value => dispatch(changeNumOfPreferredProjects(value)),
  changeProjectsArray: value => dispatch(changeProjectsArray(value)),
  changeStudentsArray: value => dispatch(changeStudentsArray(value)),
  assignProjToStudents: value => dispatch(assignProjToStudents(value)),
  removeStudent: value => dispatch(removeStudent(value)),
  selectCombination: comboInformation => dispatch(selectCombination(comboInformation)),
  setMaxPossibleChoices: value => dispatch(setMaxPossibleChoices(value)),
  setMaxTeamSize: value => dispatch(setMaxTeamSize(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupPage);
