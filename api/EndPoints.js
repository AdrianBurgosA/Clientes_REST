const ClientController = require('../controller/Clients') //Importamos el controlador creado
const express = require('express') //Importamos el modulo express para la creacion de las uris
const router = express.Router() //Creamos el router para enrutar las uris con los metodos creados

/* ----- CREACION DE LAS URIS ---- */
//router.metodo_CRUD.('uri', controlador.metodo)
router.post("/add", ClientController.createClient)
router.get("/all",ClientController.getclients)

module.exports = router //Exportamos el router con las uris creadas

