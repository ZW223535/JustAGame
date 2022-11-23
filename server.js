console.log("script loaded");

//Use express module - we are loading the express
let express = require("express");

//Create a web application - we are activatin the express

let app = express();

//Define a port number used to communicate betwen the srver and the host

let port = 3000; //we can't use the same port number for more than 1 service

let server = app.listen(port);

app.use(express.static("public"));

console.log("running server on http://localhost:" + port);
