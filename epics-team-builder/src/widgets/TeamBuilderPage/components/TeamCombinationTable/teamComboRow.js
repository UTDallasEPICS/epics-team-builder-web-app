import React from 'react';
import PropTypes from 'prop-types';

function teamComboRow({ combo, selectCombination }) {
  const onSelectHandler = combo => {
    selectCombination(combo);
  };
  return (
    <React.Fragment>
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
        <button onClick={onSelectHandler} className="dark-gray text-center" style={{ width: '8rem' }}>
          Select
        </button>
      </td>
    </React.Fragment>
  );
}

teamComboRow.propTypes = {
  combo: PropTypes.object,
  selectCombination: PropTypes.func
};

export default teamComboRow;
