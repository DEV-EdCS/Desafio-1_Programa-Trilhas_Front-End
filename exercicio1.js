// 1. Crie uma variável chamada nome e atribua seu nome a ela. Em seguida, exiba o valor dessa variável.
let nome = ('Edlan Carvalho Silva');
console.log(nome);

// 2. Crie duas variáveis: uma chamada idade e outra chamada altura. Atribua a idade o valor 25 e a altura o valor 1.75. Exiba ambos os valores.
let idade = 25;
let altura = 1.75;
console.log(`${idade} anos de idade, e ${altura} de altura`);

// 3. Crie uma variável chamada preco com o valor 50 e uma variável desconto com o valor 0.2 (20%). Calcule o preço com desconto e exiba o valor final.
let preco = 50;
let desconto = 0.2;
let valorFinal = (preco - (desconto * preco)); // Valor final é igual ao preço - o valor do desconto
console.log (valorFinal);

// 4. Crie uma variável chamada temperatura e atribua o valor 30. Se a temperatura for maior que 25, exiba a mensagem "Está calor!". Caso contrário, exiba "Está fresco!".
let temperatura = 30;
if (temperatura > 25) {
    console.log('Está calor!') ;
}   else {
    console.log('Está fresco!');
};

// 5. Crie uma variável idade e atribua um valor. Se a pessoa for maior de idade (18 ou mais), exiba "Você é maior de idade". Caso contrário, exiba "Você é menor de idade".
let idade2 = 28;
if (idade2 >= 18) {
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
}

// 6. Crie uma variável chamada nota e atribua um valor entre 0 e 10. Se a nota for maior ou igual a 7, exiba "Aprovado". Se for entre 5 e 6, exiba "Recuperação". Caso contrário, exiba "Reprovado".
// let nota = 8.9;
let nota = prompt ('Qual foi a sua nota?');
if (nota >= 7) {
    console.log('Aprovado');
} else if (nota < 5) {
    console.log('Reprovado');
} else {
    console.log('Recuperação');
}

// 7. Crie duas variáveis, numero1 e numero2, e atribua valores a elas. Verifique se os dois números são iguais e, caso sejam, exiba "Os números são iguais". Caso contrário, exiba "Os números são diferentes".
let numero1 = 8;
let numero2 = 9;
if (numero1 == numero2) {
    console.log('Os números são iguais');
} else {
    console.log('Os números são diferentes');
}

// 8. Crie uma variável chamada nome e uma variável chamada idade. Exiba a mensagem "Olá, meu nome é [nome] e eu tenho [idade] anos", utilizando concatenação.
let nome2 = 'Edlan';
let idade3 = 28;
console.log('Olá, meu nome é '+ nome2 + ' e eu tenho ' + idade3 + ' anos'); // Exibe os valores de nome e idade por concatenação

// 9. Crie um loop que imprima os números de 1 a 10 na tela.
let loop = 1; // Inicializa o loop em 1
// Enquanto o contador for menor ou igual a 10, o loop continua
while (loop <= 10) {
  console.log(loop); // Exibe o número atual
  loop++; // Incrementa o loop
}

// 10. Crie um loop que peça ao usuário para digitar um número até que ele digite o número 5.
let numeroCinco = 5;
let chute;
while (chute != numeroCinco) { // Enquanto o chute não for igual ao número cinco
    chute = prompt(`Digite o número ${numeroCinco}`);
}
console.log(`O usúario digitou o número ${numeroCinco}`);

// 11. Crie um loop que imprima a tabuada do número 7, de 1 a 10.
let tabuada = 1; // Inicia a tabuada em 1
let tabuadaSete = 7; // Número da tabuada
while (tabuada <= 10) { // Enquanto o contador for menor ou igual a 10, a tabuada continua
    let resultado = tabuadaSete + tabuada; // Declara a variável resultado para armazenar o valor da soma
  console.log(`${tabuadaSete} + ${tabuada} = ${resultado}`); // Exibe o resultado no console
  tabuada++; // Incrementa o contador
}

// 12. Crie um loop que exiba todos os números pares de 0 a 20.
let pares = 0;
while (pares <= 20) { // Enquanto o contador for menor ou igual a 20, o contador continua
    console.log(pares); // Exibe a sequencia de 0 a 20
    pares+= 2; // Incrementa o contador de 2 e 2, exibindo somente os pares
}

// 13. Escreva um código que calcule a área de um círculo. Utilize uma função para realizar o cálculo. A função deve receber o raio como parâmetro e retornar a área.
function calcularAreaCirculo(raio) {
    return 3.14 * (raio * raio);
}

let areaCirculo = calcularAreaCirculo(2);
console.log(areaCirculo);

// 14. Comente seu código explicando o que cada parte faz. Crie um programa simples que calcule a soma de dois números e imprima o resultado.
function calcularNumeros(num1, num2) {
    return num1 + num2;
}

let resultadoSoma = calcularNumeros(4,8);
console.log(resultadoSoma);

// 15. Refatore o código abaixo para que seja mais legível, usando boas práticas de nomenclatura e separando o código em funções:

// x = 10
// y = 20
// z = x+y

// console.log(z)

function somarValores(valorA, valorB) {
    return valorA + valorB;
}

let valorSoma = somarValores(2, 5);
console.log(valorSoma);