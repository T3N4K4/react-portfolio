import React from 'react';

const station = (props) => (
    <div className="card">
        <div className="card-body">
            <h4 className="card-title">{props.title}</h4>
              <p className="card-text">{props.description}</p>
              <p className="p-2 mb-3 bg-dark text-white">
                {props.position}
              </p>
        </div>
        <div className="card-footer">
            <h6 className="text-muted">{props.dates}</h6>
        </div>
    </div>
)

export default station;