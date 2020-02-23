import React from 'react';
import { Card, Table, Button, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';


export default class ManuallyAssignProjects extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {

      studentIdArray: [{
        studentId : ' '
      }] ,

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
      list: [
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

  handlChangeProject(e) {
  var tempProject = "" ;
  const id = e.target.id ;
  
  if(document.getElementById(id).checked){
    tempProject = id ;
    console.log("ID: " + id) ;
  }

  }


  handleChange = e => {
    const id = e.target.id;
    const value = e.target.value;
   /* console.log(e.target.id) ;
    console.log(document.getElementById(id).checked) ; */

  };

  handleClickStudent(e) {

    var tempstudentIdArray = [{
      studentId : ' '
    }] ;

    const id = e.target.id ; 
    var checkedStatus = document.getElementById(id).checked ;
    console.log(document.getElementById(id).checked) ;

    if(checkedStatus){
      tempstudentIdArray.push(e.target.id) ;
    }

   /*  console.log(tempstudentIdArray[1]) ; */

  }

  addFunction(e){
    console.log("First element in array is : " + this.state.studentIdArray[1]) ;
  }

  render() {
    console.log(this.props.projects) ;
    console.log(this.props.students) ;
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
                <li key={index}>
                  <input
                    type="checkbox"
                    onClick={this.handlChangeProject}
                    defaultChecked={false}
                    id = {listValue.projectName}
                  />
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
                {this.state.list.map((listValue, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        <input
                          type="checkbox"
                          className="studentBox"
                          defaultChecked = {false}
                          id = {listValue.netID}
                          onChange = {this.handleChange}
                          onClick = {this.handleClickStudent}
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
            onClick={this.addFunction}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

ManuallyAssignProjects.propTypes = {
  students:PropTypes.array, 
  projects:PropTypes.array, 
}
