import { useEffect } from 'react';
import { config } from '../config';
import Header from '../components/header';
import News from '../components/news';
import HomePageCarousel from '../components/homePageCarousel';
import teamKitImg from '../images/membership/team_kit.png';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className="center center-align" id="home-page">
            <Header />
            <div
                style={{ width: '98%', overflowX: 'hidden' }}
                className="center"
            >
                <HomePageCarousel />
                <br />
                <News />
                <br />
                <a target="_blank" className="link" href={config.clubShopUrl}>
                    <img className="supporters-logos" src={teamKitImg}></img>
                </a>
                <br />
            </div>
        </div>
    );
}

export default Home;
