import { Row } from 'react-bootstrap';
import NewsItem from './newsItem';
import news1Img from '../images/news/news1.png';
import news2Img from '../images/news/news2.png';
import news3Img from '../images/news/news3.png';

function News() {
    return (
        <div id="news">
            <h1>latest news</h1>
            <Row xs={1} sm={1} md={3} lg={3} className="g-4 align-items-start">
                <NewsItem
                    title="BOWLS MEETING"
                    openingLine="There will be a bowls meeting on the 23rd November at 2pm."
                    mainText="The meeting will be held at the club and all members are encouraged to attend. The meeting will discuss the the teams for the upcoming season and to choose the captains."
                    imgSrc={news3Img}
                />
                <NewsItem
                    title="SPONSORSHIP PACKAGES"
                    openingLine="Sponsorship packages are available for the 2025 season."
                    mainText="If you are interested then please contact a member of the club for more information."
                    imgSrc={news2Img}
                />
                <NewsItem
                    title="UPCOMING EVENTS"
                    openingLine="The Christmas party and Presentation night have been scheduled."
                    mainText="The Christmas party has been booked for the 13th December, and Presentation night will be on the 1st February (both starting at 6pm)"
                    imgSrc={news1Img}
                />
            </Row>
        </div>
    );
}

export default News;
