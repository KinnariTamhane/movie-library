const writeToFile = require('../util/write-to-file');

module.exports = (req,res) => {

    const id = req.url.split('/')[3] || '';

        if(id){
            const index = req.movies.findIndex((element) =>{
                return element.id === id;
            });

            if(index >= 0){
                req.movies.splice(index,1);
                res.statusCode = 201;
                res.setHeader('content-type','application/json');
                res.write(JSON.stringify({message : "Entry Deleted"}));
                writeToFile(req.movies);
                res.end();
            }
        }
        else{
            res.statusCode = 400;
            res.setHeader('content-type','application/json');
            res.write(JSON.stringify({message : 'Data not found'}));
            res.end();
        }

    }