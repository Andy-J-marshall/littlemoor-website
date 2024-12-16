import { useEffect } from 'react';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    // TODO add content e.g. the club, green, building, history, etc.
    // TODO add photos

    return (
        <div id="about-page" className="center page-component">
            <h1>ABOUT THE CLUB</h1>
            <p>About the club...</p>
        </div>
    );
}

export default About;
