import React, { Component } from 'react';

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addedStyles: { display: 'none' },
    }
  }

  addOverlay = () => {
    this.setState({
      addedStyles: { display: 'block' },
    })
  };

  removeOverlay = () => {
    this.setState({
      addedStyles: { display: 'none' },
    })
  };

  openModal = () => {
    this.props.modalOpen(
      this.props.name,
      this.props.description,
      this.props.link,
      this.props.githubLink,
      this.props.technologies,
      this.props.features
    );
  }

  render() {
    return (
      <div className="project-card" onClick={ this.openModal } onMouseEnter={ this.addOverlay } onMouseLeave={ this.removeOverlay }>
        <div className="card-overlay" style={ this.state.addedStyles } ></div>
        <div className="feature-image-container">
          <img className="project-image" src={ this.props.featureImage } alt="project screenshot" />
        </div>
        <div className="info-area">

          <div className="feature-title">
            {this.props.name}
          </div>
          <div className="feature-description">
            {this.props.technologies.join(', ')}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;
