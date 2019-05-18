import React, { Component } from 'react';

class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardStyle: {},
    }
  }

  render() {
    return (
      <div className="project-card" style={ this.state.cardStyle } >
        <div className="feature-image-container">
          <a href={this.props.link}>
            <img className="project-image" src={this.props.featureImage} alt="project screenshot" />
          </a>
        </div>
        <div className="links-container">
          <a href={this.props.link}>
            <img className="link-icon" src="images/icons/iconfinder_Internet_Line-02_1587499.svg" alt="project link icon" />
          </a>
          <a href={this.props.githubLink}>
            <img className="link-icon" src="images/icons/iconfinder_mark-github_298822.svg" alt="github link icon" />
          </a>
        </div>
        <div className="feature-title">
          <a href={this.props.link}>{this.props.name}</a>
        </div>
        <div className="feature-description">
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default ProjectCard;
