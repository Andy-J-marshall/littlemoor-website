import { useEffect } from 'react';
import facebook from '../images/socials/facebook_blue.png';
import email from '../images/socials/email_blue.png';
import { config } from '../config';

const { facebookUrl, emailUrl, googleMapsIframeUrl } = config.socialLinks;

const emailAddress = emailUrl.split('mailto:')[1];

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="contact-page" className="page-component center">
            <h1>contact us</h1>
            <p>
                Get in touch via email:{' '}
                <a className="link" href={emailUrl}>
                    <img className="logos" src={email} alt="Email link" />
                    {emailAddress}
                </a>
            </p>
            <p>
                Keep up to date with the latest news via our FaceBook page:
                <a className="link" target="_blank" href={facebookUrl}>
                    <img className="logos" src={facebook} alt="Facebook link" />
                </a>
            </p>
            <div>
                <h1>location</h1>
                <p>
                    {config.teamNames.fullName} is situated on Valley Road in
                    Pudsey.
                </p>
                <p>
                    There is a small car park at the front of the club. If the
                    car park is full, there is usually plenty of space on Valley
                    Road. Note: please do not park in the numbered spaces as
                    these are reserved for the local residents.
                </p>
                <p>
                    There is a bus stop directly outside the club. The club is
                    also only a 15 minute walk from Pudsey bus station.
                </p>
            </div>
            <iframe
                src={googleMapsIframeUrl}
                width="90%"
                height="450"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
}
export default Contact;
