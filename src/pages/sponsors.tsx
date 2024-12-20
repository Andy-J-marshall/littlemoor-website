import { useEffect } from 'react';
import { config } from '../config';
import easyFundraisingImg from '../images/supporters/easy_fundraising.png';

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
            <h4>PMH Accountancy Services</h4>
            <p>
                Some description of what PMH Accountancy Services do they do and
                what they've sponsored.
            </p>
            <a className="link" href="https://www.pmhaccountancy.co.uk/">
                Click here to find out more
            </a>
            <h4>Prestige Plant Room Services</h4>
            <p>
                Some description of what Prestige Plant room Services do and
                what they've sponsored.
            </p>
            <a className="link" href="https://prestigeprs.com/">
                Click here to find out more
            </a>
            <h4>Alaska Black</h4>
            <p>
                Some description of what Alaska Black do and what they've
                sponsored.
            </p>
            <a className="link" href="https://www.alaska.black/">
                Click here to find out more
            </a>
            <h4>EDSB Compliance Solutions</h4>
            <p>
                Some description of what EDSB Compliance Solutions do and what
                they've sponsored.
            </p>
            <a className="link" href="https://edsb.co.uk/">
                Click here to find out more
            </a>
            <h4>P & P Garden Services</h4>
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
            <h4>Levels Above Site Services</h4>
            <p>
                Some description of what Levels Above Site Services do and what
                they've sponsored.
            </p>
            <a className="link" href="https://www.levelsaboveltd.co.uk/">
                Click here to find out more
            </a>

            <h4>Easy Fundraising</h4>
            <p>
                You can support the club by shopping through Easy Fundraising.
            </p>
            <a
                target="_blank"
                href="https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=362452&invite=7sk19t&referral-campaign=s2s&utm_campaign=web-referral"
            >
                <img
                    className="supporters-logos"
                    src={easyFundraisingImg}
                    alt="support-logo2"
                />
            </a>
        </div>
    );
}

export default Sponsors;
