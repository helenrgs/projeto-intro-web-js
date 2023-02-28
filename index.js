const cursos = [
  {
    nome: "HTML e CSS",
    descricao: "",
    duracao: "1 mês",
    valor: 500,
  },
  {
    nome: "JavaScript",
    descricao: "",
    duracao: "2 meses",
    valor: 900,
  },
  {
    nome: "APIs Rest",
    descricao: "",
    duracao: "6 meses",
    valor: 2000,
  },
];

const turmas = [
  {
    turma: "Hipátia",
    curso: "JavaScript",
    inicio: "30/11/2022",
    termino: "30/01/2022",
    numeroDeAlunos: 150,
    periodo: "Noturno",
    concluida: false,
  },
  {
    turma: "Sibyla",
    curso: "JavaScript",
    inicio: "30/10/2022",
    termino: "30/12/2022",
    numeroDeAlunos: 200,
    periodo: "Integral",
    concluida: false,
  },
  {
    turma: "Curie",
    curso: "HTML e CSS",
    inicio: "15/09/2022",
    termino: "15/10/2022",
    numeroDeAlunos: 180,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Zhenyi",
    curso: "HTML e CSS",
    inicio: "01/11/2022",
    termino: "01/01/2023",
    numeroDeAlunos: 80,
    periodo: "Integral",
    concluida: false,
  },
  {
    turma: "Clarke",
    curso: "HTML e CSS",
    inicio: "04/07/2022",
    termino: "04/09/2022",
    numeroDeAlunos: 200,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Blackwell",
    curso: "APIsRest",
    inicio: "20/03/2022",
    termino: "20/06/2022",
    numeroDeAlunos: 100,
    periodo: "Integral",
    concluida: true,
  },
  {
    turma: "Elion",
    curso: "APIsRest",
    inicio: "12/01/2022",
    termino: "12/06/2022",
    numeroDeAlunos: 200,
    periodo: "Noturno",
    concluida: true,
  },
  {
    turma: "Burnell",
    curso: "APIsRest",
    inicio: "18/10/2022",
    termino: "18/04/2023",
    numeroDeAlunos: 90,
    periodo: "Integral",
    concluida: false,
  },
];

const estudantes = [
  {
    estudante: "Chris Evans",
    turma: "Hipátia",
    curso: "JavaScript",
    valor: "900",
    numeroDeParcelas: 9,
    desconto: false,
    valorParcelas: 100,
  },

  {
    estudante: "Halle Berry",
    turma: "Burnell",
    curso: "APIsRest",
    valor: "2000",
    numeroDeParcelas: 4,
    desconto: false,
    valorParcelas: 500,
  },

  {
    estudante: "Lashana Lynch",
    turma: "Zhenyi",
    curso: "HTML e CSS",
    valor: "500 reais",
    numeroDeParcelas: 1,
    desconto: true,
    valorParcelas: 500,
  },
];

const carrinhoCursos = [];

const capitalize = (nome) => {
  return nome
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const buscarTurma = () => {
  let inputTurma = document.getElementById("fclass").value;
  const resultadoTurma = turmas.filter((obj) => {
    return obj.turma.toLowerCase().includes(inputTurma.toLowerCase());
  });
  inputTurma.value = "";
  return resultadoTurma.length > 0
    ? gerarCard(resultadoTurma)
    : gerarCard(turmas);
};

const gerarCard = (classSearch) => {
  const cardsSearch = classSearch.map(
    (itemSearch) =>
      `
        <div class="card-team">
        <list class="card-in">
            <h3 class="title-class">${itemSearch.turma}</h3>
            <ul>
                <li class="card-point-li">Curso: ${itemSearch.curso}</li>
                <li class="card-point-li">Início: ${itemSearch.inicio}</li>
                <li class="card-point-li">Término: ${itemSearch.termino}</li>
                <li class="card-point-li">Número de Alunos: ${
                  itemSearch.numeroDeAlunos
                }</li>
                <li class="card-point-li">Período: ${itemSearch.periodo}</li>
                <li class="card-point-li">Concluído: ${
                  itemSearch.concluida ? "Sim" : "Não"
                }</li>
            </ul>
        </list>  
    </div>
    `
  );
  let screenCards = document.getElementById("container-cards");
  screenCards.innerHTML = cardsSearch.join("");
};

const buscarCurso = (nomeCurso) => {
  nomeCurso = nomeCurso.toLowerCase();
  let resultadoCurso = cursos.find((curso) =>
    curso.nome.toLowerCase().includes(nomeCurso)
  );
  return resultadoCurso;
};

const matricular = (event) => {
  event.preventDefault();

  let nome = document.getElementById("GET-name").value.toLowerCase();
  let curso = document.getElementById("GET-module").value.toLowerCase();
  let turma = document.getElementById("GET-class").value.toLowerCase();
  let nParcelas = document.getElementById("GET-parc").value;

  if (!nome || !curso || !turma || !nParcelas) {
    document.getElementById("GET-name").value = "";
    document.getElementById("GET-module").value = "";
    document.getElementById("GET-class").value = "";
    document.getElementById("GET-parc").value = "";
    return alert("Preencha todos os dados!");
  }

  let objectModule = buscarCurso(curso);
  let moduleKeyValue = objectModule.valor;
  let percentDiscount = 0.2;
  let discount = false;
  let valueParcs = 0;

  if (nParcelas <= 2) {
    discount = true;
    valueParcs = ((percentDiscount * moduleKeyValue) / nParcelas).toFixed(2);
  } else {
    discount = false;
    valueParcs = (moduleKeyValue / nParcelas).toFixed(2);
  }

  const regisStudent = {
    student: capitalize(nome),
    turma: turma,
    curso: objectModule.nome,
    valor: moduleKeyValue,
    parcelas: nParcelas,
    desconto: discount,
    valorParcela: valueParcs,
  };

  estudantes.push(regisStudent);

  document.getElementById("report-regist").innerHTML = `
  <div id="registration-completed">
    <div id="title-regist">
      <h3 id="title-registration">Aluno Matriculado!</h3>
      <img id="img-green-check" src="imgs/Vector.svg" alt="green check">
    </div>
    <ul id="student-itens">
      <li id="item-regist">Nome: ${regisStudent.student}</li>
      <li id="item-regist">Curso: ${regisStudent.curso}</li>
      <li id="item-regist">Turma: ${turma}</li>
    </ul>
  </div>
  `;
  document.getElementById("GET-name").value = "";
  document.getElementById("GET-module").value = "";
  document.getElementById("GET-class").value = "";
  document.getElementById("GET-parc").value = "";
};

const showList = () => {
  const dataOp = document.getElementById("cursosData");
  const optionsList = cursos.map((curso) => `<option value = "${curso.nome}">`);
  dataOp.innerHTML = optionsList.join("");
};

function addCarrinhoCursos() {
  const inputCurso = document.getElementById("cursos").value.trim();

  const allModules = document.getElementById("report-1");
  const moduleSelected = buscarCurso(inputCurso);

  if (!inputCurso) {
    alert("Selecione um curso!");
    return;
  }

  if (allModules.innerHTML.includes(inputCurso)) {
    alert("Curso já incluso!");
    document.getElementById("cursos").value = "";
    return;
  }

  if (typeof moduleSelected === "object") {
    allModules.innerHTML += `- ` + inputCurso + `<p></p>`;
    carrinhoCursos.push(moduleSelected.valor);
    console.log(carrinhoCursos);
  } else {
    alert("erro!");
  }
  document.getElementById("cursos").value = "";
}

function parcelarCurso(event) {
  event.preventDefault();
  let soma = carrinhoCursos.reduce((partialSum, a) => partialSum + a, 0);
  let desconto = "";
  let precoTotal = 0;
  arrTam = carrinhoCursos.length;
  const nParcelas = document.getElementById("GET-nparc").value;
  if (arrTam > 0) {
    switch (arrTam) {
      case 3:
        desconto = 0.15;
        break;
      case 2:
        desconto = 0.1;
        break;
      default:
        desconto = 0;
        break;
    }
    for (const preco of carrinhoCursos) {
      precoTotal = precoTotal + preco;
    }
    precoTotal = precoTotal - precoTotal * desconto;
  }

  let valordaParcela;

  if (nParcelas <= 2) {
    precoTotal = precoTotal - (precoTotal * 20) / 100;
    valordaParcela = (precoTotal / nParcelas).toFixed(2);
    document.getElementById("report-value").innerHTML = `<h4>Valor</h4>
    <p>O valor do pagamento é de R$ ${precoTotal}. Em ${nParcelas}x de ${valordaParcela} reais. Foi concedido um desconto de 20%.</p>`;
  } else if (nParcelas >= 3 && nParcelas <= 12) {
    document.getElementById("report-value").innerHTML = `<h4>Valor</h4>
    <p>O valor do pagamento é de R$ ${precoTotal}. Em ${nParcelas}x de ${valordaParcela} reais.</p>`;
  } else {
    document.getElementById("report-value").innerHTML =
      "<p>Desculpe, não foi possível calcular o valor! Por favor tente um novamente<p>";
  }

  document.getElementById("cursos").value = "";
  document.getElementById("report-1").innerHTML = "";
}

function studentReport(event) {
  event.preventDefault();
  let repoStudent = document.getElementById("get-student").value;
  const objStd = buscarEstudante(repoStudent);
  document.getElementById(
    "card-student"
  ).innerHTML = `<p><span class="span-turma">Aluno:</span> ${objStd.estudante}</p>
  <p><span class="span-turma">Turma:</span> ${objStd.turma}</p>
  <p><span class="span-turma">Curso:</span> ${objStd.curso}</p>
  <p><span class="span-turma">Valor total:</span> R$${objStd.valor}</p>
  <p><span class="span-turma">Valor parcela:</span> R$${objStd.valorParcelas}</p>
  <p><span class="span-turma">N.º parcelas:</span> ${objStd.numeroDeParcelas}</p>`;
}

const buscarEstudante = (strStd) => {
  strStd = strStd.toLowerCase();
  const srchObj = estudantes.find((aluno) =>
    aluno.estudante.toLowerCase().startsWith(strStd)
  );

  if (!srchObj) {
    alert("Digite o nome do aluno corretamente!");
  }
  return srchObj;
};

// relatorioEstudante = (nomeEstudante) => {
//   let objStd = buscarEstudante(nomeEstudante);
//   return ` Aluno: ${objStd.estudante} \n Turma: ${objStd.turma} \n Curso: ${objStd.curso} \n Valor Total: ${objStd.valor} reais \n Valor Parcela: ${objStd.valorParcelas} \n Nº Parcelas: ${objStd.numeroDeParcelas}
//     `;
// };
