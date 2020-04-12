/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import { Card, Table, CardDeck } from "react-bootstrap";
import PropTypes from "prop-types";

const DisplayProjects = (props) => {
  console.log("combo", props.combo);
  console.log("teamCombo", props.teamCombos);
  const { combo = {} } = props;

  const onSeclectHandlerMembers = (members) => {
    props.selectMember(members);
  };

  const onSeclectHandler = (teamCombos) => (
    <div className="pb-4">
      <div className="px-3 text-info">
        Total Projects:{" "}
        {teamCombos.teams ? (
          <span>{Object.keys(teamCombos.teams).length}</span>
        ) : null}
      </div>
      <div className="teamcombination-wrapper p-3">
        <CardDeck className="tables-container">
          <Card className="table-card" border="dark">
            <Table striped bordered hover>
              <tbody>
                {combo.teams
                  ? Object.keys(combo.teams).map((teamName, index) => (
                      <tr>
                        <td>
                          <div>{teamName}</div>
                        </td>
                        <td>
                          <div
                            onClick={() =>
                              onSeclectHandlerMembers(combo.teams[teamName])
                            }
                            className="border p-2 shawdow bg-dark text-white mt-4 text-center"
                            style={{ cursor: "pointer" }}
                          >
                            Select
                          </div>
                        </td>
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
          </Card>
        </CardDeck>
      </div>
      <div>
        <div className="text-center mt-3">
          <button
            onClick={props.exportBtn}
            className="px-3 py-2 orange"
            style={{ borderRadius: "16px" }}
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
  return <div>{onSeclectHandler(props.combo)}</div>;
};

DisplayProjects.propTypes = {
  selectProjects: PropTypes.func,
  teamCombos: PropTypes.object,
  onSeclectHandlerMembers: PropTypes.func,
};

export default DisplayProjects;
