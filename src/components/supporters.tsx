import supporter1Img from '../images/supporters/joey.png';
import supporter2Img from '../images/supporters/squeaker.png';
import supporter3Img from '../images/supporters/west_leeds_dispatch.png';

function Supporters() {
    return (
        <div id="socials">
            <h1>supporters</h1>
            <a target="_blank" href="https://www.joeysportsmassage.co.uk">
                <img
                    className="supporters-logos"
                    src={supporter1Img}
                    alt="support-logo0"
                />
            </a>
            <a target="_blank" href="http://www.thesqueaker.co.uk">
                <img
                    className="supporters-logos"
                    src={supporter2Img}
                    alt="support-logo5"
                />
            </a>
            <a target="_blank" href="https://westleedsdispatch.com">
                <img
                    className="supporters-logos"
                    src={supporter3Img}
                    alt="support-logo6"
                />
            </a>
        </div>
    );
}

export default Supporters;
