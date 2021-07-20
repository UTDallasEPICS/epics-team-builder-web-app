/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Table, CardDeck } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DisplayTeamInformations = ({ team }) => {
  return (
    <div className='pb-4'>
      <div className='px-3 text-info'>
        {/* <div> {team.project?  (<span>{team.project.name}</span>) :null}</div> */}
        Total Members: {team.members ? <span>{team.members.length}</span> : null}
      </div>
      <div className='teamcombination-wrapper p-3'>
        <CardDeck className='tables-container'>
          <Card className='table-card' border='dark'>
            <Table striped bordered hover>
              {team.project ? (
                <tbody>
                  <tr className='team-classmate-row'>
                    <td>
                      <div className='text-danger font-weight-bolder'>Project Info: </div>
                      <div>{team.project.name}</div>
                      <div>Returning: {team.project.returning + ''}</div>
                      <div>Skills: </div>
                      <Col>
                        {team.project.skills.map((skill, key) => (
                          <div key={key}>
                            {key + 1 + ': '}
                            {skill}
                          </div>
                        ))}
                      </Col>
                    </td>
                  </tr>

                  {team.members.map((member, index) => (
                    <tr className='team-classmate-row' key={index}>
                      <td>
                        {!index ? <div className='text-danger font-weight-bolder'>Student Info: </div> : null}
                        <div>Name: {member.name}</div>
                        <div>Id: {member.id}</div>
                        <div>Major: {member.major}</div>
                        <div>Year: {member.classification}</div>
                        <div>Gender: {member.gender}</div>
                        <div>Response: {'' + member.response}</div>
                        <div>Choice: {member.choice_num_awarded}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              ) : null}
            </Table>
          </Card>
        </CardDeck>
      </div>
    </div>
  );
};

DisplayTeamInformations.propTypes = {
  team: PropTypes.object
};

export default DisplayTeamInformations;
