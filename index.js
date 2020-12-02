const express = require('express');
var http = require('http');
//const path = require('path');
//const morgan = require('morgan');
//const mysql = require('mysql');
//const myConnection = require('express-myconnection');
const app = express();
//var ws = require('express-ws')(app); 

//importando rutas
//const customerRoutes = require('./src/ruotes/customers');

//configuracion
app.set('port', process.env.PORT || 4003);
/*app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './src/views'));*/

//middlewares
/*app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
//middleware: connection DDBB
app.use(myConnection(mysql, {
    host: 'den1.mysql4.gear.host',
    user: 'bruno',
    password: 'Batman241.',
    port: 3306
}, 'single'));*/

//rutas
//app.use('/', customerRoutes );

//static files
//app.use(express.static(path.join(__dirname, 'public')));

//conexion servidor
app.listen(app.get('port'), () => {
    console.log('Servidor en puerto 4003')
    console.log("Iniciando broker...");
    http.createServer(function (req, res) {
        res.sendStatus(200);
        res.end();        
    });
     
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
});