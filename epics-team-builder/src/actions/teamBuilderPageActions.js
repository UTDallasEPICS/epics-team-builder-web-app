import { INITIATE_TEAM_GENERATION } from './actionTypes/teamBuilderActionTypes';
import { SELECT_TEAM_COMBINATION } from './actionTypes/teamBuilderActionTypes';

export const generateTeams = ({ projects, students, manuallyAssignedStudents, numOfPrefProjects }) => {
  const teams = {};

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
      if (parseInt(students[i].id) === parseInt(sid)) {
        students[i].assigned = true;
        teams[manuallyAssignedStudents[sid]].members.push(students[i]);
        students.splice(i, 1);
        break;
      }
    }
  }

  //Pull out all students who did not respond
  let noResponseStudents = students.filter(student => !student.response);
  students = students.filter(student => student.response);

  //Let returning students get priority in project choice first
  for (let i = 0; i < students.length; i++) {
    if (students[i].returning) {
      for (let j = 0; j < students[i].choices.length; j++) {
        if (teams[`${students[i].choices[j]}`].members.length < 5) {
          students[i].choice_num_awarded = j + 1;
          teams[`${students[i].choices[j]}`].members.push(students[i]);
          students.splice(i, 1);
          break;
        }
      }
    }
  }

  let teamCombos = [];
  //Loop through creation of teams
  for (let i = 0; i < 100; i++) {
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
            randomStudents[j].choice_num_awarded = k + 1;
            newTeams[`${randomStudents[j].choices[k]}`].members.push(randomStudents[j]);
            randomStudents.splice(j, 1);
            break;
          }
        }
      }
    }

    //Try to find teams for students who still have not been placed on a team
    for (let j = randomStudents.length - 1; j >= 0; j--) {
      if (findTeamForStudent(randomStudents[j], newTeams, numOfPrefProjects)) {
        randomStudents.splice(j, 1);
      }
    }

    //Check if a student couldn't be assigned to any of their choices
    if (randomStudents.length > 1) {
      console.log('Students who responded could not be placed on team based on choices');
    }

    let smallTeams = [];
    let largeTeams = [];

    //seperate trams into categories based on size
    for (let teamName in newTeams) {
      if (newTeams[teamName].members.length < 3) {
        smallTeams.push(newTeams[teamName]);
      } else if (newTeams[teamName].members.length > 3) {
        largeTeams.push(newTeams[teamName]);
      }
    }

    //go through every small team and check if students from larger teams can be swapped over
    while (smallTeams.length > 0) {
      let sTeam = smallTeams[0];
      let sTeamFilled = false;

      for (let j = largeTeams.length - 1; j >= 0; j--) {
        let lTeam = largeTeams[j];

        for (let k = lTeam.members.length - 1; k >= 0; k--) {
          let member = lTeam.members[k];
          if (member.returning || member.assigned) {
            continue;
          }

          if (lTeam.members.length <= 3) {
            largeTeams.pop();
            break;
          }

          member.choices.forEach((choice, ind) => {
            if (choice === sTeam.project.name) {
              member.choice_num_awarded = ind + 1;
              newTeams[`${sTeam.project.name}`].members.push(member);
              newTeams[`${lTeam.project.name}`].members.splice(k, 1);
            }
          });

          if (newTeams[`${sTeam.project.name}`].members.length >= 3) {
            sTeamFilled = true;
            break;
          }
        }
        if (sTeamFilled) break;
      }
      smallTeams.pop();
    }
    let unassignedReturn = 0;
    let unassignedNormal = 0;
    randomStudents.forEach(student => {
      student.returning ? unassignedReturn++ : unassignedNormal++;
    });

    //Calculate weights for choices and classification
    let teamAverageChoice = 0;
    let teamAverageClass = 0;
    let totalWeighedTeams = 0;
    for (let team in newTeams) {
      let teamTotalClass = 0;
      let teamTotalChoice = 0;

      //Filter out assigned and returning students from calculations
      let teamMembers = newTeams[team].members.filter(student =>
        student.returning || student.assigned ? false : true
      );
      if (teamMembers.length === 0) {
        continue;
      }

      //Calculate the average choice and spread of students by classsification
      teamMembers.forEach(student => {
        teamTotalChoice += student.choice_num_awarded;
        switch (student.classification) {
          case 'Freshman':
            teamTotalClass += -2;
            break;
          case 'Sophomore':
            teamTotalClass += -1;
            break;
          case 'Junior':
            teamTotalClass += 1;
            break;
          case 'Senior':
            teamTotalClass += 2;
            break;
          default:
            break;
        }
      });
      teamAverageChoice += teamTotalChoice / teamMembers.length;
      teamAverageClass += teamTotalClass / teamMembers.length;
      totalWeighedTeams++;
    }

    //Value is the average choice a student is given
    let avgScoreChoice = teamAverageChoice / totalWeighedTeams;
    //Value is weight ranging from -2 to 2. 0 means perfectly balanced. Postive values mean team has more upper classmen.
    //Negative values mean team has more lower classmen.
    let avgScoreClass = teamAverageClass / totalWeighedTeams;

    let skillsMet = 0;
    let totalSkills = 0;

    //For each team find how many skills are met by its members
    for (let team in newTeams) {
      newTeams[team].skillsMet = 0;
      newTeams[team].project.skills.forEach(skill => {
        let foundSkill = false;
        for (let j = 0; j < newTeams[team].members.length; j++) {
          for (let k = 0; k < newTeams[team].members[j].skills.length; k++) {
            if (newTeams[team].members[j].skills[k] === skill) {
              skillsMet++;
              newTeams[team].skillsMet++;
              foundSkill = true;
              break;
            }
          }
          if (foundSkill) break;
        }
        totalSkills++;
      });
    }

    //ratio of how many skills of all the teams were met
    let skillsMetRatio = skillsMet / totalSkills;

    teamCombos.push({
      teams: newTeams,
      avgScoreChoice,
      avgScoreClass,
      skillsMetRatio,
      unassignedReturn,
      unassignedNormal,
      noResponseStudents,
      unassignedStudents: randomStudents
    });
  }

  return {
    type: INITIATE_TEAM_GENERATION,
    payload: teamCombos
  };
};

function findTeamForStudent(student, teams, numOfPrefProjects) {
  //Iterate through student's choices
  for (let i = 0; i < numOfPrefProjects && i < student.choices.length; i++) {
    let team = teams[`${student.choices[i]}`];
    //Check if member on team has another choice which they can switch to
    for (let j = team.members.length - 1; j >= 0; j--) {
      if (!team.members[j].returning && !team.members[j].assigned) {
        for (let k = 0; k < numOfPrefProjects; k++) {
          //If member can be moved to new team, move student and then add other student to team
          if (teams[`${team.members[j].choices[k]}`].members.length < 5) {
            team.members[j].choice_num_awarded = k + 1;
            student.choice_num_awarded = i + 1;

            teams[`${team.members[j].choices[k]}`].members.push(team.members[j]);
            team.members.splice(j, 1);
            team.members.push(student);
            return true;
          }
        }
      }
    }
  }
  return false;
}

export const selectCombination = value => {
  return {
    type: SELECT_TEAM_COMBINATION,
    payload: value
  };
};
