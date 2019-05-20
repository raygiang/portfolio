import React, { Component } from 'react';
import ProjectCard from './ProjectCard';
import BackgroundCanvas from './BackgroundCanvas';
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

  getProjects = async () => {
    const response = await fetch('/getProjects');
    const projects = await response.json();

    if (response.status !== 200) throw Error(projects.message);

    return projects;
  };

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
 
  onCloseModal = () => {
    this.setState({ open: false });
  };

  componentDidMount = () => {
    let projectsArray = [];

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

      setTimeout(() => { this.setState({ animationDone: true }) }, 1500);
  }

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

          <Modal
            classNames={{modal: 'project-modal', closeButton: 'close-button'}}
            open={ this.state.open } 
            onClose={ this.onCloseModal }
            center
          >
            <BackgroundCanvas />
            <h2 id="modal-title">{ this.state.projectName }</h2>
            <div className="links-container">
              <a href={ this.state.projectLink } target="_blank" rel="noopener noreferrer">
                <img className="link-icon" src="images/icons/iconfinder_Internet_Line-02_1587499.svg" alt="project link icon" />
              </a>
              <a href={ this.state.projectGithub } target="_blank" rel="noopener noreferrer">
                <img className="link-icon" src="images/icons/iconfinder_mark-github_298822.svg" alt="github link icon" />
              </a>
            </div>
            <div>{ this.state.projectTech.join(', ') }</div>
            <h3>Description</h3>
            <div>{ this.state.projectDesc }</div>
            <h3>Features</h3>
            <div>{ this.state.projectFeat }</div>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Projects;
