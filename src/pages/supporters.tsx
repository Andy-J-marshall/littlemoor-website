import { useEffect } from 'react';
import { Image } from 'react-bootstrap';
import emailImg from '../images/socials/email_blue.png';
import phoneImg from '../images/socials/phone_blue.png';
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
                <img className="logos" src={phoneImg} alt="phone icon" />
                07496083058
            </p>
            <hr />

            <h3>PMH Accountancy Services</h3>
            <p>
                PMH Accountancy specialises in a variety of accounting services
                with outstanding support. We understand how busy you are, and
                with our expertise we can take care of your accounting needs
                quickly and effectively.
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
                Discover a new level of service in the world of plant room
                services.
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
                Alaska Black are recruitment specialists, recruiting nationally
                across all roles within FMCG, Building Services Engineering,
                Facilities Management, Finance, Human Resources and Senior Level
                Appointments.
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
                EDSB Compliance Solutions are specialists in fire & security
                compliance.
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
                P & P Garden Services cover all aspects of gardening, both
                commercial and residential. No job is too big or too small.
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
                Levels Above Site Services have over 20 years hire industry
                experience. With a national supply network across the UK their
                aim is to simplify the order process by offering a full site
                shopping list from 1 partnered supplier.
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
