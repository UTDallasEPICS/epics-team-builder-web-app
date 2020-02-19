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
    this.projectBtnRef = React.createRef();
    this.studentBtnRef = React.createRef();
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
    this.projectBtnRef.current.blur();
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
    this.studentBtnRef.current.blur();
  }

  handleProjectFile(file) {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;

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

      if (!tempContainer.data[1]['Skill 1']) {
        return alert(
          'The project columns "Skill 1" does not exist in the excel file'
        );
      }

      if (!tempContainer.data[1]['Skill 2']) {
        return alert(
          'The project columns "Skill 2" does not exist in the excel file'
        );
      }
      if (!tempContainer.data[1]['Skill 3']) {
        return alert(
          'The project columns "Skill 3" does not exist in the excel file'
        );
      }
      if (!tempContainer.data[1]['Returning (Y/N)']) {
        return alert(
          'The project columns "Returning (Y/N)" does not exist in the excel file'
        );
      }
      if (!tempContainer.data[1]['Project Name']) {
        return alert(
          'The project columns "Project Name" does not exist in the excel file'
        );
      }

      let projectsArray = tempContainer.data.reduce((accumalator, project) => {
        let skillsArray = [
          project['Skill 1'],
          project['Skill 2'],
          project['Skill 3']
        ];

        accumalator.push({
          name: project['Project Name'] ? project['Project Name'] : 'N/A',
          returning: project['Returning (Y/N)'] === 'Y',
          skills: skillsArray[0] ? skillsArray : []
        });
        return accumalator;
      }, []);

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

      if (!tempContainer.data[1]['Student']) {
        return alert('Student column is missing from student file');
      }

      if (!tempContainer.data[1]['Response Date']) {
        return alert('Response Date column is missing from student file');
      }

      if (!tempContainer.data[1]['SSO ID']) {
        return alert('SSO ID column is missing from student file');
      }

      if (!tempContainer.data[1]['Course']) {
        return alert('Course column is missing from student file');
      }

      if (!tempContainer.data[1]['Choice 1']) {
        return alert('Choice 1 column is missing from student file');
      }

      if (!tempContainer.data[1]['Choice 2']) {
        return alert('Choice 2 column is missing from student file');
      }

      if (!tempContainer.data[1]['Choice 3']) {
        return alert('Choice 3 column is missing from student file');
      }

      if (!tempContainer.data[1]['Choice 4']) {
        return alert('Choice 4 column is missing from student file');
      }

      if (!tempContainer.data[1]['Choice 5']) {
        return alert('Choice 5 column is missing from student file');
      }
      if (!tempContainer.data[1]['Choice 6']) {
        return alert('Choice 6 column is missing from student file');
      }

      if (!tempContainer.data[1]['Student Major']) {
        return alert('Student Major column is missing from student file');
      }

      if (!tempContainer.data[1]['Student Classification']) {
        return alert(
          'Student Classification column is missing from student file'
        );
      }

      if (!tempContainer.data[1]['Gender']) {
        return alert('Gender column is missing from student file');
      }

      if (!tempContainer.data[1]['Skill 1']) {
        return alert(
          'The project columns "Skill 1" does not exist in the excel file'
        );
      }

      if (!tempContainer.data[1]['Skill 2']) {
        return alert(
          'The project columns "Skill 2" does not exist in the excel file'
        );
      }
      if (!tempContainer.data[1]['Skill 3']) {
        return alert(
          'The project columns "Skill 3" does not exist in the excel file'
        );
      }

      let studentsArray = tempContainer.data.reduce((accumalator, student) => {
        if (student['Student Major']) {
          var studentMajor = student['Student Major'].substring(
            student['Student Major'].indexOf('::::') + 4,
            student['Student Major'].length
          );
        }

        let studentSkillsArray = [
          student['Skill 1'],
          student['Skill 2'],
          student['Skill 3']
        ];

        let i = 1;
        let choiceArray = [];
        while (student[`Choice ${i}`]) {
          choiceArray.push(student[`Choice ${i}`]);
          i++;
        }

        accumalator.push({
          name: student['Student'] ? student['Student'] : 'N/A',
          response: student['Response Date'] ? true : false,
          id: student['SSO ID'] ? student['SSO ID'] : 'N/A',
          returning: student['Course'] == 'EPCS 3200',
          choices: choiceArray,
          major: studentMajor,
          classification: student['Student Classification']
            ? student['Student Classification']
            : 'N/A',
          gender: student['Gender'] ? student['Gender'] : 'N/A',
          skills: studentSkillsArray[0] ? studentSkillsArray : [],
          found_team: false,
          choice_num_awarded: 0
        });

        return accumalator;
      }, []);

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
          <button
            className='upload-button'
            onClick={this.onProjectInputClick}
            ref={this.projectBtnRef}
          >
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
          <button
            className='upload-button'
            onClick={this.onStudentInputClick}
            ref={this.studentBtnRef}
          >
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
