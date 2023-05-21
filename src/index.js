import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './index.css';
import { GlobalStorage } from './Context/GlobalStorage';
import Profile from './Pages/Profile';
import Loading from './Components/Loading';
import Config from './Pages/Config';
import About from './Pages/About';
import AventurarSe from './Pages/Aventurar-se';
import Contact from './Pages/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStorage>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aventurar-se" element={<AventurarSe />} />
          <Route path="/perfil" element={<Profile />} />
          {/* <Route path="/loading" element={<Loading />} /> */}
          <Route path="/configuracoes" element={<Config />} />
          <Route path="/sobre-nos" element={<About />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  </React.StrictMode>,
);
