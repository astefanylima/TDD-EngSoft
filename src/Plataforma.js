
module.exports = class Plataforma {
    constructor(alunos, cursos) {
        this._alunos = alunos;
        this._cursos = cursos;
    }

    get alunos() {
        return this._alunos;
    }

    verificar_aluno(id) {
        let aluno = this.alunos.find(element => element.id == id);
        if (aluno) {
            return aluno.assinante;
        }
        return false;
    }
}
