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
                        title="CLUB COMPS"
                        imgSrc={quizImg}
                        openingText="The dates have been announced for the 2025 club comps."
                        mainText="TBC."
                        closingText=""
                        linkUrl=""
                        linkText=""
                        expanded={expandNews1}
                        callback={handleNewsExpand1}
                    />
                </Col>
                <Col>
                    <NewsItem
                        title="MIRFIELD MERIT"
                        imgSrc={handshakeImg}
                        openingText="Littlemoor are hosting the Mirfield Merit on the 20th July."
                        mainText="TBC."
                        closingText=""
                        linkUrl=""
                        linkText=""
                        expanded={expandNews2}
                        callback={handleNewsExpand2}
                    />
                </Col>
                <Col>
                    <NewsItem
                        title="JUNIOR COMP"
                        imgSrc={greenSideImg}
                        openingText="Littlemoor are hosting a junior competition on the 14th September."
                        mainText="TBC."
                        closingText=""
                        linkUrl=""
                        linkText=""
                        expanded={expandNews3}
                        callback={handleNewsExpand3}
                    />
                </Col>
            </Row>
        </div>
    );
}

export default News;
