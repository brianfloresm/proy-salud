import { Col, Container, Row} from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon-yotube.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/x.svg'
export const Footer = ()=>{
    return(
        <section>
            <Container section className="footer">
            <h2>Referencias</h2>
                <Row className="aling-footer">
                    <Col xs={12} md={4} xl={4}>
                        <h3>Direccion</h3>
                        <p>Carlos Peña St, Quillacollo</p>
                        <br/>
                        <h3>Horario</h3>
                        <p>Todo el día</p>
                    </Col>
                    <Col xs={12} md={4} xl={4}>
                        <h3>Telefonos</h3>
                        <p>+591 77757700</p>
    
                    </Col>
                    <Col xs={12} md={4} xl={4}>
                        <h3>Redes Sociales</h3>
                        <span className="navbar-text1">
                            <div className="social-icon1">
                                <a href="www.google.com"><img src={navIcon1}/></a>
                                <a href="www.google.com"><img src={navIcon2}/></a>
                                <a href="www.google.com"><img src={navIcon3}/></a>
                                <a href="www.google.com"><img src={navIcon4}/></a>
                            </div>
                        </span>
                   </Col>
                </Row>
            </Container>
        </section>
    )
}