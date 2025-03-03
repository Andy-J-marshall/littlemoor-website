import { useState } from 'react';
import { Button, Card, Collapse, Col, Row } from 'react-bootstrap';
import greenSideImg from '../images/news/green_side.png';
import quizImg from '../images/news/quiz.png';
import handshakeImg from '../images/news/handshake.png';

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
            title: 'QUIZ NIGHT',
            openingLine:
                'The quiz night is on 15th March at 7.30pm, hosted by Will.',
            mainText:
                '£5 per team, maximum of 4 people per team.',
            imgSrc: quizImg,
            callback: handleNewsExpand1,
            expanded: expandNews1,
        },
        {
            title: 'BOWLS MEETING',
            openingLine: 'The next bowls meeting is on 22nd March at 1pm.',
            mainText:
                'The meeting will discuss the upcoming season and any changes to the teams. The green will officially be open afterwards.',
            imgSrc: handshakeImg,
            callback: handleNewsExpand2,
            expanded: expandNews2,
        },
        {
            title: 'OSSETT & HORBURY',
            openingLine:
                'Littlemoor have entered a team into the Ossett & Horbury league.',
            mainText:
                'The league is an 8 player team and is played on a Thursday evening. If you are interested in playing, please get in touch with the captain, Alex Wolfenden.',
            imgSrc: greenSideImg,
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
