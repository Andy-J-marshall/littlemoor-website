import { useEffect } from 'react';
import clubHouseImg from '../images/membership/clubhouse_external.png';
import membershipImg from '../images/membership/membership.png';

function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div id="about-page" className="center page-component">
            <h1>ABOUT US</h1>
            <p>
                Established in 1895, Littlemoor Sports & Social Club is a
                not-for-profit organisation run entirely by volunteers. We
                currently have 96 members, ranging from teenagers to people in
                their eighties, who live in Pudsey and the surrounding areas.
            </p>
            <p>
                The club is particularly popular for its bowling green, which is
                considered one of the best in Yorkshire. Known for its friendly
                atmosphere, the club hosts various events and activities, making
                it a great place for socializing and community engagement.
                Visitors often praise the club for its warm and inclusive
                environment.
            </p>
            <p>
                While it primarily serves its members, the club also welcomes
                new visitors interested in joining. We are actively promoting
                the club and the game of crown green bowls to the local
                community.
            </p>
            <img className="membership-page-img" src={clubHouseImg}></img>
            <h3>BOWLING</h3>
            <p>
                Crown green bowls is a fantastic way to socialise, but for those
                with a competitive edge, Littlemoor Sports & Social Club
                competes in many local leagues, including:
            </p>
            <ul>
                <li>Monday - Aire Wharfe League and Bradford League</li>
                <li>
                    Tuesday - Mirfield League (widely regarded as one of the
                    best leagues in the country)
                </li>
                <li>
                    Wednesday - Bradford Half Holiday League and West Riding &
                    Spen Valley League
                </li>
                <li>Thursday - Bradford Vets League</li>
                <li>Saturday - Bradford League</li>
            </ul>
            <p>
                Due to the quality of our bowling green, we also host a number
                of representative and cup games, attracting visitors from all
                over the country.
            </p>
            <img className="membership-page-img" src={membershipImg}></img>
        </div>
    );
}

export default About;
