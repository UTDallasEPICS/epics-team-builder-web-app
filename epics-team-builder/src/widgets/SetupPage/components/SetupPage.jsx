import React from 'react';
import PropTypes from 'prop-types';
import Nouislider from 'react-nouislider';
import Header from '../../common/Header';
import ManuallyAssignProjects from './ManuallyAssignProjects';
import ExcelReader from './ExcelReader';

class SetupPage extends React.Component {
  //Store current value of slider when changed
  onSlide = (render, handle, value) => {
    this.props.changeNumOfPreferredProjects(value[0]);
  };

  render() {
    const {
      numOfPreferredProjects,
      students,
      projects,
      assignProjToStud,
      changeStudentsArray,
      changeProjectsArray
    } = this.props;

    return (
      <div className='setup-page'>
        <Header />
        <div className='setup-grid'>
          {/* Make sure to put these divs in their respective components when made */}
          <ExcelReader changeStudentsArray={changeStudentsArray} changeProjectsArray={changeProjectsArray} />
          <div>
            <ManuallyAssignProjects
              className='manual-project-assignment'
              students={students}
              projects={projects}
              assignProjToStud={assignProjToStud}
              changeStudentsArray={changeStudentsArray}
            />
          </div>
          <div className='manually-assigned-students'></div>
        </div>
        <div className='preferred-project-slider'>
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
  projects: PropTypes.array,
  assignProjToStud: PropTypes.func,
  changeProjectsArray: PropTypes.func,
  changeStudentsArray: PropTypes.func
};

export default SetupPage;
