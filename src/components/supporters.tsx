import { Image } from 'react-bootstrap';
import easyFundraising from '../images/supporters/easy_fundraising.png';
import levelsAboveImg from '../images/supporters/levels_above.png';

function Supporters() {
    // TODO change this to carousel?
    return (
        <div id="supporters">
            <h1>SUPPORTERS</h1>
            <a
                target="_blank"
                href="https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=362452&invite=7sk19t&referral-campaign=s2s&utm_campaign=web-referral"
            >
                <Image
                    className="supporters-logos"
                    rounded
                    src={easyFundraising}
                    fluid
                />
            </a>
            <a target="_blank" href="https://www.levelsaboveltd.co.uk">
                <Image
                    className="supporters-logos"
                    rounded
                    src={levelsAboveImg}
                    fluid
                />
            </a>
        </div>
    );
}

export default Supporters;
