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

