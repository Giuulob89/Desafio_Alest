import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
admin.initializeApp(functions.config().firebase);
import * as express from "express";

import { clientecontroller } from './controller/exportControllers';
import firebase from "firebase";

admin.initializeApp({
  credential: admin.credential.cert("../src/config/desafio-alest-firebase-adminsdk-sy5l6-21201eebf9.json"),
  databaseURL: "https://desafio-alest-default-rtdb.firebaseio.com/"
});

var firebaseConfig = {
  apiKey: "AIzaSyBPdh5enGZvuh4whgaoUkR7nkQUYh2sa2U",
  authDomain: "desafio-alest.firebaseapp.com",
  databaseURL: "https://desafio-alest-default-rtdb.firebaseio.com",
  projectId: "desafio-alest",
  storageBucket: "desafio-alest.appspot.com",
  messagingSenderId: "886100925342",
  appId: "1:886100925342:web:ea0d5c1014f9bc3aab548f",
  measurementId: "G-CWVY4ZHVX4"
};

firebase.initializeApp(firebaseConfig);
export default firebase;

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
    .post((req, res) => {res.json( clientecontroller.createCliente(req.body) )})
    .put((req, res) => {res.json( clientecontroller.putCliente() )})
    .delete((req, res) => {res.json( clientecontroller.deleteCliente() )})

/*  EXPORT APPS  */
exports.app = functions.https.onRequest(app);
exports.clientes = functions.https.onRequest(clientes);
