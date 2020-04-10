/* eslint-disable react/prop-types */
import React from "react";
import { Card, Table, CardDeck } from "react-bootstrap";
import PropTypes from "prop-types";
import DisplayProjects from "./DisplayProjects";

const DisplayTeamInformations = (props) => {
  console.log("team info", props.mems);
  console.log("teamcombo", props.teamCombos);
  console.log("combo", props.combos);

  const onSeclectHandler = (team) => (
    <div className="pb-4">
      <div className="px-3 text-info">
        {/* <div> {team.project?  (<span>{team.project.name}</span>) :null}</div> */}
        Total Members:{" "}
        {team.members ? <span>{team.members.length}</span> : null}
      </div>
      <div className="teamcombination-wrapper p-3">
        <CardDeck className="tables-container">
          <Card className="table-card" border="dark">
            <Table striped bordered hover>
              {team.project ? (
                <tbody>
                  <div>
                    <div>
                      <div>{team.project.name}</div>
                      <div>Returning: {team.project.returning + ""}</div>
                      <hr />
                    </div>

                    <div>
                      <div>Skills</div>
                      {team.project.skills.map((skill, key) => (
                        <div>
                          {key + ": "}
                          {skill}
                        </div>
                      ))}
                    </div>

                    <hr />
                    <div>
                      {team.members.map((member, index) => (
                       <div>
                        
                       <div key={index}>
                            <div>Name: {member.name}</div>
                            <div>Id: {member.id}</div>
                            <div>Major: {member.major}</div>
                            <div>Year: {member.classification}</div>
                            <div>Gender: {member.gender}</div>
                            <div>Response: {"" + member.response}</div>
                            <div>Choice: {member.choice_num_awarded}</div>
                        </div>
                       
                        <hr/>
                        </div>
                      ))}
                    </div>
                  </div>
                </tbody>
              ) : null}
            </Table>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
  return <div>{onSeclectHandler(props.mems)}</div>;
};

DisplayProjects.propTypes = {
  selectMembers: PropTypes.func,
  teamCombos: PropTypes.object,
};

export default DisplayTeamInformations;
