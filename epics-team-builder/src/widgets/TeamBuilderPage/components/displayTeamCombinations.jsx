import React from 'react';
import { Card, Table, CardDeck } from 'react-bootstrap';

function DisplayTeamCombinations(props) {
    const [seclectedCombo, SetSeclectedCombo] = React.useState({});
    const [checked, setChecked] = React.useState([]);

    const onSeclectHandler = (combo) => {
        console.log(combo);
        props.selectCombination(combo);
        
    };

    const showCombinations = (teamCombos) => (
        <div>
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
                                            <div>Skills Met Ratio:  {combo.skillsMetRatio.toFixed(2)}</div>
                                            {/* <div>Unassigned Return:  {combo.unassignedReturn}</div>
                                            <div>Unassigned Return:  {combo.unassignedReturn}</div> */}
                                            <div>Unassigned Student(s):  {combo.unassignedStudents.length}</div>
                                        </td>
                                        <td>
                                            <div
                                                onClick={() => onSeclectHandler(combo)}
                                                className="border p-2 shawdow bg-dark text-white mt-4 text-center"
                                                style={{ cursor: 'pointer' }}>Select</div>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </Card>
            </CardDeck>
        </div>
    );

    return (
        <div>{showCombinations(props.teamCombos)}</div>
    )
}

export default DisplayTeamCombinations;