import { useEffect } from 'react';
import facebookImg from '../images/socials/facebook_blue.png';
import instagramImg from '../images/socials/instagram_blue.png';
import emailImg from '../images/socials/email_blue.png';
import { config } from '../config';

const { facebookUrl, instagramUrl, emailUrl, googleMapsIframeUrl } =
    config.socialLinks;

const emailAddress = emailUrl.split('mailto:')[1];

function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="contact-page" className="page-component center">
            <h1>CONTACT US</h1>
            <p>
                Get in touch via email:
                <a className="link" href={emailUrl}>
                    <img className="logos" src={emailImg} alt="Email link" />
                    {emailAddress}
                </a>
            </p>
            <p>
                Keep up to date with the latest news via our social media pages:
                <a className="link" target="_blank" href={facebookUrl}>
                    <img
                        className="logos"
                        src={facebookImg}
                        alt="Facebook link"
                    />
                </a>
                <a className="link" target="_blank" href={instagramUrl}>
                    <img
                        className="logos"
                        src={instagramImg}
                        alt="Instagram link"
                    />
                </a>
            </p>
            <div>
                <h2>LOCATION</h2>
                <p>
                    {config.teamNames.fullName} is situated on Valley Road in
                    Pudsey.
                </p>
                <p>
                    There is a small car park at the front of the club. If the
                    car park is full, there is usually plenty of space on Valley
                    Road.
                </p>
                <p>
                    Note: please do not park in the numbered spaces as these are
                    reserved for the local residents.
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
