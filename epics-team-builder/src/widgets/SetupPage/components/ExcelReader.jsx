import React, { Component } from 'react';
import XLSX from 'xlsx';
import { make_cols } from './MakeColumns';
import { SheetJSFT } from './types';

class ExcelReader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: []
    };
    this.handleProjectFile = this.handleProjectFile.bind(this);
    this.handleStudentFile = this.handleStudentFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  

  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  }

  handleProjectFile() {
    /* Boilerplate to set up FileReader */
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
    var tempskillsArray = [3] ; /* empty skills array */
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
      this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
        console.log(JSON.stringify(this.state.data, null, 2));
        for(var i = 0 ; i < this.state.data.length ; i++){
            tempskillsArray[0] = this.state.data[i]["Skill 1"] ;
            tempskillsArray[1] = this.state.data[i]["Skill 2"] ;
            tempskillsArray[2] = this.state.data[i]["Skill 3"] ;

            skillsArray[i] = tempskillsArray ;

            tempskillsArray = [] ;

        } /* end of for loop */
        console.log(skillsArray[1]) ;

        var projectsArray = [
          {
            "Project Name": "",
            "Returning (Y/N)": "",
            "Skills" : ["", "", ""]
          }] ; /* empty JSON array */

          for(var j = 0 ; j < this.state.data.length ; j++){
            var tempObject = {"Project Name":this.state.data[j]["Project Name"],
             "Returning (Y/N)": this.state.data[j]["Returning (Y/N)"],
              "Skills": skillsArray[j]} ;

            projectsArray.push(tempObject) ;

            tempObject = {} ;
          }

        console.log(projectsArray[1]) ;

      }); /* End of this.setState */
    };

    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    }
  }

  handleStudentFile(){
        /* Boilerplate to set up FileReader */
        const reader = new FileReader();
        const rABS = !!reader.readAsBinaryString;
        var tempChoices = [6];
        var choiceArray = [];
        var tempSkills =[3] ;
        var studentSkillsArray =[];

        var studentsArray = [{
          "Student":"",
          "Response Date":"",
          "SSO ID":"",
          "Course" :"",
          "Choices": ["","","","","" ,""],
          "Student Major": "",
          "Student Classification": "",
          "Gender": "",
          "Skills":["","",""],
          "Comments": "",
        }]
         
     
        reader.onload = (e) => {
          /* Parse data */
          const bstr = e.target.result;
          const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA : true });
          /* Get first worksheet */
          const wsname = wb.SheetNames[0];
          const ws = wb.Sheets[wsname];
          /* Convert array of arrays */
          const data = XLSX.utils.sheet_to_json(ws);
          /* Update state */
          this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
            console.log(JSON.stringify(this.state.data, null, 2));

            for(var i = 0 ; i < this.state.data.length ;i++){
              tempChoices[0] = this.state.data[i]["Choice 1"] ;
              tempChoices[1] = this.state.data[i]["Choice 2"] ;
              tempChoices[2] = this.state.data[i]["Choice 3"] ;
              tempChoices[3] = this.state.data[i]["Choice 4"] ;
              tempChoices[4] = this.state.data[i]["Choice 5"] ;
              tempChoices[5] = this.state.data[i]["Choice 6"] ;

              choiceArray[i] = tempChoices ;

              tempChoices = [] ;
            }

            for(var j = 0 ; j < this.state.data.length ;j++){
              tempSkills[0] = this.state.data[j]["Skill 1"] ;
              tempSkills[1] = this.state.data[j]["Skill 2"] ;
              tempSkills[2] = this.state.data[j]["Skill 3"] ;
              
              studentSkillsArray[j] = tempSkills ;

              tempSkills = [] ;
            }

            for(var f = 0 ; f < this.state.data.length ; f++){
              var tempObj = {
                "Student": this.state.data[f]["Student"],
                "Response Date": this.state.data[f]["Response Date"],
                "SSO ID": this.state.data[f]["SSO ID"],
                "Course": this.state.data[f]["Course"],
                "Choices": choiceArray[f],
                "Student Major": this.state.data[f]["Student Major"],
                "Student Classification": this.state.data[f]["Student Classification"],
                "Gender": this.state.data[f]["Gender"],
                "Skills": studentSkillsArray[f],
                "Comments": this.state.data[f]["Comments"],                
              }
              studentsArray.push(tempObj) ;

              tempObj = {}
            }
              console.log(studentsArray[2])
          });
     
        };
     
        if (rABS) {
          reader.readAsBinaryString(this.state.file);
        } else {
          reader.readAsArrayBuffer(this.state.file);
        };
  }

  render() {
    return (
      <div>
        <div className = "upload-project">
          <label htmlFor="file">Upload Project Files</label>
          <br />
          <input
            type="file"
            className="form-control-file"
            id="file"
            accept={SheetJSFT}
            onChange={this.handleChange}
          />
            <input
            class="btn btn-primary"
            type="submit"
            value="Upload"
            onClick={this.handleProjectFile}
            style = {{background: "#124734"}}
          ></input>
        </div>
        <br />
        <br />
        <div className = "upload-students">
          <label htmlFor="file">Upload Student Files</label>
          <br />
          <input
            type="file"
            className="form-control-file"
            id="file"
            accept={SheetJSFT}
            onChange={this.handleChange}
          />
          <input
            class="btn btn-primary"
            type="submit"
            value="Upload"
            onClick={this.handleStudentFile}
            style = {{background: "#124734"}}
          ></input>
        </div>
      </div>
    );
  }
}

export default ExcelReader;
