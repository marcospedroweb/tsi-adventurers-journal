import React from 'react';
import ModalityCard from '../Components/ModalityCard';
import ButtonCustom from '../Components/ButtonCustom';
import styles from './About.css';

const About = () => {
    return (
        <>
            <div id='body'>
                <div id='teste' className='row justify-content-between align-items-start'>
                    <div id='teste' className='col-12 col-lg-6'>
                        <div className='p-5' style={{ width: "550px" }}>
                            <h1 className='text-white'>Adventurer's Journal</h1>
                            <h5 className='text-white'>
                                É uma plataforma que oferece diversas opções de viagens com esportes radicais em diferentes regiões do mundo, e tudo isso de acordo com o seu orçamento e preferências.     Nossa equipe está sempre disponível para auxiliá-lo em todas as etapas da viagem, desde o planejamento até o retorno.
                                Além disso, oferecemos diferentes planos, incluindo um gratuito, para que você possa escolher o que melhor se encaixa nas suas necessidades. Estamos aqui para tornar sua viagem uma experiência incrível e inesquecível!
                            </h5>

                        </div>

                    </div>

                    <div id='aboutimg' className='col-12 col-lg-6' style={{ width: "668px", height: "650px", margin: "10px" }}></div>

                </div>
                <div id='teste'>
                    <h1 className='text-white'> Desperte o Aventureiro(a) que há em voce</h1>
                    <p className='text-white'>
                        Em nosso site, oferecemos diversas opções de viagens com esportes radicais.
                        Veja os mais famosos
                    </p>
                    <div>
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
            </div>
                    </div>
                </div>
                <div id='teste' className='d-flex flex-column col-12 text-center my-5'>
                    <h1 className='text-white'>Oferecemos suporte em toda sua viagem</h1>
                    <div className=''>
                        <div className='row col-12 col-lg-6 align-content-start'>
                            <div>
                                <img src='/imgs/timeline.png' className='mt-1'></img>
                            </div>
                            <div>
                                <img src='/imgs/timeline.png' className='mt-3'></img>
                            </div>
                            <div>
                                <img src='/imgs/timeline.png' className='mt-3'></img>
                            </div>
                            <div>
                                <img src='/imgs/timeline.png' className='mt-3'></img>
                            </div>

                        </div>

                    </div>
                    <div className='row col-12 col-lg-6'>
                        <div id='aboutimg3' style={{ width: "438px", height: "166px", margin: "10px" }}></div>
                        <div id='aboutimg4' style={{ width: "438px", height: "166px", margin: "10px" }}></div>
                        <div id='aboutimg5' style={{ width: "438px", height: "166px", margin: "10px" }}></div>
                        <div id='aboutimg6' style={{ width: "438px", height: "166px", margin: "10px" }}></div>
                        <div id='aboutimg7' style={{ width: "438px", height: "166px", margin: "10px" }}></div>
                    </div>
                </div>
                <div>
                    Componente de avaliaçoes
                </div>
            </div>
        </>
    )
};

export default About;