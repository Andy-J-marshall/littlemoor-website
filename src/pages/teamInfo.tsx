import { useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import monImg from '../images/websiteImages/mon-team.png';
import tuesVetsImg from '../images/websiteImages/tuesVets-team.png';
import thurVetsImg from '../images/websiteImages/thursVets-team.png';
import satImg from '../images/websiteImages/sat-team.png';
import tuesImg from '../images/websiteImages/tues-team.png';
import wedImg from '../images/websiteImages/wed-team.png';
import wedEveningImg from '../images/websiteImages/wedPairs-team.png';

const teams = [
    {
        name: 'Monday Combined',
        age: 'Open Age',
        desc: '4 singles games and 2 pairs',
        link: 'https://bowlsnet.uk/Leeds-MonComb',
        startTime: '6:15-6.45pm',
        numberOfGames: 6,
        img: monImg,
    },
    {
        name: 'Tuesday Vets',
        age: '55+ year olds',
        desc: '8 singles games',
        link: 'https://bowlsnet.uk/Leeds-TueVets',
        startTime: '1:30pm',
        numberOfGames: 8,
        img: tuesVetsImg,
    },
    {
        name: 'Tuesday',
        age: 'Open Age',
        desc: '8 singles games',
        link: 'https://bowlsnet.uk/Leeds-Tue',
        startTime: '6:15-6.45pm',
        numberOfGames: 8,
        img: tuesImg,
    },
    {
        name: 'Wednesday Half Holiday',
        age: 'Open Age',
        desc: '6 singles games',
        link: 'https://bowlsnet.uk/Leeds-Wed',
        startTime: '1:30pm',
        numberOfGames: 6,
        img: wedImg,
    },
    {
        name: 'Wednesday Evening',
        age: 'Open Age',
        desc: '4 pairs games',
        link: 'https://bowlsnet.uk/AW-WedPairs',
        startTime: '6:15-7pm',
        numberOfGames: 4,
        img: wedEveningImg,
    },
    {
        name: 'Thursday Vets',
        age: '55+ year olds',
        desc: '8 singles games',
        link: 'https://bowlsnet.uk/leeds-ThuVets',
        startTime: '1:30pm',
        numberOfGames: 8,
        img: thurVetsImg,
    },
    {
        name: 'Saturday',
        age: 'Open Age',
        desc: '8 singles games',
        link: 'https://bowlsnet.uk/Leeds-Sat',
        startTime: '2pm',
        numberOfGames: 8,
        img: satImg,
    },
];

function TeamInfo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

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
