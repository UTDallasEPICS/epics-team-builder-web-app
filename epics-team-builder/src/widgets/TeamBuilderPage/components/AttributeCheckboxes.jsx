import React, { useState } from 'react';

const AttributeCheckboxes = () => {
  const categories = [
    { value: 'projectPreferrence', display_name: 'Project Preference' },
    { value: 'classification', display_name: 'Classification' },
    { value: 'skillmatch', display_name: 'Skill Match' },
  ];
  const [checked, setChecked] = useState([]);

  const handleToggle = (c) => () => {
    const currentCategoryName = checked.indexOf(c);
    const newCheckedCategory = [...checked];
    if (currentCategoryName === -1) {
      newCheckedCategory.push(c);
    } else {
      newCheckedCategory.splice(currentCategoryName, 1);
    }
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

export default AttributeCheckboxes;
