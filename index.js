const http = require('http');
const moviesData = require('./data/movies.json');
const getReq = require('./methods/getRequest');
const postReq = require('./methods/postRequest')
const putReq = require('./methods/putRequest')
const deleteReq = require('./methods/deleteRequest')
const PORT = 5000;

const server = http.createServer((req,res)=>{
    req.movies = moviesData;
    switch(req.method){
        case 'GET' :
        getReq(req,res);
        break;
        case 'POST' :
        postReq(req,res);
        break;
        case 'PUT' :
        putReq(req,res);
        break
        case 'DELETE' :
        deleteReq(req,res);
        break;
        default:
            res.statusCode = 404;
            res.setHeader('content-type','application/json');
            res.write(JSON.stringify({message : 'page not found'}));
            res.end();
    }
})

server.listen(PORT,()=>{
    console.log(`listening to port ${PORT}`)
})
