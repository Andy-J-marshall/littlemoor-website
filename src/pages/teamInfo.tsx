import { useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import monImg from '../images/carousel/carousel-teams.png';
import tuesVetsImg from '../images/carousel/carousel-teams.png';
import thurVetsImg from '../images/carousel/carousel-teams.png';
import satImg from '../images/carousel/carousel-teams.png';
import wedImg from '../images/carousel/carousel-teams.png';
import wedEveningImg from '../images/carousel/carousel-teams.png';

const teams = [
    {
        name: 'Monday AireWharfe',
        link: 'https://bowlsnet.uk/AW-Mon',
        img: monImg,
    },
    {
        name: 'Monday Bradford',
        link: 'https://bowlsnet.uk/Bradford-Mon',
        img: monImg,
    },
    {
        name: 'Mirfield',
        link: 'https://bowlsnet.uk/Mirfield',
        img: tuesVetsImg,
    },
    {
        name: 'Half Holiday Bradford',
        link: 'https://bowlsnet.uk/Bradford-HalfHol',
        img: wedImg,
    },
    {
        name: 'Spen Valley',
        link: 'https://bowlsnet.uk/WestRiding',
        img: wedEveningImg,
    },
    {
        name: 'Thursday Vets Bradford',
        link: 'https://bowlsnet.uk/Bradford-Vets',
        img: thurVetsImg,
    },
    {
        name: 'Saturday Bradford',
        link: 'https://bowlsnet.uk/Bradford-Sat',
        img: satImg,
    },
];

function TeamInfo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    // TODO improve images
    return (
        <div id="team-info" className="page-component center">
            <h1>TEAMS</h1>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4 tabs">
                {teams.map((team, idx) => (
                    <Col key={idx}>
                        <Card bg="light">
                            <Card.Img
                                alt="team-photo"
                                variant="top"
                                src={team.img}
                            />
                            <Card.Body>
                                <Card.Title>{team.name}</Card.Title>
                                <Button
                                    style={{ backgroundColor: '#162645' }}
                                    href={team.link}
                                    target="_blank"
                                >
                                    View on Bowlsnet
                                </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default TeamInfo;
