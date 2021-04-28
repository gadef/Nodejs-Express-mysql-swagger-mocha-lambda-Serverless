const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const errors = require('./utils/errors');

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger_output.json');

app.use(express.json());
app.use(helmet());

const personaRouter = require('./routes/persona');
const swapiRouter = require('./routes/swapi');

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
  })
);

app.use('/persona', personaRouter);
app.use('/swapi', swapiRouter);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(errors);

module.exports = app;
