import React from 'react';

import Styles from './styles.scss';

const Board = () => {
    return (
        <section className={Styles.board}>
            <ul>
                <li><img src="https://i.pinimg.com/564x/2b/28/56/2b2856fff47918c2dcd3049c84cfe2c7.jpg" alt=""/></li>
            </ul>
            <h2>Bathroom</h2>
            <button type="button">menu</button>
            <p>Edited 9 days ago</p>
            <ul>
                <li><button type="button">CA</button></li>
                <li><button type="button">NB</button></li>
            </ul>
        </section>
    );
}
 
export default Board;
