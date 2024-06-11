
const bodyParser = require('../util/body-parser');
const writeToFile = require('../util/write-to-file');

module.exports = async(req,res) => {

    const id = req.url.split('/')[3] || '';

        if(id){
            try{
                let body = await bodyParser(req);

                const index = req.movies.findIndex((movie) => {
                  return movie.id === id;
                });

                if(index >= 0){
                    req.movies[index]= {id, ...body };
                    res.statusCode = 201;
                    res.writeHead(200, { "Content-Type": "application/json" });
                    res.end(JSON.stringify(req.movies[index]));
                    writeToFile(req.movies);
                }
            }
            catch(e){
                console.log(e);
            }
        }
        else{
            res.statusCode = 400;
            res.setHeader('content-type','application/json');
            res.write(JSON.stringify({message : 'Data not found'}));
            res.end();
        }

    }