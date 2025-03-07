import { useEffect } from 'react';
import { Image } from 'react-bootstrap';
import { config } from '../config';
import emailImg from '../images/socials/email_blue.png';
import phoneImg from '../images/socials/phone_blue.png';
import pmhImg from '../images/supporters/pmh_accountancy.png';
import prestigeImg from '../images/supporters/prestige_plant_room.png';
import alternativeWindowsImg from '../images/supporters/alternative_windows.png';
import alaskaBlackImg from '../images/supporters/alaska_black.png';
import levelsAboveImg from '../images/supporters/levels_above.png';
import edsbImg from '../images/supporters/edsb.png';
import yesMortgageImg from '../images/supporters/yes_mortgage.png';
import ppImage from '../images/supporters/p_and_p_gardening.png';
import communityTUImg from '../images/supporters/community_tu.png';
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
                {config.socialLinks.phoneNumber}
            </p>
            <hr />

            <h3>Prestige Plant Room Services</h3>
            <p>
                Discover a new level of service in the world of plant room
                services.
            </p>
            <a target="_blank" href="https://prestigeprs.com">
                <Image
                    className="supporters-logos"
                    rounded
                    src={prestigeImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>Alternative Windows</h3>
            <p>
                Alternative Windows has grown to become one of the largest
                window and door manufacturers and suppliers in the North of
                England. They commenced work simultaneously in the fenestration
                (replacement double glazing) industry in 1984 as PVC-u Window
                and Door installers with a local Leeds based Company, we also
                manufacture Aluminium Windows, Aluminium Folding Doors, Upvc
                Folding Doors, and Triple Glazing.
            </p>
            <a target="_blank" href="https://www.alternativewindows.com">
                <Image
                    className="supporters-logos"
                    rounded
                    src={alternativeWindowsImg}
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
            <a href="https://www.alaska.black">
                <Image
                    className="supporters-logos"
                    rounded
                    src={alaskaBlackImg}
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
            <a target="_blank" href="https://www.levelsaboveltd.co.uk">
                <Image
                    className="supporters-logos"
                    rounded
                    src={levelsAboveImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>EDSB Compliance Solutions</h3>
            <p>
                EDSB Compliance Solutions are specialists in fire & security
                compliance.
            </p>
            <a target="_blank" href="https://edsb.co.uk">
                <Image
                    className="supporters-logos"
                    rounded
                    src={edsbImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>Yes Mortgage Solutions</h3>
            <p>The Bowler's Broker. Highly experienced and down to earth.</p>
            <a target="_blank" href="https://yesmortgagesolutions.co.uk">
                <Image
                    className="supporters-logos"
                    rounded
                    src={yesMortgageImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>P & P Garden Services</h3>
            <p>
                Friendly family business est 1984. All aspects of landscape &
                gardening, specialise in hedge shaping and lawn maintenance
                around the Leeds area.
            </p>
            <a
                target="_blank"
                href="https://www.facebook.com/PandPgardeningsvs"
            >
                <Image
                    className="supporters-logos"
                    rounded
                    src={ppImage}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>PMH Accountancy Services</h3>
            <p>
                PMH Accountancy specialises in a variety of accounting services
                with outstanding support. We understand how busy you are, and
                with our expertise we can take care of your accounting needs
                quickly and effectively.
            </p>
            <a target="_blank" href="https://www.pmhaccountancy.co.uk">
                <Image
                    className="supporters-logos"
                    rounded
                    src={pmhImg}
                    fluid
                ></Image>
            </a>
            <hr />

            <h3>Community Trade Union</h3>
            <p>
                We're a modern trade union, and we're here to help you.
                Community has spent decades supporting, advising and bringing
                together working people from across the UK. It's our job to
                protect and support you, so you can focus on the things that
                matter most.
            </p>
            <a target="_blank" href="https://community-tu.org">
                <Image
                    className="supporters-logos"
                    rounded
                    src={communityTUImg}
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
