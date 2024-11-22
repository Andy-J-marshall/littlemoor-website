import { Image } from 'react-bootstrap';
import logoImg from '../images/logos/brand-banner.png';

function Header() {
    return (
        <div id="header">
            <Image
                style={{ height: '160px', width: 'auto' }}
                src={logoImg}
                fluid
            />
        </div>
    );
}

export default Header;
