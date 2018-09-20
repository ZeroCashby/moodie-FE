import React from 'react';

import Styles from './styles.scss';

const ProjectExplorer = () => {
    return (
        <section className={Styles.sidebar}>
            <h1>moodie</h1>
            <p>Projects</p>
            <ul>
                <li>
                    <button className={Styles.button} type="button">My first project</button>
                </li>
            </ul>
            <button className={Styles.button} type="button">New Project</button>
        </section>
    );
}
 
export default ProjectExplorer;