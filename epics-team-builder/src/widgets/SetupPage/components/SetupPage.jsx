import React from "react";
import Header from "../components/Header";
export default class SetupPage extends React.Component {
  render() {
    return (
      <div className="setup-page">
        <Header />
        <div className="setup-grid">

          <div className="File-Uploader">{/*Component goes here*/}</div>

          <div className="Manual-project-Assignment"></div>

          <div className="Manually-Assigned-Students"></div>

          <div className="Build-Team"></div>
          
        </div>
      </div>
    );
  }
}
