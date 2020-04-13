import React from 'react';
import { Card, Table, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class MAS extends React.Component {
  constructor(props) {
    super(props);
  }

  delete(SL, OS) {
    var copy = Object.assign({}, OS);
    var inputElements = document.getElementsByClassName('messageCheckbox');
    for (var i = 0; inputElements[i]; ++i) {
      if (inputElements[i].checked) {
        delete copy[SL[inputElements[i].value].id];
        inputElements[i].checked = false;
      }
    }
    this.props.removeStudent(copy);
  }

  onClickHandler = index => {
    if (document.getElementById('checkbox' + index).checked == true) {
      document.getElementById('checkbox' + index).checked = false;
    } else {
      document.getElementById('checkbox' + index).checked = true;
    }
  };

  mapStudents(students, studentsAssigned) {
    var temp = [];
    for (var key of Object.keys(students)) {
      if (students[key].id in studentsAssigned) {
        temp.push(students[key]);
      }
    }
    return temp;
  }
  render() {
    let { manuallyAssignedStudents, students } = this.props;
    let studentLink = this.mapStudents(students, manuallyAssignedStudents);
    return (
      <div className='manual-project-assignment'>
        <label className='title'>Manually Assigned Students</label>
        <CardDeck className='tables-container'>
          <Card className='table-card' border='dark'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th style={{ width: '8%' }}></th>
                  <th style={{ width: '20%' }}>Name</th>
                  <th style={{ width: '20%' }}>NetID</th>
                  <th style={{ width: '42%' }}>Project Name</th>
                </tr>
              </thead>
              <tbody>
                {studentLink.map((listValue, index) => {
                  return (
                    <tr key={index} data-item={listValue} onClick={this.onClickHandler.bind(this, index)}>
                      <td style={{ textAlign: 'center' }}>
                        <input
                          id={'checkbox' + index}
                          className='messageCheckbox'
                          type='checkbox'
                          name='box'
                          value={index}
                          onClick={this.onClickHandler.bind(this, index)}
                        ></input>
                      </td>
                      <td>{listValue.name}</td>
                      <td>{listValue.id}</td>
                      <td>{manuallyAssignedStudents[listValue.id]}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>
        </CardDeck>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className='delete-button'
            type='submit'
            onClick={() => this.delete(studentLink, manuallyAssignedStudents)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

MAS.propTypes = {
  students: PropTypes.array,
  manuallyAssignedStudents: PropTypes.object,
  changeStudentsArray: PropTypes.func,
  removeStudent: PropTypes.func
};
