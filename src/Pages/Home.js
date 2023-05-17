import React from 'react';
import ModalityCard from '../Components/ModalityCard';
import ButtonCustom from '../Components/ButtonCustom';
import styles from './Home.css';

const Home = () => {
  return (
    <>
    <div id='banner'></div>
    <div className='container-xl'>
      <div className='d-flex justify-content-center align-items-center'>
        <h1>A coragem é o combustível para novas experiências</h1>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <p>Experiencie esportes radicais com base no seu orçamento</p>
      </div>
      <div className='d-flex justify-content-center align-items-center '>
        <button className='btn btn-primary '>ME AVENTURAR</button>
      </div>

    </div>
    <div className='container-xl'>
      <div className='d-flex justify-content-center'>
        <div className='d-flex justify-content-center'>
          <h1>Conheça algumas das modalidades</h1>
        </div>
        <div className='d-flex justify-content-center'>
          <div>
            <div id='teste' style={{ width: "250px", height: "200px", background: "red", margin: "10px" }}></div>
            <div id='teste' style={{ width: "250px", height: "200px", background: "red", margin: "10px" }}></div>
          </div>
          <div>
            <div id='teste' style={{ width: "250px", height: "200px", background: "red", margin: "10px" }}></div>
            <div id='teste' style={{ width: "250px", height: "200px", background: "red", margin: "10px" }}></div>
          </div>
          <div>
            <div id='teste' style={{ width: "250px", height: "200px", background: "red", margin: "10px" }}></div>
            <div id='teste' style={{ width: "250px", height: "200px", background: "red", margin: "10px" }}></div>

          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-primary '>VER MAIS MODALIDADES</button>
      </div>
    </div>
    <div>Componente de pacotes de assinaturas</div>
    <div>
      <div className='d-flex justify-content-center'>
        <h2>Seja o guia dos sonhos de nossos clientes Aventureiros</h2>
        <div>
          <div id='guia1' style={{ width: "600px", height: "450px", margin: "10px" }}>
          </div>
          <div> </div>
          <div>
            <div id='teste' className='d-flex justify-content-center'>
              <h5> Oportunidades para guias turisticos</h5>
              <p>
                Se você é um guia turístico experiente
                e apaixonado por esportes radicais,
                temos uma oportunidade única para você!
                Estamos em busca de profissionais que
                possam liderar nossos clientes em aventuras
                emocionantes ao redor do mundo.
              </p>
              <div className='container-xl'>
                <button className='d-flex justify-content-center'>ME INSCREVER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center'>
          <div>
            <div id='teste' className='d-flex justify-content-center'>
              <h5> Oportunidades para guias turisticos</h5>
              <p>
                Se você é um guia turístico experiente
                e apaixonado por esportes radicais,
                temos uma oportunidade única para você!
                Estamos em busca de profissionais que
                possam liderar nossos clientes em aventuras
                emocionantes ao redor do mundo.
              </p>
              <div className='container-xl'>
                <button className='d-flex justify-content-center'>ME INSCREVER</button>
              </div>
            </div>
          </div>
        <div>
          <div id='guia2' style={{ width: "600px", height: "450px", margin: "10px" }}>
          </div>
        </div>

      </div>
    </div>
    <div>
      <h2>Veja as avaliações de alguns dos nossos clientes</h2>
      <div>Componente de avaliaçoes</div>
    </div>
    <div>
      <h2>Conheça mais sobre nos</h2>
      <div id='logo' style={{ width: "668px", height: "750px", margin: "10px" }}>
      </div>
      <div>
        <p>sobre</p>
        <h1>Adventurer's Journey</h1>
        <p>Nós somos um site especializado em viagens
          com esportes radicais, criado para aqueles que
          buscam adrenalina e aventura em suas férias.
        </p>
        <p>
          Oferecemos uma ampla variedade de opções de
          atividades emocionantes, desde paraquedismo
          até rafting, para que você possa escolher aquelas
          que mais lhe agradam.
        </p>
        <p>
          Além disso, nosso site permite que você
          ajuste sua viagem de acordo com a região e
          seu orçamento, para que possa aproveitar ao máximo
          a sua aventura.
        </p>
        <p>
          Conheça mais sobre a nossa plataforma, serviços e equipe
        </p>
        <button className='btn btn-primary'>Conhecer mais sobre</button>
      </div>
    </div>
        </>
  );
};

export default Home;
