import React from 'react';
import { Pointer, Image, Pencil, Text,  Swatches } from '../Icons';
import Styles from './styles.scss';

const EditMenu = (props) => {
    return (
        <section className={Styles.menu}>
            {
                [
                    {id:'pointer', component: <Pointer />}, 
                    {id:'pencil', component: <Pencil />}, 
                    {id:'image', component: <Image />}, 
                    {id:'text', component: <Text />}, 
                    {id:'swatches', component: <Swatches />}
                ].map(icon => {
                    return <button type="button" onClick={() => props.clickHandler(`${icon.id}`)} className={Styles.icon}>{icon.component}</button>
                })
            }
        </section>
        
    );
}
 
export default EditMenu;