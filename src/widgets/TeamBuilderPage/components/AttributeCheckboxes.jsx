import React from 'react';
import PropTypes from 'prop-types';

const AttributeCheckboxes = ({ setChecked, checked }) => {
  const categories = [
    { value: 'avgScoreChoice', display_name: 'Project Preference' },
    { value: 'avgScoreClass', display_name: 'Classification' },
    { value: 'skillsMetRatio', display_name: 'Skill Match' }
  ];

  const handleToggle = c => () => {
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
    <div className='px-4 font-weight-bold attribute-checkboxes' key={i}>
      <div className='checkbox' onClick={handleToggle(c.value)}>
        <div className='checkbox-pos'>{checked.indexOf(c.value) === -1 ? null : checked.indexOf(c.value) + 1}</div>
      </div>
      {/* <input
        type='checkbox'
        className='form-check-input'
        onChange={handleToggle(c.value)}
        value={checked.indexOf(c.value === -1)}
      /> */}
      <label className='form-check-label ml-3'>{c.display_name}</label>
    </div>
  ));
};

AttributeCheckboxes.propTypes = {
  setChecked: PropTypes.func,
  checked: PropTypes.array
};

export default AttributeCheckboxes;
