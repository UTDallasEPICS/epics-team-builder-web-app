import ExcelReader from '../components/ExcelReader';
import { connect } from 'react-redux';
import {
  changeProjectsArray,
  changeStudentsArray
} from '../../../actions/setupPageActions.js';

const mapDispatchToProps = dispatch => ({
  changeProjectsArray: value => dispatch(changeProjectsArray(value)),
  changeStudentsArray: value => dispatch(changeStudentsArray(value))
});

export default connect(null, mapDispatchToProps)(ExcelReader);
