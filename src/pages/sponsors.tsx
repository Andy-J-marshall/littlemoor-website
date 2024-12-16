import { useEffect } from 'react';

function Sponsors() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="sponsors-page" className="center page-component">
            <h1>SPONSORS</h1>
            {/* TODO Info about sponsors and packages */}
            {/* TODO link to Adam's email/phone? */}
            <p>If you are interested in a sponsorship package, please contact the Club Development Officer, Adam Wider</p>
        </div>
    );
}

// TODO add these:
// PMH Accountancy Services
// Prestige Plantroom Services # TODO check this name!
// Alaska Black
// EDSB Compliance Solutions
// P & P Garden Services

export default Sponsors;
