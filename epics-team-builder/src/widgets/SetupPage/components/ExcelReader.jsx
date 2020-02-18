import React, { Component } from 'react';
import XLSX from 'xlsx';
import { make_cols } from '../utility/MakeColumns';
import PropTypes from 'prop-types';

class ExcelReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectFileName: '',
      studentFileName: ''
    };
    this.handleChangeProjects = this.handleChangeProjects.bind(this);
    this.handleChangeStudents = this.handleChangeStudents.bind(this);
  }

  getExtension = fileName => {
    let temp = fileName.split('.');
    return temp[temp.length - 1];
  };

  handleChangeProjects(e) {
    const files = e.target.files;
    if (files && files[0]) {
      if (this.getExtension(files[0].name) !== 'xlsx') {
        //Remove file from input component
        e.target.value = '';
        return alert('File must be of type xlsx');
      }
      this.setState({ projectFileName: files[0].name });
      this.handleProjectFile(files[0]);
    }
  }

  handleChangeStudents(e) {
    const files = e.target.files;
    if (files && files[0]) {
      if (this.getExtension(files[0].name) !== 'xlsx') {
        //Remove file from input component
        e.target.value = '';
        return alert('File must be of type xlsx');
      }
      this.setState({ studentFileName: files[0].name });
      this.handleStudentFile(files[0]);
    }
  }

  handleProjectFile(file) {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    var tempskillsArray = [3]; /* empty skills array */
    var skillsArray = [];

    reader.onload = e => {
      /* Parse data */

      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? 'binary' : 'array',
        bookVBA: true
      });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      /* Update state */

      let tempContainer = {
        file: file,
        data,
        cols: make_cols(ws['!ref'])
      };

      if(!tempContainer.data[1]['Skill 1']){
        return alert('The project columns "Skill 1" does not exist in the excel file') ;
      }

      if(!tempContainer.data[1]['Skill 2']){
        return alert('The project columns "Skill 2" does not exist in the excel file') ;
      }
      if(!tempContainer.data[1]['Skill 3']){
        return alert('The project columns "Skill 3" does not exist in the excel file') ;
      }
      if(!tempContainer.data[1]['Returning (Y/N)']){
        return alert('The project columns "Returning (Y/N)" does not exist in the excel file') ;
      }
      if(!tempContainer.data[1]['Project Name']){
        return alert('The project columns "Project Name" does not exist in the excel file') ;
      }


      for (var i = 0; i < tempContainer.data.length; i++) {
        tempskillsArray[0] = tempContainer.data[i]['Skill 1'];
        tempskillsArray[1] = tempContainer.data[i]['Skill 2'];
        tempskillsArray[2] = tempContainer.data[i]['Skill 3'];

        skillsArray[i] = tempskillsArray;

        tempskillsArray = [];
      } /* end of for loop */

      var projectsArray = [
        {
          name: '',
          Returning: false,
          Skills: ['', '', '']
        }
      ]; /* empty JSON array */

      for (var j = 0; j < tempContainer.data.length; j++) {
        var tempReturn = false;

        if (tempContainer.data[j]['Returning (Y/N)'] === 'Y') {
          tempReturn = true;
        }
        var tempObject = {
          name: tempContainer.data[j]['Project Name']?tempContainer.data[j]['Project Name']: "N/A",
          Returning: tempReturn,
          Skills: skillsArray[j]? skillsArray[j]: []
        };

        projectsArray.push(tempObject);

        tempObject = {};
      }

      projectsArray.shift();
      this.props.changeProjectsArray(projectsArray);
    };

    if (rABS) {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  }

  handleStudentFile(file) {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    var tempChoices = [6];
    var choiceArray = [];
    var tempSkills = [3];
    var studentSkillsArray = [];

    var studentsArray = [
      {
        id: 0,
        name: '',
        Response: false,
        returning: false,
        Choices: ['', '', '', '', '', ''],
        Skills: ['', '', ''],
        Major: '',
        Classification: '',
        Gender: '',
        found_team: false,
        choice_num_awarded: 0
      }
    ];

    reader.onload = e => {
      /* Parse data */
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, {
        type: rABS ? 'binary' : 'array',
        bookVBA: true
      });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws);
      /* Update state */

      let tempContainer = {
        file: file,
        data,
        cols: make_cols(ws['!ref'])
      };

      if(!tempContainer.data[1]['Student']){
        return alert('Student column is missing from student file') ;
      }

      if(!tempContainer.data[1]['Response Date']){
        return alert('Response Date column is missing from student file') ;
      }

      if(!tempContainer.data[1]['SSO ID']){
        return alert('SSO ID column is missing from student file') ;
      }

      if(!tempContainer.data[1]['Course']){
        return alert('Course column is missing from student file') ;
      }

      if(!tempContainer.data[1]['Choice 1']){
        return alert('Choice 1 column is missing from student file') ;
      }

      if(!tempContainer.data[1]['Choice 2']){
        return alert('Choice 2 column is missing from student file') ;
      }

      if(!tempContainer.data[1]['Choice 3']){
        return alert('Choice 3 column is missing from student file') ;
      }

      if(!tempContainer.data[1]['Choice 4']){
        return alert('Choice 4 column is missing from student file') ;
      }

      if(!tempContainer.data[1]['Choice 5']){
        return alert('Choice 5 column is missing from student file') ;
      }
      if(!tempContainer.data[1]['Choice 6']){
        return alert('Choice 6 column is missing from student file') ;
      }

      if(!tempContainer.data[1]['Student Major']){
        return alert('Student Major column is missing from student file') ;
      }

      if(!tempContainer.data[1]['Student Classification']){
        return alert('Student Classification column is missing from student file') ;
      }

      if(!tempContainer.data[1]['Gender']){
        return alert('Gender column is missing from student file') ;
      }

      if(!tempContainer.data[1]['Skill 1']){
        return alert('The project columns "Skill 1" does not exist in the excel file') ;
      }

      if(!tempContainer.data[1]['Skill 2']){
        return alert('The project columns "Skill 2" does not exist in the excel file') ;
      }
      if(!tempContainer.data[1]['Skill 3']){
        return alert('The project columns "Skill 3" does not exist in the excel file') ;
      }

      

      for (var i = 0; i < tempContainer.data.length; i++) {
        tempChoices[0] = tempContainer.data[i]['Choice 1'];
        tempChoices[1] = tempContainer.data[i]['Choice 2'];
        tempChoices[2] = tempContainer.data[i]['Choice 3'];
        tempChoices[3] = tempContainer.data[i]['Choice 4'];
        tempChoices[4] = tempContainer.data[i]['Choice 5'];
        tempChoices[5] = tempContainer.data[i]['Choice 6'];

        choiceArray[i] = tempChoices;

        tempChoices = [];
      }

      for (var j = 0; j < tempContainer.data.length; j++) {
        tempSkills[0] = tempContainer.data[j]['Skill 1'];
        tempSkills[1] = tempContainer.data[j]['Skill 2'];
        tempSkills[2] = tempContainer.data[j]['Skill 3'];

        studentSkillsArray[j] = tempSkills;

        tempSkills = [];
      }

      for (var f = 0; f < tempContainer.data.length; f++) {
        if (tempContainer.data[f]['Student Major']) {
          var cutoffIndex =
            tempContainer.data[f]['Student Major'].indexOf('::::') + 4;

          var majorLength = tempContainer.data[f]['Student Major'].length;

          var studentMajor = tempContainer.data[f]['Student Major'].substring(
            cutoffIndex,
            majorLength
          );
        }

        var tempResponse = false ; 

        if(tempContainer.data[f]['Response Date']){
          tempResponse = true ;
        }

        var tempReturn = false ; 

        if(tempContainer.data[f]['Course']=="EPCS 3200"){
          tempReturn = true ;
        }

        var tempObj = {
          name: tempContainer.data[f]['Student']? tempContainer.data[f]['Student']:"N/A",
          Response: tempResponse,
          id: tempContainer.data[f]['SSO ID']?tempContainer.data[f]['SSO ID']: "N/A",
          returning: tempReturn,
          Choices: choiceArray?choiceArray:[],
          Major: studentMajor,
          Classification: tempContainer.data[f]['Student Classification']? tempContainer.data[f]['Student Classification']: "N/A",
          Gender: tempContainer.data[f]['Gender'] ? tempContainer.data[f]['Gender'] : "N",
          Skills: studentSkillsArray[f],
          found_team: false,
          choice_num_awarded: 0
        };
        studentsArray.push(tempObj);

        tempObj = {};
      }

      studentsArray.shift();

      console.log(studentsArray) ;

      this.props.changeStudentsArray(studentsArray);
    };

    if (rABS) {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  }

  render() {
    const { projectFileName, studentFileName } = this.state;

    return (
      <div className="file-uploader">
        <div className="upload-project">
          <label htmlFor="projectInput" className="upload-button">
            Upload Project Files
          </label>
          <input
            id="projectInput"
            type="file"
            accept=".xlsx"
            style={{ display: 'none' }}
            onChange={this.handleChangeProjects}
          />
          <label className="file-name-display">{projectFileName}</label>
        </div>
        <div className="upload-students">
          <label htmlFor="studentInput" className="upload-button">
            Upload Student Files
          </label>
          <input
            id="studentInput"
            type="file"
            accept=".xlsx"
            style={{ display: 'none' }}
            onChange={this.handleChangeStudents}
          />
          <label className="file-name-display">{studentFileName}</label>
        </div>
      </div>
    );
  }
}

ExcelReader.propTypes = {
  changeProjectsArray: PropTypes.func,
  changeStudentsArray: PropTypes.func
};
export default ExcelReader;
