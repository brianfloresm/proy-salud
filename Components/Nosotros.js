import { Col, Card,Row} from "react-bootstrap"
import nos1 from '../assets/img/imgVilla/nosotros1.avif'
import nos2 from '../assets/img/imgVilla/nosotros2.jpg'
import nos3 from '../assets/img/imgVilla/nosotros3.jpg'
import nos4 from '../assets/img/imgVilla/nosotros4.avif'
export const Nosotros=()=>{
    return(
        <di>
            <section className="nosotros">
                <h1>Nosotros</h1>
                <div>
                <Row>
                    <Col xs={6} md={4}>
                        <img src={nos1}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <img src={nos2}/>
                    </Col>
                    <Col xs={6} md={4}>
                        <img src={nos3}/>
                    </Col>
                </Row>
                </div>
                <h2>Instalaciones</h2>
                <div>
                <Card>
                    <div className="imgnosotros">
                    <Card.Img className="CardImg" variant="top" src={nos4}/>
                    </div>
                        <Card.Body>
                        <Card.Text>
                        <b>Nos preocupamos por</b> la seguridad de nuestros pacientes es la mayor prioridad que tiene este centro de salud.
                        <br/>
                        <b>Tambien</b> tener en cuenta las necesidades del paciente siendo ese nuestro objetivo.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    
                </div>
                
            </section>
        </di>
    )
}