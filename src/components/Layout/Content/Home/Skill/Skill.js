import React from 'react';

import Aux from '../../../../../hoc/Aux';

const skill = (props) => (
    <Aux>
        <h4>{props.name}</h4>
        <div className="progress mb-3">
            <div className="progress-bar bg-success" style={{width: props.percentage }}></div>
        </div>
    </Aux>
);

export default skill;