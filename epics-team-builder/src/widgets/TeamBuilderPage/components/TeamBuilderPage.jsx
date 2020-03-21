<<<<<<< HEAD
import React, {userState, useEffect} from 'react';
import Header from '../../common/Header';
import CheckBox from '../components/CheckBox';

const TeamBuilderPage = (props) => {
=======
import React, { userState, useEffect } from "react";
import Header from "../../common/Header";
import CheckBox from "../components/CheckBox";
import DisplayTeamCombinations from "./displayTeamCombinations";

function TeamBuilderPage(props){
  const { students, projects, manuallyAssignedStudents, numOfPrefProjects,teamCombos} = props;

  const regrenerateTeam = () => {
    props.generateTeams({students, projects, manuallyAssignedStudents, numOfPrefProjects })
  };
>>>>>>> team-combinations-column

  const renderTopSection = () => (
    <div className="row py-3">
      <div className="col-12 col-md-2 p-md-4">
<<<<<<< HEAD
        <button className="px-5 py-2 bg-success text-white">Go Back</button>
=======
        <button
          onClick={props.switchToSetup()}
          className="px-5 py-2 bg-success text-white"
        >
          Go Back
        </button>
>>>>>>> team-combinations-column
      </div>
      <div className="col-12 col-md-7 text-center">
        <div className="font-weight-bolder text-center py-2">
          <h3>Attribute Importance</h3>
        </div>
        <div className="d-md-flex md-flex-row justify-content-center">
          <CheckBox />
        </div>
      </div>
    </div>
  );

  const renderTeamCombinations = () => (
    <div className="col-12 col-md-4 bg-warning">
<<<<<<< HEAD
      <div className="py-2" style={{ height: '60vh' }}>
=======
      <div className="py-2" style={{ height: "auto" }}>
>>>>>>> team-combinations-column
        <div>
          <div className="font-weight-bolder text-center">
            <h4>Team Combinations</h4>
          </div>
<<<<<<< HEAD
          <div className="w-75 mx-auto">
               dsdsadsadsad
          </div>
          <div className="text-center">
            <button className="px-3 py-2 bg-success text-white">Regenerate Teams</button>
=======
          <div className="teamcombination-wrapper w-75 mx-auto">
            <DisplayTeamCombinations teamCombos = {teamCombos} />
          </div>
          <div className="text-center">
            <button 
            onClick={regrenerateTeam}
            className="px-3 py-2 bg-success text-white">
              Regenerate Teams
            </button>
>>>>>>> team-combinations-column
          </div>
        </div>
      </div>
    </div>
  );

  const renderViewTeam = () => (
    <div className="col-12 col-md-4 bg-success">
      <div>
        <div className="font-weight-bolder text-center">
          <h4>View Team</h4>
        </div>
        <div>
          {/* Make sure to put these divs in their respective components when made */}
        </div>
      </div>
    </div>
  );

  const renderTeamInformation = () => (
    <div className="col-12 col-md-4 bg-info">
      <div>
<<<<<<< HEAD
        <div className="font-weight-bolder text-center"><h4>Team Information</h4></div>
=======
        <div className="font-weight-bolder text-center">
          <h4>Team Information</h4>
        </div>
>>>>>>> team-combinations-column
        <div>
          {/* Make sure to put these divs in their respective components when made */}
        </div>
      </div>
    </div>
  );

  return (
<<<<<<< HEAD
    <div className='team-builder-page'>
=======
    <div className="team-builder-page">
>>>>>>> team-combinations-column
      <Header />
      {renderTopSection()}
      <div className="row">
        {renderTeamCombinations()}
        {renderViewTeam()}
        {renderTeamInformation()}
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
};
>>>>>>> team-combinations-column

export default TeamBuilderPage;
