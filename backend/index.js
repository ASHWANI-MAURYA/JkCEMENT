const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/JKCEMENT'
mongoose.connect(url, { useNewUrlParser: true })
const database = mongoose.connection;
var cors = require('cors');

database.on('error', (error) => {
    console.log(error)
})
database.once('connected', () => {
    console.log('Database Connected');
})

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})

const routes = require('./routes');

// const swaggerUi = require('swagger-ui-express');
// const swaggerAutogen = require('swagger-autogen')();
// swaggerDocument = require('./swagger.json');

app.use(cors()); // Use this after the variable declaration
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// app.use(
//   '/api-docs',
//   swaggerUi.serve, 
//   swaggerUi.setup(swaggerDocument)
// );


app.use('/api', routes)

// const outputFile = './swagger.json';
// const endpointsFiles = ['./routes.js']; // root file where the route starts.
// // Extended: https://swagger.io/specification/#infoObject
// const swaggerDocument = require('./swagger.json');
// swaggerAutogen(outputFile, routes, doc).then(async () => {
//     await import('./index.js'); // Your project's root file
//   });
// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));




