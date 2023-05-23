import React from 'react';
import ModalityCard from '../Components/ModalityCard';
import ButtonCustom from '../Components/ButtonCustom';
import styles from './Home.css';

const Home = () => {
  return (
    <>
      <div id='body'>

        <div id='banner'></div>
        <div className='container-xl'>
          <div className='d-flex justify-content-center align-items-center'>
            <h1>A coragem é o combustível para novas experiências</h1>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <p>Experiencie esportes radicais com base no seu orçamento</p>
          </div>
          <div className='d-flex justify-content-center align-items-center '>
            <ButtonCustom bsClass={"mt-4"}>ME AVENTURAR</ButtonCustom>
          </div>

        </div>
        <div className='container-xl'>
          <div className='d-flex flex-column justify-content-center'>
            <div className='d-flex justify-content-center'>
              <h1>Conheça algumas das modalidades</h1>
            </div>
            <div className='row justify-content-center'>
              <ModalityCard
                modalityName={'Paraquedismo'}
                img={'/imgs/paraquedas.jpeg'}
                desc={''}
                col="4"
                showIn="home"
              />
              <ModalityCard
                modalityName={'Paraquedismo'}
                img={'/imgs/paraquedas.jpeg'}
                desc={''}
                col="4"
                showIn="home"
              />
              <ModalityCard
                modalityName={'Paraquedismo'}
                img={'/imgs/paraquedas.jpeg'}
                desc={''}
                col="4"
                showIn="home"
              />
              <ModalityCard
                modalityName={'Paraquedismo'}
                img={'/imgs/paraquedas.jpeg'}
                desc={''}
                col="4"
                showIn="home"
              />
              <ModalityCard
                modalityName={'Paraquedismo'}
                img={'/imgs/paraquedas.jpeg'}
                desc={''}
                col="4"
                showIn="home"
              />
              <ModalityCard
                modalityName={'Paraquedismo'}
                img={'/imgs/paraquedas.jpeg'}
                desc={''}
                col="4"
                showIn="home"
              />
            </div>
          </div>
          <div className='d-flex justify-content-center'>
            <ButtonCustom bsClass={"mt-4"}>VER MAIS MODALIDADES</ButtonCustom>
          </div>
        </div>
        <div>Componente de pacotes de assinaturas</div>
        <div className='row justify-content-between text-center'>
          <h2>Seja o guia dos sonhos de nossos clientes Aventureiros</h2>
          <div className='col-12 col-lg-6'>
            <div>
              <div id='guia1' style={{ width: "600px", height: "450px", margin: "10px" }}>
              </div>
              <div> </div>
              <div className='row justify-content-between align-items-start'>
                <div id='teste' className='d-flex flex-column col-12 text-center my-5'>
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
                    <ButtonCustom bsClass={"mt-4"}>ME INSCREVER</ButtonCustom>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-12 col-lg-6'>
            <div>
              <div id='teste' className='d-flex flex-column col-12 text-center my-5'>
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
                  <ButtonCustom bsClass={"mt-4"}>ME INSCREVER</ButtonCustom>
                </div>
              </div>
            </div>
            <div>
              <div id='guia2' style={{ width: "600px", height: "450px", margin: "10px" }}>
              </div>
            </div>

          </div>
        </div>
        <div className='text-center'>
          <h2>Veja as avaliações de alguns dos nossos clientes</h2>
          <div>Componente de avaliaçoes</div>
        </div>
        <div className='row justify-content-between align-items-start text-center'>
          <h2>Conheça mais sobre nos</h2>
          <div id='logo' className='d-flex flex-column col-12 text-center m-5' style={{ width: "668px", height: "750px", margin: "10px" }} >
          </div>
          <div className='col-12 col-lg-6 m-5 p-5'>
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
            <ButtonCustom bsClass={"mt-4"}>Conhecer Mais Sobre</ButtonCustom>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
