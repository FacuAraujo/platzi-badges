import React, { Component } from "react";

import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";
import Gravatar from "./Gravatar";

class Badge extends Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge_header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div className="Badge_section_name">
          <Gravatar className="Badge_avatar" email={this.props.email} />
          <h1>
            {this.props.firstName} <br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge_section_info">
          <h3>{this.props.jobTitle}</h3>
          <div>@{this.props.twitter}</div>
        </div>

        <div className="Badge_footer">#platziconf</div>
      </div>
    );
  }
}

export default Badge;
