import './App.css';
import { Navbar } from './componentes/Navbar';
import { Index as Inicio } from './componentes/INICIO/Index';
import { Index as Alta } from './componentes/ALTA/Index';
import { Index as Carrito } from './componentes/CARRITO/Index';
import { Index as Contacto } from './componentes/CONTACTO/Index';
import { Index as Nosotros } from './componentes/NOSOTROS/Index';
import { RutaNoValida } from './componentes/RutaNoValida';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Inicio titulo="Inicio" />} />

          <Route path='inicio' element={<Inicio titulo="Inicio" />} />
          <Route path='alta' element={<Alta titulo="Alta" />} />
          <Route path='carrito' element={<Carrito titulo="Carrito" />} />
          <Route path='contacto' element={<Contacto titulo="Contacto" />} />
          <Route path='nosotros' element={<Nosotros titulo="Nosotros" />} />

          <Route path='*' element={<RutaNoValida />} />
        </Routes>
        <footer >©Copyright2024</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
