(this["webpackJsonpepics-team-builder"]=this["webpackJsonpepics-team-builder"]||[]).push([[0],{19:function(e,t){},27:function(e,t,a){e.exports=a(51)},32:function(e,t,a){},37:function(e,t,a){e.exports=a.p+"static/media/Epics.183416a8.png"},43:function(e,t){},44:function(e,t){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(12),r=a.n(l),c=(a(32),a(33),a(17),a(10)),i=a(7),o=a(23);var m=Object(i.b)({students:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],{type:t,payload:a}=arguments.length>1?arguments[1]:void 0;switch(t){case"CHANGE_STUDENT_ARRAY":return a;default:return e}},projects:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],{type:t,payload:a}=arguments.length>1?arguments[1]:void 0;switch(t){case"CHANGE_PROJECTS_ARRAY":return a;default:return e}},manuallyAssignedStudents:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{type:t,payload:a}=arguments.length>1?arguments[1]:void 0;switch(t){case"REMOVE_STUDENT":return a;case"ASSIGN_PROJ_TO_STUDENT":return{...e,...a};default:return e}},numOfPreferredProjects:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,{type:t,payload:a}=arguments.length>1?arguments[1]:void 0;switch(t){case"CHANGE_NUM_PROJECT_SLIDER":return a;default:return e}},maxChoicesConsidered:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,{type:t,payload:a}=arguments.length>1?arguments[1]:void 0;switch(t){case"SET_MAX_POSSIBLE_CHOICES":return a;default:return e}},maxTeamSize:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,{type:t,payload:a}=arguments.length>1?arguments[1]:void 0;switch(t){case"SET_MAX_TEAM_SIZE":return a;default:return e}}});var d=Object(i.b)({getSelectedCombo:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{type:t,payload:a}=arguments.length>1?arguments[1]:void 0;switch(t){case"SELECT_TEAM_COMBINATION":return a;default:return e}},getTeamCombos:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],{type:t,payload:a}=arguments.length>1?arguments[1]:void 0;switch(t){case"INITIATE_TEAM_GENERATION":return a;default:return e}}}),u=Object(i.b)({setupPage:m,teamCombos:d});const h=e=>e.setupPage.students,p=e=>e.setupPage.projects,g=e=>e.setupPage.manuallyAssignedStudents,E=e=>e.setupPage.numOfPreferredProjects,b=e=>e.setupPage.maxChoicesConsidered,f=e=>e.setupPage.maxTeamSize,S=e=>e.teamCombos.getTeamCombos,y=[o.a],v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||i.c;var k=Object(i.d)(u,{},v(Object(i.a)(...y)));class N extends s.a.Component{render(){return s.a.createElement("div",{className:"header-container"},s.a.createElement("div",{className:"header"},s.a.createElement("img",{src:a(37),alt:"EPIC's Logo"})))}}var C=a(52),T=a(57),j=a(53);class x extends s.a.Component{constructor(){super(...arguments),this.onClickHandler=e=>{!0===document.getElementById("checkbox"+e).checked?document.getElementById("checkbox"+e).checked=!1:document.getElementById("checkbox"+e).checked=!0}}delete(e,t){for(var a=Object.assign({},t),n=document.getElementsByClassName("messageCheckbox"),s=0;n[s];++s)n[s].checked&&(delete a[e[n[s].value].id],n[s].checked=!1);this.props.removeStudent(a)}mapStudents(e,t){var a=[];for(var n of Object.keys(e))e[n].id in t&&a.push(e[n]);return a}render(){let{manuallyAssignedStudents:e,students:t}=this.props,a=this.mapStudents(t,e);return s.a.createElement("div",{className:"manual-project-assignment"},s.a.createElement("label",{className:"title"},"Manually Assigned Students"),s.a.createElement(C.a,{className:"tables-container"},s.a.createElement(T.a,{className:"table-card",border:"dark"},s.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{style:{width:"8%"}}),s.a.createElement("th",{style:{width:"20%"}},"Name"),s.a.createElement("th",{style:{width:"20%"}},"NetID"),s.a.createElement("th",{style:{width:"42%"}},"Project Name"))),s.a.createElement("tbody",null,a.map((t,a)=>s.a.createElement("tr",{key:a,"data-item":t,onClick:this.onClickHandler.bind(this,a)},s.a.createElement("td",{style:{textAlign:"center"}},s.a.createElement("input",{id:"checkbox"+a,className:"messageCheckbox",type:"checkbox",name:"box",value:a,onClick:this.onClickHandler.bind(this,a)})),s.a.createElement("td",null,t.name),s.a.createElement("td",null,t.id),s.a.createElement("td",null,e[t.id]))))))),s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("button",{className:"red",type:"submit",style:{width:"140px"},onClick:()=>this.delete(a,e)},"Delete")))}}class P extends s.a.Component{constructor(){super(...arguments),this.addProjectToStudent=()=>{const{projects:e,students:t}=this.props;let a={},n=null;for(let r of e)if(document.getElementById(r.name).checked){n=r.name;break}if(n){document.getElementById(n).checked=!1;for(var s=0;s<t.length;s++){var l=t[s].id;document.getElementById(l)&&document.getElementById(l).checked&&(document.getElementById(l).checked=!1,a[l]=n)}this.props.assignProjToStudents(a)}},this.onProjectClickHandler=e=>{this.props.projects.forEach(t=>{t.name!==e&&(document.getElementById(t.name).checked=!1)}),document.getElementById(e).checked=!document.getElementById(e).checked},this.onStudentClickHandler=e=>{document.getElementById(e).checked=!document.getElementById(e).checked}}render(){const{students:e,projects:t,manuallyAssignedStudents:a}=this.props;return s.a.createElement("div",{className:"manual-project-assignment"},s.a.createElement("label",{className:"title"},"Manual Project Assignment"),s.a.createElement(C.a,{className:"tables-container"},s.a.createElement(T.a,{className:"table-card",border:"dark"},s.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{style:{width:"15%"}}),s.a.createElement("th",null,"Project Name"))),s.a.createElement("tbody",null,t.map((e,t)=>s.a.createElement("tr",{key:t,onClick:this.onProjectClickHandler.bind(this,e.name)},s.a.createElement("td",null,s.a.createElement("input",{type:"radio",onClick:this.onProjectClickHandler.bind(this,e.name),defaultChecked:!1,id:e.name})),s.a.createElement("td",null,e.name)))))),s.a.createElement(T.a,{className:"table-card",border:"dark"},s.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{style:{width:"15%"}}),s.a.createElement("th",null,"Name"),s.a.createElement("th",null,"NetID"))),s.a.createElement("tbody",null,e.map((e,t)=>{for(let n in a)if(parseInt(n)===e.id)return null;return s.a.createElement("tr",{key:t,onClick:this.onStudentClickHandler.bind(this,e.id)},s.a.createElement("td",null,s.a.createElement("input",{type:"checkbox",className:"studentBox",defaultChecked:!1,id:e.id,onClick:this.onStudentClickHandler.bind(this,e.id)})),s.a.createElement("td",null,e.name),s.a.createElement("td",null,e.id))}))))),s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("button",{className:"green",style:{width:"140px"},onClick:this.addProjectToStudent},"Add")))}}var w=a(8),A=a.n(w),O=a(15);class _ extends n.Component{constructor(e){super(e),this.getExtension=e=>{let t=e.split(".");return t[t.length-1]},this.onProjectInputClick=()=>{this.projectInputRef.current.click()},this.onStudentInputClick=()=>{this.studentInputRef.current.click()},this.onProjectDrop=e=>{const t={target:{files:e}};this.handleChangeProjects(t)},this.onStudentDrop=e=>{const t={target:{files:e}};this.handleChangeStudents(t)},this.state={projectFileName:"Or drag file here",studentFileName:"Or drag file here"},this.projectInputRef=s.a.createRef(),this.studentInputRef=s.a.createRef(),this.projectBtnRef=s.a.createRef(),this.studentBtnRef=s.a.createRef(),this.handleChangeProjects=this.handleChangeProjects.bind(this),this.handleChangeStudents=this.handleChangeStudents.bind(this),this.numProjects=0,this.choicesArray=[]}handleChangeProjects(e){const t=e.target.files;if(t&&t[0]){if("xlsx"!==this.getExtension(t[0].name))return e.target.value="",alert("File must be of type xlsx");this.setState({projectFileName:t[0].name}),this.handleProjectFile(t[0])}this.projectBtnRef.current.blur()}handleChangeStudents(e){const t=e.target.files;if(t&&t[0]){if("xlsx"!==this.getExtension(t[0].name))return e.target.value="",alert("File must be of type xlsx");this.setState({studentFileName:t[0].name}),this.handleStudentFile(t[0])}this.studentBtnRef.current.blur()}handleProjectFile(e){const t=new FileReader,a=!!t.readAsBinaryString;t.onload=t=>{const n=t.target.result,s=A.a.read(n,{type:a?"binary":"array",bookVBA:!0}),l=s.SheetNames[0],r=s.Sheets[l],c=A.a.utils.sheet_to_json(r);let i={file:e,data:c},o=[];const m=A.a.utils.decode_range(r["!ref"]).e.c+1;for(let e=0;e<m;++e)o[e]=r["".concat(A.a.utils.encode_col(e),"1")].v;let d=["Skill 1","Skill 2","Skill 3","Returning (Y/N)","Project Name"].reduce((e,t)=>(o.includes(t)||(e+=" "+t+","),e),"Missing columns:");if(d.length>16)return this.setState({projectFileName:"Or drag file here"}),alert(d.slice(0,-1));let u=i.data.reduce((e,t)=>{let a=[t["Skill 1"],t["Skill 2"],t["Skill 3"]];return e.push({name:t["Project Name"]?t["Project Name"].trim():"N/A",returning:"Y"===t["Returning (Y/N)"],skills:a[0]?a:[]}),e},[]);this.props.changeProjectsArray(u),this.numProjects=u.length,this.choicesArray=u},a?t.readAsBinaryString(e):t.readAsArrayBuffer(e)}handleStudentFile(e){const{changeStudentsArray:t,setMaxPossibleChoices:a,changeNumOfPreferredProjects:n,setMaxTeamSize:s}=this.props,l=new FileReader,r=!!l.readAsBinaryString;l.onload=l=>{const c=l.target.result,i=A.a.read(c,{type:r?"binary":"array",bookVBA:!0}),o=i.SheetNames[0],m=i.Sheets[o],d=A.a.utils.sheet_to_json(m);let u={file:e,data:d},h=[];const p=[],g=A.a.utils.decode_range(m["!ref"]).e.c+1;for(let e=0;e<g;++e)h[e]=m["".concat(A.a.utils.encode_col(e),"1")].v,h[e].includes("Choice")&&p.push(h[e]);a(p.length),n(p.length);let E=["Student","Response Date","SSO ID","Course","Student Major","Student Classification","Gender","Skill 1","Skill 2","Skill 3"].reduce((e,t)=>(h.includes(t)||(e+=" "+t+","),e),"Missing columns:");if(E.length>16)return this.setState({studentFileName:"Or drag file here"}),alert(E.slice(0,-1));const b=[];let f=u.data.reduce((e,t)=>{if(t["Student Major"])var a=t["Student Major"].substring(t["Student Major"].indexOf("::::")+4,t["Student Major"].length);let n=[t["Skill 1"],t["Skill 2"],t["Skill 3"]],s=p.map(e=>{var a;return null===(a=t[e])||void 0===a?void 0:a.trim()});const l=s.filter(e=>!this.choicesArray.includes(e));return l.length?(console.log("Borked Choices for ".concat(t.Student,": ").concat(l.join(", "))),e):(s.some(e=>!e)||n.some(e=>!e)?b.push(t.Student):e.push({name:t.Student?t.Student:"N/A",response:!!t["Response Date"],id:t["SSO ID"]?t["SSO ID"]:"N/A",returning:"EPCS 3200"===t.Course,choices:s,major:a,classification:t["Student Classification"]?t["Student Classification"]:"N/A",gender:t.Gender?t.Gender:"N/A",skills:n[0]?n:[],found_team:!1,choice_num_awarded:0}),e)},[]);b.length&&alert("The following students have not filled out one or more skills/choices: \n ".concat(b.join("\n"))),t(f),s(Math.ceil(f.length/this.numProjects))},r?l.readAsBinaryString(e):l.readAsArrayBuffer(e)}render(){const{projectFileName:e,studentFileName:t}=this.state;return s.a.createElement("div",{className:"file-uploader"},s.a.createElement(O.a,{onDrop:this.onProjectDrop},t=>{let{getRootProps:a,getInputProps:n,isDragActive:l}=t;return s.a.createElement("div",Object.assign({},a(),{className:l?"drag-box":""}),s.a.createElement("input",Object.assign({},n(),{disabled:!0})),s.a.createElement("div",{className:"upload-project"},s.a.createElement("button",{className:"orange",onClick:this.onProjectInputClick,ref:this.projectBtnRef},"Upload Project Files"),s.a.createElement("input",{id:"projectInput",type:"file",accept:".xlsx",style:{display:"none"},ref:this.projectInputRef,onChange:this.handleChangeProjects}),s.a.createElement("label",{className:"file-name-display"},e)))}),s.a.createElement(O.a,{onDrop:this.onStudentDrop},e=>{let{getRootProps:a,getInputProps:n,isDragActive:l}=e;return s.a.createElement("div",Object.assign({},a(),{className:l?"drag-box":""}),s.a.createElement("input",Object.assign({},n(),{disabled:!0})),s.a.createElement("div",{className:"upload-students"},s.a.createElement("button",{className:"orange",onClick:this.onStudentInputClick,ref:this.studentBtnRef},"Upload Student Files"),s.a.createElement("input",{id:"studentInput",type:"file",accept:".xlsx",style:{display:"none"},ref:this.studentInputRef,onChange:this.handleChangeStudents}),s.a.createElement("label",{className:"file-name-display"},t)))}))}}var I=_;var M=function(e){let{maxTeamSize:t,setMaxTeamSize:a}=e;return s.a.createElement("div",{className:"preferred-project-slider"},s.a.createElement("div",{className:"auto-checkbox-container"},s.a.createElement("div",{className:"team-size-input"},s.a.createElement("p",null,"Max Team Size: "),s.a.createElement("input",{type:"number",value:t,onChange:e=>{a(Number(e.target.value))}}))))};class R extends s.a.Component{render(){const{numOfPrefProjects:e,students:t,projects:a,assignProjToStudents:n,changeStudentsArray:l,changeProjectsArray:r,manuallyAssignedStudents:c,removeStudent:i,setMaxPossibleChoices:o,setMaxTeamSize:m,maxTeamSize:d,maxPossibleChoices:u,changeNumOfPreferredProjects:h,switchToTeamBuilder:p}=this.props;return s.a.createElement("div",{className:"setup-page"},s.a.createElement(N,null),s.a.createElement("div",{className:"setup-grid"},s.a.createElement(I,{changeStudentsArray:l,changeProjectsArray:r,setMaxPossibleChoices:o,maxPossibleChoices:u,changeNumOfPreferredProjects:h,setMaxTeamSize:m}),s.a.createElement(P,{students:t,projects:a,assignProjToStudents:n,changeStudentsArray:l,manuallyAssignedStudents:c}),s.a.createElement("div",{className:"manually-assigned-students"},s.a.createElement(x,{students:t,manuallyAssignedStudents:c,removeStudent:i}))),s.a.createElement(M,{numOfPrefProjects:e,maxPossibleChoices:u,changeNumOfPreferredProjects:h,maxTeamSize:d,setMaxTeamSize:m}),s.a.createElement("button",{className:"orange generate-teams-btn",onClick:p,disabled:0===t.length||0===a.length},"Build Teams"))}}R.defaultProps={numOfPrefProjects:6,students:[],projects:[],manuallyAssignedStudents:{}};var B=R;function D(e,t,a,n){for(let s=0;s<a&&s<e.choices.length;s++){let l=t["".concat(e.choices[s])];l||console.log("choice ".concat(s," for ").concat(e.id),e.choices[s]);for(let r=l.members.length-1;r>=0;r--)if(!l.members[r].returning&&!l.members[r].assigned)for(let c=0;c<a;c++)if(t["".concat(l.members[r].choices[c])]||console.log("other",l.members[r].choices[c],l.members[r]),t["".concat(l.members[r].choices[c])].members.length<n)return l.members[r].choice_num_awarded=c+1,e.choice_num_awarded=s+1,t["".concat(l.members[r].choices[c])].members.push(l.members[r]),l.members.splice(r,1),l.members.push(e),!0}return!1}const F=e=>({type:"SELECT_TEAM_COMBINATION",payload:e});var G=Object(c.b)(e=>({numOfPrefProjects:E(e),students:h(e),projects:p(e),manuallyAssignedStudents:g(e),maxPossibleChoices:b(e),maxTeamSize:f(e)}),e=>({changeNumOfPreferredProjects:t=>e((e=>({type:"CHANGE_NUM_PROJECT_SLIDER",payload:e}))(t)),changeProjectsArray:t=>e((e=>({type:"CHANGE_PROJECTS_ARRAY",payload:e}))(t)),changeStudentsArray:t=>e((e=>({type:"CHANGE_STUDENT_ARRAY",payload:e}))(t)),assignProjToStudents:t=>e((e=>({type:"ASSIGN_PROJ_TO_STUDENT",payload:e}))(t)),removeStudent:t=>e((e=>({type:"REMOVE_STUDENT",payload:e}))(t)),selectCombination:t=>e(F(t)),setMaxPossibleChoices:t=>e((e=>({type:"SET_MAX_POSSIBLE_CHOICES",payload:e}))(t)),setMaxTeamSize:t=>e((e=>({type:"SET_MAX_TEAM_SIZE",payload:e}))(t))}))(B);var z=e=>{let{setChecked:t,checked:a}=e;const n=e=>()=>{const n=a.indexOf(e),s=[...a];-1===n?s.push(e):s.splice(n,1),t(s)};return[{value:"avgScoreChoice",display_name:"Project Preference"},{value:"avgScoreClass",display_name:"Classification"},{value:"skillsMetRatio",display_name:"Skill Match"}].map((e,t)=>s.a.createElement("div",{className:"px-4 font-weight-bold attribute-checkboxes",key:t},s.a.createElement("div",{className:"checkbox",onClick:n(e.value)},s.a.createElement("div",{className:"checkbox-pos"},-1===a.indexOf(e.value)?null:a.indexOf(e.value)+1)),s.a.createElement("label",{className:"form-check-label ml-3"},e.display_name)))},H=a(54);var U=function(e){let{combo:t,index:a,selectCombination:n,selectTeam:l}=e;return s.a.createElement(s.a.Fragment,null,s.a.createElement("td",null,s.a.createElement("div",{className:"text-danger font-weight-bolder"},"Combination ",a+1),s.a.createElement("div",null,"Avg Project Preference Choice: ",t.avgScoreChoice.toFixed(3)),s.a.createElement("div",null,"Classification Weight: ",t.avgScoreClass.toFixed(3)),s.a.createElement("div",null,"Percent of Skills Matched: ",t.skillsMetRatio.toFixed(3)),s.a.createElement("div",null,"Members Per Team Weight: ",t.coVarMembers.toFixed(3)),s.a.createElement("div",null,"Unassigned Student(s): ",t.unassignedStudents.length)),s.a.createElement("td",null,s.a.createElement("button",{onClick:()=>{n(t),l({})},className:"dark-gray text-center",style:{width:"8rem"}},"Select")))},J=a(25);var V=function(e){let{teamCombos:t=[],selectCombo:a,regrenerateTeam:n,selectTeam:l,checked:r,loading:c}=e;return s.a.createElement("div",{className:"pb-4"},s.a.createElement("div",{className:"px-3 text-info"},"Total Combinations: ",t.length," "),s.a.createElement("div",{className:"teamcombination-wrapper p-3"},s.a.createElement(C.a,{className:"tables-container"},s.a.createElement(T.a,{className:"table-card",border:"dark"},c?s.a.createElement("div",{style:{height:"50vh"},className:"d-flex justify-content-center align-items-center"},s.a.createElement(H.a,{animation:"border",role:"status",size:"lg"})):s.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0},s.a.createElement("tbody",null,Object(J.orderBy)(t,[...r,"coVarMembers"],[...r.map(e=>"skillsMetRatio"===e?"desc":"asc"),"asc"]).map((e,t)=>s.a.createElement("tr",{key:t},s.a.createElement(U,{selectCombination:a,selectTeam:l,combo:e,index:t}))))))),s.a.createElement("div",{className:"text-info"},"Number of No Response Students: ",t[0]?t[0].noResponseStudents.length:null),s.a.createElement("div",{className:"text-center",style:{marginTop:".5rem"}},s.a.createElement("button",{onClick:n,className:"px-3 py-2 orange",style:{borderRadius:"16px"}},"Regenerate Teams"))))},L=a(56),Y=a(55);var X=function(e){let{combo:t,selectTeam:a,teamName:l}=e;return s.a.createElement(n.Fragment,null,s.a.createElement("td",null,s.a.createElement("div",{className:Object.keys(t.teams[l].members).length<3?"text-danger":null},l),s.a.createElement("div",{className:"text-danger small"},Object.keys(t.teams[l].members).length<3?"*Minimum team size not met":null)),s.a.createElement("td",null,s.a.createElement("button",{onClick:()=>{a(t.teams[l])},style:{width:"8rem"},className:"dark-gray text-center"},"Select")))},W=a(26);var q=e=>{let{combo:t={},selectTeam:a}=e;return s.a.createElement("div",{className:"pb-4"},s.a.createElement("div",{className:"px-3 text-info"},"Total Projects: ",t.teams?s.a.createElement("span",null,Object.keys(t.teams).length):null),s.a.createElement("div",{className:"teamcombination-wrapper p-3"},s.a.createElement(C.a,{className:"tables-container"},s.a.createElement(T.a,{className:"table-card",border:"dark"},s.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0},s.a.createElement("tbody",null,t.teams?Object.keys(t.teams).map((e,n)=>s.a.createElement("tr",{key:n},s.a.createElement(X,{combo:t,selectTeam:a,teamName:e}))):null)))),s.a.createElement("div",{className:"text-center mt-3"},s.a.createElement(W.CSVLink,{data:function(){var e=[];if(t.teams){let a=t.teams;Object.keys(a).forEach(t=>{let n=a[t].members;if(n&&n.length>0)for(let a=0;a<n.length;a++){let s={},l=n[a];if(s.Team=t,l.id){s.Student=l.name.trim();let e=l.choices.map(e=>e.trim());for(let a=1;a<=e.length;a++){s["Choice "+a]=e[a-1]}s["Student Major"]=l.major.trim(),s["Student Classification"]=l.classification.trim(),s.Gender=l.gender.trim();let t=l.skills.map(e=>e.trim());for(let a=1;a<=t.length;a++){s["Skill "+a]=t[a-1]}}e.push(s)}})}return e}(),headers:[{label:"Team",key:"Team"},{label:"Student",key:"Student"},{label:"Choice 1",key:"Choice 1"},{label:"Choice 2",key:"Choice 2"},{label:"Choice 3",key:"Choice 3"},{label:"Choice 4",key:"Choice 4"},{label:"Choice 5",key:"Choice 5"},{label:"Choice 6",key:"Choice 6"},{label:"Student Major",key:"Student Major"},{label:"Student Classification",key:"Student Classification"},{label:"Gender",key:"Gender"},{label:"Skill 1",key:"Skill 1"},{label:"Skill 2",key:"Skill 2"},{label:"Skill 3",key:"Skill 3"}],className:"px-3 py-2 orange"},s.a.createElement("button",{className:"px-3 py-2 orange",style:{borderRadius:"16px"}},"Export")))))};var Z=e=>{let{team:t}=e;return s.a.createElement("div",{className:"pb-4"},s.a.createElement("div",{className:"px-3 text-info"},"Total Members: ",t.members?s.a.createElement("span",null,t.members.length):null),s.a.createElement("div",{className:"teamcombination-wrapper p-3"},s.a.createElement(C.a,{className:"tables-container"},s.a.createElement(T.a,{className:"table-card",border:"dark"},s.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0},t.project?s.a.createElement("tbody",null,s.a.createElement("tr",{className:"team-classmate-row"},s.a.createElement("td",null,s.a.createElement("div",{className:"text-danger font-weight-bolder"},"Project Info: "),s.a.createElement("div",null,t.project.name),s.a.createElement("div",null,"Returning: ",t.project.returning+""),s.a.createElement("div",null,"Skills: "),s.a.createElement(Y.a,null,t.project.skills.map((e,t)=>s.a.createElement("div",{key:t},t+1+": ",e))))),t.members.map((e,t)=>s.a.createElement("tr",{className:"team-classmate-row",key:t},s.a.createElement("td",null,t?null:s.a.createElement("div",{className:"text-danger font-weight-bolder"},"Student Info: "),s.a.createElement("div",null,"Name: ",e.name),s.a.createElement("div",null,"Id: ",e.id),s.a.createElement("div",null,"Major: ",e.major),s.a.createElement("div",null,"Year: ",e.classification),s.a.createElement("div",null,"Gender: ",e.gender),s.a.createElement("div",null,"Response: ",""+e.response),s.a.createElement("div",null,"Choice: ",e.choice_num_awarded))))):null)))))};var K=e=>{let{students:t}=e;return s.a.createElement("div",{className:"pb-4"},s.a.createElement("div",{className:"px-3 text-info"},"Total Unassigned Students: ",t?s.a.createElement("span",null,t.length):null),s.a.createElement("div",{className:"teamcombination-wrapper p-3"},s.a.createElement(C.a,{className:"tables-container"},s.a.createElement(T.a,{className:"table-card",border:"dark"},s.a.createElement(j.a,{striped:!0,bordered:!0,hover:!0},t?s.a.createElement("tbody",null,t.map((e,t)=>s.a.createElement("tr",{className:"team-classmate-row",key:t},s.a.createElement("td",null,t?null:s.a.createElement("div",{className:"text-danger font-weight-bolder"},"Student Info: "),s.a.createElement("div",null,"Name: ",e.name),s.a.createElement("div",null,"Id: ",e.id),s.a.createElement("div",null,"Major: ",e.major),s.a.createElement("div",null,"Year: ",e.classification),s.a.createElement("div",null,"Gender: ",e.gender),s.a.createElement("div",null,"Response: ",""+e.response),s.a.createElement("div",null,"Choice: ",e.choice_num_awarded))))):null)))))};class Q extends s.a.Component{constructor(){super(),this.setCombo=e=>{this.setState({combo:e})},this.setTeam=e=>{this.setState({team:e})},this.setChecked=e=>{this.setState({loading:!0},()=>{setTimeout(()=>{this.setState({checked:e})},100)})},this.regrenerateTeam=()=>{this.setState({loading:!0,combo:{},team:{}}),this.waitToGenerateTeams()},this.selectCombo=e=>{this.props.selectCombination(e)},this.exportBtn=()=>{alert("Does not work!!")},this.switchTooltipText=e=>{e.stopPropagation(),this.setState({showTooltip:!this.state.showTooltip})},this.hideTooltipText=()=>{this.setState({showTooltip:!1})},this.renderTopSection=()=>s.a.createElement("div",{className:"team-builder-header-options"},s.a.createElement("button",{onClick:this.props.switchToSetup,className:"px-3 py-2 back-button green"},"Go Back"),s.a.createElement("div",{className:"team-builder-attributes"},s.a.createElement("div",{className:"font-weight-bolder py-2",style:{display:"inline-block"}},s.a.createElement("h3",{className:"attribute-header"},"Attribute Importance"),s.a.createElement("div",{className:"attribute-tooltip",onClick:this.switchTooltipText},s.a.createElement("div",{className:"tooltip-question-mark"},"?"),this.state.showTooltip?s.a.createElement("div",{className:"tooltip-textbox"},"Numbers that appear in checkboxes displays the order in which the table is sorted by.",s.a.createElement("br",null),s.a.createElement("b",null,"Avg Project Preference Choice"),": The average project choice a student is given.",s.a.createElement("br",null),s.a.createElement("b",null,"Classification Weight"),": Considers spread of student classification per team. The closer to 0 the better.",s.a.createElement("br",null),s.a.createElement("b",null,"Percent of Skills Matched"),": The percentage of skills matched by the students in all the teams. (A team skill is matched if at least one student on the team matches it)",s.a.createElement("br",null),s.a.createElement("b",null,"Members Per Team Weight"),": Considers spread of students across teams. The closer to 0, the better. Always sorted by this value since filling out teams is always the most important."):null)),s.a.createElement("div",{className:"d-md-flex md-flex-row justify-content-center"},s.a.createElement(z,{setChecked:this.setChecked,checked:this.state.checked})))),this.renderTeamCombinations=()=>{const{teamCombos:e}=this.props;return s.a.createElement("div",{className:"team-combo-view"},s.a.createElement("div",{className:"font-weight-bolder text-center"},s.a.createElement("h4",null,"Team Combinations")),s.a.createElement(V,{teamCombos:e,selectCombination:this.selectCombo,selectCombo:this.setCombo,selectTeam:this.setTeam,regrenerateTeam:this.regrenerateTeam,checked:this.state.checked,loading:this.state.loading}))},this.renderViewProjects=()=>s.a.createElement("div",{className:"team-combo-view"},s.a.createElement("div",{className:"font-weight-bolder text-center "},s.a.createElement("h4",null,"View Projects")),s.a.createElement(q,{combo:this.state.combo,selectTeam:this.setTeam,exportBtn:this.exportBtn})),this.renderUnassignedStudents=()=>s.a.createElement("div",{className:"team-combo-view"},s.a.createElement("div",{className:"font-weight-bolder text-center "},s.a.createElement("h4",null,"Unassigned Students")),s.a.createElement(K,{students:this.state.combo.unassignedStudents})),this.renderTeamInformations=()=>s.a.createElement("div",{className:"team-combo-view"},s.a.createElement("div",{className:"font-weight-bolder text-center"},s.a.createElement("h4",null,"Team Informations")),s.a.createElement(Z,{team:this.state.team})),this.state={loading:!0,combo:{},team:{},checked:[],showTooltip:!1}}componentDidMount(){this.waitToGenerateTeams()}componentDidUpdate(e,t){this.props.teamCombos===e.teamCombos&&t.checked===this.state.checked||this.setState({loading:!1})}waitToGenerateTeams(){setTimeout(()=>{const{students:e,projects:t,manuallyAssignedStudents:a,numOfPrefProjects:n,generateTeams:s,maxTeamSize:l}=this.props;s({students:e,projects:t,manuallyAssignedStudents:a,numOfPrefProjects:n,maxTeamSize:l})},100)}render(){return s.a.createElement("div",{className:"team-builder-page",onClick:this.hideTooltipText},s.a.createElement(N,null),this.renderTopSection(),s.a.createElement(L.a,null,s.a.createElement(Y.a,{xs:12,md:3,className:"bg-light"},this.renderTeamCombinations()),s.a.createElement(Y.a,{xs:12,md:3,className:"bg-light"},this.renderUnassignedStudents()),s.a.createElement(Y.a,{xs:12,md:3,className:"bg-light"},this.renderViewProjects()),s.a.createElement(Y.a,{xs:12,md:3,className:"bg-light"},this.renderTeamInformations())))}}var $=Q;var ee=Object(c.b)(e=>({numOfPrefProjects:E(e),students:h(e),projects:p(e),manuallyAssignedStudents:g(e),teamCombos:S(e),maxTeamSize:f(e)}),e=>({generateTeams:t=>e((e=>{let{projects:t,students:a,manuallyAssignedStudents:n,numOfPrefProjects:s,maxTeamSize:l}=e;const r={};let c=JSON.parse(JSON.stringify(a));t.forEach(e=>{r["".concat(e.name)]={project:e,members:[],value:0}});for(let g in n)for(let e=0;e<c.length;e++)if(parseInt(c[e].id)===parseInt(g)){c[e].assigned=!0,r[n[g]].members.push(c[e]),c.splice(e,1);break}let i=c.filter(e=>!e.response);c=c.filter(e=>e.response);for(let g=0;g<c.length;g++)if(c[g].returning)for(let e=0;e<c[g].choices.length;e++){var o,m;if(r["".concat(null===(o=c[g])||void 0===o?void 0:o.choices[e])]){if(r["".concat(c[g].choices[e])].members.length<l){c[g].choice_num_awarded=e+1,r["".concat(c[g].choices[e])].members.push(c[g]),c.splice(g,1);break}}else console.error("".concat(c[g],", ").concat(null===(m=c[g])||void 0===m?void 0:m.choices[e]," does not exist in teams list"))}let d=[],u=[];for(let g=0;g<100;g++){let e=JSON.parse(JSON.stringify(c)),t=JSON.parse(JSON.stringify(r));for(var h=e.length-1;h>0;h--){var p=Math.floor(Math.random()*(h+1));let t=e[h];e[h]=e[p],e[p]=t}for(let l=e.length-1;l>=0;l--)for(let a=0;a<s;a++)if(e[l].choices[a])if(t["".concat(e[l].choices[a])]){if(t["".concat(e[l].choices[a])].members.length<3){e[l].choice_num_awarded=a+1,t["".concat(e[l].choices[a])].members.push(e[l]),e.splice(l,1);break}}else u.push("".concat(e[l].name,", choice ").concat(a+1));for(let r=e.length-1;r>=0;r--)D(e[r],t,s,l)&&e.splice(r,1);e.length>1&&(console.log(e),console.log("Students who responded could not be placed on team based on choices"));let a=[],n=[];for(let s in t)t[s].members.length<3?a.push(t[s]):t[s].members.length>3&&n.push(t[s]);let o=0,m=0;e.forEach(e=>{e.returning?o++:m++});let g=0,E=0,b=0;for(let s in t){let e=0,a=0,n=t[s].members.filter(e=>!e.returning&&!e.assigned);0!==n.length&&(n.forEach(t=>{switch(a+=t.choice_num_awarded,t.classification){case"Freshman":e+=-2;break;case"Sophomore":e+=-1;break;case"Junior":e+=1;break;case"Senior":e+=2}}),g+=a/n.length,E+=e/n.length,b++)}let f=g/b,S=Math.abs(E/b)/2,y=0;for(let s in t){t[s].skillsMet=0;for(let e of t[s].project.skills)for(let a of t[s].members)a.skills.includes(e)&&(y++,t[s].skillsMet++)}let v=y/Object.keys(t).length,k=0;for(let s in t)k+=Math.exp(t[s].skillsMet-v,2);let N=Math.sqrt(k/y),C=v/t[Object.keys(t)[0]].project.skills.length+N/v*-.2,T=0;for(let s in t)T+=t[s].members.length;let j=T/Object.keys(t).length;k=0;for(let s in t)k+=Math.exp(t[s].members.length-j,2);let x=Math.sqrt(k/T)/j;d.push({teams:t,avgScoreChoice:f,avgScoreClass:S,skillsMetRatio:C,coVarMembers:x,unassignedReturn:o,unassignedNormal:m,noResponseStudents:i,unassignedStudents:e})}return u.length&&alert("Following students have nonexistent choices: \n ".concat([...new Set(u)].join("\n"))),{type:"INITIATE_TEAM_GENERATION",payload:d}})(t)),selectCombination:t=>e(F(t))}))($);class te extends s.a.Component{constructor(){super(),this.switchToTeamBuilder=()=>{this.setState({showSetupPage:!1})},this.switchToSetup=()=>{this.setState({showSetupPage:!0})},this.state={showSetupPage:!0}}render(){return s.a.createElement(c.a,{store:k},s.a.createElement("div",{className:"epics-team-builder"},s.a.createElement("div",{className:"gray-background"}),this.state.showSetupPage?s.a.createElement(G,{switchToTeamBuilder:this.switchToTeamBuilder}):s.a.createElement(ee,{switchToSetup:this.switchToSetup})))}}r.a.render(s.a.createElement(te,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.0ca17976.chunk.js.map