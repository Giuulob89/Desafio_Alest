import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/tela-administrador.css';
import logoImg from '../images/BELEZA VIRTUAL 1.svg';
import poImg from '../images/pexels-𝐕𝐞𝐧𝐮𝐬-𝐇𝐃-𝐌𝐚𝐤𝐞-𝐮𝐩-&-𝐏𝐞𝐫𝐟𝐮𝐦𝐞-2688991.jpg';
import lixeiraImg from '../images/lixeira.svg';
import pencilImg from '../images/pencil.svg';


function TelaAdministrador() {
    return (
        <div id="tela-administrador">
            <div className="navbar">
                <div className="logo">
                    <img src={logoImg} alt="logo" />
                </div>
            </div>
            <div className="content">
                <div className="introducao">
                    <div className="ola">
                        <h1>Olá, Administrador!</h1>
                    </div>
                    <Link to="./cadastro-de-produtos" className="link"><button>+ Cadastrar novo produto</button></Link>
                    <div className="lista-de-produtos">
                        <h4>Aqui você pode acessar a lista de produtos já cadastrados:</h4>
                    </div>
                </div>
                <div className="cards">
                    <div className="card1">
                        <div className="imagem-card">
                            <img src={poImg} alt="Pó Compacto" />
                        </div>
                        <div className="informacoes-produto">
                            <div className="nome-card">
                                <h5>Nome</h5>
                                <p>Pó Compacto</p>
                            </div>
                            <div className="preco-card">
                                <h5>Preço</h5>
                                <p>R$20,00</p>
                            </div>
                            <div className="marca-card">
                                <h5>Marca</h5>
                                <p>Marca 2</p>
                            </div>
                            <div className="informacoes-card">
                                <h5>Informações específicas</h5>
                                <p>Produto exclusivo Beleza Virtual</p>
                            </div>
                        </div>
                        <div className="botoes">
                            <Link to="./editar-produto"><button><img src={pencilImg} alt="editar" /></button></Link>
                            <button><img src={lixeiraImg} alt="excluir" /></button>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="imagem-card">
                            <img src={poImg} alt="Pó Compacto" />
                        </div>
                        <div className="informacoes-produto">
                            <div className="nome-card">
                                <h5>Nome</h5>
                                <p>Pó Compacto</p>
                            </div>
                            <div className="preco-card">
                                <h5>Preço</h5>
                                <p>R$20,00</p>
                            </div>
                            <div className="marca-card">
                                <h5>Marca</h5>
                                <p>Marca 2</p>
                            </div>
                            <div className="informacoes-card">
                                <h5>Informações específicas</h5>
                                <p>Produto exclusivo Beleza Virtual</p>
                            </div>
                        </div>
                        <div className="botoes">
                            <Link to="./editar-produto"><button><img src={pencilImg} alt="editar" /></button></Link>
                            <button><img src={lixeiraImg} alt="excluir" /></button>
                        </div>
                    </div>
                    <div className="card1">
                        <div className="imagem-card">
                            <img src={poImg} alt="Pó Compacto" />
                        </div>
                        <div className="informacoes-produto">
                            <div className="nome-card">
                                <h5>Nome</h5>
                                <p>Pó Compacto</p>
                            </div>
                            <div className="preco-card">
                                <h5>Preço</h5>
                                <p>R$20,00</p>
                            </div>
                            <div className="marca-card">
                                <h5>Marca</h5>
                                <p>Marca 2</p>
                            </div>
                            <div className="informacoes-card">
                                <h5>Informações específicas</h5>
                                <p>Produto exclusivo Beleza Virtual</p>
                            </div>
                        </div>
                        <div className="botoes">
                            <Link to="./editar-produto"><button><img src={pencilImg} alt="editar" /></button></Link>
                            <button><img src={lixeiraImg} alt="excluir" /></button>
                        </div>
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