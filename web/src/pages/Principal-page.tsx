import React from 'react';
import '../styles/pages/principal-page.css';
import lupaImg from '../images/lupa 1.svg';
import logoImg from '../images/BELEZA VIRTUAL 1.svg';
import { Link } from 'react-router-dom';

function Principal_Page() {
    return (
        <div id="principal-page">
            <div className="navbar">
                <div className="barra-de-busca">
                    <img src={lupaImg} alt="pesquisa" />
                    <input type="text" />
                </div>
                <div className="logo">
                    <img src={logoImg} alt="logo" />
                </div>
                <div className="acesso">
                    <Link to="" className="login">Entrar</Link>
                    <Link to="" className="cadastro">Cadastrar</Link>
                </div>
            </div>
            <div className="marcas">
                <h3>MARCAS DOS PRODUTOS</h3>
                <div className="selecao-marcas">
                    <div className="marca1">
                        <p>MARCA 1</p>
                    </div>
                    <div className="marca2">
                        <p>MARCA 2</p>
                    </div>
                    <div className="marca3">
                        <p>MARCA 3</p>
                    </div>
                    <div className="marca4">
                        <p>MARCA 4</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="nome-site">
                    <p>BELEZA VIRTUAL</p>
                </div>
            </div>
        </div>
    );
}

export default Principal_Page;