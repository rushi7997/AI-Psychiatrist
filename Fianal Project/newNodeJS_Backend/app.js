let express = require('express');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
let bodyParser = require('body-parser');
// let dotenv = require('dotenv');
let MongoClient = require('mongodb').MongoClient;
let cors = require('cors');
let http = require('http');

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

const chatbot = require('./api/index');

const port = 5000;
const server = http.createServer(app);
const io = require('socket.io')(server);
// dotenv.config();

(async () => {
    try{
        const client = await MongoClient.connect("mongodb://localhost:27017",{ useNewUrlParser: true });
        const db = client.db('Project');
        app.use('/', chatbot(db,io));
    }catch (e) {
        console.log("BiG Error!")
    }
})();

// module.exports = app;

server.listen(port);