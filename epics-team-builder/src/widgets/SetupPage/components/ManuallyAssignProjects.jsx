import React from 'react';
import { Card, Table, Button, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class ManuallyAssignProjects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentIdArray: [
        {
          studentId: ' '
        }
      ],

      projectData: [{}],
      studentData: [{}]
    };
  }

  handleChangeProject(e) {
    var tempProject = '';
    const id = e.target.id;

    if (document.getElementById(id).checked) {
      tempProject = id;
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
    var tempstudentIdArray = [
      {
        studentId: ' '
      }
    ];

    const id = e.target.id;
    var checkedStatus = document.getElementById(id).checked;
    console.log(document.getElementById(id).checked);

    if (checkedStatus) {
      tempstudentIdArray.push(e.target.id);
    }

    /*  console.log(tempstudentIdArray[1]) ; */
  }

  addFunction(e) {
    console.log('First element in array is : ' + this.state.studentIdArray[1]);
  }

  render() {
    console.log(this.props.projects);
    console.log(this.props.students);

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
              <thead>
                <tr>
                  <th>Add</th>
                  <th>Name</th>
                  <th>NetID</th>
                </tr>
              </thead>
              <tbody>
                {this.props.students.map((listValue, index) => {
                  return (
                    <tr key={index}>
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
          <button className="assign-students-button" onClick={this.addFunction}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

ManuallyAssignProjects.propTypes = {
  students: PropTypes.array,
  projects: PropTypes.array
};
