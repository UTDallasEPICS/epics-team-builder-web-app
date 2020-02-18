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

    this.projectInputRef = React.createRef();
    this.studentInputRef = React.createRef();
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

      console.log(tempContainer.data[0].length);

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
          name: tempContainer.data[j]['Project Name'],
          Returning: tempReturn,
          Skills: skillsArray[j]
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

        var tempResponse = false;

        if (tempContainer.data[f]['Response Date']) {
          tempResponse = true;
        }

        var tempReturn = false;

        if (tempContainer.data[f]['Course'] == 'EPCS 3200') {
          tempReturn = true;
        }

        var tempStudentName = 'N/A';

        if (tempContainer.data[f]['Student']) {
          tempStudentName = tempContainer.data[f]['Student'];
        }

        var tempChoiceArray = [];

        if (choiceArray) {
          tempChoiceArray = choiceArray;
        }

        var tempClassification = 'N/A';

        if (tempContainer.data[f]['Student Classification']) {
          tempClassification = tempContainer.data[f]['Student Classification'];
        }

        var tempGender = 'N';

        if (tempContainer.data[f]['Gender']) {
          tempGender = tempContainer.data[f]['Gender'];
        }

        var tempObj = {
          name: tempStudentName,
          Response: tempResponse,
          id: tempContainer.data[f]['SSO ID'],
          returning: tempReturn,
          Choices: tempChoiceArray[f],
          Major: studentMajor,
          Classification: tempClassification,
          Gender: tempGender,
          Skills: studentSkillsArray[f],
          found_team: false,
          choice_num_awarded: 0
        };
        studentsArray.push(tempObj);

        tempObj = {};
      }

      studentsArray.shift();

      console.log(studentsArray);

      this.props.changeStudentsArray(studentsArray);
    };

    if (rABS) {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  }

  onProjectInputClick = () => {
    this.projectInputRef.current.click();
  };

  onStudentInputClick = () => {
    this.studentInputRef.current.click();
  };

  render() {
    const { projectFileName, studentFileName } = this.state;

    return (
      <div className='file-uploader'>
        <div className='upload-project'>
          <button className='upload-button' onClick={this.onProjectInputClick}>
            Upload Project Files
          </button>
          <input
            id='projectInput'
            type='file'
            accept='.xlsx'
            style={{ display: 'none' }}
            ref={this.projectInputRef}
            onChange={this.handleChangeProjects}
          />
          <label className='file-name-display'>{projectFileName}</label>
        </div>
        <div className='upload-students'>
          <button className='upload-button' onClick={this.onStudentInputClick}>
            Upload Student Files
          </button>
          <input
            id='studentInput'
            type='file'
            accept='.xlsx'
            style={{ display: 'none' }}
            ref={this.studentInputRef}
            onChange={this.handleChangeStudents}
          />
          <label className='file-name-display'>{studentFileName}</label>
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
