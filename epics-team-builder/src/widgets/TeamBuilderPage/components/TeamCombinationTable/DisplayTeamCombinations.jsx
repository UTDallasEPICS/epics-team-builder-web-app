import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table, CardDeck } from 'react-bootstrap';
import TeamComboRow from './TeamComboRow';

/* eslint-disable react/prop-types */
function DisplayTeamCombinations({ teamCombos, selectCombo, regrenerateTeam, selectTeam }) {
  return (
    <div className='pb-4'>
      <div className='px-3 text-info'>Total Combination: {teamCombos.length} </div>
      <div className='teamcombination-wrapper p-3'>
        <CardDeck className='tables-container'>
          <Card className='table-card' border='dark'>
            <Table striped bordered hover>
              <tbody>
                {teamCombos.map((combo, index) => {
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
        <div className='text-center mt-3'>
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
};

export default DisplayTeamCombinations;
