/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import { Card, Table, CardDeck } from 'react-bootstrap';
import PropTypes from 'prop-types';
import DisplayProjectRow from './DisplayProjectRow';
import { CSVLink, CSVDownload } from "react-csv";

const DisplayProjects = props => {
  const { combo = {} } = props;
  var team=props.combo;

  const onSelectHandlerMembers = members => {   
    props.selectMember(members);
  };

  var headers = [
    { label:"Team", key: "Team" },
    { label:"Student", key: "Student" },
    { label: "Choice 1", key: "Choice 1" },
    { label:"Choice 2", key: "Choice 2" },
    { label:"Choice 3", key: "Choice 3" },	
    { label:"Choice 4", key: "Choice 4" },	
    { label:"Choice 5", key: "Choice 5" },	
    { label:"Choice 6", key: "Choice 6" },	
    { label:"Student Major", key: "Student Major" },	
    { label:"Student Classification", key: "Student Classification" },
    { label:"Gender", key: "Gender" },
    { label:"Skill 1", key: "Skill 1" },
    { label:"Skill 2", key: "Skill 2" },
    { label:"Skill 3", key: "Skill 3" },
  ];

  function getCSV() {
    var newData=[];
    if(team['teams']){
      function buildString(val){
        let membersArr=team['teams'][val]['members']
        if(membersArr && membersArr.length>0){      
          for(let i=0;i<membersArr.length;i++){
            let rowData={}
            let member= membersArr[i];
            rowData["Team"]=val;
            if(member['id']){  
              rowData["Student"]=member['name'].trim()
              let choiceRows = member['choices'].map(s => {return s.trim()})         
              for(let j=1;j<=choiceRows.length;j++){
                let strRow="Choice "+j
                rowData[strRow]= choiceRows[j-1]
              }
              rowData["Student Major"]=member['major'].trim()
              rowData["Student Classification"]=member['classification'].trim()
              rowData["Gender"]= member['gender'].trim()
              let skillSet=member['skills'].map(s => s.trim())
              for(let j=1;j<=skillSet.length;j++){
                let skillRow="Skill "+j
                rowData[skillRow]= skillSet[j-1]
              }
            }
          newData.push(rowData)
          }
        }
      }
    
    Object.keys(team.teams).map((teamName, index) => (
      buildString(teamName)
    ));
    }
    return newData;
  }
   

  

  const onSeclectHandler = teamCombos => (
    <div className='pb-4'>
      <div className='px-3 text-info'>
        Total Projects: {teamCombos.teams ? <span>{Object.keys(teamCombos.teams).length}</span> : null}
      </div>
      <div className='teamcombination-wrapper p-3'>
        <CardDeck className='tables-container'>
          <Card className='table-card' border='dark'>
            <Table striped bordered hover>
              <tbody>
                {combo.teams
                  ? Object.keys(combo.teams).map((teamName, index) => (
                      <tr key={index}>
                        <DisplayProjectRow combo={combo} selectMember={props.selectMember} teamName={teamName} />
                      </tr>
                    ))
                  : null}
              </tbody>
            </Table>
          </Card>
        </CardDeck>
        <div className='text-center mt-3'>
        <CSVLink data={getCSV()} headers={headers} className='px-3 py-2 orange'>
          <button className='px-3 py-2 orange' style={{ borderRadius: '16px' }}>Export</button>
        </CSVLink>
        </div>
      </div>
    </div>
  );
  return onSeclectHandler(props.combo)
};

DisplayProjects.propTypes = {
  selectProjects: PropTypes.func,
  teamCombos: PropTypes.array,
  onSeclectHandlerMembers: PropTypes.func
};
// /*//npm install react-csv --save*/
export default DisplayProjects;
