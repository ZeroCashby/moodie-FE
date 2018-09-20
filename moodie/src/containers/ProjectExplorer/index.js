import React from 'react';

import Styles from './styles.scss';

const ProjectExplorer = (props) => {
    return (
        <section className={Styles.sidebar}>
            <h1>moodie</h1>
            <p>Projects</p>
            <ul>
                { props.projects.map(project => {
                    return <li key={project.id}>
                        <button className={Styles.button} type="button" onClick={ () => props.clickHandler(project.id) }>{project.name}</button>
                    </li>
                })}
                
            </ul>
            <button className={Styles.button} type="button">New Project</button>
        </section>
    );
}
 
export default ProjectExplorer;