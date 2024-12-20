import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logoImg from '../images/logos/brand-icon.png';

function Navigation() {
    return (
        <Navbar
            collapseOnSelect
            id="navbar"
            fixed="top"
            bg="light"
            variant="light"
            expand="md"
        >
            <Container fluid>
                <Navbar.Brand as={Link} to="/" href="/home">
                    <Image
                        style={{ height: '2.3rem' }}
                        src={logoImg}
                        rounded
                        fluid
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto"
                        style={{ maxHeight: '700px' }}
                        navbarScroll
                    >
                        <Nav.Item
                            as={Link}
                            to="/about"
                            className="navigation link"
                        >
                            <Nav.Link
                                as="div"
                                href="/about"
                                eventKey="/about"
                            >
                                ABOUT US
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                            as={Link}
                            to="/membership"
                            className="navigation link"
                        >
                            <Nav.Link
                                as="div"
                                href="/membership"
                                eventKey="/membership"
                            >
                                MEMBERSHIP
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                            as={Link}
                            to="/teams"
                            className="navigation link"
                        >
                            <Nav.Link as="div" href="/teams" eventKey="/teams">
                                TEAMS
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                            as={Link}
                            to="/sponsors"
                            className="navigation link"
                        >
                            <Nav.Link as="div" href="/sponsors" eventKey="/sponsors">
                                SPONSORS
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item
                            as={Link}
                            to="/contact"
                            className="navigation link"
                        >
                            <Nav.Link
                                as="div"
                                href="/contact"
                                eventKey="/contact"
                            >
                                CONTACT
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
