import React from 'react';

import classes from './NavigationItem.css';

const navigationItem = (props) => (
    <div className={"port-item p-4 " + props.colorType + " " + classes.portItem} onClick={props.onClick}>
        <i className={"fa d-block " + props.iconType + " " + classes.fa}></i>{props.children}
    </div>
)

export default navigationItem;