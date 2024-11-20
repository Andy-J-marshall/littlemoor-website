import { useEffect } from 'react';
import { config } from '../config';
import socialBowlingImg from '../images/websiteImages/social-bowling2.png';

function Membership() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="members" className="center page-component">
            <h1>membership</h1>
            <p>
                {config.teamNames.fullName} welcomes new members of any age or
                experience level.
            </p>
            <p>
                The membership price is £{config.membershipPrice} per year.
                Membership is valid per year and runs from 1st January until
                31st December.
            </p>
            <p>
                Fees apply to anyone over 16; children are welcome but must be
                accompanied by an adult member.
            </p>
            <p>
                The modern clubhouse has a bar, 2 full size snooker tables and a
                darts board.
            </p>
            <p>
                Please{' '}
                <a className="link" href="/#/contact">
                    contact us
                </a>{' '}
                or speak to a member if you are interested in joining.
            </p>
            <img style={{ width: '98%' }} src={socialBowlingImg}></img>
        </div>
    );
}

export default Membership;
