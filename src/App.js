
import './App.css';
import NavBar  from './Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Footer } from './Components/Footer';
import { Home1 } from './Components/Home1';
import { Routes, Route } from 'react-router-dom';
import { Servicios } from './Components/Servicios';
import { Default } from './Components/Default';
import { Ubicacion } from './Components/Ubicacion';
import { Galeria } from './Components/Galeria';
import { Nosotros } from './Components/Nosotros';
import { Reclamos } from './Components/Reclamos';
import { InicioSesion } from './Components/InicioSesion';
import { Creditos } from './Components/Creditos'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home1 />} />
        <Route path='servicios' element={<Servicios />} />
        <Route path='nosotros' element={<Nosotros/>} />
        <Route path='ubicacion' element={<Ubicacion />} />
        <Route path='galeria' element={<Galeria />} />
        <Route path='reclamos' element={<Reclamos />} />
        <Route path='iniciosesion' element={<InicioSesion />} />
        <Route path='creditos' element={<Creditos />} />
        <Route path='*' element={<Default />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
