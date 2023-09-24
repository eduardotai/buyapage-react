import React from 'react';
import classes from './Header.module.css'

const header = () => {
    return (
        <div className={classes.header}>
            <img className={classes.logo} src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/amazon-png-logo-vector-1.png' alt='#'></img>
        </div>
    )
}

export default header;
