// Função dentro de variáveis (função anonima)
// function anonymus

// parâmetros (parameters)
const sum = function (number1, number2) {
    let total = number1 + number2; // jeito certo
    total = number1 + number2; // jeito errado
    return total
}

let number1 = 34;
let number2 = 25;

sum(number1, number2) //2 e 3 são argumentos na chamada da função
console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma  é ${sum(number1, number2)}`);


// Se a função nao tiver um retorno, seu retorno será undefined!