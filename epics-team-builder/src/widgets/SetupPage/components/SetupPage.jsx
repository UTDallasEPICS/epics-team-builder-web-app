import React from 'react';
import PropTypes from 'prop-types';
import Nouislider from 'react-nouislider';
import Header from '../../common/Header';
import ExcelReader from '../containers/ExcelReaderContainer';

class SetupPage extends React.Component {
  //Store current value of slider when changed
  onSlide = (render, handle, value) => {
    this.props.changeNumOfPreferredProjects(value[0]);
  };

  generateTeams = () => {
    const { students, projects, manuallyAssignedStudents, numOfPrefProjects } = this.props;
    this.props.switchToTeamBuilder();
    this.props.generateTeams({ students, projects, manuallyAssignedStudents, numOfPrefProjects });
  };

  render() {
    const { numOfPrefProjects } = this.props;

    return (
      <div className='setup-page'>
        <Header />
        <div className='setup-grid'>
          {/* Make sure to put these divs in their respective components when made */}
          <ExcelReader />
          <div className='manual-project-assignment'></div>
          <div className='manually-assigned-students'></div>
        </div>
        <div className='preferred-project-slider'>
          <h5>Number of Preferred Projects:</h5>
          <Nouislider
            range={{ min: 3, max: 10 }}
            start={[numOfPrefProjects]}
            pips={{ mode: 'steps', density: 16 }}
            step={1}
            onSlide={this.onSlide}
          />
        </div>
        <button className='orange generate-teams-btn' onClick={this.generateTeams}>
          Build Teams
        </button>
      </div>
    );
  }
}

SetupPage.defaultProps = {
  numOfPrefProjects: 6,
  students: [],
  projects: [],
  manuallyAssignedStudents: {}
};

SetupPage.propTypes = {
  numOfPrefProjects: PropTypes.number,
  changeNumOfPreferredProjects: PropTypes.func,
  switchToTeamBuilder: PropTypes.func,
  students: PropTypes.array,
  projects: PropTypes.array,
  manuallyAssignedStudents: PropTypes.object,
  generateTeams: PropTypes.func
};

export default SetupPage;
