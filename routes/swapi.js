const express = require('express');
const router = express.Router();
const swapiConstrollers = require('../controllers/swapi');
const response = require('../utils/response');

router.get('/', function (req, res, next) {
  // #swagger.path = '/swapi/'
  // #swagger.tags = ['swapi']
  /* #swagger.responses[200] = {
        description: 'Ejemplo de respuesta',
        schema: {
          "error": false,
          "status": 200,
          "body": [
              {
              "nombre": "Luke Skywalker",
              "altura": "172",
              "masa": "77",
              "color_de_pelo": "blond",
              "color_de_piel": "fair",
              "color_de_los_ojos": "blue",
              "Ano_de_nacimiento": "19BBY",
              "genero": "male",
              "mundo_natal": "http://swapi.dev/api/planets/1/",
              "Pelicula": [
              "http://swapi.dev/api/films/1/",
              "http://swapi.dev/api/films/2/",
              "http://swapi.dev/api/films/3/",
              "http://swapi.dev/api/films/6/"
              ],
              "especies": [],
              "vehiculos": [
              "http://swapi.dev/api/vehicles/14/",
              "http://swapi.dev/api/vehicles/30/"
              ],
              "naves_estelares": [
              "http://swapi.dev/api/starships/12/",
              "http://swapi.dev/api/starships/22/"
              ],
              "creado": "2014-12-09T13:50:51.644000Z",
              "editado": "2014-12-20T21:17:56.891000Z",
              "url": "http://swapi.dev/api/people/1/"
              },
          ]
        }
      }*/
  swapiConstrollers
    .getPerson()
    .then((result) => {
      response.success(req, res, result, 200);
    })
    .catch(next);
});

module.exports = router;
