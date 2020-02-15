import SetupPage from '../components/SetupPage';
import { connect } from 'react-redux';
import { changeNumOfPreferredProjects } from '../../../actions/setupPageActions.js';
import { getNumOfPreferredProjects } from '../../../reducers';

const mapStateToProps = state => ({
  numOfPreferredProjects: getNumOfPreferredProjects(state)
});

const mapDispatchToProps = dispatch => ({
  changeNumOfPreferredProjects: value =>
    dispatch(changeNumOfPreferredProjects(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupPage);
