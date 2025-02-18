import { useEffect } from 'react';
import { config } from '../config';
import barImg from '../images/membership/bar.png';
import snookerImg from '../images/membership/snooker_tables.png';

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
                Please{' '}
                <a className="link" href="/#/contact">
                    contact us
                </a>{' '}
                or speak to a member if you are interested in joining.
            </p>
            <img className="membership-page-img" src={barImg}></img>
            <p>
                Our club features a fully licensed bar where members can relax
                and enjoy a drink. We also have two snooker tables and a darts
                board available for use.
            </p>
            <img className="membership-page-img" src={snookerImg}></img>
            <p>
                Team kit can be bought direct from{' '}
                <a target="_blank" className="link" href={config.clubShopUrl}>
                    SportsFX
                </a>
                .
            </p>
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
        </div>
    );
}

export default Membership;
