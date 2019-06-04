import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import Loading from './Loading';
import Modal from 'react-responsive-modal';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animationDone: false,
      projects: null,
      open: false,
      projectName: '',
      projectDesc: '',
      projectLink: '',
      projectGithub: '',
      projectTech: [],
      projectFeat: '',
    }
  }

  // Get all projects from the database
  getProjects = async () => {
    const response = await fetch('/getProjects');
    const projects = await response.json();

    if (response.status !== 200) throw Error(projects.message);

    return projects;
  };

  // When a project is selected open the modal
  onOpenModal = (name, desc, link, ghLink, tech, feat) => {
    this.setState({
      open: true,
      projectName: name,
      projectDesc: desc,
      projectLink: link,
      projectGithub: ghLink,
      projectTech: tech,
      projectFeat: feat,
    });
  };
 
  // When the modal is closed
  onCloseModal = () => {
    this.setState({ open: false });
  };

  componentDidMount = () => {
    let projectsArray = [];

    // Use the project information retrieved from the database to create ProjectCards
    this.getProjects()
      .then(response => {
        projectsArray = response.projects.map((project, index) =>
          <ProjectCard
            key={ index }
            name={ project.name }
            description={ project.description }
            featureImage={ project.featureImage }
            link={ project.link }
            githubLink={ project.githubLink }
            technologies={ project.technologies }
            features={ project.features }
            modalOpen={ this.onOpenModal }
          />
        );
        this.setState({
          projects: projectsArray,
        })
      })
      .catch(err => console.log(err));

    setTimeout(() => { this.setState({ animationDone: true }) }, 800);
  };

  componentDidUpdate = () => {
    let projCards = document.querySelectorAll('.project-card');
    for(let projCard of projCards) {
      projCard.addEventListener('keypress', (e) => {
        e.preventDefault();
        if(e.keyCode === 13 || e.keyCode === 33) { projCard.click() };
      });
    }
  };

  render() {
    return (
      <div>
        <div id="page-background"></div>
        <div className="page-wrapper flex-container">
          {
            this.state.projects && this.state.animationDone ?
            this.state.projects :
            <Loading />
          }

        {/* The Modal that will contain the project information */}
          <Modal
            classNames={{modal: 'project-modal', closeButton: 'close-button'}}
            open={ this.state.open } 
            onClose={ this.onCloseModal }
            center
          >
            <h2 id="modal-title">{ this.state.projectName }</h2>
            <div id="modal-content">
            <div className="links-container">
              <a title="Live Link" href={ this.state.projectLink } target="_blank" rel="noopener noreferrer">
                <i className="fas fa-globe-americas link-icon" />
              </a>
              <a title="Github Link" href={ this.state.projectGithub } target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github link-icon" />
              </a>
            </div>
            <div>{ this.state.projectTech.join(', ') }</div>
            <h3>Description</h3>
            <div dangerouslySetInnerHTML={{__html: this.state.projectDesc}}></div>
            <h3>Features</h3>
            <div>{ this.state.projectFeat }</div>
            </div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Projects;
