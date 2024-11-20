import { useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import monImg from '../images/websiteImages/mon-team.png';
import tuesVetsImg from '../images/websiteImages/tuesVets-team.png';
import thurVetsImg from '../images/websiteImages/thursVets-team.png';
import satImg from '../images/websiteImages/sat-team.png';
import wedImg from '../images/websiteImages/wed-team.png';
import wedEveningImg from '../images/websiteImages/wedPairs-team.png';

const teams = [
    {
        name: 'Monday AireWharfe',
        age: 'Open Age',
        desc: '10 player teams. In division 1',
        link: 'https://bowlsnet.uk/AW-Mon',
        startTime: '6:30-7pm',
        img: monImg,
    },
    {
        name: 'Monday Bradford',
        age: 'Open Age',
        desc: '10 player teams. In division 1',
        link: 'https://bowlsnet.uk/Bradford-Mon',
        startTime: '6:30-7pm',
        img: monImg,
    },
    {
        name: 'Mirfield',
        age: 'Open Age',
        desc: '10 player teams. A team in division 1, B team in division 4',
        link: 'https://bowlsnet.uk/Mirfield',
        startTime: '7pm',
        img: tuesVetsImg,
    },
    {
        name: 'Bradford Half Holiday',
        age: 'Open Age',
        desc: '6 player teams. A and B teams both in division 1',
        link: 'https://bowlsnet.uk/Bradford-HalfHol',
        startTime: '1:30pm',
        img: wedImg,
    },
    {
        name: 'Spen Valley',
        age: 'Open Age',
        desc: '8 player teams. A team in premier division, B team in division 1',
        link: 'https://bowlsnet.uk/WestRiding',
        startTime: '7pm',
        img: wedEveningImg,
    },
    {
        name: 'Thursday Vets',
        age: '60+ year olds',
        desc: '8 player teams. In division 2',
        link: 'https://bowlsnet.uk/Bradford-Vets',
        startTime: '1:30pm',
        img: thurVetsImg,
    },
    {
        name: 'Saturday',
        age: 'Open Age',
        desc: '8-10 player teams. A team in division 1, B team in division 3',
        link: 'https://bowlsnet.uk/Bradford-Sat',
        startTime: '2pm',
        img: satImg,
    },
];

function TeamInfo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    // TODO simplify this?

    return (
        <div id="team-info" className="page-component center">
            <h1>team information</h1>
            <Row sm={1} md={2} lg={3} className="g-4 tabs">
                {teams.map((team, idx) => (
                    <Col key={idx}>
                        <Card bg="light" style={{ width: '18rem' }}>
                            <Card.Img
                                alt="team-photo"
                                variant="top"
                                src={team.img}
                            />
                            <Card.Body>
                                <Card.Title>
                                    {team.name.toUpperCase()}
                                </Card.Title>
                                <Card.Text>
                                    {team.age}
                                    <br /> {team.desc}
                                    <br /> Start Time: {team.startTime}
                                </Card.Text>
                                <Button
                                    style={{ backgroundColor: '#1d3f92' }} // TODO - change everywhere
                                    href={team.link}
                                    target="_blank"
                                    variant="secondary"
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
