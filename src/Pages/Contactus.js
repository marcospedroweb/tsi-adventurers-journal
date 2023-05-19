import React from 'react';
import styles from './Contactus.css';

const Contactus = () => {
    return (
        <>
            <div id='body'>

                <div>
                    <h1>Entre em contato conosco</h1>
                    <p>Entre em contato conosco a qualquer
                        hora do dia ou da noite! Estamos sempre
                        prontos para ajudar e fornecer o suporte
                        necessário para garantir que sua aventura
                        seja inesquecível.</p>
                </div>
                <div id='test'>
                    <form>
                        <input type='text' placeholder='Nome completo'></input> <br></br>
                        <input type='email' placeholder='Email'></input> <br></br>
                        <textarea placeholder='mensagem'></textarea><br></br>
                    </form>
                    <input id='sendButton' type='submit'></input>
                </div>
                <div>
                    <div id='img'></div>
                    <div>
                        <table>
                            <tr>
                                <td><img src="/imgs/wppicon.png"/></td>
                                <td>  (XX) XXXX-XXXX</td>
                            </tr>
                            <tr>
                            <td><img src="/imgs/mapicon.png"/></td>
                                <td>  Rua com algum nome especifico, XX</td>
                            </tr>
                            <tr>
                            <td><img src="/imgs/emailicon.png"/></td>
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