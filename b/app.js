const express = require('express');
require('./config/config'); 

const app = express();
const bodyParser=require('body-parser');
const port = 8080;

const cors = require('cors');
const CORS_OPTIONS={origin:"http://localhost:4200"};
app.use(cors(CORS_OPTIONS));
app.use(bodyParser());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: true}));

// app.use(bodyParser.json({ limit: '100mb' }));
// app.use(bodyParser.urlencoded({ extended: false, limit: '100mb', parameterLimit: 1000000 }));

app.get("", (req, resp) => {
    return resp.send("<h1> Home Page..!</h1>");
});


const crudroute = require('./routes/crud');
app.use("/api/crud", crudroute);


app.listen(`${port}`, () => {
    console.log(`server is running on port ${port} and connect for Amol-test`)
}
);