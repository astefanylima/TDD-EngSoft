const Aluno = require("../src/Aluno.js");
const Curso = require("../src/Curso.js");
const Plataforma = require("../src/Plataforma.js");

test('Dado um aluno já autenticado e pagando a assinatura mensal, quando acessar a plataforma de estudo,então ter acesso aos cursos disponiveis', () => {
    //Arrange
    let curso1 = new Curso("MBA Líderes", "Focado para líderes", 360, 50000, "Andreia Leles", "noturno");
    let curso2 = new Curso("MBA Técnicos", "Focado para técnicos", 360, 50000, "Talita Berbel", "vespertino");
    let curso3 = new Curso("MBA Especialista", "Focado para especialistas", 360, 50000, "Rafael da Paz", "matutino");
    
    let aluno = new Aluno("Stefany");
    let plataforma = new Plataforma([aluno], [curso1, curso2, curso3]);

    //act
    let is_assinante = plataforma.verificar_aluno();

    //assert
    expect(is_assinante).toBe(true);
});
