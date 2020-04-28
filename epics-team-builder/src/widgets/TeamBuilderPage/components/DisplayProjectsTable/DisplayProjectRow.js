import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function DisplayProjectRow({ combo, selectTeam, teamName }) {
  const onSelectHandlerMembers = () => {
    selectTeam(combo.teams[teamName]);
  };

  return (
    <Fragment>
      <td>
        <div>{teamName}</div>
      </td>
      <td>
        <button onClick={onSelectHandlerMembers} className='dark-gray text-center' style={{ width: '8rem' }}>
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
