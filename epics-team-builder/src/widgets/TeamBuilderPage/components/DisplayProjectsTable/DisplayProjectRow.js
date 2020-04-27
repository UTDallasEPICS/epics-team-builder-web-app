import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

function DisplayProjectRow({ combo, selectMember, teamName }) {
  const onSelectHandlerMembers = () => {
    selectMember(combo.teams[teamName]);
  };

  return (
    <Fragment>
      <td>
        <div>{teamName}</div>
      </td>
      <td>
        <div
          onClick={onSelectHandlerMembers}
          className='border p-2 shawdow bg-dark text-white mt-4 text-center'
          style={{ cursor: 'pointer' }}
        >
          Select
        </div>
      </td>
    </Fragment>
  );
}

DisplayProjectRow.propTypes = {
  combo: PropTypes.object,
  selectMember: PropTypes.func,
  teamName: PropTypes.string
};

export default DisplayProjectRow;
