import supporter2Img from '../images/supporters/easyFundraising.png';
import supporter3Img from '../images/supporters/levelsAbove.png';

function Supporters() {
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
