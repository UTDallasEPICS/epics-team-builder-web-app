import React from 'react';
import PropTypes from 'prop-types';

function TeamSettings({ maxTeamSize, setMaxTeamSize }) {

  const updateTeamSize = (a) => {
    setMaxTeamSize(Number(a.target.value))
  }

  return (
    <div className='preferred-project-slider'>
      <div className='auto-checkbox-container'>
        <div className="team-size-input">
          <p>Max Team Size: </p>
          <input type="number" value={maxTeamSize} onChange={updateTeamSize}></input>
        </div>
      </div>
    </div>
  );
}

TeamSettings.propTypes = {
  numOfPrefProjects: PropTypes.number,
  maxPossibleChoices: PropTypes.number,
  changeNumOfPreferredProjects: PropTypes.func,
  maxTeamSize: PropTypes.number,
  setMaxTeamSize: PropTypes.func
};
export default TeamSettings;
