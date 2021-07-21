/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Table, CardDeck } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

const DisplayUnassignedStudents = ({ students }) => {
  console.log(students)
  return (
    <div className='pb-4'>
    <div className='px-3 text-info'>
      {/* <div> {team.project?  (<span>{team.project.name}</span>) :null}</div> */}
      Total Unassigned Students: {students ? <span>{students.length}</span> : null}
    </div>
      <div className='teamcombination-wrapper p-3'>
        <CardDeck className='tables-container'>
          <Card className='table-card' border='dark'>
            <Table striped bordered hover>
              {students ? (
                <tbody>
                  {students.map((member, index) => (
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

DisplayUnassignedStudents.propTypes = {
  team: PropTypes.object
};

export default DisplayUnassignedStudents;
