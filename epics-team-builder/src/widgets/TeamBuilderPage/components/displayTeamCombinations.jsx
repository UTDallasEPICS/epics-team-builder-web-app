import React from 'react';

function DisplayTeamCombinations(props) {
    const [seclectedTeam, SetSeclectedTeam] = React.useState({});

    const showCombinations = (teamCombos) => (
        <div>
            {/* {teamCombos.map((combo, i) => (
                <div className="d-flex justify-content-between">
                    <div>Team combination {i + 1}</div>
                    <div>
                        <button
                            className="px-1 py-1 bg-warning small text-white">
                            Select
                         </button>
                    </div>
                </div>
            ))} */}
        </div>
    );

    return (
        <div>{showCombinations(props.teamCombos)}</div>
    )
}

export default DisplayTeamCombinations;