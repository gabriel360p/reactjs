import {Form,Container,Row,Button} from 'react-bootstrap';

function Create() {
  return (
    <>
    <form>
        <Container>
            <Row>
                <h1>Iphone 12</h1>
            </Row>
            <Row>
                <div>
                    <Form.Label htmlFor="inputPassword5">Nome do Produto</Form.Label>
                    <Form.Control
                        value="Iphone 12"
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        readOnly
                    />
                </div>

                <div>
                    <Form.Label htmlFor="inputPassword5">Preço</Form.Label>
                    <Form.Control
                        value="5.500"
                        type="number"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        readOnly
                    />
                </div>

                <div>
                    <Form.Label htmlFor="inputPassword5">Descrição</Form.Label>
                    <Form.Control
                        as="textarea"
                        value="Smartphone Apple Iphone 12 - Red - 128 - 6 Ram"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                        readOnly
                    />
                </div>

                <div>
                    <Button variant="primary mt-3">Adicionar ao Carrinho</Button>{' '}
                    <Button variant="primary mt-3">Comprar</Button>{' '}

                </div>

            </Row>
        </Container>
    </form>
    </>
  );
}

export default Create;