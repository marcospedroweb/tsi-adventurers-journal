import React from 'react';
import './Contactus.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const Contactus = () => {
    return (
        <>
            <div id='bodyContact' className='row justify-content-between align-items-start'>

                <div className='d-flex flex-column col-12 text-center my-5'>
                    <h1 className='text-white'>Entre em contato conosco</h1>
                    <p className='text-white'>Entre em contato conosco a qualquer
                        hora do dia ou da noite! Estamos sempre
                        prontos para ajudar e fornecer o suporte
                        necessário para garantir que sua aventura
                        seja inesquecível.</p>
                </div>
                <div id='test' className='col-12 col-lg-6'>
                    {/* <form>
                        <input type='text' placeholder='Nome completo'></input> <br></br>
                        <input type='email' placeholder='Email'></input> <br></br>
                        <textarea placeholder='mensagem'></textarea><br></br>
                    </form> */}
                    <FloatingLabel controlId="floatingName" label="Name">
                        <Form.Control type="text" placeholder="Nome Completo" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingComentario" label="Comments">
                        <Form.Control
                            as="textarea"
                            placeholder="Mensagem"
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                    <input id='sendButton' type='submit'></input>
                </div>
                <div className='col-12 col-lg-6'>
                    <div id='img'></div>
                    <div>
                        <table>
                            <tr>
                                <td><img src="/imgs/wppicon.png" /></td>
                                <td>  (XX) XXXX-XXXX</td>
                            </tr>
                            <tr>
                                <td><img src="/imgs/mapicon.png" /></td>
                                <td>  Rua com algum nome especifico, XX</td>
                            </tr>
                            <tr>
                                <td><img src="/imgs/emailicon.png" /></td>
                                <td>  adventurerjornaul@suporte.com</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
};

export default Contactus;