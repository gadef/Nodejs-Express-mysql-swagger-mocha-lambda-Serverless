const swapi = require('swapi-node');

class SwapiController {
  getPerson() {
    return new Promise((resolve, reject) => {
      swapi.getPerson().then(
        (data) => {
          let newData = data.results.map((item) => {
            return {
              nombre: item.name,
              altura: item.height,
              masa: item.mass,
              color_de_pelo: item.hair_color,
              color_de_piel: item.skin_color,
              color_de_los_ojos: item.eye_color,
              Ano_de_nacimiento: item.birth_year,
              genero: item.gender,
              mundo_natal: item.homeworld,
              Pelicula: item.films,
              especies: item.species,
              vehiculos: item.vehicles,
              naves_estelares: item.starships,
              creado: item.created,
              editado: item.edited,
              url: item.url,
            };
          });
          resolve(newData);
        },
        (error) => {
          reject({
            data: '',
            message: error.message,
          });
        }
      );
    });
  }
}
module.exports = new SwapiController();
