import React from 'react';
import { Card, Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class ManuallyAssignedStudents extends React.Component {
  constructor(props) {
    super(props);
  }

  delete(S, sO) {
    var checkedValue = [];
    var inputElements = document.getElementsByClassName('messageCheckbox');
    for (var i = 0; inputElements[i]; ++i) {
      if (inputElements[i].checked) {
        checkedValue.push(inputElements[i].value);
      }
    }
    console.log(checkedValue);
    checkedValue.sort(function(a, b) {
      return a - b;
    });

    for (var j = checkedValue.length - 1; j >= 0; j--) {
      let temp = sO[checkedValue[j]].keylocation;
      S.splice(temp, 1);
    }

    console.log(S);

    if (S != null) {
      this.props.changeStudentsArray(S);
    }
  }

  onClickHandler = index => {
    if (document.getElementById('checkbox' + index).checked == true) {
      document.getElementById('checkbox' + index).checked = false;
    } else {
      document.getElementById('checkbox' + index).checked = true;
    }
  };

  render() {
    let { students } = this.props;
    var studentsOrder = students.slice();
    for (var key of Object.keys(studentsOrder)) {
      studentsOrder[key].keylocation = parseInt(key);
    }

    studentsOrder = studentsOrder.sort(function(a, b) {
      return a.name.localeCompare(b.name);
    });

    return (
      <div style={{ height: '100%', width: '100%' }}>
        <label className='title'>Manually Assigned Students</label>

        <Card
          border='dark'
          style={{
            height: '400px',
            width: '80%',
            margin: '20px auto',
            overflow: 'auto',
            textAlign: 'left'
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>NetID</th>
                <th>Gender</th>
              </tr>
            </thead>
            <tbody>
              {studentsOrder.map((listValue, index) => {
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
                    <td>{listValue.gender}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button className='delete-button' type='submit' onClick={() => this.delete(students, studentsOrder)}>
            Delete{' '}
          </button>
        </div>
      </div>
    );
  }
}

ManuallyAssignedStudents.propTypes = {
  students: PropTypes.array,
  changeStudentsArray: PropTypes.func
};
