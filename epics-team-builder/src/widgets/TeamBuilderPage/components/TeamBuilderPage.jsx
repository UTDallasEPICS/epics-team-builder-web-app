import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/Header';
import CheckBox from '../components/CheckBox';
import DisplayTeamCombinations from './displayTeamCombinations';
import { Row, Col, Spinner } from 'react-bootstrap';
function TeamBuilderPage(props) {
  const [loading, setLoading] = React.useState(false);
  const { students, projects, manuallyAssignedStudents, numOfPrefProjects, teamCombos } = props;

  const regrenerateTeam = () => {
    setLoading(true);
    let timeout = setTimeout(() => {
      setLoading(false);
      return clearTimeout(timeout);
    }, 1500);
    console.log(numOfPrefProjects);
    props.generateTeams({ students, projects, manuallyAssignedStudents, numOfPrefProjects });
  };

  const selectCombination = comboInformation => {
    props.selectCombination(comboInformation);
  };

  const renderTopSection = () => (
    <Row className='py-3'>
      <Col xs={12} md={2} className='p-md-4'>
        <button onClick={props.switchToSetup()} className='px-5 py-2 green'>
          Go Back
        </button>
      </Col>
      <Col xs={12} md={7} className=' text-center'>
        <div className='font-weight-bolder text-center py-2'>
          <h3>Attribute Importance</h3>
        </div>
        <div className='d-md-flex md-flex-row justify-content-center'>
          <CheckBox />
        </div>
      </Col>
    </Row>
  );

  const renderLoading = () => (
    <div style={{ height: '50vh' }} className='d-flex justify-content-center align-items-center'>
      <div>
        <Spinner animation='border' role='status' size='lg'></Spinner>
      </div>
    </div>
  );

  const renderTeamCombinations = () => (
    <div className='py-2' style={{ height: 'auto' }}>
      <div>
        <div className='font-weight-bolder text-center py-1'>
          <h4>Team Combinations</h4>
        </div>
        <div>
          <DisplayTeamCombinations teamCombos={teamCombos} selectCombination={selectCombination} regrenerateTeam={regrenerateTeam} />
        </div>
      </div>
    </div>
  );

  const renderViewTeam = () => (
    <div>
      <div className='font-weight-bolder text-center'>
        <h4>View Team</h4>
      </div>
      <div>{/* Make sure to put these divs in their respective components when made */}</div>
    </div>
  );

  const renderTeamInformation = () => (
    <div>
      <div className='font-weight-bolder text-center'>
        <h4>Team Information</h4>
      </div>
      <div>{/* Make sure to put these divs in their respective components when made */}</div>
    </div>
  );

  return (
    <div className='team-builder-page'>
      <Header />
      {renderTopSection()}
      <Row>
        <Col xs={12} md={4} className='bg-light'>
          {loading ? renderLoading() : renderTeamCombinations()}
        </Col>
        <Col xs={12} md={4} className='bg-success'>
          {renderViewTeam()}
        </Col>
        <Col xs={12} md={4} className='bg-info'>
          {renderTeamInformation()}
        </Col>
      </Row>
    </div>
  );
}

TeamBuilderPage.propTypes = {
  numOfPrefProjects: PropTypes.number,
  students: PropTypes.array,
  projects: PropTypes.array,
  switchToSetup: PropTypes.func,
  manuallyAssignedStudents: PropTypes.object,
  teamCombos: PropTypes.object,
  generateTeams: PropTypes.func,
  selectCombination: PropTypes.func
};

export default TeamBuilderPage;
