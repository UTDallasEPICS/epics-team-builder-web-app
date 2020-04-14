import React, { useState } from 'react';
const Checkbox = () => {
  const categories = [
    { value: 'classification', display_name: 'Classification' },
    { value: 'projectPreferrence', display_name: 'Project Preference' },
    { value: 'skillmatch', display_name: 'Skill Match' }
  ];
  const [checked, setChecked] = useState([]);

  const handleToggle = c => () => {
    const currentCategoryName = checked.indexOf(c);
    const newCheckedCategory = [...checked];
    if (currentCategoryName === -1) {
      newCheckedCategory.push(c);
    } else {
      newCheckedCategory.splice(currentCategoryName, 1);
    }
    console.log(newCheckedCategory);
    setChecked(newCheckedCategory);
  };

  return categories.map((c, i) => (
    <div className='px-4 font-weight-bold' key={i}>
      <input
        type='checkbox'
        className='form-check-input'
        onChange={handleToggle(c.value)}
        value={checked.indexOf(c.value === -1)}
      />
      <label className='form-check-label ml-3'>{c.display_name}</label>
    </div>
  ));
};

export default Checkbox;
