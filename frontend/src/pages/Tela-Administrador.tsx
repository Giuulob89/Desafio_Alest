import React from 'react';
import '../styles/pages/tela-administrador.css';
import logoImg from '../images/BELEZA VIRTUAL 1.svg';
import poImg from '../images/pexels-𝐕𝐞𝐧𝐮𝐬-𝐇𝐃-𝐌𝐚𝐤𝐞-𝐮𝐩-&-𝐏𝐞𝐫𝐟𝐮𝐦𝐞-2688991.jpg'

function TelaAdministrador() {
    return (
        <div id="tela-administrador">
            <div className="navbar">
                <div className="logo">
                    <img src={logoImg} alt="logo" />
                </div>
            </div>
            <div className="content">
                <div className="ola">
                    <h1>Olá, Administrador!</h1>
                </div>
                <div className="lista-de-produtos">
                    <h4>Aqui você pode acessar a sua lista de produtos:</h4>
                </div>
                <div className="cards">
                    <div className="card1">
                        <img src={poImg} alt="Pó Compacto" />
                        
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="nome-site">
                    <p>BELEZA VIRTUAL ©</p>
                </div>
            </div>
        </div>
    );
}

export default TelaAdministrador;