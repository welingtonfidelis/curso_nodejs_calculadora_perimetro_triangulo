// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Calculadora de perímetro de um triângulo</h1>`;

// Exercício 1
const calculaPerimetroTriangulo = (reta1, reta2, reta3) => {
  return reta1 + reta2 + reta3;
};

// Exercício 2
let controle = true;
const validaRetaTriangulo = (reta1, reta2, reta3) => {
  const valido =
    (reta2 - reta3 < reta1 < reta2 + reta3) &
    (reta1 - reta3 < reta2 < reta1 + reta3) &
    (reta1 - reta2 < reta3 < reta1 + reta2);

  return valido;
};

const validaECalculaPerimetro = (reta1, reta2, reta3) => {
  if (validaRetaTriangulo(reta1, reta2, reta3)) {
    controle = false;
    const perimetro = calculaPerimetroTriangulo(reta1, reta2, reta3);
    const tipo = calculaTipoTriangulo(reta1, reta2, reta3);
    return `O perímetro do triângulo é: ${perimetro}. O tipo do triângulo é: ${tipo}`;
  }

  return `${undefined} - medidas inválidas do triângulo.`;
};

// Exercício 3
const calculaTipoTriangulo = (reta1, reta2, reta3) => {
  const controle = {};

  controle[reta1] = reta1;
  controle[reta2] = reta2;
  controle[reta3] = reta3;

  switch (Object.keys(controle).length) {
    case 3: {
      return 'Escaleno';
    }
    case 2: {
      return 'Isóceles';
    }
    default: {
      return 'Equilátero';
    }
  }
};

do {
  let reta1 = +prompt('Tamanho da reta 1');
  let reta2 = +prompt('Tamanho da reta 2');
  let reta3 = +prompt('Tamanho da reta 3');

  alert(validaECalculaPerimetro(reta1, reta2, reta3));
} while (controle);
