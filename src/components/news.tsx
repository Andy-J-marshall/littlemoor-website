import { useState } from 'react';
import { Button, Card, Collapse, Col, Row } from 'react-bootstrap';
import presentationImg from '../images/news/social.png';
import sponsorshipImg from '../images/supporters/levels_above.png';
import captainImg from '../images/news/captain.png';

function News() {
    const [expandNews1, setExpandNews1] = useState(false);
    const [expandNews2, setExpandNews2] = useState(false);
    const [expandNews3, setExpandNews3] = useState(false);

    function handleNewsExpand1() {
        setExpandNews1(!expandNews1);
        setExpandNews2(false);
        setExpandNews3(false);
    }

    function handleNewsExpand2() {
        setExpandNews2(!expandNews2);
        setExpandNews1(false);
        setExpandNews3(false);
    }

    function handleNewsExpand3() {
        setExpandNews3(!expandNews3);
        setExpandNews1(false);
        setExpandNews2(false);
    }

    const newsItems = [
        {
            title: 'PRESENTATION NIGHT',
            openingLine:
                'The presentation night has been booked for the 1st February.',
            mainText:
                'It will be held at the clubhouse with the start time to be confirmed.',
            imgSrc: presentationImg,
            callback: handleNewsExpand1,
            expanded: expandNews1,
        },
        {
            title: 'SPONSORSHIP PACKAGES',
            openingLine:
                'Sponsorship packages are available for the 2025 season.',
            mainText:
                'Find out about our sponsorship packages on the Supporters page.',
            imgSrc: sponsorshipImg,
            callback: handleNewsExpand2,
            expanded: expandNews2,
        },
        {
            title: 'BOWLS MEETING',
            openingLine:
                'There is a bowls meeting on the 23rd November at 2pm.',
            mainText:
                'The meeting will be held at the club and all members are encouraged to attend. The meeting will discuss the the teams for the upcoming season and to choose the captains.',
            imgSrc: captainImg,
            callback: handleNewsExpand3,
            expanded: expandNews3,
        },
    ];

    return (
        <div id="news">
            <h1>LATEST NEWS</h1>
            <Row xs={1} lg={3} className="g-4 align-items-start">
                {newsItems.map((item, index) => {
                    return (
                        <Col key={index}>
                            <Card style={{ minHeight: '490px' }} bg="light">
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Img
                                        style={{ paddingBottom: '1rem' }}
                                        variant="top"
                                        src={item.imgSrc}
                                    />
                                    {item.expanded && (
                                        <Card.Text className="flex-grow-1">
                                            {item.openingLine}
                                        </Card.Text>
                                    )}
                                    {!item.expanded && (
                                        <Card.Text className="flex-grow-1">
                                            {item.openingLine.length > 100 &&
                                            !item.expanded
                                                ? `${item.openingLine.substring(
                                                      0,
                                                      100
                                                  )}...`
                                                : item.openingLine}
                                        </Card.Text>
                                    )}
                                    {!item.expanded && (
                                        <div className="d-flex justify-content-end mt-auto">
                                            <Button
                                                variant="light"
                                                onClick={() => item.callback()}
                                                className="w-100"
                                            >
                                                READ MORE
                                            </Button>
                                        </div>
                                    )}
                                    <Collapse in={item.expanded}>
                                        <Card.Text>{item.mainText}</Card.Text>
                                    </Collapse>
                                    {item.expanded && (
                                        <Button
                                            variant="light"
                                            onClick={() => item.callback()}
                                        >
                                            CLOSE
                                        </Button>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </div>
    );
}

export default News;
