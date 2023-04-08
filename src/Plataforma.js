
module.exports = class Plataforma {
    constructor (alunos, cursos) {
        this._alunos = alunos;
        this._cursos = cursos;      
        }

    verificar_aluno () {
        return false;
    }
}
