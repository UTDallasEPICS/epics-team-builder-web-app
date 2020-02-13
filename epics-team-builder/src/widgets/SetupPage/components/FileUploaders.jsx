import React, { Fragment } from 'react';
import readXlsxFile from 'read-excel-file' ;


const FileUpload = () => {
  // File Uploader using ReactHooks
  // Const[] is used to display the file name once it is uploaded
  // ONCHANGE FUNCTIONS


  const projectSchema = {
    'PROJECT NAME':{
      prop:'name',
      type: String
    },
    'RETURNING(Y/N)' :{
      prop: 'returning',
      type: Boolean,
    },
    'SKILL 1':{
      prop: 'skill1' ,
      type: String,
    },
    'SKILL 2':{
      prop: 'skill2' ,
      type: String,
    },
    'SKILL 3':{
      prop: 'skill3' ,
      type: String,
    },
  }


  const onChangeProjects = e =>{
    readXlsxFile( document.getElementById('input').files[0], {projectSchema}).then((rows,errors) => {
     
      console.log(rows) ;

      })
  }

  const onChangeStudent = e =>{
    readXlsxFile( document.getElementById('studentinput').files[0]).then((rows,errors) => {
     
      console.log(rows) ;

      })
  }

  // Once the user hits upload

  return (
    // FORM 1 = PROJECT FILE UPLOAD
    // FORM 2 = STUDENT FILE UPLOAD
    <Fragment>

      <input type = "file" id = "input" accept = ".xls, .xlsx" onChange = {onChangeProjects}/>
      
      <input type = "file" id = "studentinput" accept = ".xls,.xlsx" onChange = {onChangeStudent} />

    </Fragment>
  );
};

export default FileUpload;
