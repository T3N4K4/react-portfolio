import React from 'react';

import Aux from '../../../hoc/Auxiliary';

import classes from './DescriptiveTitle.css';

const descriptiveTitle = (props) => (
    <Aux>
        <div className={'p-4 bg-black ' + classes.bgBlack}>
            Portfolio
        </div>
    </Aux>
);

export default descriptiveTitle;