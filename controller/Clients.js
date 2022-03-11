const Client = require('../model/Client') //importamos el modelo creado

//Metodo para crear un cliente
const createClient = (req, res) => { //Tenemos en cuenta los parametros de respuesta (res) y consulta (req)
    let client = new Client({ //Creamos un objeto con la informacion desde el body de la consulta
        name: req.body.name,
        lastName: req.body.lastName,
        age: req.body.req,
        subTotal: req.body.subTotal
    })

    client.save((err, cli) => { //Guardamos el Cliente obtenido desde el body de la consulta
        err && res.status(500).json(err.message) //si existe un error, nos mostrara el error
        res.status(200).json(cli) //Caso contrario nos mostrara el cliente guardado
    })
}

//Metodo para crear un cliente
const getclients = (req, res) => { //Tenemos en cuenta los parametros de respuesta (res) y consulta (req)
    Client.find((err, clients) => { //Obtenemos todos los clientes contenidos en la base de datos
        err && res.status(500).send(err.message) //si existe un error, nos mostrara el error
        res.status(200).json(clients) //Caso contrario nos mostrara el arreglo de clientes existentes
    })
}

module.exports = {createClient,getclients} //Exportamos el metodo creado

