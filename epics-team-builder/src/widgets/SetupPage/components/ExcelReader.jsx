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
