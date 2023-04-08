const {v4: uuidv4} = require("uuid");

module.exports = class Aluno {
    constructor (nome) {
        this._nome = nome;
        this._assinante = false;
        this._id = uuidv4();        
        }
}
