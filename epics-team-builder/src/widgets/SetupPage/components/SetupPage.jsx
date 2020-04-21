import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/Header';
import MAS from './ManuallyAssignedStudents';
import ManuallyAssignProjects from './ManuallyAssignProjects';
import ExcelReader from './ExcelReader';
import PreferredProjectsSlider from './PreferredProjectsSlider';

class SetupPage extends React.Component {
  generateTeams = () => {
    const { students, projects, manuallyAssignedStudents, numOfPrefProjects } = this.props;
    this.props.switchToTeamBuilder();
    this.props.generateTeams({
      students,
      projects,
      manuallyAssignedStudents,
      numOfPrefProjects,
    });
  };

  render() {
    const {
      numOfPrefProjects,
      students,
      projects,
      assignProjToStudents,
      changeStudentsArray,
      changeProjectsArray,
      manuallyAssignedStudents,
      removeStudent,
      setMaxPossibleChoices,
      maxPossibleChoices,
      changeNumOfPreferredProjects,
    } = this.props;

    return (
      <div className="setup-page">
        <Header />
        <div className="setup-grid">
          <ExcelReader
            changeStudentsArray={changeStudentsArray}
            changeProjectsArray={changeProjectsArray}
            setMaxPossibleChoices={setMaxPossibleChoices}
            maxPossibleChoices={maxPossibleChoices}
          />

          <ManuallyAssignProjects
            students={students}
            projects={projects}
            assignProjToStudents={assignProjToStudents}
            changeStudentsArray={changeStudentsArray}
            manuallyAssignedStudents={manuallyAssignedStudents}
          />
          <div className="manually-assigned-students">
            <MAS
              students={students}
              manuallyAssignedStudents={manuallyAssignedStudents}
              removeStudent={removeStudent}
            />
          </div>
        </div>
        <PreferredProjectsSlider
          numOfPrefProjects={numOfPrefProjects}
          onSlide={this.onSlide}
          maxPossibleChoices={maxPossibleChoices}
          changeNumOfPreferredProjects={changeNumOfPreferredProjects}
        />
        <button
          className="orange generate-teams-btn"
          onClick={this.generateTeams}
          disabled={students.length === 0 || projects.length === 0}
        >
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
  manuallyAssignedStudents: {},
};

SetupPage.propTypes = {
  changeNumOfPreferredProjects: PropTypes.func,
  students: PropTypes.array,
  projects: PropTypes.array,
  assignProjToStudents: PropTypes.func,
  changeProjectsArray: PropTypes.func,
  changeStudentsArray: PropTypes.func,
  switchToTeamBuilder: PropTypes.func,
  setMaxPossibleChoices: PropTypes.func,
  manuallyAssignedStudents: PropTypes.object,
  generateTeams: PropTypes.func,
  removeStudent: PropTypes.func,
  numOfPrefProjects: PropTypes.number,
  maxPossibleChoices: PropTypes.number,
};

export default SetupPage;
