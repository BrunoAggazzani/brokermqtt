let mqtt = require('mqtt');
let client = mqtt.connect('ws://192.168.100.39:443');//Este sub.js deberia ponerlo en un metodo de la app y pasarle como parametro el topico.
let topik = 'topik1';                                   //con la direccion del broker hosteado que solo deberia llevar la parte de broker.js

client.on('message', (topik, message) => {
    message = message.toString();
    console.log(message);
});

client.on('connect', () => {
    client.subscribe(topik);
});
// Tendria que ver si puedo copiar esto en un metodo de la app del taxi y probarlo aunque sea en local para ver si lee las 
// publicaciones a esta direccion ip desde el servidor mqtt tambien en local. Algo similar a lo que hago con las dos terminales
// pero que la terminal de sub sea el resultado de la ejecucion del metodo en la app. Todo en local por ahora.