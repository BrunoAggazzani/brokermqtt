const controller = {};
const mysql = require('mysql');
var http = require('http');
var ws = require('express-ws');


controller.mimqtt = (req, res) => {
    console.log("conectando a broker...");
    res.sendStatus(200);
     
    var mosca = require('mosca');
    var setting = {port: 443};
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