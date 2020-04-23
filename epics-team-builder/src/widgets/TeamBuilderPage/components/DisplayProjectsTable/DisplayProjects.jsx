/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Table, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DisplayProjectRow from './DisplayProjectRow';

const DisplayProjects = ({ combo = {}, selectTeam, exportBtn }) => {
  return (
    <div className='pb-4'>
      <div className='px-3 text-info'>
        Total Projects: {combo.teams ? <span>{Object.keys(combo.teams).length}</span> : null}
      </div>
      <div className='teamcombination-wrapper p-3'>
        <CardDeck className='tables-container'>
          <Card className='table-card' border='dark'>
            <Table striped bordered hover>
              <tbody>
                {combo.teams
                  ? Object.keys(combo.teams).map((teamName, index) => (
                      <tr key={index}>
                        <DisplayProjectRow combo={combo} selectTeam={selectTeam} teamName={teamName} />
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
          <button onClick={exportBtn} className='px-3 py-2 orange' style={{ borderRadius: '16px' }}>
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

DisplayProjects.propTypes = {
  selectTeam: PropTypes.func,
  exportBtn: PropTypes.func,
  combo: PropTypes.object,
};

export default DisplayProjects;
