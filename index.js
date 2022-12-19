//Arrray
// const arrayCursos = ["HTML e CSS", "JavaScript", "APIs Rest"];
// let arrayTurmas = [];
let arrayEstudantes = []; 

//após conhecer objetos

const cursos = [
    {
        nome: "HTML e CSS",
        descricao:"",
        duracao:"1 mês",
        valor: 500
    },
    {
        nome: "JavaScript",
        descricao: "",
        duracao: "2 meses",
        valor: 900
    },
    {
        nome:"APIs Rest",
        descricao:"",
        duracao: "6 meses",
        valor: 2000
    }
];
const turmas = [
    {
        turma:"Hipátia",
        curso: "JavaScript", 
        inicio: "30/11/2022",
        termino: "30/01/2022",
        numeroDeAlunos: 150,
        periodo: "Noturno",
        concluida: false


    },
    {
        turma:"Sibyla",
        curso: "JavaScript", 
        inicio: "30/10/2022",
        termino: "30/12/2022",
        numeroDeAlunos: 200,
        periodo: "Integral",
        concluida: false
    },
    {
        turma:"Curie",
        curso: "HTML e CSS", 
        inicio: "15/09/2022",
        termino: "15/10/2022",
        numeroDeAlunos: 180,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma:"Zhenyi",
        curso: "HTML e CSS", 
        inicio: "01/11/2022",
        termino: "01/01/2023",
        numeroDeAlunos: 80,
        periodo: "Integral",
        concluida: false
    },
    {
        turma:"Clarke",
        curso: "HTML e CSS", 
        inicio: "04/07/2022",
        termino: "04/09/2022",
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma:"Blackwell",
        curso: "APIsRest", 
        inicio: "20/03/2022",
        termino: "20/06/2022",
        numeroDeAlunos: 100,
        periodo: "Integral",
        concluida: true
    },
    {
        turma:"Elion",
        curso: "APIsRest", 
        inicio: "12/01/2022",
        termino: "12/06/2022",
        numeroDeAlunos: 200,
        periodo: "Noturno",
        concluida: true
    },
    {
        turma:"Burnell",
        curso: "APIsRest", 
        inicio: "18/10/2022",
        termino: "18/04/2023",
        numeroDeAlunos: 90,
        periodo: "Integral",
        concluida: false
    }
    
];

const estudantes = [
    {
        estudante:"Chris Evans",
        turma: "Hipátia",
        curso: "JavaScript",
        valor:  "900",
        numeroDeParcelas: 9,
        desconto:   false,
        valorParcelas: 100
    },

    {
        estudante: "Halle Berry",
        turma: "Burnell",
        curso: "APIsRest",
        valor:  "2000",
        numeroDeParcelas: 4,
        desconto:   false,
        valorParcelas: 500
    },

    {
        estudante: "Lashana Lynch",
        turma: "Zhenyi",
        curso: "HTML e CSS",
        numeroDeParcelas: 1,
        desconto: true,
        valorParcelas: 500
    }
];

// const parcelarCurso = (numeroDeParcelas) => {
//     valorCurso = cursos[2].valor;
//     if (numeroDeParcelas <= 2) {

//         desconto = 0.2;
//         valorTotal = valorCurso*desconto;
//         parcela = valorTotal/numeroDeParcelas;
//         console.log(`O curso ${cursos[2].nome} ficou no valor total de R$ ${valorTotal.toFixed(2)} em ${numeroDeParcelas}x de ${parcela.toFixed(2)} reais. Foi concedido desconto de 20%`)
    
//     }else{
//         valorTotal = valorCurso;
//         parcela = valorCurso/numeroDeParcelas;
//         console.log(`O curso ${cursos[2].nome} ficou no valor total de R$ ${cursos[2].valor} em ${numeroDeParcelas}x de ${parcela} reais`)
//     }

// }

//parcelar curso modificada

parcelarCurso = (carrinhoCursos, nParcelas) => {
    var soma = carrinhoCursos.reduce(function(soma,i) {
        return soma + i
    })

    arrTam = carrinhoCursos.length; 
    let parcelas = 0;
    switch (arrTam) {
        case 3:
            desconto = "15%"
            soma = soma*0.15;
            if(nParcelas<=2){
                soma = soma*0.2;
                desconto = "15% + 20%"
                return (`O valor do pagamento é de ${soma} reais com desconto de ${desconto}, parcelado em ${nParcelas}x de R$${soma/nParcelas.toFixed(2)}`);
            }else{
                return console.log(`O valor do pagamento é de ${soma} reais com desconto de ${desconto}, parcelado em ${nParcelas}x de R$${soma/nParcelas.toFixed(2)}`);

            }

        case 2:
            desconto = "10%"
            soma = soma*0.1;  
            if(nParcelas<=2){
                desconto = "10%+20%"
                soma = soma*0.2;
                return (`O valor do pagamento é de ${soma} reais com desconto de ${desconto} de desconto, parcelado em ${nParcelas}x de R$${soma/nParcelas.toFixed(2)}`);

            }else{
                return (`O valor do pagamento é de ${soma} reais com desconto de ${desconto}, parcelado em ${nParcelas}x de R$${soma/nParcelas.toFixed(2)}`);

            }
        case 1:
            soma = soma; 
        
            if(nParcelas<=2){
                soma = soma*0.2;
                desconto = "20%"
                return (`O valor do pagamento é de ${soma} reais com desconto de ${desconto}, parcelado em ${nParcelas}x de R$${soma/nParcelas.toFixed(2)}`);
            }else{
                return (`O valor do pagamento é de ${soma} reais, parcelado em ${nParcelas}x de R$${soma/nParcelas.toFixed(2)}`);
            }
    }
}

console.log((parcelarCurso([500,900,400],6)))

//loops 

buscarCurso = (nomeCurso) => {
    for (i in cursos) {
        if (cursos[i].nome = nomeCurso) {
            return cursos[i]; 
        }
    
    }
}

buscarTurma = (nomeTurma) => {
    let temNaBase = false; 
    for (i in turmas) {
        if (turmas[i].turma = nomeTurma) {
            temNaBase = true; 
            return turmas[i]; 
        }
    if (temNaBase == false) {
        return "Não encontramos!";
    }
    }
}

buscarEstudante = (nomeEstudante) => {
    let temNaBase = false; 
    for (estudante in estudantes) {
        if (estudantes[i].estudante = nomeEstudante) {
            temNaBase = true; 
            return estudantes[i]; 
        }
    if (temNaBase == false) {
        return "Não encontramos!";
    }
    }
}

console.log(buscarCurso("JavaScript"))
console.log(buscarCurso("Ruby")) //expected: "não encontramos"
console.log(buscarTurma("Sibyla"))
console.log(buscarEstudante("Lashana Lynch"))


matricular = (nomeAluno, nomeCurso, nomeTurma, numeroDeParcelas) => {

    matricula = {},
    matricula.estudante = nomeAluno;
    matricula.curso = nomeCurso;
    matricula.turma = nomeTurma;
    matricula.numeroDeParcelas = numeroDeParcelas;

    for (i in cursos) {
        if (cursos[i].nome = nomeCurso) {
            matricula.valor = cursos[i].valor; 
        }

    }

    if (numeroDeParcelas <= 2) {
        desconto = 0.2;
        matricula.desconto = true; 
        matricula.valorParcelas = ((0.2*matricula.valor)/(numeroDeParcelas)).toFixed(2);
    }else{
        matricula.desconto = false; 
        matricula.valorParcelas = ((matricula.valor)/(numeroDeParcelas)).toFixed(2);
    }
    
    estudantes.push(matricula)
    console.log(` Aluno Matriculado \n Nome: ${nomeAluno} \n Curso: ${nomeCurso} \n Turma: ${nomeTurma}
    `)
    return estudantes; 

    
}

console.log(matricular("Helen", "JavaScript","Hipátia", 4))
