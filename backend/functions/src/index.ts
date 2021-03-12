import * as functions from "firebase-functions";
import * as express from "express";

import { clientecontroller } from './controller/exportControllers';

let admin = require("firebase-admin");

const serviceAccount = require("../src/config/desafio-alest-firebase-adminsdk-sy5l6-21201eebf9.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

/*  APPS  */
let app = express();
let clientes = express();

/*  ROTA - API  */
app.get('/', function(req, res) {
    res.send(`STATUS: online ${new Date()}`);
});

/*  ROTA - CLIENTES  */
clientes.get('/:idCliente', (req, res) => { res.json(clientecontroller.getClienteById(req.params.idCliente)) });
clientes.route('/') 
    .get((req, res) => {res.json ( clientecontroller.getCliente() )})
    .post((req, res) => {res.json( clientecontroller.postCliente() )})
    .put((req, res) => {res.json( clientecontroller.putCliente() )})
    .delete((req, res) => {res.json( clientecontroller.deleteCliente() )})

/*  EXPORT APPS  */
exports.app = functions.https.onRequest(app);
exports.clientes = functions.https.onRequest(clientes);
