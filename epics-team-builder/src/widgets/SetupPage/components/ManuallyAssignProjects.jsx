import React from 'react';
import { Card, Table, Button, CardDeck } from 'react-bootstrap';

export default class ManuallyAssignProjects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectData: [
        {
          projectName: 'UTDesign EPICS TeamBuilder',
          check: false
        },
        {
          projectName: 'Hello World',
          check: false
        }
      ],
      studentData: [
        {
          firstName: 'Temoc',
          lastName: 'Comet',
          netID: 'tct000000'
        },
        {
          firstName: 'Enarc',
          lastName: 'Crane',
          netID: 'ece000000'
        },
        {
          firstName: 'Tobor',
          lastName: 'Robot',
          netID: 'trt000000'
        }
      ]
    };
  }

  addStudentToArray(lValue) {
    var studentArray = [
      {
        studentObj: []
      }
    ];
    /*
    var studentObj = {
      firstName: lValue.firstName,
      lastName: lValue.lastName,
      netID: lValue.netID
    };
    */

    studentArray.push(lValue);
    console.log(studentArray[0]);
  }

  onAddStudentClick = () => {};

  render() {
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
            {this.state.projectData.map((listValue, index) => {
                  return (
                    <li>
                      <input type="checkbox" defaultChecked="false"/>
                      {listValue.projectName}
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
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>NetID</th>
                </tr>
              </thead>
              <tbody>
                {this.state.studentData.map((listValue, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          name="studentBox"
                          value={index}
                          checked="unchecked"
                          onChange={this.addStudentToArray(listValue)}
                        ></input>
                      </td>
                      <td>{listValue.firstName}</td>
                      <td>{listValue.lastName}</td>
                      <td>{listValue.netID}</td>
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
            onClick={this.onAddStudentClick}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}
