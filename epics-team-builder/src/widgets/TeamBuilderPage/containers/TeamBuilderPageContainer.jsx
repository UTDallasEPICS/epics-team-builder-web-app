import TeamBuilderPage from '../components/TeamBuilderPage';
import { connect } from 'react-redux';
import { changeNumOfPreferredProjects } from '../../../actions/setupPageActions.js';
import { generateTeams,selectCombination } from '../../../actions/teamBuilderPageActions';
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
  generateTeams: teamInformation => dispatch(generateTeams(teamInformation)),
  selectCombination: comboInformation => dispatch(selectCombination(comboInformation)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamBuilderPage);

