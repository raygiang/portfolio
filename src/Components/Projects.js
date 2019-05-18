import React, { Component } from 'react';
import ProjectCard from './ProjectCard';

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [],
    }
  }

  getProjects = async () => {
    const response = await fetch('/getProjects');
    const projects = await response.json();

    if (response.status !== 200) throw Error(projects.message);

    return projects;
  }

  componentDidMount = () => {
    let projectsArray = [];

    this.getProjects()
      .then(res => {
        projectsArray = res.projects.map((project, index) =>
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            featureImage={project.featureImage}
            link={project.link}
            githubLink={project.githubLink}
          />
        );
        this.setState({
          projects: projectsArray,
        })
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.projects);
    return (
      <div className="page-wrapper flex-container">
        { this.state.projects }
      </div>
    );
  }
}

export default Projects;
