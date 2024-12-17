import { useEffect } from 'react';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    // TODO add content e.g. the club, green, building, history, etc.
    // TODO add photos

    return (
        <div id="about-page" className="center page-component">
            <h1>ABOUT US</h1>
            <p>Information about the club...</p>
            <h4>BOWLING</h4>
            <p>Information about bowling...</p>
            <p>
                The modern clubhouse has a bar, 2 full size snooker tables and a
                darts board.
            </p>
            <h4>BILLIARDS</h4>
            <a href='https://bradfordssbilliards.blogspot.com/'>Tuesday League</a>
            <p>Information about billiards...</p>
            <a href='https://pudseybilliardsleague.blogspot.com'>Thursday League</a>
        </div>
    );
}

export default About;
