import React from "react";
import { Card, Table } from "react-bootstrap";

export default class ManuallyAssignedStudents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { firstName: "luis", lastName: "flores", userName: "dfasd" },
        {
          firstName: "John",
          lastName: "Reno",
          userName: "oowsd"
        },
        {
          firstName: "Jhon",
          lastName: "Phillip",
          userName: "plsk"
        },
        {
          firstName: "Jhon",
          lastName: "Phillip",
          userName: "plsk"
        }, {
          firstName: "Jhon",
          lastName: "Phillip",
          userName: "plsk"
        }, {
          firstName: "Jhon",
          lastName: "Phillip",
          userName: "plsk"
        }, {
          firstName: "Jhon",
          lastName: "Phillip",
          userName: "plsk"
        }, {
          firstName: "Jhon",
          lastName: "Phillip",
          userName: "plsk"
        }, {
          firstName: "Jhon",
          lastName: "Phillip",
          userName: "plsk"
        }
      ]
    };
  }
  delete() {
    var checkedValue = [];
    var inputElements = document.getElementsByClassName("messageCheckbox");
    for (var i = 0; inputElements[i]; ++i) {
      if (inputElements[i].checked) {
        checkedValue.push(inputElements[i].value);
      }
    }
    console.log(checkedValue);
  }

  onClickHandler = index => {
    if (document.getElementById("checkbox" + index).checked == true) {
      document.getElementById("checkbox" + index).checked = false;
    } else {
      document.getElementById("checkbox" + index).checked = true;
    }
  };

  render() {
    return (
      <div style={{ height: "100%", width: "100%" }}>
        <Card
          border="dark"
          style={{
            height: "370px",
            width: "80%",
            margin: "20px auto",
            overflow: "auto"
          }}
        >
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((listValue, index) => {
                return (
                  <tr
                    key={index}
                    data-item={listValue}
                    onClick={this.onClickHandler.bind(this, index)}
                  >
                    <td style={{ textAlign: "center" }}>
                      <input
                        id={"checkbox" + index}
                        className="messageCheckbox"
                        type="checkbox"
                        name="box"
                        value={index}
                        onClick={this.onClickHandler.bind(this, index)}
                      ></input>
                    </td>
                    <td>{listValue.firstName}</td>
                    <td>{listValue.lastName}</td>
                    <td>{listValue.userName}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Card>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button className="delete-button" onClick={this.delete}>
            Delete{" "}
          </button>
        </div>
      </div>
    );
  }
}
