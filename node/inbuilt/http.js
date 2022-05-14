let http = require('http');

//req > what we send to server(params,queryParams,form)
//res > what server will responed

let server = http.createServer((req,res) => {
    res.write('<h1>First node server</h1>');
    res.end()
})

server.listen(6780)