import React from 'react';
import PropTypes from 'prop-types';
import Nouislider from 'react-nouislider';
import Header from '../../common/Header';
import ExcelReader from '../containers/ExcelReaderContainer';
import ManuallyAssignProjects from './ManuallyAssignProjects';

class SetupPage extends React.Component {
  //Store current value of slider when changed
  onSlide = (render, handle, value) => {
    this.props.changeNumOfPreferredProjects(value[0]);
  };

  render() {
    const { numOfPreferredProjects, students, projects } = this.props;

    return (
      <div className="setup-page">
        <Header />
        <div className="setup-grid">
          {/* Make sure to put these divs in their respective components when made */}
          <ExcelReader />
          <div className="manual-project-assignment">
            <ManuallyAssignProjects students={students} projects={projects} />
          </div>
          <div className="manually-assigned-students"></div>
        </div>
        <div className="preferred-project-slider">
          <h5>Number of Preferred Projects:</h5>
          <Nouislider
            range={{ min: 3, max: 10 }}
            start={[numOfPreferredProjects]}
            pips={{ mode: 'steps', density: 16 }}
            step={1}
            onSlide={this.onSlide}
          />
        </div>
      </div>
    );
  }
}

SetupPage.defaultProps = {
  numOfPreferredProjects: 5
};

SetupPage.propTypes = {
  numOfPreferredProjects: PropTypes.number,
  changeNumOfPreferredProjects: PropTypes.func,
  students: PropTypes.array,
  projects: PropTypes.array
};

export default SetupPage;
