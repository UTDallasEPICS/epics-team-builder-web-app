import React from 'react';
import PropTypes from 'prop-types';
import Nouislider from 'react-nouislider';
import Header from '../../common/Header';
import MAS from './ManuallyAssignedStudents';

class SetupPage extends React.Component {
  //Store current value of slider when changed
  onSlide = (render, handle, value) => {
    this.props.changeNumOfPreferredProjects(value[0]);
  };

  render() {
    const { numOfPreferredProjects } = this.props;

    return (
      <div className="setup-page">
        <Header />
        <div className="setup-grid">
          {/* Make sure to put these divs in their respective components when made */}
          <div className="file-uploader">{/*Component goes here*/}</div>

          <div className="manual-project-assignment"></div>

          <div className="manually-assigned-students">
            <MAS/>
          </div>
        </div>
        <div className="preferred-project-slider">
          <h3>Number of Preferred Projects:</h3>
          <Nouislider
            range={{ min: 3, max: 10 }}
            start={[numOfPreferredProjects]}
            pips={{ mode: 'steps', density: 16 }}
            step={1}
            onSlide={this.onSlide}
          />
        </div>
      </div>
    );
  }
}

SetupPage.defaultProps = {
  numOfPreferredProjects: 5
};

SetupPage.propTypes = {
  numOfPreferredProjects: PropTypes.number,
  changeNumOfPreferredProjects: PropTypes.func
};

export default SetupPage;
