import SetupPage from '../components/SetupPage';
import { connect } from 'react-redux';
import {
  changeNumOfPreferredProjects,
  assignProjToStudents,
  changeProjectsArray,
  changeStudentsArray
} from '../../../actions/setupPageActions.js';

import { generateTeams, selectCombination} from '../../../actions/teamBuilderPageActions';
import { getNumOfPreferredProjects, getStudents, getProjects, getManuallyAssignedStudents } from '../../../reducers';

const mapStateToProps = state => ({
  numOfPrefProjects: getNumOfPreferredProjects(state),
  students: getStudents(state),
  projects: getProjects(state),
  manuallyAssignedStudents: getManuallyAssignedStudents(state)
});

const mapDispatchToProps = dispatch => ({
  changeNumOfPreferredProjects: value => dispatch(changeNumOfPreferredProjects(value)),
  changeProjectsArray: value => dispatch(changeProjectsArray(value)),
  changeStudentsArray: value => dispatch(changeStudentsArray(value)),
  assignProjToStudents: value => dispatch(assignProjToStudents(value)),
  generateTeams: teamInformation => dispatch(generateTeams(teamInformation)),
  selectCombination: comboInformation => dispatch(selectCombination(comboInformation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupPage);
