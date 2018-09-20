import React from 'react';

import Styles from './styles.scss';

const Board = ({ data }) => {
    const { name, images, created_at, last_modified, collaborators } = data;

    return (
        <section className={Styles.board}>
            <ul>
                {images.map(img => {
                    return <li><img src={img.url} alt=""/></li>
                })}
            </ul>
            <h2>{name}</h2>
            <button type="button">menu</button>
            <p>Edited {last_modified} days ago</p>
            <ul>
                {collaborators.map(c => {
                    return <li><button type="button">{c.user}</button></li>
                })}
            </ul>
        </section>
    );
}
 
export default Board;
