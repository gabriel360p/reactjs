import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import img1 from "./img/produtos.jpg";

function Index() {
  return (
    <Container>
        <Row xs={1} md={3} className="g-4 mt-3">
        {Array.from({ length: 6 }).map((_, idx) => (
            <Col key={idx}>
            <Card>
                <Card.Img variant="top" src={img1} />
                <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                    This is a longer card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                </Card.Text>
                </Card.Body>

                <Card.Footer className="text-muted">
                    <a href="/Show">
                        <Button>Abrir</Button>
                    </a>
                </Card.Footer>

            </Card>
            </Col>
        ))}
        </Row>
    </Container>
  );

}

export default Index;