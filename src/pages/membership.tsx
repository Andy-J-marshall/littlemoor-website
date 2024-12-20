import { useEffect } from 'react';
import { config } from '../config';
import membershipImg from '../images/membership/membership.png';

function Membership() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="membership-page" className="center page-component">
            <h1>MEMBERSHIP</h1>
            <p>
                {config.teamNames.fullName} welcomes new members of any age or
                experience level.
            </p>
            <p>
                Fees apply to anyone over 16; children are welcome but must be
                accompanied by an adult member.
            </p>
            <p>
                Team kit can be bought direct from{' '}
                <a target="_blank" className="link" href={config.clubShopUrl}>
                    SportsFX
                </a>
            </p>
            <p>
                Please{' '}
                <a className="link" href="/#/contact">
                    contact us
                </a>{' '}
                or speak to a member if you are interested in joining.
            </p>
            <p>
                Read more about the benefits of crown green bowling{' '}
                <a
                    target="_blank"
                    className="link"
                    href="https://sway.cloud.microsoft/Tz6DJWwN2m4J1kds"
                >
                    here
                </a>
            </p>
            <img className="membership-page-img" src={membershipImg}></img>
        </div>
    );
}

export default Membership;
