const express = require('express');
const { celebrate, Joi } = require('celebrate');
const router = express.Router();
const response = require('../utils/response');
const personaConstrollers = require('../controllers/persona');

router.get('/', function (req, res, next) {
  // #swagger.path = '/persona/'
  // #swagger.tags = ['persona']
  /* #swagger.responses[200] = {
        description: 'Ejemplo de respuesta',
        schema: {
          "error": false,
          "status": 200,
          "body": [
          {
          "id": 1,
          "nombres": "Erick",
          "apellidos": "García",
          "edad": "29"
          },
          {
          "id": 2,
          "nombres": "Indra",
          "apellidos": "Perú",
          "edad": "50"
          },
          {
          "id": 3,
          "nombres": "Rimac",
          "apellidos": "Perú",
          "edad": "50"
          }
          ]
        }
} */
  personaConstrollers
    .getPersonas()
    .then((result) => {
      response.success(req, res, result, 200);
    })
    .catch(next);
});

router.get(
  '/:id',
  celebrate({
    params: Joi.object().keys({
      id: Joi.string()
        .required()
        .error((errors) => {
          errors[0].message = 'Invalid entry.';
          return errors;
        }),
    }),
  }),
  function (req, res, next) {
    // #swagger.path = '/persona/{id}'
    // #swagger.tags = ['persona']
    //  #swagger.parameters['id'] = { description: "Persona ID" }
    /* #swagger.responses[200] = {
        description: 'Ejemplo de respuesta',
        schema: {
          "error": false,
          "status": 200,
          "body": [
          {
          "id": 1,
          "nombres": "Erick",
          "apellidos": "García",
          "edad": "29"
          }
          ]
        }
} */
    const { id } = req.params;
    personaConstrollers
      .getPersona(id)
      .then((result) => {
        response.success(req, res, result, 200);
      })
      .catch(next);
  }
);

router.post(
  '/',
  celebrate({
    body: Joi.object().keys({
      nombres: Joi.string()
        .required()
        .error((errors) => {
          errors[0].message = 'Invalid entry.';
          return errors;
        }),
      apellidos: Joi.string()
        .required()
        .error((errors) => {
          errors[0].message = 'Invalid entry.';
          return errors;
        }),
      edad: Joi.number()
        .required()
        .error((errors) => {
          errors[0].message = 'Invalid entry.';
          return errors;
        }),
    }),
  }),
  function (req, res, next) {
    // #swagger.path = '/persona/'
    // #swagger.tags = ['persona']
    /*  #swagger.parameters['obj'] = {
                in: 'body',
                type: "object",
                description: "Data persona",
                schema: {
                    $nombres: "Erick",
                    $apellidos: "García",
                    $edad: 29
                }
        } */
    /* #swagger.responses[200] = {
        description: 'Ejemplo de respuesta',
        schema: {
    "error": false,
    "status": 200,
    "body": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 3,
        "serverStatus": 2,
        "warningCount": 0,
        "message": "",
        "protocol41": true,
        "changedRows": 0
    }
}
} */
    const { nombres, apellidos, edad } = req.body;

    personaConstrollers
      .createPersona({ nombres, apellidos, edad })
      .then((result) => {
        return response.success(req, res, result, 200);
      })
      .catch(next);
  }
);

module.exports = router;
