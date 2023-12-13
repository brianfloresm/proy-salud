import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';
export const InicioSesion = () => {
  return (
    <div className='inicioses'>
        <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <h2>Inicia Sesión</h2>
      <Form style={{ width: '300px', marginTop: '20px' }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electrónico</Form.Label>
          <Form.Control type="email" placeholder="Correo electrónico" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
    </div>
  )
}
