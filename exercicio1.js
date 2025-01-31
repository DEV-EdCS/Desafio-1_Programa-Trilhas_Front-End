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