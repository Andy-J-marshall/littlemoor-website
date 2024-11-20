import { useState } from 'react';
import { Button, Card, Col, Collapse } from 'react-bootstrap';

type NewsItemProps = {
    title: string;
    openingLine: string;
    mainText?: string;
    imgSrc: string;
};

function NewsItem(props: NewsItemProps) {
    const title = props.title.toLowerCase();
    const openingLine = props.openingLine;
    const mainText = props.mainText;
    const imgSrc = props.imgSrc;

    const [open, setOpen] = useState(false);

    return (
        <Col>
            <Card bg="light">
                <Card.Body>
                    <h4>{title}</h4>
                    <Card.Img
                        style={{ width: '100%', height: 'auto' }}
                        variant="top"
                        src={imgSrc}
                    />
                    <br />
                    <br />
                    <Card.Text>{openingLine}</Card.Text>
                    {!open && (
                        <Button variant="light" onClick={() => setOpen(true)}>
                            READ MORE...
                        </Button>
                    )}
                    <Collapse in={open}>
                        <Card.Text>{mainText}</Card.Text>
                    </Collapse>
                    {open && (
                        <Button variant="light" onClick={() => setOpen(false)}>
                            CLOSE
                        </Button>
                    )}
                </Card.Body>
            </Card>
        </Col>
    );
}

export default NewsItem;
