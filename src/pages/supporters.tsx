import { useEffect } from 'react';
import { Image } from 'react-bootstrap';
import emailImg from '../images/socials/email_blue.png';
import pmhImg from '../images/supporters/pmh_accountancy.png';
import prestigeImg from '../images/supporters/prestige_plant_room.png';
import alaskaBlackImg from '../images/supporters/alaska_black.png';
import edsbImg from '../images/supporters/edsb.png';
import ppImage from '../images/supporters/p_and_p_gardening.png';
import levelsAboveImg from '../images/supporters/levels_above.png';
import easyFundraisingImg from '../images/supporters/easy_fundraising.png';

const emailAddress = 'awider81@gmail.com';
const emailUrl = 'mailto:awider81@gmail.com';

function Supporters() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="supporters-page" className="center page-component">
            <h1>SUPPORTERS</h1>
            <p>
                If you are interested in a sponsorship package, please contact
                Adam Wider, the Club Development Officer:
                <br />
                <a className="link" href={emailUrl}>
                    <img className="logos" src={emailImg} alt="Email link" />
                    {emailAddress}
                </a>
                <br />
                Phone: 07496083058
            </p>
            <hr />

            <h3>PMH Accountancy Services</h3>
            <p>
                Some description of what PMH Accountancy Services do they do and
                what they've sponsored.
            </p>
            <a target="_blank" href="https://www.pmhaccountancy.co.uk/">
                <Image
                    className="supporters-logos"
                    rounded
                    src={pmhImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>Prestige Plant Room Services</h3>
            <p>
                Some description of what Prestige Plant room Services do and
                what they've sponsored.
            </p>
            <a target="_blank" href="https://prestigeprs.com/">
                <Image
                    className="supporters-logos"
                    rounded
                    src={prestigeImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>Alaska Black</h3>
            <p>
                Some description of what Alaska Black do and what they've
                sponsored.
            </p>
            <a href="https://www.alaska.black/">
                <Image
                    className="supporters-logos"
                    rounded
                    src={alaskaBlackImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>EDSB Compliance Solutions</h3>
            <p>
                Some description of what EDSB Compliance Solutions do and what
                they've sponsored.
            </p>
            <a target="_blank" href="https://edsb.co.uk/">
                <Image
                    className="supporters-logos"
                    rounded
                    src={edsbImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>P & P Garden Services</h3>
            <p>
                Some description of what P & P Garden Services do and what
                they've sponsored.
            </p>
            <a
                target="_blank"
                href="https://www.facebook.com/PandPgardeningsvs/"
            >
                <Image
                    className="supporters-logos"
                    rounded
                    src={ppImage}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>Levels Above Site Services</h3>
            <p>
                Some description of what Levels Above Site Services do and what
                they've sponsored.
            </p>
            <a target="_blank" href="https://www.levelsaboveltd.co.uk/">
                <Image
                    className="supporters-logos"
                    rounded
                    src={levelsAboveImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>Easy Fundraising</h3>
            <p>
                You can support the club by shopping through Easy Fundraising.
            </p>
            <a
                target="_blank"
                href="https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=362452&invite=7sk19t&referral-campaign=s2s&utm_campaign=web-referral"
            >
                <Image
                    className="supporters-logos"
                    rounded
                    src={easyFundraisingImg}
                    fluid
                ></Image>
            </a>
        </div>
    );
}

export default Supporters;
