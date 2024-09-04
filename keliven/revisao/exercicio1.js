var numeros = [1, 2, 3, 4, 5]

const multiplicado = numeros.map(numero => numero * 3)
console.log(multiplicado)

var numeros2 = [1, 2, 3, 4, 5];

const numeros2ComoStrings = numeros2.map(numero => numero.toString());
console.log(numeros2ComoStrings);

var palavras = ["só", "por que", "é", "grande", "acha", "que", "é", "dois", "quem quem", "meu", "pau"]

const PalavraM = palavras.map(palavra => palavra.toUpperCase());
console.log(PalavraM)

const pessoas = [
    { nome: "Alice", idade: 25 },
    { nome: "Bob", idade: 30 },
    { nome: "Charlie", idade: 35 }
  ];
  
  const nomes = pessoas.map(pessoa => pessoa.nome);
   console.log(nomes);

  const numeros3 = [1, 2, 3, 4, 5];

const numeros3AoQuadrado = numeros3.map(numero => numero ** 2);
console.log(numeros3AoQuadrado);