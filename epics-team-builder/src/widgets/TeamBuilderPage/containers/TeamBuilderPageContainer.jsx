import TeamBuilderPage from '../components/TeamBuilderPage';
import { connect } from 'react-redux';
import { changeNumOfPreferredProjects } from '../../../actions/setupPageActions.js';
<<<<<<< HEAD

import { getNumOfPreferredProjects } from '../../../reducers';

const mapStateToProps = state => ({
  numOfPreferredProjects: getNumOfPreferredProjects(state)
});

const mapDispatchToProps = dispatch => ({
  changeNumOfPreferredProjects: value => dispatch(changeNumOfPreferredProjects(value))
=======
import { generateTeams } from '../../../actions/teamBuilderPageActions';
import { getNumOfPreferredProjects, getStudents, getProjects, getManuallyAssignedStudents,getTeamCombos } from '../../../reducers';

const mapStateToProps = state => ({
  numOfPreferredProjects: getNumOfPreferredProjects(state),
  students: getStudents(state),
  projects: getProjects(state),
  manuallyAssignedStudents: getManuallyAssignedStudents(state),
  teamCombos: getTeamCombos(state),
});

const mapDispatchToProps = dispatch => ({
  changeNumOfPreferredProjects: value => dispatch(changeNumOfPreferredProjects(value)),
  generateTeams: teamInformation => dispatch(generateTeams(teamInformation))
>>>>>>> team-combinations-column
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamBuilderPage);

