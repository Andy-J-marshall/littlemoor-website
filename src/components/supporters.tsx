import supporter2Img from '../images/news/easyFundraising.png';
import supporter3Img from '../images/news/sponsor.png';

function Supporters() {
    // TODO change this to carousel
    return (
        <div id="supporters">
            <h1>SUPPORTERS</h1>
            <a
                target="_blank"
                href="https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=362452&invite=7sk19t&referral-campaign=s2s&utm_campaign=web-referral"
            >
                <img
                    className="supporters-logos"
                    src={supporter2Img}
                    alt="support-logo2"
                />
            </a>
            <a target="_blank" href="https://www.levelsaboveltd.co.uk">
                <img
                    className="supporters-logos"
                    src={supporter3Img}
                    alt="support-logo3"
                />
            </a>
        </div>
    );
}

export default Supporters;
