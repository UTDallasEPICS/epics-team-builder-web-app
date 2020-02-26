import SetupPage from '../components/SetupPage';
import { connect } from 'react-redux';
import { changeNumOfPreferredProjects } from '../../../actions/setupPageActions.js';
import { generateTeams } from '../../../actions/teamBuilderPageActions';
import { getNumOfPreferredProjects, getStudents, getProjects, getManuallyAssignedStudents } from '../../../reducers';

const mapStateToProps = state => ({
  numOfPrefProjects: getNumOfPreferredProjects(state),
  students: getStudents(state),
  projects: getProjects(state),
  manuallyAssignedStudents: getManuallyAssignedStudents(state)
});

const mapDispatchToProps = dispatch => ({
  changeNumOfPreferredProjects: value => dispatch(changeNumOfPreferredProjects(value)),
  generateTeams: teamInformation => dispatch(generateTeams(teamInformation))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupPage);
