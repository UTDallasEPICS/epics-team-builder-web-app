import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function DisplayProjectRow({ combo, selectTeam, teamName }) {
  const onSelectHandlerMembers = () => {
    selectTeam(combo.teams[teamName]);
  };

  return (
    <Fragment>
      <td>
        <div className={Object.keys(combo.teams[teamName].members).length < 3 ? 'text-danger' : null}>{teamName}</div>
        <div className='text-danger small'>
          {Object.keys(combo.teams[teamName].members).length < 3 ? '*Minimum team size not met' : null}
        </div>
      </td>
      <td>
        <button onClick={onSelectHandlerMembers} style={{ width: '8rem' }} className='dark-gray text-center'>
          Select
        </button>
      </td>
    </Fragment>
  );
}

DisplayProjectRow.propTypes = {
  combo: PropTypes.object,
  selectTeam: PropTypes.func,
  teamName: PropTypes.string
};

export default DisplayProjectRow;
