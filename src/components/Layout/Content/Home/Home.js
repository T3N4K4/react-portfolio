import React from 'react';

import Skill from './Skill/Skill';

const home = (props) => (
    <div id="home">
        <div className="card card-body bg-primary text-white py-5">
            <h2>Willkommen</h2>
        </div>

        <div className="card card-body py-5">
            <h3>Programmierung</h3>
            <br />
            <Skill name="C" percentage="60%"/>
            <Skill name="C++" percentage="75%"/>
            <Skill name="C#" percentage="75%"/>
            <Skill name="HTML" percentage="90%"/>
            <Skill name="CSS" percentage="65%"/>
            <Skill name="Javascript" percentage="70%"/>
            <Skill name="PHP" percentage="85%"/>
            <Skill name="XML" percentage="65%"/>
            <Skill name="Java" percentage="75%"/>
            <Skill name="Python" percentage="10%"/>
            <Skill name="Assembler" percentage="10%"/>
            <Skill name="Bash" percentage="75%"/>
            <Skill name="MySQL" percentage="70%"/>
            <Skill name="PL/SQL" percentage="70%"/>
        </div>
    </div>
);

export default home;