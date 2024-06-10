module.exports = (req,res) => {
    console.log('request',req);
    if(req.url === '/api/movies'){
        res.statusCode = 201;
        res.setHeader('content-type','application/json');
        res.write(JSON.stringify(req.movies));
        res.end();
    }
    else{
        res.statusCode = 400;
        res.setHeader('content-type','application/json');
        res.write(JSON.stringify({message : 'Data not found'}));
        res.end();
    }
}