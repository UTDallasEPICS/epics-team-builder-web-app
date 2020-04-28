import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table, CardDeck } from 'react-bootstrap';
import TeamComboRow from './TeamComboRow';
import { orderBy } from 'lodash';

/* eslint-disable react/prop-types */
function DisplayTeamCombinations({ teamCombos = [], selectCombo, regrenerateTeam, selectTeam, checked, loading }) {
  return (
    <div className='pb-4'>
      <div className='px-3 text-info'>Total Combinations: {teamCombos.length} </div>
      <div className='teamcombination-wrapper p-3'>
        <CardDeck className='tables-container'>
          <Card className='table-card' border='dark'>
            <Table striped bordered hover>
              <tbody>
                {orderBy(teamCombos, [...checked, 'coVarMembers'], 'asc').map((combo, index) => {
                  return (
                    <tr key={index}>
                      <TeamComboRow
                        selectCombination={selectCombo}
                        selectTeam={selectTeam}
                        combo={combo}
                        index={index}
                      />
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>
        </CardDeck>
        <div className='text-info'>
          Number of No Response Students: {teamCombos[0] ? teamCombos[0].noResponseStudents.length : null}
        </div>
        <div className='text-center' style={{ marginTop: '.5rem' }}>
          <button onClick={regrenerateTeam} className='px-3 py-2 orange' style={{ borderRadius: '16px' }}>
            Regenerate Teams
          </button>
        </div>
      </div>
    </div>
  );
}
/* eslint-enable react/prop-types */

DisplayTeamCombinations.propTypes = {
  selectCombo: PropTypes.func,
  selectTeam: PropTypes.func,
  teamCombos: PropTypes.array,
  regrenerateTeam: PropTypes.func,
  checked: PropTypes.array,
};

export default DisplayTeamCombinations;
