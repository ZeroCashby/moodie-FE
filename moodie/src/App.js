import React, { Component } from 'react';
import Project from './containers/Project';
import ProjectExplorer from './containers/ProjectExplorer';

import AppStyles from './App.scss';

class App extends Component {
  render() {
    return (
      <section className={AppStyles['flex-row']}>
        <ProjectExplorer />
        <Project />
      </section>
    );
  }
}

export default App;
