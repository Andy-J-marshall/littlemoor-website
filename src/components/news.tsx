import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NewsItem from './newsItem';
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

    return (
        <div id="news">
            <h1>LATEST NEWS</h1>
            <Row xs={1} lg={3} className="g-4 align-items-start">
                <Col>
                    <NewsItem
                        title="QUIZ NIGHT"
                        imgSrc={quizImg}
                        expanded={expandNews1}
                        openingText="The quiz night is on 15th March at 7.30pm, hosted by Will."
                        mainText="£5 per team, maximum of 4 people per team."
                        closingText=""
                        linkUrl=""
                        linkText=""
                        callback={handleNewsExpand1}
                    />
                </Col>
                <Col>
                    <NewsItem
                        title="BOWLS MEETING"
                        imgSrc={handshakeImg}
                        expanded={expandNews2}
                        openingText="The next bowls meeting is on 22nd March at 1pm."
                        mainText="The meeting will discuss the upcoming season and any changes to the teams. The green will officially be open afterwards."
                        closingText=""
                        linkUrl=""
                        linkText=""
                        callback={handleNewsExpand2}
                    />
                </Col>
                <Col>
                    <NewsItem
                        title="OSSETT & HORBURY"
                        imgSrc={greenSideImg}
                        expanded={expandNews3}
                        openingText="Littlemoor have entered a team into the Ossett & Horbury league."
                        mainText="The league is an 8 player team and is played on a Thursday evening. If you are interested in playing, please get in touch with the captain, Alex Wolfenden."
                        closingText=""
                        linkUrl=""
                        linkText=""
                        callback={handleNewsExpand3}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default News;
