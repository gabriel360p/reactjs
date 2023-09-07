import {Form,Container,Row,Button} from 'react-bootstrap';

function Create() {
  return (
    <>
    <form>
        <Container>
            <Row>
                <h1>Cadastro de Produto</h1>
            </Row>
            <Row>
                <div>
                    <Form.Label htmlFor="inputPassword5">Nome do Produto</Form.Label>
                    <Form.Control
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                </div>

                <div>
                    <Form.Label htmlFor="inputPassword5">Preço</Form.Label>
                    <Form.Control
                        type="number"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                </div>

                <div>
                    <Form.Label htmlFor="inputPassword5">Descrição</Form.Label>
                    <Form.Control
                        as="textarea"
                        placeholder="Leave a comment here"
                        style={{ height: '100px' }}
                    />
                </div>

                <div>
                    <Button variant="primary mt-3">Salvar</Button>{' '}

                </div>

            </Row>
        </Container>
    </form>
    </>
  );
}

export default Create;