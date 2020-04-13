/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Table, CardDeck } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DisplayProjects from './DisplayProjects';

const DisplayTeamInformations = props => {
  const onSeclectHandler = team => (
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
                  <div>
                    <div>
                      <Col>
                        <div className='text-danger font-weight-bolder'>Project Info: </div>
                        <div>{team.project.name}</div>
                        <div>Returning: {team.project.returning + ''}</div>
                        <div>Skills: </div>
                        <Col>
                          {team.project.skills.map((skill, key) => (
                            // eslint-disable-next-line react/jsx-key
                            <div>
                              {key + 1 + ': '}
                              {skill}
                            </div>
                          ))}
                        </Col>
                        <hr />
                      </Col>
                    </div>
                    <div>
                      <Col>
                        <div className='text-danger font-weight-bolder'>Student Info: </div>
                        {team.members.map((member, index) => (
                          // eslint-disable-next-line react/jsx-key
                          <div>
                            <div key={index}>
                              <div>Name: {member.name}</div>
                              <div>Id: {member.id}</div>
                              <div>Major: {member.major}</div>
                              <div>Year: {member.classification}</div>
                              <div>Gender: {member.gender}</div>
                              <div>Response: {'' + member.response}</div>
                              <div>Choice: {member.choice_num_awarded}</div>
                            </div>
                            <hr />
                          </div>
                        ))}
                      </Col>
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
  teamCombos: PropTypes.object
};

export default DisplayTeamInformations;
