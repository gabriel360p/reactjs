import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Image,Col,Container} from 'react-bootstrap';
import img from "./img/people.jpeg"

function About() {
  return (
    <Container className='d-flex justify-content-center'>
        <Card className='mt-4'>
        <Card.Header as="h5">Desenvolvedor</Card.Header>
        <Card.Body>
            <Card.Title>Criador do Projeto</Card.Title>
            <Card.Text>
                <Col xs={6} md={6}>
                    <div>
                        <Image src={img} rounded />
                        <div>
                            Barry Allen
                        </div>
                    </div>
                </Col>
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
        </Card>
    </Container>
  );
}

export default About;