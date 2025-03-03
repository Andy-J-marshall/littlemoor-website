import { useEffect } from 'react';
import { config } from '../config';
import barImg from '../images/membership/bar.png';
import snookerImg from '../images/membership/snooker_tables.png';
import teamKitImg from '../images/membership/team_kit.png';

function Membership() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="membership-page" className="center page-component">
            <h1>MEMBERSHIP</h1>
            <p>
                {config.teamNames.fullName} welcomes new members of any age or
                experience level. Fees apply to anyone over 16; children are
                welcome but must be accompanied by an adult member.
            </p>
            <p>
                We also run taster sessions for people of all ages. We will
                provide all of the equipment, and the tips you need to get
                started. If you would like to try this out, please get in touch
                via our{' '}
                <a className="link" href="/#/contact">
                    contact page
                </a>
                .
            </p>
            <img className="membership-page-img" src={barImg}></img>
            <p>
                Our club features a fully licensed bar where members can relax
                and enjoy a drink. We also have two snooker tables and a darts
                board available for use.
            </p>
            <img className="membership-page-img" src={snookerImg}></img>
            <p>
                Read more about the{' '}
                <a
                    target="_blank"
                    className="link"
                    href="https://sway.cloud.microsoft/Tz6DJWwN2m4J1kds"
                >
                    benefits of crown green bowling
                </a>
                .
            </p>
            <p>
                Team kit can be bought direct from{' '}
                <a target="_blank" className="link" href={config.clubShopUrl}>
                    SportsFX
                </a>
                .
            </p>
            <a target="_blank" className="link" href={config.clubShopUrl}>
                <img className="supporters-logos" src={teamKitImg}></img>
            </a>
            <br />
        </div>
    );
}

export default Membership;
