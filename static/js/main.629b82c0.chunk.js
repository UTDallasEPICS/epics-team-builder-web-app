(this["webpackJsonpepics-team-builder"]=this["webpackJsonpepics-team-builder"]||[]).push([[0],{29:function(e,t){},39:function(e,t,a){e.exports=a(62)},44:function(e,t,a){},50:function(e,t,a){e.exports=a.p+"static/media/Epics.183416a8.png"},56:function(e,t){},57:function(e,t){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),s=(a(44),a(45),a(27),a(5)),o=a(6),i=a(9),m=a(7),u=a(10),d=a(16),h=a(11),f=a(33),p=a(38),b=Object(h.c)({students:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"CHANGE_STUDENT_ARRAY":return n;default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"CHANGE_PROJECTS_ARRAY":return n;default:return e}},manuallyAssignedStudents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"REMOVE_STUDENT":return n;case"ASSIGN_PROJ_TO_STUDENT":return Object(p.a)({},e,{},n);default:return e}},numOfPreferredProjects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:6,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"CHANGE_NUM_PROJECT_SLIDER":return n;default:return e}},maxChoicesConsidered:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_MAX_POSSIBLE_CHOICES":return n;default:return e}},maxTeamSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SET_MAX_TEAM_SIZE":return n;default:return e}}}),g=Object(h.c)({getSelectedCombo:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"SELECT_TEAM_COMBINATION":return n;default:return e}},getTeamCombos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"INITIATE_TEAM_GENERATION":return n;default:return e}}}),E=Object(h.c)({setupPage:b,teamCombos:g}),v=function(e){return e.setupPage.students},y=function(e){return e.setupPage.projects},S=function(e){return e.setupPage.manuallyAssignedStudents},k=function(e){return e.setupPage.numOfPreferredProjects},j=function(e){return e.setupPage.maxChoicesConsidered},N=function(e){return e.setupPage.maxTeamSize},C=function(e){return e.teamCombos.getTeamCombos},T=[f.a],x=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||h.d,O=Object(h.e)(E,{},x(h.a.apply(void 0,T))),P=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"header"},r.a.createElement("img",{src:a(50),alt:"EPIC's Logo"})))}}]),t}(r.a.Component),w=a(63),A=a(68),_=a(64),I=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onClickHandler=function(e){!0===document.getElementById("checkbox"+e).checked?document.getElementById("checkbox"+e).checked=!1:document.getElementById("checkbox"+e).checked=!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"delete",value:function(e,t){for(var a=Object.assign({},t),n=document.getElementsByClassName("messageCheckbox"),r=0;n[r];++r)n[r].checked&&(delete a[e[n[r].value].id],n[r].checked=!1);this.props.removeStudent(a)}},{key:"mapStudents",value:function(e,t){for(var a=[],n=0,r=Object.keys(e);n<r.length;n++){var l=r[n];e[l].id in t&&a.push(e[l])}return a}},{key:"render",value:function(){var e=this,t=this.props,a=t.manuallyAssignedStudents,n=t.students,l=this.mapStudents(n,a);return r.a.createElement("div",{className:"manual-project-assignment"},r.a.createElement("label",{className:"title"},"Manually Assigned Students"),r.a.createElement(w.a,{className:"tables-container"},r.a.createElement(A.a,{className:"table-card",border:"dark"},r.a.createElement(_.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"8%"}}),r.a.createElement("th",{style:{width:"20%"}},"Name"),r.a.createElement("th",{style:{width:"20%"}},"NetID"),r.a.createElement("th",{style:{width:"42%"}},"Project Name"))),r.a.createElement("tbody",null,l.map((function(t,n){return r.a.createElement("tr",{key:n,"data-item":t,onClick:e.onClickHandler.bind(e,n)},r.a.createElement("td",{style:{textAlign:"center"}},r.a.createElement("input",{id:"checkbox"+n,className:"messageCheckbox",type:"checkbox",name:"box",value:n,onClick:e.onClickHandler.bind(e,n)})),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.id),r.a.createElement("td",null,a[t.id]))})))))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("button",{className:"red",type:"submit",style:{width:"140px"},onClick:function(){return e.delete(l,a)}},"Delete")))}}]),t}(r.a.Component),M=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).addProjectToStudent=function(){var e=a.props,t=e.projects,n=e.students,r={},l=null,c=!0,s=!1,o=void 0;try{for(var i,m=t[Symbol.iterator]();!(c=(i=m.next()).done);c=!0){var u=i.value;if(document.getElementById(u.name).checked){l=u.name;break}}}catch(f){s=!0,o=f}finally{try{c||null==m.return||m.return()}finally{if(s)throw o}}if(l){document.getElementById(l).checked=!1;for(var d=0;d<n.length;d++){var h=n[d].id;document.getElementById(h)&&document.getElementById(h).checked&&(document.getElementById(h).checked=!1,r[h]=l)}a.props.assignProjToStudents(r)}},a.onProjectClickHandler=function(e){a.props.projects.forEach((function(t){t.name!==e&&(document.getElementById(t.name).checked=!1)})),document.getElementById(e).checked=!document.getElementById(e).checked},a.onStudentClickHandler=function(e){document.getElementById(e).checked=!document.getElementById(e).checked},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.students,n=t.projects,l=t.manuallyAssignedStudents;return r.a.createElement("div",{className:"manual-project-assignment"},r.a.createElement("label",{className:"title"},"Manual Project Assignment"),r.a.createElement(w.a,{className:"tables-container"},r.a.createElement(A.a,{className:"table-card",border:"dark"},r.a.createElement(_.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"15%"}}),r.a.createElement("th",null,"Project Name"))),r.a.createElement("tbody",null,n.map((function(t,a){return r.a.createElement("tr",{key:a,onClick:e.onProjectClickHandler.bind(e,t.name)},r.a.createElement("td",null,r.a.createElement("input",{type:"radio",onClick:e.onProjectClickHandler.bind(e,t.name),defaultChecked:!1,id:t.name})),r.a.createElement("td",null,t.name))}))))),r.a.createElement(A.a,{className:"table-card",border:"dark"},r.a.createElement(_.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{style:{width:"15%"}}),r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"NetID"))),r.a.createElement("tbody",null,a.map((function(t,a){for(var n in l)if(parseInt(n)===t.id)return null;return r.a.createElement("tr",{key:a,onClick:e.onStudentClickHandler.bind(e,t.id)},r.a.createElement("td",null,r.a.createElement("input",{type:"checkbox",className:"studentBox",defaultChecked:!1,id:t.id,onClick:e.onStudentClickHandler.bind(e,t.id)})),r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.id))})))))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement("button",{className:"green",style:{width:"140px"},onClick:this.addProjectToStudent},"Add")))}}]),t}(r.a.Component),R=a(18),B=a(14),D=a.n(B),F=a(25),G=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).getExtension=function(e){var t=e.split(".");return t[t.length-1]},a.onProjectInputClick=function(){a.projectInputRef.current.click()},a.onStudentInputClick=function(){a.studentInputRef.current.click()},a.onProjectDrop=function(e){var t={target:{files:e}};a.handleChangeProjects(t)},a.onStudentDrop=function(e){var t={target:{files:e}};a.handleChangeStudents(t)},a.state={projectFileName:"Or drag file here",studentFileName:"Or drag file here"},a.projectInputRef=r.a.createRef(),a.studentInputRef=r.a.createRef(),a.projectBtnRef=r.a.createRef(),a.studentBtnRef=r.a.createRef(),a.handleChangeProjects=a.handleChangeProjects.bind(Object(R.a)(a)),a.handleChangeStudents=a.handleChangeStudents.bind(Object(R.a)(a)),a.numProjects=0,a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChangeProjects",value:function(e){var t=e.target.files;if(t&&t[0]){if("xlsx"!==this.getExtension(t[0].name))return e.target.value="",alert("File must be of type xlsx");this.setState({projectFileName:t[0].name}),this.handleProjectFile(t[0])}this.projectBtnRef.current.blur()}},{key:"handleChangeStudents",value:function(e){var t=e.target.files;if(t&&t[0]){if("xlsx"!==this.getExtension(t[0].name))return e.target.value="",alert("File must be of type xlsx");this.setState({studentFileName:t[0].name}),this.handleStudentFile(t[0])}this.studentBtnRef.current.blur()}},{key:"handleProjectFile",value:function(e){var t=this,a=new FileReader,n=!!a.readAsBinaryString;a.onload=function(a){for(var r=a.target.result,l=D.a.read(r,{type:n?"binary":"array",bookVBA:!0}),c=l.SheetNames[0],s=l.Sheets[c],o=D.a.utils.sheet_to_json(s),i={file:e,data:o},m=[],u=D.a.utils.decode_range(s["!ref"]).e.c+1,d=0;d<u;++d)m[d]=s["".concat(D.a.utils.encode_col(d),"1")].v;var h=["Skill 1","Skill 2","Skill 3","Returning (Y/N)","Project Name"].reduce((function(e,t){return m.includes(t)||(e+=" "+t+","),e}),"Missing columns:");if(h.length>16)return t.setState({projectFileName:"Or drag file here"}),alert(h.slice(0,-1));var f=i.data.reduce((function(e,t){var a=[t["Skill 1"],t["Skill 2"],t["Skill 3"]];return e.push({name:t["Project Name"]?t["Project Name"]:"N/A",returning:"Y"===t["Returning (Y/N)"],skills:a[0]?a:[]}),e}),[]);t.props.changeProjectsArray(f),t.numProjects=f.length},n?a.readAsBinaryString(e):a.readAsArrayBuffer(e)}},{key:"handleStudentFile",value:function(e){var t=this,a=this.props,n=a.changeStudentsArray,r=a.setMaxPossibleChoices,l=a.changeNumOfPreferredProjects,c=a.setMaxTeamSize,s=new FileReader,o=!!s.readAsBinaryString;s.onload=function(a){for(var s=a.target.result,i=D.a.read(s,{type:o?"binary":"array",bookVBA:!0}),m=i.SheetNames[0],u=i.Sheets[m],d=D.a.utils.sheet_to_json(u),h={file:e,data:d},f=[],p=[],b=D.a.utils.decode_range(u["!ref"]).e.c+1,g=0;g<b;++g)f[g]=u["".concat(D.a.utils.encode_col(g),"1")].v,f[g].includes("Choice")&&p.push(f[g]);r(p.length),l(p.length);var E=["Student","Response Date","SSO ID","Course","Student Major","Student Classification","Gender","Skill 1","Skill 2","Skill 3"].reduce((function(e,t){return f.includes(t)||(e+=" "+t+","),e}),"Missing columns:");if(E.length>16)return t.setState({studentFileName:"Or drag file here"}),alert(E.slice(0,-1));var v=[],y=h.data.reduce((function(e,t){if(t["Student Major"])var a=t["Student Major"].substring(t["Student Major"].indexOf("::::")+4,t["Student Major"].length);var n=[t["Skill 1"],t["Skill 2"],t["Skill 3"]],r=p.map((function(e){return t[e]}));return r.some((function(e){return!e}))||n.some((function(e){return!e}))?v.push(t.Student):e.push({name:t.Student?t.Student:"N/A",response:!!t["Response Date"],id:t["SSO ID"]?t["SSO ID"]:"N/A",returning:"EPCS 3200"===t.Course,choices:r,major:a,classification:t["Student Classification"]?t["Student Classification"]:"N/A",gender:t.Gender?t.Gender:"N/A",skills:n[0]?n:[],found_team:!1,choice_num_awarded:0}),e}),[]);alert("The following students have not filled out one or more skills/choices: \n ".concat(v.join("\n"))),n(y),c(Math.ceil(y.length/t.numProjects))},o?s.readAsBinaryString(e):s.readAsArrayBuffer(e)}},{key:"render",value:function(){var e=this,t=this.state,a=t.projectFileName,n=t.studentFileName;return r.a.createElement("div",{className:"file-uploader"},r.a.createElement(F.a,{onDrop:this.onProjectDrop},(function(t){var n=t.getRootProps,l=t.getInputProps,c=t.isDragActive;return r.a.createElement("div",Object.assign({},n(),{className:c?"drag-box":""}),r.a.createElement("input",Object.assign({},l(),{disabled:!0})),r.a.createElement("div",{className:"upload-project"},r.a.createElement("button",{className:"orange",onClick:e.onProjectInputClick,ref:e.projectBtnRef},"Upload Project Files"),r.a.createElement("input",{id:"projectInput",type:"file",accept:".xlsx",style:{display:"none"},ref:e.projectInputRef,onChange:e.handleChangeProjects}),r.a.createElement("label",{className:"file-name-display"},a)))})),r.a.createElement(F.a,{onDrop:this.onStudentDrop},(function(t){var a=t.getRootProps,l=t.getInputProps,c=t.isDragActive;return r.a.createElement("div",Object.assign({},a(),{className:c?"drag-box":""}),r.a.createElement("input",Object.assign({},l(),{disabled:!0})),r.a.createElement("div",{className:"upload-students"},r.a.createElement("button",{className:"orange",onClick:e.onStudentInputClick,ref:e.studentBtnRef},"Upload Student Files"),r.a.createElement("input",{id:"studentInput",type:"file",accept:".xlsx",style:{display:"none"},ref:e.studentInputRef,onChange:e.handleChangeStudents}),r.a.createElement("label",{className:"file-name-display"},n)))})))}}]),t}(n.Component);var z=function(e){var t=e.maxTeamSize,a=e.setMaxTeamSize;return r.a.createElement("div",{className:"preferred-project-slider"},r.a.createElement("div",{className:"auto-checkbox-container"},r.a.createElement("div",{className:"team-size-input"},r.a.createElement("p",null,"Max Team Size: "),r.a.createElement("input",{type:"number",value:t,onChange:function(e){a(Number(e.target.value))}}))))},H=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.numOfPrefProjects,a=e.students,n=e.projects,l=e.assignProjToStudents,c=e.changeStudentsArray,s=e.changeProjectsArray,o=e.manuallyAssignedStudents,i=e.removeStudent,m=e.setMaxPossibleChoices,u=e.setMaxTeamSize,d=e.maxTeamSize,h=e.maxPossibleChoices,f=e.changeNumOfPreferredProjects,p=e.switchToTeamBuilder;return r.a.createElement("div",{className:"setup-page"},r.a.createElement(P,null),r.a.createElement("div",{className:"setup-grid"},r.a.createElement(G,{changeStudentsArray:c,changeProjectsArray:s,setMaxPossibleChoices:m,maxPossibleChoices:h,changeNumOfPreferredProjects:f,setMaxTeamSize:u}),r.a.createElement(M,{students:a,projects:n,assignProjToStudents:l,changeStudentsArray:c,manuallyAssignedStudents:o}),r.a.createElement("div",{className:"manually-assigned-students"},r.a.createElement(I,{students:a,manuallyAssignedStudents:o,removeStudent:i}))),r.a.createElement(z,{numOfPrefProjects:t,maxPossibleChoices:h,changeNumOfPreferredProjects:f,maxTeamSize:d,setMaxTeamSize:u}),r.a.createElement("button",{className:"orange generate-teams-btn",onClick:p,disabled:0===a.length||0===n.length},"Build Teams"))}}]),t}(r.a.Component);H.defaultProps={numOfPrefProjects:6,students:[],projects:[],manuallyAssignedStudents:{}};var U=H;function J(e,t,a,n){for(var r=0;r<a&&r<e.choices.length;r++)for(var l=t["".concat(e.choices[r])],c=l.members.length-1;c>=0;c--)if(!l.members[c].returning&&!l.members[c].assigned)for(var s=0;s<a;s++)if(t["".concat(l.members[c].choices[s])].members.length<n)return l.members[c].choice_num_awarded=s+1,e.choice_num_awarded=r+1,t["".concat(l.members[c].choices[s])].members.push(l.members[c]),l.members.splice(c,1),l.members.push(e),!0;return!1}var V=function(e){return{type:"SELECT_TEAM_COMBINATION",payload:e}},L=Object(d.b)((function(e){return{numOfPrefProjects:k(e),students:v(e),projects:y(e),manuallyAssignedStudents:S(e),maxPossibleChoices:j(e),maxTeamSize:N(e)}}),(function(e){return{changeNumOfPreferredProjects:function(t){return e(function(e){return{type:"CHANGE_NUM_PROJECT_SLIDER",payload:e}}(t))},changeProjectsArray:function(t){return e(function(e){return{type:"CHANGE_PROJECTS_ARRAY",payload:e}}(t))},changeStudentsArray:function(t){return e(function(e){return{type:"CHANGE_STUDENT_ARRAY",payload:e}}(t))},assignProjToStudents:function(t){return e(function(e){return{type:"ASSIGN_PROJ_TO_STUDENT",payload:e}}(t))},removeStudent:function(t){return e(function(e){return{type:"REMOVE_STUDENT",payload:e}}(t))},selectCombination:function(t){return e(V(t))},setMaxPossibleChoices:function(t){return e(function(e){return{type:"SET_MAX_POSSIBLE_CHOICES",payload:e}}(t))},setMaxTeamSize:function(t){return e(function(e){return{type:"SET_MAX_TEAM_SIZE",payload:e}}(t))}}}))(U),Y=a(19),X=function(e){var t=e.setChecked,a=e.checked,n=function(e){return function(){var n=a.indexOf(e),r=Object(Y.a)(a);-1===n?r.push(e):r.splice(n,1),t(r)}};return[{value:"avgScoreChoice",display_name:"Project Preference"},{value:"avgScoreClass",display_name:"Classification"},{value:"skillsMetRatio",display_name:"Skill Match"}].map((function(e,t){return r.a.createElement("div",{className:"px-4 font-weight-bold attribute-checkboxes",key:t},r.a.createElement("div",{className:"checkbox",onClick:n(e.value)},r.a.createElement("div",{className:"checkbox-pos"},-1===a.indexOf(e.value)?null:a.indexOf(e.value)+1)),r.a.createElement("label",{className:"form-check-label ml-3"},e.display_name))}))},W=a(65);var q=function(e){var t=e.combo,a=e.index,n=e.selectCombination,l=e.selectTeam;return r.a.createElement(r.a.Fragment,null,r.a.createElement("td",null,r.a.createElement("div",{className:"text-danger font-weight-bolder"},"Combination ",a+1),r.a.createElement("div",null,"Avg Project Preference Choice: ",t.avgScoreChoice.toFixed(3)),r.a.createElement("div",null,"Classification Weight: ",t.avgScoreClass.toFixed(3)),r.a.createElement("div",null,"Percent of Skills Matched: ",t.skillsMetRatio.toFixed(3)),r.a.createElement("div",null,"Members Per Team Weight: ",t.coVarMembers.toFixed(3)),r.a.createElement("div",null,"Unassigned Student(s): ",t.unassignedStudents.length)),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){n(t),l({})},className:"dark-gray text-center",style:{width:"8rem"}},"Select")))},Z=a(36);var K=function(e){var t=e.teamCombos,a=void 0===t?[]:t,n=e.selectCombo,l=e.regrenerateTeam,c=e.selectTeam,s=e.checked,o=e.loading;return r.a.createElement("div",{className:"pb-4"},r.a.createElement("div",{className:"px-3 text-info"},"Total Combinations: ",a.length," "),r.a.createElement("div",{className:"teamcombination-wrapper p-3"},r.a.createElement(w.a,{className:"tables-container"},r.a.createElement(A.a,{className:"table-card",border:"dark"},o?r.a.createElement("div",{style:{height:"50vh"},className:"d-flex justify-content-center align-items-center"},r.a.createElement(W.a,{animation:"border",role:"status",size:"lg"})):r.a.createElement(_.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("tbody",null,Object(Z.orderBy)(a,[].concat(Object(Y.a)(s),["coVarMembers"]),[].concat(Object(Y.a)(s.map((function(e){return"skillsMetRatio"===e?"desc":"asc"}))),["asc"])).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement(q,{selectCombination:n,selectTeam:c,combo:e,index:t}))})))))),r.a.createElement("div",{className:"text-info"},"Number of No Response Students: ",a[0]?a[0].noResponseStudents.length:null),r.a.createElement("div",{className:"text-center",style:{marginTop:".5rem"}},r.a.createElement("button",{onClick:l,className:"px-3 py-2 orange",style:{borderRadius:"16px"}},"Regenerate Teams"))))},Q=a(67),$=a(66);var ee=function(e){var t=e.combo,a=e.selectTeam,l=e.teamName;return r.a.createElement(n.Fragment,null,r.a.createElement("td",null,r.a.createElement("div",{className:Object.keys(t.teams[l].members).length<3?"text-danger":null},l),r.a.createElement("div",{className:"text-danger small"},Object.keys(t.teams[l].members).length<3?"*Minimum team size not met":null)),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){a(t.teams[l])},style:{width:"8rem"},className:"dark-gray text-center"},"Select")))},te=a(37),ae=function(e){var t=e.combo,a=void 0===t?{}:t,n=e.selectTeam;return r.a.createElement("div",{className:"pb-4"},r.a.createElement("div",{className:"px-3 text-info"},"Total Projects: ",a.teams?r.a.createElement("span",null,Object.keys(a.teams).length):null),r.a.createElement("div",{className:"teamcombination-wrapper p-3"},r.a.createElement(w.a,{className:"tables-container"},r.a.createElement(A.a,{className:"table-card",border:"dark"},r.a.createElement(_.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("tbody",null,a.teams?Object.keys(a.teams).map((function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement(ee,{combo:a,selectTeam:n,teamName:e}))})):null)))),r.a.createElement("div",{className:"text-center mt-3"},r.a.createElement(te.CSVLink,{data:function(){var e=[];if(a.teams){var t=a.teams;Object.keys(t).forEach((function(a){var n=t[a].members;if(n&&n.length>0)for(var r=0;r<n.length;r++){var l={},c=n[r];if(l.Team=a,c.id){l.Student=c.name.trim();for(var s=c.choices.map((function(e){return e.trim()})),o=1;o<=s.length;o++){l["Choice "+o]=s[o-1]}l["Student Major"]=c.major.trim(),l["Student Classification"]=c.classification.trim(),l.Gender=c.gender.trim();for(var i=c.skills.map((function(e){return e.trim()})),m=1;m<=i.length;m++){l["Skill "+m]=i[m-1]}}e.push(l)}}))}return e}(),headers:[{label:"Team",key:"Team"},{label:"Student",key:"Student"},{label:"Choice 1",key:"Choice 1"},{label:"Choice 2",key:"Choice 2"},{label:"Choice 3",key:"Choice 3"},{label:"Choice 4",key:"Choice 4"},{label:"Choice 5",key:"Choice 5"},{label:"Choice 6",key:"Choice 6"},{label:"Student Major",key:"Student Major"},{label:"Student Classification",key:"Student Classification"},{label:"Gender",key:"Gender"},{label:"Skill 1",key:"Skill 1"},{label:"Skill 2",key:"Skill 2"},{label:"Skill 3",key:"Skill 3"}],className:"px-3 py-2 orange"},r.a.createElement("button",{className:"px-3 py-2 orange",style:{borderRadius:"16px"}},"Export")))))},ne=function(e){var t=e.team;return r.a.createElement("div",{className:"pb-4"},r.a.createElement("div",{className:"px-3 text-info"},"Total Members: ",t.members?r.a.createElement("span",null,t.members.length):null),r.a.createElement("div",{className:"teamcombination-wrapper p-3"},r.a.createElement(w.a,{className:"tables-container"},r.a.createElement(A.a,{className:"table-card",border:"dark"},r.a.createElement(_.a,{striped:!0,bordered:!0,hover:!0},t.project?r.a.createElement("tbody",null,r.a.createElement("tr",{className:"team-classmate-row"},r.a.createElement("td",null,r.a.createElement("div",{className:"text-danger font-weight-bolder"},"Project Info: "),r.a.createElement("div",null,t.project.name),r.a.createElement("div",null,"Returning: ",t.project.returning+""),r.a.createElement("div",null,"Skills: "),r.a.createElement($.a,null,t.project.skills.map((function(e,t){return r.a.createElement("div",{key:t},t+1+": ",e)}))))),t.members.map((function(e,t){return r.a.createElement("tr",{className:"team-classmate-row",key:t},r.a.createElement("td",null,t?null:r.a.createElement("div",{className:"text-danger font-weight-bolder"},"Student Info: "),r.a.createElement("div",null,"Name: ",e.name),r.a.createElement("div",null,"Id: ",e.id),r.a.createElement("div",null,"Major: ",e.major),r.a.createElement("div",null,"Year: ",e.classification),r.a.createElement("div",null,"Gender: ",e.gender),r.a.createElement("div",null,"Response: ",""+e.response),r.a.createElement("div",null,"Choice: ",e.choice_num_awarded)))}))):null)))))},re=function(e){var t=e.students;return console.log(t),r.a.createElement("div",{className:"pb-4"},r.a.createElement("div",{className:"px-3 text-info"},"Total Unassigned Students: ",t?r.a.createElement("span",null,t.length):null),r.a.createElement("div",{className:"teamcombination-wrapper p-3"},r.a.createElement(w.a,{className:"tables-container"},r.a.createElement(A.a,{className:"table-card",border:"dark"},r.a.createElement(_.a,{striped:!0,bordered:!0,hover:!0},t?r.a.createElement("tbody",null,t.map((function(e,t){return r.a.createElement("tr",{className:"team-classmate-row",key:t},r.a.createElement("td",null,t?null:r.a.createElement("div",{className:"text-danger font-weight-bolder"},"Student Info: "),r.a.createElement("div",null,"Name: ",e.name),r.a.createElement("div",null,"Id: ",e.id),r.a.createElement("div",null,"Major: ",e.major),r.a.createElement("div",null,"Year: ",e.classification),r.a.createElement("div",null,"Gender: ",e.gender),r.a.createElement("div",null,"Response: ",""+e.response),r.a.createElement("div",null,"Choice: ",e.choice_num_awarded)))}))):null)))))},le=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).setCombo=function(t){e.setState({combo:t})},e.setTeam=function(t){e.setState({team:t})},e.setChecked=function(t){e.setState({loading:!0},(function(){setTimeout((function(){e.setState({checked:t})}),100)}))},e.regrenerateTeam=function(){e.setState({loading:!0,combo:{},team:{}}),e.waitToGenerateTeams()},e.selectCombo=function(t){e.props.selectCombination(t)},e.exportBtn=function(){alert("Does not work!!")},e.switchTooltipText=function(t){t.stopPropagation(),e.setState({showTooltip:!e.state.showTooltip})},e.hideTooltipText=function(){e.setState({showTooltip:!1})},e.renderTopSection=function(){return r.a.createElement("div",{className:"team-builder-header-options"},r.a.createElement("button",{onClick:e.props.switchToSetup,className:"px-3 py-2 back-button green"},"Go Back"),r.a.createElement("div",{className:"team-builder-attributes"},r.a.createElement("div",{className:"font-weight-bolder py-2",style:{display:"inline-block"}},r.a.createElement("h3",{className:"attribute-header"},"Attribute Importance"),r.a.createElement("div",{className:"attribute-tooltip",onClick:e.switchTooltipText},r.a.createElement("div",{className:"tooltip-question-mark"},"?"),e.state.showTooltip?r.a.createElement("div",{className:"tooltip-textbox"},"Numbers that appear in checkboxes displays the order in which the table is sorted by.",r.a.createElement("br",null),r.a.createElement("b",null,"Avg Project Preference Choice"),": The average project choice a student is given.",r.a.createElement("br",null),r.a.createElement("b",null,"Classification Weight"),": Considers spread of student classification per team. The closer to 0 the better.",r.a.createElement("br",null),r.a.createElement("b",null,"Percent of Skills Matched"),": The percentage of skills matched by the students in all the teams. (A team skill is matched if at least one student on the team matches it)",r.a.createElement("br",null),r.a.createElement("b",null,"Members Per Team Weight"),": Considers spread of students across teams. The closer to 0, the better. Always sorted by this value since filling out teams is always the most important."):null)),r.a.createElement("div",{className:"d-md-flex md-flex-row justify-content-center"},r.a.createElement(X,{setChecked:e.setChecked,checked:e.state.checked}))))},e.renderTeamCombinations=function(){var t=e.props.teamCombos;return r.a.createElement("div",{className:"team-combo-view"},r.a.createElement("div",{className:"font-weight-bolder text-center"},r.a.createElement("h4",null,"Team Combinations")),r.a.createElement(K,{teamCombos:t,selectCombination:e.selectCombo,selectCombo:e.setCombo,selectTeam:e.setTeam,regrenerateTeam:e.regrenerateTeam,checked:e.state.checked,loading:e.state.loading}))},e.renderViewProjects=function(){return r.a.createElement("div",{className:"team-combo-view"},r.a.createElement("div",{className:"font-weight-bolder text-center "},r.a.createElement("h4",null,"View Projects")),r.a.createElement(ae,{combo:e.state.combo,selectTeam:e.setTeam,exportBtn:e.exportBtn}))},e.renderUnassignedStudents=function(){return r.a.createElement("div",{className:"team-combo-view"},r.a.createElement("div",{className:"font-weight-bolder text-center "},r.a.createElement("h4",null,"Unassigned Students")),r.a.createElement(re,{students:e.state.combo.unassignedStudents}))},e.renderTeamInformations=function(){return r.a.createElement("div",{className:"team-combo-view"},r.a.createElement("div",{className:"font-weight-bolder text-center"},r.a.createElement("h4",null,"Team Informations")),r.a.createElement(ne,{team:e.state.team}))},e.state={loading:!0,combo:{},team:{},checked:[],showTooltip:!1},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.waitToGenerateTeams()}},{key:"componentDidUpdate",value:function(e,t){this.props.teamCombos===e.teamCombos&&t.checked===this.state.checked||this.setState({loading:!1})}},{key:"waitToGenerateTeams",value:function(){var e=this;setTimeout((function(){var t=e.props,a=t.students,n=t.projects,r=t.manuallyAssignedStudents,l=t.numOfPrefProjects;(0,t.generateTeams)({students:a,projects:n,manuallyAssignedStudents:r,numOfPrefProjects:l,maxTeamSize:t.maxTeamSize})}),100)}},{key:"render",value:function(){return r.a.createElement("div",{className:"team-builder-page",onClick:this.hideTooltipText},r.a.createElement(P,null),this.renderTopSection(),r.a.createElement(Q.a,null,r.a.createElement($.a,{xs:12,md:3,className:"bg-light"},this.renderTeamCombinations()),r.a.createElement($.a,{xs:12,md:3,className:"bg-light"},this.renderUnassignedStudents()),r.a.createElement($.a,{xs:12,md:3,className:"bg-light"},this.renderViewProjects()),r.a.createElement($.a,{xs:12,md:3,className:"bg-light"},this.renderTeamInformations())))}}]),t}(r.a.Component),ce=Object(d.b)((function(e){return{numOfPrefProjects:k(e),students:v(e),projects:y(e),manuallyAssignedStudents:S(e),teamCombos:C(e),maxTeamSize:N(e)}}),(function(e){return{generateTeams:function(t){return e(function(e){var t=e.projects,a=e.students,n=e.manuallyAssignedStudents,r=e.numOfPrefProjects,l=e.maxTeamSize,c={},s=JSON.parse(JSON.stringify(a));for(var o in t.forEach((function(e){c["".concat(e.name)]={project:e,members:[],value:0}})),n)for(var i=0;i<s.length;i++)if(parseInt(s[i].id)===parseInt(o)){s[i].assigned=!0,c[n[o]].members.push(s[i]),s.splice(i,1);break}var m=s.filter((function(e){return!e.response}));s=s.filter((function(e){return e.response}));for(var u=0;u<s.length;u++)if(s[u].returning)for(var d=0;d<s[u].choices.length;d++)if(c["".concat(s[u].choices[d])].members.length<l){s[u].choice_num_awarded=d+1,c["".concat(s[u].choices[d])].members.push(s[u]),s.splice(u,1);break}for(var h=[],f=function(e){var t=JSON.parse(JSON.stringify(s)),a=JSON.parse(JSON.stringify(c));for(b=t.length-1;b>0;b--){g=Math.floor(Math.random()*(b+1));var n=t[b];t[b]=t[g],t[g]=n}for(var o=t.length-1;o>=0;o--)for(var i=0;i<r;i++)if(t[o].choices[i]&&a["".concat(t[o].choices[i])].members.length<3){t[o].choice_num_awarded=i+1,a["".concat(t[o].choices[i])].members.push(t[o]),t.splice(o,1);break}for(var u=t.length-1;u>=0;u--)J(t[u],a,r,l)&&t.splice(u,1);t.length>1&&(console.log(t),console.log("Students who responded could not be placed on team based on choices"));var d=[],f=[];for(var p in a)a[p].members.length<3?d.push(a[p]):a[p].members.length>3&&f.push(a[p]);for(var E=function(){for(var e=d[0],t=!1,n=function(n){var r=f[n],l=function(n){var l=r.members[n];return l.returning||l.assigned?"continue":r.members.length<=3?(f.pop(),"break"):(l.choices.forEach((function(t,c){t===e.project.name&&(l.choice_num_awarded=c+1,a["".concat(e.project.name)].members.push(l),a["".concat(r.project.name)].members.splice(n,1))})),a["".concat(e.project.name)].members.length>=3?(t=!0,"break"):void 0)};e:for(var c=r.members.length-1;c>=0;c--){switch(l(c)){case"continue":continue;case"break":break e}}if(t)return"break"},r=f.length-1;r>=0;r--){if("break"===n(r))break}d.pop()};d.length>0;)E();var v=0,y=0;t.forEach((function(e){e.returning?v++:y++}));var S=0,k=0,j=0;for(var N in a){var C=0,T=0,x=a[N].members.filter((function(e){return!e.returning&&!e.assigned}));0!==x.length&&(x.forEach((function(e){switch(T+=e.choice_num_awarded,e.classification){case"Freshman":C+=-2;break;case"Sophomore":C+=-1;break;case"Junior":C+=1;break;case"Senior":C+=2}})),S+=T/x.length,k+=C/x.length,j++)}var O=S/j,P=Math.abs(k/j)/2,w=0;for(var A in a)for(var _ in a[A].skillsMet=0,a[A].project.skills){var I=!0,M=!1,R=void 0;try{for(var B,D=a[A].members[Symbol.iterator]();!(I=(B=D.next()).done);I=!0){B.value.skills.includes(_)&&(w++,a[A].skillsMet++)}}catch(q){M=!0,R=q}finally{try{I||null==D.return||D.return()}finally{if(M)throw R}}}var F=w/Object.keys(a).length,G=0;for(var z in a)G+=Math.exp(a[z].skillsMet-F,2);var H=Math.sqrt(G/w),U=F/a[Object.keys(a)[0]].project.skills.length+H/F*-.2,V=0;for(var L in a)V+=a[L].members.length;var Y=V/Object.keys(a).length;for(var X in G=0,a)G+=Math.exp(a[X].members.length-Y,2);var W=Math.sqrt(G/V)/Y;h.push({teams:a,avgScoreChoice:O,avgScoreClass:P,skillsMetRatio:U,coVarMembers:W,unassignedReturn:v,unassignedNormal:y,noResponseStudents:m,unassignedStudents:t})},p=0;p<1e3;p++){var b,g;f()}return{type:"INITIATE_TEAM_GENERATION",payload:h}}(t))},selectCombination:function(t){return e(V(t))}}}))(le),se=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).switchToTeamBuilder=function(){e.setState({showSetupPage:!1})},e.switchToSetup=function(){e.setState({showSetupPage:!0})},e.state={showSetupPage:!0},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,{store:O},r.a.createElement("div",{className:"epics-team-builder"},r.a.createElement("div",{className:"gray-background"}),this.state.showSetupPage?r.a.createElement(L,{switchToTeamBuilder:this.switchToTeamBuilder}):r.a.createElement(ce,{switchToSetup:this.switchToSetup})))}}]),t}(r.a.Component);c.a.render(r.a.createElement(se,null),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.629b82c0.chunk.js.map