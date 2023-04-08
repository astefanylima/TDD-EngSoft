
module.exports = class Curso {
    constructor (nome, descricao, cargaHoraria, valor, docente, periodo) {
        this._nome = nome;
        this._descricao = descricao;
        this._cargaHoraria = cargaHoraria;
        this._valor = valor;
        this._docente = docente;
        this._periodo = periodo;
    }
}