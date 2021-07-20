import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Nouislider from 'react-nouislider';

function TeamSettings({ numOfPrefProjects, maxPossibleChoices, changeNumOfPreferredProjects, maxTeamSize, setMaxTeamSize }) {
  const [checked, setChecked] = useState(true);
  const sliderRef = React.createRef();
  
  const switchChecked = () => {
    if (!checked) {
      changeNumOfPreferredProjects(maxPossibleChoices);
    }
    setChecked(!checked);
  };

  const moveSlider = (render, handle, value) => {
    setChecked(false);
    changeNumOfPreferredProjects(value[0]);
  };

  const updateTeamSize = (a) => {
    setMaxTeamSize(Number(a.target.value))
  }

  return (
    <div className='preferred-project-slider'>
      {/* <h5>Number of Preferred Projects:</h5>
      <Nouislider
        instanceRef={sliderRef}
        range={{ min: 1, max: maxPossibleChoices ? maxPossibleChoices : 2 }}
        start={[numOfPrefProjects]}
        pips={{ mode: 'steps', density: 16 }}
        step={1}
        onSlide={moveSlider}
        disabled={maxPossibleChoices ? false : true}
      /> */}
      <div className='auto-checkbox-container'>
        {/* <label>Auto Max</label>
        <input
          type='checkbox'
          className='checkbox'
          onChange={switchChecked}
          checked={checked}
          disabled={maxPossibleChoices ? false : true}
        /> */}
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
