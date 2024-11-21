import { Nav, Carousel, Image, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import membershipImg from '../images/carousel/carousel-membership.png';
import teamsImg from '../images/carousel/carousel-teams.png';
import contactImg from '../images/carousel/carousel-contact.png';

function HomePageCarousel() {
    return (
        <Container fluid>
            <Nav defaultActiveKey="/home">
                <Carousel fade>
                    <Carousel.Item>
                        <Image src={membershipImg} fluid />
                        <Carousel.Caption>
                            <NavLink to="/membership" className="carousel-link">
                                <h2>MEMBERSHIP</h2>
                            </NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={teamsImg} fluid />
                        <Carousel.Caption>
                            <NavLink className="carousel-link" to="/teams">
                                <h2>TEAMS</h2>
                            </NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={contactImg} fluid />
                        <Carousel.Caption>
                            <NavLink to="/contact" className="carousel-link">
                                <h2>CONTACT US</h2>
                            </NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Nav>
        </Container>
    );
}

export default HomePageCarousel;
