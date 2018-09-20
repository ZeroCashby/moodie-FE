import React from 'react';

import ProjectTitle from '../../components/ProjectTitle/index';
import Board from '../../components/Board/index';
import AccountSelector from '../../components/AccountSelector';
import Sort from '../../components/Sort';

import AppStyles from '../../App.scss';
import Styles from './styles.scss';


const Project = () => {
    return (
        <section>
            <section className={AppStyles['flex-row-sb']}>
                <ProjectTitle />
                <AccountSelector />
            </section>
            <Sort />
            <section className={AppStyles['flex-wrap']}>
                <Board />
                <Board />
                <Board />
            </section>
        </section>
    );
}
 
export default Project;