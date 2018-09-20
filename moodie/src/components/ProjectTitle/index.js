import React from 'react';

import AppStyles from '../../App.scss';

const ProjectTitle = (props) => {
    return (
        <section className={AppStyles['flex-row']}>
            <h2>{props.name}</h2>
            <button type="button">Rename</button>
            <button type="button">Delete project</button>
        </section>
    );
}
 
export default ProjectTitle;