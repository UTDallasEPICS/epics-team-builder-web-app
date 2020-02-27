import React from 'react';
import { Card, Table, Button, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class ManuallyAssignProjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projectData: [{}],
      studentData: [{}]
    };
  }

  handleChangeProject(e) {
    const id = e.target.id;

    if (document.getElementById(id).checked) {
      console.log('ID: ' + id);
    }
  }

  handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;
    /* console.log(e.target.id) ;
    console.log(document.getElementById(id).checked) ; */
  };

  handleClickStudent(e) {
    const id = e.target.id;
    var checkedStatus = document.getElementById(id).checked;
    console.log(document.getElementById(id).checked);
    /*  console.log(tempstudentIdArray[1]) ; */
  }

  addProjectToStudent(projects, students) {
    var status = false;
    var currentProjectName = '';
    var checkedStudents = [];
    //var mappedStudents = {};
    var mappedStudents = {
      projects: [{ projectID: '', studentIDs: [] }]
    };

    for (var j = 0; j < projects.length; j++) {
      var projectName = projects[j]['name'];

      if (document.getElementById(projectName).checked) {
        currentProjectName = projectName;
        mappedStudents.projects[j] = {};
        mappedStudents.projects[j]["projectID"] = currentProjectName;
        console.log('current project name is' + currentProjectName);

        for (var i = 0; i < students.length; i++) {
          var currStudentID = students[i]['id'];

          if (document.getElementById(currStudentID).checked) {
            console.log(currStudentID + ' Student is checked');
            checkedStudents.push(currStudentID);
          }
        }

        for (var k = 0; k < checkedStudents.length; k++) {
          mappedStudents.projects[j][k] = '';
          mappedStudents.projects[j][k] = checkedStudents[k];
        }

        console.log(mappedStudents);
        this.props.assignProjToStud(mappedStudents);
      }
    }

    /* NOW MAP ALL THE CHECKED STUDENTS TO THE CURRENT PROJECT NAME HERE */
  }

  render() {
    console.log(this.props.students);
    console.log(this.props.projects);

    return (
      <div
        style={{
          height: '100%',
          width: '80%'
        }}
      >
        <CardDeck>
          <Card
            style={{
              height: '70%',
              width: '30%',
              margin: '20px auto',
              overflow: 'auto'
            }}
          >
            {this.props.projects.map((listValue, index) => {
              return (
                <li key={index}>
                  <input
                    type="checkbox"
                    onClick={this.handleChangeProject}
                    defaultChecked={false}
                    id={listValue.name}
                  />
                  {listValue.name}
                </li>
              );
            })}
          </Card>
          <Card
            style={{
              height: '70%',
              width: '50%',
              margin: '20px auto',
              overflow: 'auto'
            }}
          >
            <Table striped bordered hover>
              <thead
                style={{
                  display: 'table',
                  width: '400px',
                  tableLayout: 'fixed'
                }}
              >
                <tr style={{ display: 'table' }}>
                  <th>Add</th>
                  <th>Name</th>
                  <th>NetID</th>
                </tr>
              </thead>
              <tbody
                style={{
                  display: 'block',
                  overflow: 'auto',
                  height: '400px',
                  width: '50%'
                }}
              >
                {this.props.students.map((listValue, index) => {
                  return (
                    <tr
                      key={index}
                      style={{
                        display: 'table',
                        width: '100%',
                        tableLayout: 'fixed'
                      }}
                    >
                      <td>
                        <input
                          type="checkbox"
                          className="studentBox"
                          defaultChecked={false}
                          id={listValue.id}
                          onChange={this.handleChange}
                          onClick={this.handleClickStudent}
                        ></input>
                      </td>
                      <td>{listValue.name}</td>
                      <td>{listValue.id}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>
        </CardDeck>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="assign-students-button"
            onClick={() =>
              this.addProjectToStudent(this.props.projects, this.props.students)
            }
          >
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
  assignProjToStud: PropTypes.func
};
