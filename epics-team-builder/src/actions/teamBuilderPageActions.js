import { INITIATE_TEAM_GENERATION } from './actionTypes/teamBuilderActionTypes';

export const generateTeams = ({ projects, students, manuallyAssignedStudents, numOfPrefProjects }) => {
  const teams = {};

  //Pull out all students who did not respond
  let noResponseStudents = students.filter(student => !student.response);
  students = students.filter(student => student.response);

  //Mock manuallyAssigned for now
  manuallyAssignedStudents = {
    3: 'SP20 - ATC: Patient Data Collection App'
  };

  projects.forEach(project => {
    teams[`${project.name}`] = {
      project,
      members: [],
      value: 0
    };
  });

  //First assign manually assigned students
  for (let sid in manuallyAssignedStudents) {
    //Change students to map from sid to their info
    for (let i = 0; i < students.length; i++) {
      if (students[i].id == sid) {
        teams[manuallyAssignedStudents[sid]].members.push(students[i]);
        students.splice(i, 1);
        break;
      }
    }
  }

  //Let returning students get priority in project choice first
  for (let i = 0; i < students.length; i++) {
    if (students[i].returning) {
      for (let j = 0; j < students[i].choices.length; j++) {
        if (teams[`${students[i].choices[j]}`].members.length < 5) {
          teams[`${students[i].choices[j]}`].members.push(students[i]);
          students.splice(i, 1);
          break;
        }
      }
    }
  }

  //Loop through creation of teams
  for (let i = 0; i < 10; i++) {
    //Make copies to start off on
    let randomStudents = JSON.parse(JSON.stringify(students));
    let newTeams = JSON.parse(JSON.stringify(teams));

    //Shuffle students to hopefully get different results
    for (var k = randomStudents.length - 1; k > 0; k--) {
      var j = Math.floor(Math.random() * (k + 1));
      var temp = randomStudents[k];
      randomStudents[k] = randomStudents[j];
      randomStudents[j] = temp;
    }

    //Place normal students in their top choices if possible
    for (let j = randomStudents.length - 1; j >= 0; j--) {
      for (let k = 0; k < numOfPrefProjects; k++) {
        if (randomStudents[j].choices[k]) {
          if (newTeams[`${randomStudents[j].choices[k]}`].members.length < 5) {
            newTeams[`${randomStudents[j].choices[k]}`].members.push(randomStudents[j]);
            randomStudents.splice(j, 1);
            break;
          }
        }
      }
    }

    //Try to find teams for students who still have not been placed on a team
    for (let j = randomStudents.length - 1; j >= 0; j--) {
      if (resolver(randomStudents[j], newTeams, numOfPrefProjects)) {
        randomStudents.splice(j, 1);
      }
    }

    if (randomStudents.length > 1) {
      console.log('Students who responded could not be placed on team based on choices');
    }

    let smallTeams = [];
    let largeTeams = [];

    for (let teamName in newTeams) {
      if (newTeams[teamName].members.length < 3) {
        smallTeams.push(newTeams[teamName]);
      } else if (newTeams[teamName].members.length > 3) {
        largeTeams.push(newTeams[teamName]);
      }
    }

    while (smallTeams.length > 0 || largeTeams.length === 0) {
      let sTeam = smallTeams[0];
      let sTeamFilled = false;

      for (let j = largeTeams.length - 1; j >= 0; j--) {
        let lTeam = largeTeams[j];

        for (k = lTeam.members.length - 1; k >= 0; k--) {
          let member = lTeam.members[k];
          if (member.returning) {
            continue;
          }

          if (lTeam.members.length <= 3) {
            largeTeams.pop();
            break;
          }

          if (member.choices.includes(sTeam.project.name)) {
            newTeams[`${sTeam.project.name}`].members.push(member);
            newTeams[`${lTeam.project.name}`].members.splice(k, 1);
            if (newTeams[`${sTeam.project.name}`].members.length >= 3) {
              sTeamFilled = true;
              break;
            }
          }
        }
        if (sTeamFilled) break;
      }
      smallTeams.pop();
    }
    console.log(newTeams);
  }

  return {
    type: INITIATE_TEAM_GENERATION,
    payload: teams
  };
};

function resolver(student, teams, numOfPrefProjects) {
  //Iterate through student's choices
  for (let i = 0; i < numOfPrefProjects && i < student.choices.length; i++) {
    let team = teams[`${student.choices[i]}`];
    //Check if member on team has another choice which they can switch to
    for (let j = team.members.length - 1; j >= 0; j--) {
      if (!team.members[j].returning) {
        for (let k = 0; k < numOfPrefProjects; k++) {
          //If member can be moved to new team, move student and then add other student to team
          if (teams[`${team.members[j].choices[k]}`].members.length < 5) {
            teams[`${team.members[j].choices[k]}`].members.push(student);
            team.members.splice(j, 1);
            return true;
          }
        }
      }
    }
  }
  return false;
}
