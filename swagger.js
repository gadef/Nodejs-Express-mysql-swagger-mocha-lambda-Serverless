const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/persona.js', './routes/swapi.js'];

swaggerAutogen(outputFile, endpointsFiles);

const app = require('./index');
app.listen(3000);
