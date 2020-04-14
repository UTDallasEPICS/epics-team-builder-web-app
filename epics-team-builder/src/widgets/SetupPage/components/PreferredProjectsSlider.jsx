import React, { useState } from 'react';
import Nouislider from 'react-nouislider';

function PreferredProjectsSlider({ numOfPrefProjects, onSlide }) {
  const [checked, setChecked] = useState(true);

  const switchChecked = () => {
    setChecked(!checked);
  };

  return (
    <div className='preferred-project-slider'>
      <h5>Number of Preferred Projects:</h5>
      <Nouislider
        range={{ min: 3, max: 10 }}
        start={[numOfPrefProjects]}
        pips={{ mode: 'steps', density: 16 }}
        step={1}
        onSlide={onSlide}
      />
      <div className='auto-checkbox-container'>
        <label>Auto Max</label>
        <input type='checkbox' className='checkbox' value={checked} onChange={switchChecked} />
      </div>
    </div>
  );
}

export default PreferredProjectsSlider;
