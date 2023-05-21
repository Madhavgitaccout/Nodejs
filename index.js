const Express = require('express');
const app = Express();
const port = 8000; // In production this are running on port 80

app.listen(port, function(err){
    if(err){
        console.log(`error in running server: ${err}`);
    }

    console.log(`Server running on the: ${port}`);
});