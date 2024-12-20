import { useEffect } from 'react';
import { config } from '../config';

function Sponsors() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="sponsors-page" className="center page-component">
            <h1>SPONSORS</h1>
            <p>
                If you are interested in a sponsorship package, please contact
                the Club Development Officer,{' '}
                <a className="link" href={config.socialLinks.emailUrl}>
                    Adam Wider
                </a>
            </p>
            <h3>PMH Accountancy Services</h3>
            <p>
                Some description of what PMH Accountancy Services do they do and
                what they've sponsored.
            </p>
            <a className="link" href="https://www.pmhaccountancy.co.uk/">
                Click here to find out more
            </a>
            <h3>Prestige Plant Room Services</h3>
            <p>
                Some description of what Prestige Plant room Services do and what
                they've sponsored.
            </p>
            <a className="link" href="https://prestigeprs.com/">
                Click here to find out more
            </a>
            <h3>Alaska Black</h3>
            <p>
                Some description of what Alaska Black do and what they've
                sponsored.
            </p>
            <a className="link" href="https://www.alaska.black/">
                Click here to find out more
            </a>
            <h3>EDSB Compliance Solutions</h3>
            <p>
                Some description of what EDSB Compliance Solutions do and what
                they've sponsored.
            </p>
            <a className="link" href="https://edsb.co.uk/">
                Click here to find out more
            </a>
            <h3>P & P Garden Services</h3>
            <p>
                Some description of what P & P Garden Services do and what
                they've sponsored.
            </p>
            <a
                className="link"
                href="https://www.facebook.com/PandPgardeningsvs/"
            >
                Click here to find out more
            </a>
        </div>
    );
}

export default Sponsors;
