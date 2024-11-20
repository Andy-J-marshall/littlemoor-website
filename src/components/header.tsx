import { Image } from 'react-bootstrap';
import logoImg from '../images/logos/brand-banner-logo.png';
import { config } from '../config';

function Header() {
    return (
        <div id="header">
            <h1 style={{ paddingTop: '5rem', height: '200px', width: 'auto' }}>
                {config.teamNames.fullName}
            </h1>
            {/* TODO replace with image instead */}
            {/* <Image
                style={{ height: '200px', width: 'auto' }}
                src={logoImg}
                fluid
            /> */}
        </div>
    );
}

export default Header;
