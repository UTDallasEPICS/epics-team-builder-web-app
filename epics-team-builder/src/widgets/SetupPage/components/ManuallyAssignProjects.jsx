import React from 'react';
import { Card, Table, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class ManuallyAssignProjects extends React.Component {
  

  addProjectToStudent(projects, students) {
    var currentProjectName = '';
    var checkedStudents = [];
    var mappedStudents = {
      
      projects: [{ projectID: '', studentIDs: [] }]
    };



    for (var j = 0; j < projects.length; j++) {
      var projectName = projects[j]['name'];

      if (document.getElementById(projectName).checked) {
        currentProjectName = projectName;
        mappedStudents.projects[j] = {};
        mappedStudents.projects[j]['projectID'] = currentProjectName;
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
        className = 'mx-auto'
        style={{
          height: '100%',
          width: '80%'
        }}
      >
        <CardDeck>
          <Card
            className = 'projectTable'
            border = 'dark'
            style={{
              height: '370px',
              width: '400px',
              margin: '20px auto',
              overflow: 'auto'
            }}
          >
            {this.props.projects.map((listValue, index) => {
              return (
                <li key={index} style ={{listStyleType:'none'}}>
                  <input
                    type='checkbox'
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
            className= 'studentTable'
          border="dark"
            style={{
              height: '370px',
              width: '90%',
              margin: '20px auto',
              overflow: 'auto'
            }}
          >
            <Table striped bordered hover>
              <thead
                style={{
                  display: 'table',
                  width: '100%',
                  tableLayout: 'fixed'
                }}
              >
                <tr>
                  <th style={{width:'15%'}}>Add</th>
                  <th>Name</th>
                  <th>NetID</th>
                </tr>
              </thead>
              <tbody
                
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
                      <td style = {{textAlign:'center', width:'15%'}}>
                        <input
                          type='checkbox'
                          className='studentBox'
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
            className='assign-students-button'
            onClick={() => this.addProjectToStudent(this.props.projects, this.props.students)}
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
