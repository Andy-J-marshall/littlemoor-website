import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import NewsItem from './newsItem';
import juniorCompWinnerImg from '../images/news/junior_comp_winner.png';
import mirfieldMeritImg from '../images/news/mirfield_merit.png';
import gordonGeldartWinnerImg from '../images/news/gordon_geldart_cup.png';

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
                        imgSrc={gordonGeldartWinnerImg}
                        openingText="The dates have been announced for the 2025 club comps:"
                        mainText="Graham Wood Trophy - 2nd August 2025."
                        closingText="Gordon Geldart Trophy - 24th August 2025."
                        linkUrl=""
                        linkText=""
                        expanded={expandNews1}
                        callback={handleNewsExpand1}
                    />
                </Col>
                <Col>
                    <NewsItem
                        title="MIRFIELD MERIT"
                        imgSrc={mirfieldMeritImg}
                        openingText="Littlemoor are hosting the Mirfield Merit on the 20th July."
                        mainText="The games will start at 12pm. Come down and support the players, and enjoy some food and drink from Kerbside Cravings."
                        closingText="There is plenty of parking within a 5 minute walk, and coaches will be organised if there is enough demand."
                        linkUrl=""
                        linkText=""
                        expanded={expandNews2}
                        callback={handleNewsExpand2}
                    />
                </Col>
                <Col>
                    <NewsItem
                        title="JUNIOR COMP"
                        imgSrc={juniorCompWinnerImg}
                        openingText="Littlemoor will be hosting a junior competition on 21st September."
                        mainText="Open to all juniors under 18 on the day. The competition starts at 9:30am and is limited to 32 entrants."
                        closingText="Entry is £5. Prizes: £200 for the winner, £100 for the runner-up, £50 for each semi-finalist, and £25 for each quarter-finalist."
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
