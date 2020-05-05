import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../common/Header';
import AttributeCheckboxes from './AttributeCheckboxes';
import DisplayTeamCombinations from './TeamCombinationTable/DisplayTeamCombinations';
import { Row, Col } from 'react-bootstrap';
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
      showTooltip: false
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

  setCombo = combo => {
    this.setState({ combo });
  };

  setTeam = team => {
    this.setState({ team });
  };

  setChecked = checked => {
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

  selectCombo = comboInformation => {
    this.props.selectCombination(comboInformation);
  };

  exportBtn = () => {
    alert('Does not work!!');
  };

  switchTooltipText = e => {
    e.stopPropagation();
    this.setState({ showTooltip: !this.state.showTooltip });
  };

  hideTooltipText = () => {
    this.setState({ showTooltip: false });
  };

  renderTopSection = () => (
    <div className='team-builder-header-options'>
      <button onClick={this.props.switchToSetup} className='px-3 py-2 back-button green'>
        Go Back
      </button>
      <div className='team-builder-attributes'>
        <div className='font-weight-bolder py-2' style={{ display: 'inline-block' }}>
          <h3 className='attribute-header'>Attribute Importance</h3>
          <div className='attribute-tooltip' onClick={this.switchTooltipText}>
            <div className='tooltip-question-mark'>?</div>
            {!this.state.showTooltip ? null : (
              <div className='tooltip-textbox'>
                Numbers that appear in checkboxes displays the order in which the table is sorted by.
                <br />
                <b>Avg Project Preference Choice</b>: The average project choice a student is given.
                <br />
                <b>Classification Weight</b>: Considers spread of student classification per team. The closer to 0 the
                better.
                <br />
                <b>Percent of Skills Matched</b>: The percentage of skills matched by the students in all the teams. (A
                team skill is matched if at least one student on the team matches it)
                <br />
                <b>Members Per Team Weight</b>: Considers spread of students across teams. The closer to 0, the better.
                Always sorted by this value since filling out teams is always the most important.
              </div>
            )}
          </div>
        </div>
        <div className='d-md-flex md-flex-row justify-content-center'>
          <AttributeCheckboxes setChecked={this.setChecked} checked={this.state.checked} />
        </div>
      </div>
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
          loading={this.state.loading}
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
      <div className='team-builder-page' onClick={this.hideTooltipText}>
        <Header />
        {this.renderTopSection()}
        <Row>
          <Col xs={12} md={4} className='bg-light'>
            {this.renderTeamCombinations()}
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
  selectMembers: PropTypes.func
};

export default TeamBuilderPage;
