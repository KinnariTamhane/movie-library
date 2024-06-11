const bodyParser = require('../util/body-parser');
const writeToFile = require('../util/write-to-file');

module.exports = async (req,res) =>{
    if(req.url === '/api/movies'){
       try{
        let body = await bodyParser(req);
        body.id = crypto.randomUUID();
        req.movies.push(body);
        res.statusCode = 201;
        res.setHeader('content-type','application/json');
        res.write(JSON.stringify({message : 'Entry added successfully!'}));
        writeToFile(req.movies);
        res.end();
       }
       catch(e){
        console.log(e);
       }
    }
}