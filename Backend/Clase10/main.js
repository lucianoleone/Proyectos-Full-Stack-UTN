//console.log('hola perros');

const filesystem = require('fs') //Es un import pero antiguo (CommonJS)

filesystem.writeFileSync('archivo.txt', 'hola perros', {encoding: 'utf-8'});