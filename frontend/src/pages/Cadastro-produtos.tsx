import React from 'react';
import '../styles/pages/cadastro-de-produtos.css';
import logoImg from '../images/BELEZA VIRTUAL 1.svg';
import { Link } from 'react-router-dom';

function CadastroProdutos() {
    return (
        <div id="cadastro-produtos">
            <div className="navbar">
                <div className="logo">
                    <img src={logoImg} alt="logo" />
                </div>
            </div>
            <div className="formulario">
                <h1>Cadastrar novo produto</h1>
                <div className="imagem">
                    <p>+ Adicionar Imagem</p>
                </div>
                <div className="perguntas">
                    <div className="secao1">
                        <div className="nome">
                            <label htmlFor="">Nome</label>
                            <input type="text" />
                        </div>
                        <div className="marca">
                            <label htmlFor="">Marca</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div className="secao2">
                        <div className="preco">
                            <label htmlFor="">Preço</label>
                            <input type="text" />
                        </div>
                        <div className="informacoes">
                            <label htmlFor="">Informações específicas do produto</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="cadastrar">
                    <Link to = "/"><button>Finalizar cadastro</button></Link>
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

export default CadastroProdutos;