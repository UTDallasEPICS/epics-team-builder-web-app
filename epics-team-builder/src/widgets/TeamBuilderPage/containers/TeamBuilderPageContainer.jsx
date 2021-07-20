import TeamBuilderPage from 'widgets/TeamBuilderPage/components/TeamBuilderPage';
import { connect } from 'react-redux';
import { generateTeams, selectCombination } from 'actions/teamBuilderPageActions';
import {
  getNumOfPreferredProjects,
  getStudents,
  getProjects,
  getManuallyAssignedStudents,
  getMaxTeamSize,
  getTeamCombos
} from 'reducers';

const mapStateToProps = state => ({
  numOfPrefProjects: getNumOfPreferredProjects(state),
  students: getStudents(state),
  projects: getProjects(state),
  manuallyAssignedStudents: getManuallyAssignedStudents(state),
  teamCombos: getTeamCombos(state),
  maxTeamSize: getMaxTeamSize(state)
});

const mapDispatchToProps = dispatch => ({
  generateTeams: teamInformation => dispatch(generateTeams(teamInformation)),
  selectCombination: comboInformation => dispatch(selectCombination(comboInformation))
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamBuilderPage);
