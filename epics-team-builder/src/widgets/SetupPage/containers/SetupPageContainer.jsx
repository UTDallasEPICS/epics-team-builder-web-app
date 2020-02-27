import SetupPage from '../components/SetupPage';
import { connect } from 'react-redux';
import { changeNumOfPreferredProjects, assignProjToStud } from '../../../actions/setupPageActions.js';

import { getNumOfPreferredProjects, getStudents, getProjects } from '../../../reducers';

const mapStateToProps = state => ({
  numOfPreferredProjects: getNumOfPreferredProjects(state),
  students: getStudents(state),
  projects: getProjects(state)
});

const mapDispatchToProps = dispatch => ({
  changeNumOfPreferredProjects: value => dispatch(changeNumOfPreferredProjects(value)),
  assignProjToStud: value => dispatch(assignProjToStud(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupPage);
