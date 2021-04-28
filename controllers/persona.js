const { list, get, upsert } = require('../store/crud');

class PersonasController {
  constructor() {
    this.collection = 'personas';
  }

  async getPersonas() {
    const personas = await list(this.collection);
    return personas || [];
  }

  async getPersona(personaId) {
    const persona = await get(this.collection, personaId);
    return persona || {};
  }

  async createPersona(persona) {
    const createpersonaId = await upsert(this.collection, persona);
    return createpersonaId;
  }
}

module.exports = new PersonasController();
