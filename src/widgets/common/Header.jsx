import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header-container'>
        <div className='header'>
          <img src={require('./Epics.png')} alt={"EPIC's Logo"} />
        </div>
      </div>
    );
  }
}
