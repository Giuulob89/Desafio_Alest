import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroProdutos from './pages/Cadastro-produtos';
import EditarProduto from './pages/Editar-Produto';
import Principal_Page from './pages/Principal-page'
import TelaAdministrador from './pages/Tela-Administrador';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal_Page} />
                <Route path="/cadastro-de-produtos" exact component={CadastroProdutos} />
                <Route path="/administrador" exact component={TelaAdministrador} />
                <Route path="/editar-produto" exact component={EditarProduto} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;