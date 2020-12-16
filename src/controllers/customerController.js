const controller = {};
const mysql = require('mysql');
var http = require('http');
//var ws = require('express-ws');

controller.inicio = (req, res) => {
    res.sendStatus(200);
    //res.status(200).send("ok");
}

controller.mimqtt = (req, res) => {
    console.log("conectando a broker...");
    res.status(200).send("ok");
    var data = req.body; //seguir con este dato (ESP = 1) que es el topic al que debe publicar este servidor
     
    var mosca = require('mosca');
    var setting = {port: 1883};
    var broker = new mosca.Server(setting);

    broker.on('ready', () => {
        console.log('broker listo!');
    });

    broker.on('published', (packet) => {
        message = packet.payload.toString();
        console.log(message);
    });    
    
};



module.exports = controller;