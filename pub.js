let mqtt = require('mqtt');
let client = mqtt.connect('mqtt://192.168.100.39:443');

let topik = 'topik1';
let message = 'pingo';

client.on('connect', () => {    
    setInterval(() => {
        client.publish(topik, message);
        console.log('mensaje enviado ', message);
    }, 5000);
});