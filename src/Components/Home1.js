import { Container, Row, Col } from "react-bootstrap"
import Villa from'../assets/img/imgVilla/villa-maria.jpg';
import { useEffect, useState } from "react";

export const Home1 =()=>{
    const[loopnum,setloopnum ]=useState(0);
const[isDeleating, setisDeleating]=useState(false);
const toRotate = [""];
const [text,setText]=useState("");
const tiempo = 2000;
const[delta, setDelta]=useState(300 -Math.random()*100);
useEffect(()=>{
    let ticker = setInterval(()=>{
        tick();
    },delta)
    return()=>{clearInterval(ticker)};
},[text])

const tick=()=>{
    let i = loopnum % toRotate.length;
    let fulltext = toRotate[i];
    let updateText = isDeleating ? fulltext.substring(0,text.length-1) : fulltext.substring(0,fulltext.length+1);

    setText(updateText);
    if(isDeleating){
        setDelta(prevDelta => prevDelta/2);
    }
    if(!isDeleating && updateText === fulltext){
        setisDeleating(true);
        setDelta(tiempo);
    }else{
        if(isDeleating && updateText === ''){
            setisDeleating(false);
            setloopnum(loopnum+1);
            setDelta(500);  
        }
    }
}
    return(
        <div>
            <section className="banner">
            <Container>
            <Row className="aling-item-center">
                    <Col xs={12} md={12} xl={12}>
                        <h1>{'Bienvenido al centro de salud'}</h1>
                        <h1>{'Villa Maria'}</h1>
                        <h2>{''}<span className="wrap">{text}</span></h2>
                    </Col>
                </Row>
            </Container>
            </section>
            <section className="home1" id="home">
            <Container>
                <Row className="aling-home1">
                    <Col xs={12} md={8} xl={8}>
                    <h2>Pagina de inicio</h2>
                    <h2>Introduccion</h2>
                        <p>
                            ¡Bienvenido al Centro de Salud Villa Maria!
                            En nuestro compromiso por brindar atención integral y personalizada, te damos la más cordial bienvenida a nuestra página. En el Centro de Salud Villa Maria, nos enorgullece ser un oasis de bienestar donde la salud y el cuidado se entrelazan para ofrecerte una experiencia única.
                            Nuestra misión es proporcionar servicios de salud de la más alta calidad, centrándonos en la prevención, el diagnóstico temprano y el tratamiento eficaz. Con un equipo de profesionales altamente calificados y apasionados por su trabajo, nos esforzamos por crear un ambiente acogedor y seguro donde puedas confiar en recibir la atención que mereces.
                            Explora nuestro sitio para descubrir los servicios que ofrecemos, desde consultas médicas generales hasta programas especializados para el bienestar físico y emocional. Además, encontrarás recursos informativos y consejos para mantener un estilo de vida saludable.
                            En el Centro de Salud Villa Maria, tu salud es nuestra prioridad. Estamos aquí para apoyarte en cada paso de tu viaje hacia el bienestar. ¡Gracias por confiar en nosotros!
                        </p>
                    </Col>
                    <Col xs={12} md={4} xl={4}>
                        <img className="img_Cds" src={Villa}/>
                        <h4>Hospital Central</h4>
                        <p className="p-home1">Centro de salud Villa Maria</p>
                    </Col>
                </Row>
            </Container>
        </section>
        </div>
        
    )
}