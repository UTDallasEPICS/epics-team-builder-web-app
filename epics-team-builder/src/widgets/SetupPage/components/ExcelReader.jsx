import React, { Component } from 'react';
import XLSX from 'xlsx';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

class ExcelReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projectFileName: 'Or drag file here',
      studentFileName: 'Or drag file here'
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

      let tempContainer = {
        file: file,
        data
      };

      //Check for correct columns in project file
      let expectedColNames = ['Skill 1', 'Skill 2', 'Skill 3', 'Returning (Y/N)', 'Project Name'];

      let actualColNames = [];
      const columnCount = XLSX.utils.decode_range(ws['!ref']).e.c + 1;
      for (let i = 0; i < columnCount; ++i) {
        actualColNames[i] = ws[`${XLSX.utils.encode_col(i)}1`].v;
      }

      let error = expectedColNames.reduce((accumalator, name) => {
        if (!actualColNames.includes(name)) {
          accumalator += ' ' + name + ',';
        }
        return accumalator;
      }, 'Missing columns:');

      if (error.length > 16) {
        this.setState({ projectFileName: 'Or drag file here' });
        return alert(error.slice(0, -1));
      }

      //Reduce file object down to new object with formatted data
      let projectsArray = tempContainer.data.reduce((accumalator, project) => {
        let skillsArray = [project['Skill 1'], project['Skill 2'], project['Skill 3']];

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
    const { changeStudentsArray, setMaxPossibleChoices, maxPossibleChoices } = this.props;
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

      let tempContainer = {
        file: file,
        data
      };

      //                  Check for correct columns in student file
      let expectedColNames = [
        'Student',
        'Response Date',
        'SSO ID',
        'Course',
        'Student Major',
        'Student Classification',
        'Gender',
        'Skill 1',
        'Skill 2',
        'Skill 3'
      ];

      let actualColNames = [];
      const columnCount = XLSX.utils.decode_range(ws['!ref']).e.c + 1;
      for (let i = 0; i < columnCount; ++i) {
        actualColNames[i] = ws[`${XLSX.utils.encode_col(i)}1`].v;
      }

      let error = expectedColNames.reduce((accumalator, name) => {
        if (!actualColNames.includes(name)) {
          accumalator += ' ' + name + ',';
        }
        return accumalator;
      }, 'Missing columns:');

      if (error.length > 16) {
        this.setState({ studentFileName: 'Or drag file here' });
        return alert(error.slice(0, -1));
      }

      let minimumChoices = Number.POSITIVE_INFINITY;

      //Reduce file object down to new object with formatted data
      let studentsArray = tempContainer.data.reduce((accumalator, student) => {
        if (student['Student Major']) {
          var studentMajor = student['Student Major'].substring(
            student['Student Major'].indexOf('::::') + 4,
            student['Student Major'].length
          );
        }

        let studentSkillsArray = [student['Skill 1'], student['Skill 2'], student['Skill 3']];

        let i = 1;
        let choiceArray = [];
        while (student[`Choice ${i}`]) {
          choiceArray.push(student[`Choice ${i}`]);
          i++;
        }

        i--;
        if (i && i < minimumChoices) {
          minimumChoices = i;
        }

        accumalator.push({
          name: student['Student'] ? student['Student'] : 'N/A',
          response: student['Response Date'] ? true : false,
          id: student['SSO ID'] ? student['SSO ID'] : 'N/A',
          returning: student['Course'] === 'EPCS 3200',
          choices: choiceArray,
          major: studentMajor,
          classification: student['Student Classification'] ? student['Student Classification'] : 'N/A',
          gender: student['Gender'] ? student['Gender'] : 'N/A',
          skills: studentSkillsArray[0] ? studentSkillsArray : [],
          found_team: false,
          choice_num_awarded: 0
        });

        return accumalator;
      }, []);

      changeStudentsArray(studentsArray);
      setMaxPossibleChoices(minimumChoices);
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

  //Setup file drops like a normal file input event
  onProjectDrop = files => {
    const event = { target: { files } };
    this.handleChangeProjects(event);
  };

  onStudentDrop = files => {
    const event = { target: { files } };
    this.handleChangeStudents(event);
  };

  render() {
    const { projectFileName, studentFileName } = this.state;

    return (
      <div className='file-uploader'>
        <Dropzone onDrop={this.onProjectDrop}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div {...getRootProps()} className={isDragActive ? 'drag-box' : ''}>
              <input {...getInputProps()} disabled={true} />
              <div className='upload-project'>
                <button className='orange' onClick={this.onProjectInputClick} ref={this.projectBtnRef}>
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
            </div>
          )}
        </Dropzone>
        <Dropzone onDrop={this.onStudentDrop}>
          {({ getRootProps, getInputProps, isDragActive }) => (
            <div {...getRootProps()} className={isDragActive ? 'drag-box' : ''}>
              <input {...getInputProps()} disabled={true} />
              <div className='upload-students'>
                <button className='orange' onClick={this.onStudentInputClick} ref={this.studentBtnRef}>
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
          )}
        </Dropzone>
      </div>
    );
  }
}

ExcelReader.propTypes = {
  changeProjectsArray: PropTypes.func,
  changeStudentsArray: PropTypes.func,
  setMaxPossibleChoices: PropTypes.func,
  maxPossibleChoices: PropTypes.number
};
export default ExcelReader;
