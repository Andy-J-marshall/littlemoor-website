import { useEffect } from 'react';
import clubHouseImg from '../images/membership/clubhouse-external.png';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    // TODO add content e.g. the club, green, building, history, etc.
    // TODO add photos

    return (
        <div id="about-page" className="center page-component">
            <h1>ABOUT US</h1>
            <p>
                The modern clubhouse has a bar, 2 full size snooker tables and a
                darts board.
            </p>
            <p>More information about the club...</p>
            <img className="membership-page-img" src={clubHouseImg}></img>
            <h4>BOWLING</h4>
            <p>Information about bowling...</p>
            <h4>BILLIARDS</h4>
            <p>
                There is a billiards team that plays on a Tuesday and Thursday
                evening.
            </p>
            <a href="https://bradfordssbilliards.blogspot.com/">
                Tuesday League
            </a>
            <br />
            <a href="https://pudseybilliardsleague.blogspot.com">
                Thursday League
            </a>
        </div>
    );
}

export default About;
