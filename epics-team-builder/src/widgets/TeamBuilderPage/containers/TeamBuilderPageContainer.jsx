import TeamBuilderPage from '../components/TeamBuilderPage';
import { connect } from 'react-redux';
import { generateTeams, selectCombination } from '../../../actions/teamBuilderPageActions';
import {
  getNumOfPreferredProjects,
  getStudents,
  getProjects,
  getManuallyAssignedStudents,
  getTeamCombos
} from '../../../reducers';

const mapStateToProps = state => ({
  numOfPrefProjects: getNumOfPreferredProjects(state),
  students: getStudents(state),
  projects: getProjects(state),
  manuallyAssignedStudents: getManuallyAssignedStudents(state),
  teamCombos: getTeamCombos(state)
});

const mapDispatchToProps = dispatch => ({
  generateTeams: teamInformation => dispatch(generateTeams(teamInformation)),
  selectCombination: comboInformation => dispatch(selectCombination(comboInformation))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamBuilderPage);
