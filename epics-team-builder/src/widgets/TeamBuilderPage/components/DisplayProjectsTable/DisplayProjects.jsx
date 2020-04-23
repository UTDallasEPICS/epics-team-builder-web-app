/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Table, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DisplayProjectRow from './DisplayProjectRow';

const DisplayProjects = props => {
  const { combo = {} } = props;

  const onSelectHandlerMembers = members => {
    props.selectMember(members);
  };

  const onSeclectHandler = teamCombos => (
    <div className='pb-4'>
      <div className='px-3 text-info'>
        Total Projects: {teamCombos.teams ? <span>{Object.keys(teamCombos.teams).length}</span> : null}
      </div>
      <div className='teamcombination-wrapper p-3'>
        <CardDeck className='tables-container'>
          <Card className='table-card' border='dark'>
            <Table striped bordered hover>
              <tbody>
                {combo.teams
                  ? Object.keys(combo.teams).map((teamName, index) => (
                      <tr key={index}>
                        <DisplayProjectRow combo={combo} selectMember={props.selectMember} teamName={teamName} />
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
          </Card>
        </CardDeck>
      </div>
      <div>
        <div className='text-center mt-3'>
          <button onClick={props.exportBtn} className='px-3 py-2 orange' style={{ borderRadius: '16px' }}>
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
  teamCombos: PropTypes.array,
  onSeclectHandlerMembers: PropTypes.func
};

export default DisplayProjects;
