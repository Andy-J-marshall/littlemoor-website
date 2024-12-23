import { Nav, Carousel, Image, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import aboutUsImg from '../images/carousel/carousel-membership.png';
import teamsImg from '../images/carousel/carousel-teams.png';
import supportersImg from '../images/carousel/carousel-contact.png';

function HomePageCarousel() {
    return (
        <Container id="carousel" fluid>
            <Nav defaultActiveKey="/home">
                <Carousel fade>
                    <Carousel.Item>
                        <Image src={aboutUsImg} fluid />
                        <Carousel.Caption>
                            <NavLink to="/about" className="carousel-link">
                                <h2>ABOUT US</h2>
                            </NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image src={supportersImg} fluid />
                        <Carousel.Caption>
                            <NavLink to="/supporters" className="carousel-link">
                                <h2>SUPPORTERS</h2>
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
                </Carousel>
            </Nav>
        </Container>
    );
}

export default HomePageCarousel;
