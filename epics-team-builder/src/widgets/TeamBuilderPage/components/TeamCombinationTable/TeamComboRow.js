import React from 'react';
import PropTypes from 'prop-types';

function TeamComboRow({ combo, index, selectCombination, selectTeam }) {
  const onSelectHandler = () => {
    selectCombination(combo);
    selectTeam({});
  };

  return (
    <React.Fragment>
      <td>
        <div className='text-danger font-weight-bolder'>Combination {index + 1}</div>
        <div>Avg Project Preference Choice: {combo.avgScoreChoice.toFixed(3)}</div>
        <div>Classification Weight: {combo.avgScoreClass.toFixed(3)}</div>
        <div>Percent of Skills Matched: {combo.skillsMetRatio.toFixed(3)}</div>
        <div>Members Per Team Weight: {combo.coVarMembers.toFixed(3)}</div>
        {/* <div>Unassigned Return:  {combo.unassignedReturn}</div>
                                            <div>Unassigned Return:  {combo.unassignedReturn}</div> */}
        <div>Unassigned Student(s): {combo.unassignedStudents.length}</div>
      </td>
      <td>
        <button onClick={onSelectHandler} className='dark-gray text-center' style={{ width: '8rem' }}>
          Select
        </button>
      </td>
    </React.Fragment>
  );
}

TeamComboRow.propTypes = {
  combo: PropTypes.object,
  index: PropTypes.number,
  selectCombination: PropTypes.func,
  selectTeam: PropTypes.func
};

export default TeamComboRow;
