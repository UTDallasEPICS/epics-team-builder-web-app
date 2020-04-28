import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/Header';
import AttributeCheckboxes from './AttributeCheckboxes';
import DisplayTeamCombinations from './TeamCombinationTable/DisplayTeamCombinations';
import { Row, Col, Spinner } from 'react-bootstrap';
import DisplayProjects from './DisplayProjectsTable/DisplayProjects';
import DisplayTeamInformations from './DisplayTeamInformations';
//npm startimport * as FileSaver from 'file-saver';
//import * as XLSX from 'xlsx';

class TeamBuilderPage extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      combo: {},
      team: {},
      checked: [],
    };
  }

  componentDidMount() {
    this.waitToGenerateTeams();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.teamCombos !== prevProps.teamCombos || prevState.checked !== this.state.checked) {
      this.setState({ loading: false });
    }
  }

  setCombo = (combo) => {
    this.setState({ combo });
  };

  setTeam = (team) => {
    this.setState({ team });
  };

  setChecked = (checked) => {
    this.setState({ loading: true }, () => {
      setTimeout(() => {
        this.setState({ checked });
      }, 100);
    });
  };

  waitToGenerateTeams() {
    //Let component fully render before dispatching
    setTimeout(() => {
      const { students, projects, manuallyAssignedStudents, numOfPrefProjects, generateTeams } = this.props;
      generateTeams({ students, projects, manuallyAssignedStudents, numOfPrefProjects });
    }, 100);
  }

  regrenerateTeam = () => {
    this.setState({ loading: true, combo: {}, team: {} });
    this.waitToGenerateTeams();
  };

  selectCombo = (comboInformation) => {
    this.props.selectCombination(comboInformation);
  };

  exportBtn = () => {
    alert('Does not work!!');
  };

  renderTopSection = () => (
    <div className='team-builder-header-options'>
      <button onClick={this.props.switchToSetup} className='px-3 py-2 back-button green'>
        Go Back
      </button>
      <div className='team-builder-attributes'>
        <div className='font-weight-bolder py-2'>
          <h3>Attribute Importance</h3>
        </div>
        <div className='d-md-flex md-flex-row justify-content-center'>
          <AttributeCheckboxes setChecked={this.setChecked} checked={this.state.checked} />
        </div>
      </div>
    </div>
  );

  renderLoading = () => (
    <div style={{ height: '50vh' }} className='d-flex justify-content-center align-items-center'>
      <Spinner animation='border' role='status' size='lg'></Spinner>
    </div>
  );

  renderTeamCombinations = () => {
    const { teamCombos } = this.props;
    return (
      <div className='team-combo-view'>
        <div className='font-weight-bolder text-center'>
          <h4>Team Combinations</h4>
        </div>
        <DisplayTeamCombinations
          teamCombos={teamCombos}
          selectCombination={this.selectCombo}
          selectCombo={this.setCombo}
          selectTeam={this.setTeam}
          regrenerateTeam={this.regrenerateTeam}
          checked={this.state.checked}
        />
      </div>
    );
  };

  renderViewProjects = () => (
    // <div className='py-2' style={{ height: 'auto' }}>
    <div className='team-combo-view'>
      <div className='font-weight-bolder text-center '>
        <h4>View Projects</h4>
      </div>
      <DisplayProjects combo={this.state.combo} selectTeam={this.setTeam} exportBtn={this.exportBtn} />
    </div>
  );

  renderTeamInformations = () => (
    // <div className='py-2' style={{ height: 'auto' }}>
    <div className='team-combo-view'>
      <div className='font-weight-bolder text-center'>
        <h4>Team Informations</h4>
      </div>
      <DisplayTeamInformations team={this.state.team} />
    </div>
  );

  render() {
    return (
      <div className='team-builder-page'>
        <Header />
        {this.renderTopSection()}
        <Row>
          <Col xs={12} md={4} className='bg-light'>
            {this.state.loading ? this.renderLoading() : this.renderTeamCombinations()}
          </Col>
          <Col xs={12} md={4} className='bg-light'>
            {this.renderViewProjects()}
          </Col>
          <Col xs={12} md={4} className='bg-light'>
            {this.renderTeamInformations()}
          </Col>
        </Row>
      </div>
    );
  }
}

TeamBuilderPage.propTypes = {
  numOfPrefProjects: PropTypes.number,
  students: PropTypes.array,
  projects: PropTypes.array,
  switchToSetup: PropTypes.func,
  manuallyAssignedStudents: PropTypes.object,
  teamCombos: PropTypes.array,
  generateTeams: PropTypes.func,
  selectCombination: PropTypes.func,
  selectProjects: PropTypes.func,
  selectMembers: PropTypes.func,
};

export default TeamBuilderPage;
