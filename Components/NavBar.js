import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet, Link as RouterLink } from "react-router-dom";
import { useState, useEffect } from "react";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState('home');

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(true);
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <div>
            <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>

                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
    <Nav.Link href="/" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
    <Nav.Link href="/servicios" className={activeLink === 'servicios' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('servicios')}>Servicios</Nav.Link>
    <Nav.Link href="/nosotros" className={activeLink === 'nosotros' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('nosotros')}>Nosotros</Nav.Link>
    <Nav.Link href="/ubicacion" className={activeLink === 'colegio' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ubicacion')}>Ubicacion</Nav.Link>
    <Nav.Link href="/galeria" className={activeLink === 'galeria' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('galeria')}>Galeria</Nav.Link>
    <Nav.Link href="/reclamos" className={activeLink === 'reclamos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('reclamos')}>Reclamos</Nav.Link>
    <Nav.Link href="/iniciosesion" className={activeLink === 'iniciosesion' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('iniciosesion')}>Inicio Sesion</Nav.Link>
    <Nav.Link href="/creditos" className={activeLink === 'creditos' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('creditos')}>Creditos</Nav.Link>
                    </Nav>
                        <Outlet />
                        <span className="navbar-text">
                            <button className="vvd" onClick={() => console.log('conectado')}><span>Login</span></button>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;
