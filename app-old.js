
const http = require('http');
http.createServer((req, res) => {

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'application/csvjson' });

    // const persona = {
    //     nombre: 'Juan',
    //     apellido: 'Perez',
    //     edad: 25
    // };

    res.write('id, nombre\n')
    res.write('1, Fernando\n')
    res.write('2, Israel\n')
    res.write('3, Camoens\n')
    // res.end(JSON.stringify(persona));
    // res.end('Hello World  ' + req.url);
    res.end();
}
).listen(8080);

console.log('Server running');