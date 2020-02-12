import React, {Fragment, useState} from 'react'; 
import Axios from 'axios';

const FileUpload = () =>{ // File Uploader using ReactHooks
    // Const[] is used to display the file name once it is uploaded 

    const[file,setFile] = useState('') ;
    const[filename,setFilename] = useState('Choose File') ;
    const[uploadedFile, setUploadedFile] = useState({});

    const onChange = e => {
        setFile(e.target.files[0]) ;
        setFilename(e.target.files[0].name) ; 
    };

    const onSubmit = async e =>{
        e.preventDefault();
        const formData = new FormData(); 

        formData.append('file',file) ;

        try{

            const res = await Axios.post('/upload', formData, {
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }) ;

        }catch(err){

        }
    } ; // Function submit the file to the server * MAY NOT BE NECESSARY *

    return(
        <Fragment> 
            <form onSubmit = {onSubmit}> 
                <div className="custom-file mb-4">
                    <input type="file" className="custom-file-input" id="customFile" onChange = {onChange} />
                    <label className="custom-file-label" htmlFor="customFile">{filename}</label>
                </div> 
                <input type="submit" value="Upload" className = "btm btn-primary btn-block mt-4"/>
            </form>

            <form>
                <div className="custom-file mb-4">
                    <input type="file" className="custom-file-input" id="customFile" onChange = {onChange}/>
    <label className="custom-file-label" htmlFor="customFile">{filename}</label>
                </div>
                <input type="submit" value="Upload" className = "btm btn-primary btn-block mt-4"/>
            </form>

        </Fragment>
    )
}

export default FileUpload ;
