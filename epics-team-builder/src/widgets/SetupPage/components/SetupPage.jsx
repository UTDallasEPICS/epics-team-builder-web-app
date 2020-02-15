import React from 'react';
import Nouislider from 'react-nouislider';
import Header from '../../common/Header';
export default class SetupPage extends React.Component {
  render() {
    return (
      <div className="setup-page">
        <Header />
        <div className="setup-grid">
          {/* Make sure to put these divs in their respective components when made */}
          <div className="file-uploader">{/*Component goes here*/}</div>

          <div className="manual-project-assignment"></div>

          <div className="manually-assigned-students"></div>
        </div>

        <Nouislider
          range={{ min: 3, max: 10 }}
          start={[5]}
          pips={{ mode: 'count', values: 8 }}
          step={1}
          clickablePips
        />
      </div>
    );
  }
}
