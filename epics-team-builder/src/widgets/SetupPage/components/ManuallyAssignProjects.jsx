import React from 'react';
import { Card, Table, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class ManuallyAssignProjects extends React.Component {
  addProjectToStudent = () => {
    const { projects, students } = this.props;
    let projectByStudentId = {};

    var j = 0;

    //Get name of selected project
    let projectName = null;
    for (let project of projects) {
      if (document.getElementById(project.name).checked) {
        projectName = project.name;
        break;
      }
    }

    //Exit function if no projects were selected
    if (!projectName) {
      return;
    }
    document.getElementById(projectName).checked = false;

    //Map checked students to checked project
    for (var i = 0; i < students.length; i++) {
      var currStudentID = students[i]['id'];

      if (document.getElementById(currStudentID) && document.getElementById(currStudentID).checked) {
        document.getElementById(currStudentID).checked = false;
        projectByStudentId[currStudentID] = projectName;
      }
    }
    this.props.assignProjToStudents(projectByStudentId);
  };

  //Handle clicks on table row to effect associated checkbox
  onProjectClickHandler = name => {
    this.props.projects.forEach(project => {
      document.getElementById(project.name).checked = false;
    });
    document.getElementById(name).checked = !document.getElementById(name).checked;
  };

  onStudentClickHandler = id => {
    document.getElementById(id).checked = !document.getElementById(id).checked;
  };

  render() {
    const { students, projects, manuallyAssignedStudents } = this.props;
    return (
      <div className='manual-project-assignment'>
        <label className='title'>Manual Project Assignment</label>
        <CardDeck className='tables-container'>
          <Card className='table-card' border='dark'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th style={{ width: '15%' }}></th>
                  <th>Project Name</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => {
                  return (
                    <tr key={index} onClick={this.onProjectClickHandler.bind(this, project.name)}>
                      <td>
                        <input
                          type='checkbox'
                          onClick={this.onProjectClickHandler.bind(this, project.name)}
                          defaultChecked={false}
                          id={project.name}
                        />
                      </td>
                      <td>{project.name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>
          <Card className='table-card' border='dark'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th style={{ width: '15%' }}></th>
                  <th>Name</th>
                  <th>NetID</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => {
                  //If student has already been assigned, don't show them on table
                  for (let id in manuallyAssignedStudents) {
                    if (parseInt(id) === student.id) {
                      return null;
                    }
                  }
                  return (
                    <tr key={index} onClick={this.onStudentClickHandler.bind(this, student.id)}>
                      <td>
                        <input
                          type='checkbox'
                          className='studentBox'
                          defaultChecked={false}
                          id={student.id}
                          onClick={this.onStudentClickHandler.bind(this, student.id)}
                        />
                      </td>
                      <td>{student.name}</td>
                      <td>{student.id}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>
        </CardDeck>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className='green' style={{ width: '140px' }} onClick={this.addProjectToStudent}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

ManuallyAssignProjects.propTypes = {
  students: PropTypes.array,
  projects: PropTypes.array,
  manuallyAssignedStudents: PropTypes.object,
  assignProjToStudents: PropTypes.func
};
