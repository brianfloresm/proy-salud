import React, {useState} from 'react'
import { Container, Form, Button } from 'react-bootstrap';
export const Reclamos = () => {
  return (
    <div>
       <Container className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
      <h2>Formulario de Reclamos</h2>
      <Form style={{ width: '300px', marginTop: '20px' }}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSubject">
          <Form.Label>Asunto</Form.Label>
          <Form.Control type="text" placeholder="Ingrese el asunto del reclamo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Ingrese su mensaje de reclamo" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar Reclamo
        </Button>
      </Form>
    </Container>
    </div>
  )
}
