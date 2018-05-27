import React from 'react';

import Station from './Station/Station';

const resume = (props) => (
    <div id="resume">
        <div className="card card-body bg-success text-white py-5">
        <h2>Lebenslauf</h2>
      </div>

      <div className="card card-body py-5">
        <h3>Werdegang</h3>
        <p>Berufe / Ausbildung / Studium</p>
        <div className="card-deck">
            <Station title="Rangee GmbH" description="Software- /Firmwareentwicklung mit PHP" position="Softwareentwickler" dates="01/2016 - Heute"/>
            <Station title="Rangee GmbH" description="Ausbildung zum Fachinformatiker für Anwendungsentwicklung" position="Auszubildender" dates="08/2014 - 01/2016"/>
            <Station title="Comma Soft AG" description="Qualitätssicherung" position="Werkstudent" dates="03/2013 - 07/2014"/>
        </div>
        <br/>
        <div className="card-deck">
            <Station title="University of applied Science St. Augustin" description="Bachelor of Science: Informationssicherheit" position="Student" dates="03/2012 - 07/2014"/>
            <Station title="Southampton Solent University" description="TopUp Studium - Bachelor of Science: Computing" position="Student" dates="09/2010 - 11/2011"/>
            <Station title="B.i.b. Bergisch Gladbach" description="Ausbildung zum Staatlich geprüften Informatiker Softwartechnologie" position="Auszubildender" dates="10/2008 - 09/2010"/>
        </div>
      </div>
    </div>
);

export default resume;