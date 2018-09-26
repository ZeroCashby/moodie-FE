import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Project from './containers/Project';
import ProjectExplorer from './containers/ProjectExplorer';
import * as projectActions from './actions/projectActions';

import AppStyles from './App.scss';
import EditBoard from './containers/EditBoard';
import User from './containers/User';

class App extends Component {

  constructor(props) {
    super(props);

    this.projectClickHandler = this.projectClickHandler.bind(this);
  }

  componentDidMount() {
    this.props.projectActions.fetchProjects();
  }

  projectClickHandler(id) {
    this.props.projectActions.setProjectId(id);
  }

  render() {
    const project = this.props.projects.filter(item => {
      console.log(item.id, this.props.projectId)
      return parseInt(item.id) === parseInt(this.props.projectId)
    });

    return (
        // <section className={AppStyles['flex-row']}>
        //   <ProjectExplorer projects={this.props.projects} clickHandler={this.projectClickHandler} />
        //   {project.length && <Project project={project[0]}/>}
        // </section>
      <BrowserRouter>
        <section>
          <EditBoard />
          <User />
        </section>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ projects }) => ({
  projects: projects.items,
  projectId: projects.projectId
})
  
function mapDispatchToProps(dispatch) {
  return {
      projectActions: bindActionCreators(projectActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
