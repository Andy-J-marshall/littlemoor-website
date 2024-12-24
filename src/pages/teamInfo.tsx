import { useEffect } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import teamImgAW from '../images/teams/monday_airewharfe.png';
import teamImgMirfield from '../images/teams/mirfield.png';
import teamImgHalfHol from '../images/teams/half_hol_bradford.png';
import teamImgSpen from '../images/teams/spen_valley.png';
import teamImgVets from '../images/teams/thursday_vets_bradford.png';
import teamImgSatBrad from '../images/teams/saturday_bradford.png';
import teamImgBradfordBilliards from '../images/teams/billiards_bradford.png';
import teamImgPudseyBilliards from '../images/teams/billiards_pudsey.png';

const teams = [
    {
        name: 'Monday AireWharfe',
        link: 'https://bowlsnet.uk/AW-Mon',
        captain: 'Mark Allman',
        bCaptain: 'Nicky Dewhirst',
        img: teamImgAW,
    },
    {
        name: 'Mirfield',
        link: 'https://bowlsnet.uk/Mirfield',
        captain: 'Marc Armitage',
        bCaptain: 'Steve Bowes',
        img: teamImgMirfield,
    },
    {
        name: 'Half Holiday Bradford',
        link: 'https://bowlsnet.uk/Bradford-HalfHol',
        captain: 'Kath Mazurke',
        bCaptain: 'Steve Bowes',
        img: teamImgHalfHol,
    },
    {
        name: 'Spen Valley',
        link: 'https://bowlsnet.uk/WestRiding',
        captain: 'Will Bedford',
        bCaptain: 'Alan Mazurke',
        img: teamImgSpen,
    },
    {
        name: 'Thursday Vets Bradford',
        link: 'https://bowlsnet.uk/Bradford-Vets',
        captain: 'Angie Carter',
        img: teamImgVets,
    },
    {
        name: 'Saturday Bradford',
        link: 'https://bowlsnet.uk/Bradford-Sat',
        captain: 'Lee Wider',
        bCaptain: 'Nicky Dewhirst & Phil Thornton',
        img: teamImgSatBrad,
    },
];

const billiardTeams = [
    {
        name: 'Pudsey Sunday School',
        link: 'https://pudseybilliardsleague.blogspot.com',
        img: teamImgPudseyBilliards,
    },
    {
        name: 'Bradford Sunday School',
        link: 'https://bradfordssbilliards.blogspot.com/',
        img: teamImgBradfordBilliards,
    },
];

function TeamInfo() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });


    return (
        <div id="team-info-page" className="page-component center-align center">
            <h1>BOWLING</h1>
            <Row xs={1} md={2} xl={3} className="g-4 tabs">
                {teams.map((team, idx) => (
                    <Col key={idx}>
                        <Card bg="light">
                            <Card.Img
                                alt="team-photo"
                                variant="top"
                                src={team.img}
                            />
                            <Card.Body>
                                <h5>{team.name.toUpperCase()}</h5>
                                <div style={{ minHeight: '12rem' }}>
                                    <Card.Body>
                                        1st Team captain: {team.captain}
                                    </Card.Body>
                                    {team.bCaptain && (
                                        <Card.Body>
                                            2nd Team captain: {team.bCaptain}
                                        </Card.Body>
                                    )}
                                </div>
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
            <br />
            <h1>BILLIARDS</h1>
            <Row xs={1} md={2} xl={3} className="g-4 tabs">
                {billiardTeams.map((team, idx) => (
                    <Col key={idx}>
                        <Card bg="light">
                            <Card.Img
                                alt="team-photo"
                                variant="top"
                                src={team.img}
                            />
                            <Card.Body>
                                <h5>{team.name.toUpperCase()}</h5>
                                <br />
                                <Button
                                    style={{ backgroundColor: '#162645' }}
                                    href={team.link}
                                    target="_blank"
                                >
                                    View League Website
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
