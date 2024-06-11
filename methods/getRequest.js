module.exports = (req,res) => {

    const id = req.url.split('/')[3] || '';

    if(req.url === '/api/movies'){
        res.statusCode = 201;
        res.setHeader('content-type','application/json');
        res.write(JSON.stringify(req.movies));
        res.end();
    }
    else if(id){
        const selectedMovie = req.movies.filter((element) =>{
            return element.id === id;
        });
        res.statusCode = 201;
        res.setHeader('content-type','application/json');
        res.write(JSON.stringify(selectedMovie));
        res.end();
    }
    else{
        res.statusCode = 400;
        res.setHeader('content-type','application/json');
        res.write(JSON.stringify({message : 'Data not found'}));
        res.end();
    }
}