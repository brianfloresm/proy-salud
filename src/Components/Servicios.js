import { Accordion, Col, Image } from "react-bootstrap"
import imgserv from '../assets/img/imgVilla/img-serv1.jpg'
import imgserv2 from '../assets/img/imgVilla/img-serv2.jpeg'
export const Servicios=()=>{
    return(
        <div>
          <br/>
          <br/>
            <section className="servicios">
                <div className="acordion">
                <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Servicios en linea</Accordion.Header>
        <Accordion.Body>
        Sistema de programación de citas médicas en línea para facilitar a los pacientes la reserva de citas desde la comodidad de sus hogares.
        Ofrece a los pacientes la opción de registrarse en línea. Pueden crear perfiles con información básica, historial médico y detalles de contacto para facilitar futuras reservas.
        Implementa un calendario interactivo que muestre la disponibilidad de los médicos y permita a los pacientes seleccionar las fechas y horas que mejor se adapten a sus necesidades.
        Envía confirmaciones automáticas por correo electrónico o mensajes de texto una vez que se haya realizado la reserva. Incluye detalles de la cita, nombre del médico, ubicación y cualquier instrucción adicional.
<Col xs={12} md={12}>
          <Image src={imgserv} thumbnail />
        </Col>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Servicios Medicos</Accordion.Header>
        <Accordion.Body>
        Ofrecemos servicios de consulta médica general para el tratamiento de enfermedades comunes, chequeos de rutina y atención de problemas de salud no especializados.
        Contamos con un equipo de profesionales altamente capacitados en diversas especialidades, como cardiología, dermatología, pediatría, ginecología, entre otras.
        Enfocamos nuestros esfuerzos en la prevención de enfermedades mediante chequeos regulares, vacunaciones y asesoramiento sobre estilos de vida saludables.
        Ofrecemos servicios especializados para la salud de la mujer, que incluyen exámenes ginecológicos, control prenatal, planificación familiar y atención posparto.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Consejos de salud</Accordion.Header>
        <Accordion.Body>
        Descubre la importancia de mantener un estilo de vida activo. Desde simples rutinas de ejercicios hasta consejos para incorporar actividad física en tu día a día, te ayudaremos a encontrar formas efectivas de mantenerte en movimiento.
        Explora consejos nutricionales expertos que te guiarán hacia una alimentación equilibrada. Con información sobre dietas saludables, porciones adecuadas y recetas nutritivas, te apoyaremos en la búsqueda de una alimentación que promueva la salud y la vitalidad.
        Aprende estrategias efectivas para manejar el estrés en un mundo acelerado. Desde técnicas de relajación hasta consejos para encontrar equilibrio emocional, te proporcionaremos herramientas para enfrentar los desafíos diarios de manera saludable.
        Descubre la importancia del sueño reparador y cómo mejorar la calidad de tu descanso. Con sugerencias prácticas para establecer rutinas de sueño saludables, te ayudaremos a optimizar tu descanso nocturno para un mejor rendimiento diario.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Recetas en linea</Accordion.Header>
        <Accordion.Body>
        Descubre recetas que combinan lo mejor de la nutrición y el sabor. Desde platos vegetarianos hasta opciones ricas en proteínas magras, encontrarás una amplia variedad de opciones para satisfacer tus preferencias y requisitos dietéticos.
        Cada receta ha sido elaborada con ingredientes cuidadosamente seleccionados para maximizar los beneficios para la salud. Nos enfocamos en la frescura y la calidad, asegurándonos de que cada bocado contribuya a tu bienestar general.
        Nuestras recetas vienen con instrucciones claras y sencillas, adecuadas para todos los niveles de habilidad culinaria. Desde principiantes hasta chefs experimentados, todos pueden disfrutar de la preparación de deliciosas comidas saludables.
        Explora nuestras recetas especializadas, diseñadas en colaboración con profesionales de la salud, para abordar necesidades específicas. Ya sea para controlar enfermedades crónicas o mejorar la energía, encontrarás opciones adaptadas a tus objetivos de bienestar.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                </div>
                
            </section>
        </div>
    )
}