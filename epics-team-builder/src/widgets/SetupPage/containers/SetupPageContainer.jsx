import SetupPage from '../components/SetupPage';
import { connect } from 'react-redux';
import { changeNumOfPreferredProjects } from '../../../actions/setupPageActions.js';
import { changeStudentsArray } from '../../../actions/setupPageActions.js';
import { changeProjectsArray } from '../../../actions/setupPageActions.js';
import { getNumOfPreferredProjects } from '../../../reducers';

const mapStateToProps = state => ({
  numOfPreferredProjects: getNumOfPreferredProjects(state)
});

const mapDispatchToProps = dispatch => ({
  changeNumOfPreferredProjects: value =>
    dispatch(changeNumOfPreferredProjects(value)),

  changeProjectsArray: value =>
    dispatch(changeProjectsArray(value)), 

  changeStudentsArray: value =>
    dispatch(changeStudentsArray(value))

});

export default connect(mapStateToProps, mapDispatchToProps)(SetupPage);
