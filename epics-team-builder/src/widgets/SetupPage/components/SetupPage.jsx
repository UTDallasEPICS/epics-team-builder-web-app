import React from 'react';
import Header from '../../common/Header';
import ExcelReader from './ExcelReader';
export default class SetupPage extends React.Component {
  render() {
    return (
      <div className="setup-page">
        <Header />
        <div className="setup-grid">
          {/* Make sure to put these divs in their respective components when made */}
          <div className="file-uploader">
            {/*Component goes here*/}
            <ExcelReader/>
          </div>
          <div className="manual-project-assignment"></div>
          <div className="manually-assigned-students"></div>
        </div>
      </div>
    );
  }
}
