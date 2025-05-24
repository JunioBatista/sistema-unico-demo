export class CreateFilaDTO {
    constructor({ name, email }) {
      if (!name || !email) {
        throw new Error('Nome e email são obrigatórios');
      }
      this.name = name;
      this.email = email;
    }
  }