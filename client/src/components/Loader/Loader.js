import React from 'react';
import classes from './Loader.module.scss';


export default () => {
    return (
        <div className={classes.modal}>
            <div className={classes.ring}></div>
        </div>
    );
}