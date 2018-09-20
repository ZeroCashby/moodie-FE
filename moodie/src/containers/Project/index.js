import React from 'react';

import ProjectTitle from '../../components/ProjectTitle/index';
import Board from '../../components/Board/index';
import AccountSelector from '../../components/AccountSelector';
import Sort from '../../components/Sort';

import AppStyles from '../../App.scss';
import Styles from './styles.scss';


const Project = (props) => {
    return (
            <section>
                <section className={AppStyles['flex-row-sb']}>
                    <ProjectTitle name={props.project.name} />
                    <AccountSelector />
                </section>
                <Sort />
                <section className={AppStyles['flex-wrap']}>
                    {props.project.boards.map(board => {
                        return <Board data={board} />
                    })}
                </section>
            </section>  
    );
}
 
export default Project;