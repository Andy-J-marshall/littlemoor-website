import joeyLogo from '../images/supporters/joey.png';
import squeakerLogo from '../images/supporters/squeaker.png';
import wldLogo from '../images/supporters/west_leeds_dispatch.png';

function Supporters() {
    return (
        <div id="socials">
            <h1>supporters</h1>
            <a target="_blank" href="https://www.joeysportsmassage.co.uk">
                <img
                    className="supporters-logos"
                    src={joeyLogo}
                    alt="support-logo0"
                />
            </a>
            <a target="_blank" href="http://www.thesqueaker.co.uk">
                <img
                    className="supporters-logos"
                    src={squeakerLogo}
                    alt="support-logo5"
                />
            </a>
            <a target="_blank" href="https://westleedsdispatch.com">
                <img
                    className="supporters-logos"
                    src={wldLogo}
                    alt="support-logo6"
                />
            </a>
        </div>
    );
}

export default Supporters;
