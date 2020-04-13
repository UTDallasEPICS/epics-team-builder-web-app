import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table, CardDeck } from 'react-bootstrap';

/* eslint-disable react/prop-types */
function DisplayTeamCombinations(props) {
  const [seclectedCombo, SetSeclectedCombo] = React.useState({});
  const [checked, setChecked] = React.useState([]);

  const onSelectHandler = combo => {
    props.selectCombo(combo);
  };

  const showCombinations = teamCombos => (
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
                      <td>
                        <div className="text-danger font-weight-bolder">Combination {index + 1}</div>
                        <div>Avg Score Choice: {combo.avgScoreChoice.toFixed(2)}</div>
                        <div>Avg Score Class: {combo.avgScoreClass.toFixed(2)}</div>
                        <div>Skills Met Ratio: {combo.skillsMetRatio.toFixed(2)}</div>
                        {/* <div>Unassigned Return:  {combo.unassignedReturn}</div>
                                            <div>Unassigned Return:  {combo.unassignedReturn}</div> */}
                        <div>Unassigned Student(s): {combo.unassignedStudents.length}</div>
                      </td>
                      <td>
                        <div
                          onClick={() => onSelectHandler(combo)}
                          className="border p-2 shawdow bg-dark text-white mt-4 text-center"
                          style={{ cursor: 'pointer' }}
                        >
                          Select
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Card>
        </CardDeck>
        <div className='text-center mt-3'>
          <button onClick={props.regrenerateTeam} className='px-3 py-2 orange' style={{ borderRadius: '16px' }}>
            Regenerate Teams
          </button>
        </div>
      </div>
    </div>
  );

  return showCombinations(props.teamCombos);
}
/* eslint-enable react/prop-types */

DisplayTeamCombinations.propTypes = {
  selectCombination: PropTypes.func,
  teamCombos: PropTypes.object,
  onSeclectHandler: PropTypes.func,
  regrenerateTeam: PropTypes.func
};

export default DisplayTeamCombinations;
