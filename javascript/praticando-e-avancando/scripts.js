// Objects

// const person = {
//     name: 'Matheus',
//     age: 18,
//     weight: 70.5,
//     isAdmin: true
// }
// console.log(`${person.name} tem ${person.age} anos e pesa ${person.weight}`);

// Array

// const animals = [
//     'Lion',
//     'Monkey', 
//     {
//         name: 'Cat',
//         age: 3
//     }
// ]
// console.log(animals[2].name);

// 1. Declare uma variável de nome weight
let weight

// 2. QUal é o tipo de dado dessa variável? 
console.log(typeof weight);

// 3. Declare uma variável e atribue valores para cada um dos dados
/*
    *name: string
    *age: number
    *stars: Number
    *isSubscribed:boolean
*/
let person = {
    name : 'Matheus',
    idade: 18,
    stars: 4.5,
    isSubscribed: true
}

let name = 'Matheus';
let idade = 17;
let stars = 4.9;
let isSubscribed = true

/*
    4.1 - A variavel student abaixo é de que tipo? Object
    4.2 - Atribua a ela as variáveis do exercicio 3
    4.3 - Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.
        substituindo os nomes das variáveis por seus respectivos valores
*/

let student = {
    name : 'Matheus',
    age : 17,
    stars : 4.9,
    weight : 60
}

console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`);

// 5. Declare uma variável do tipo array e não atribua nenhum valor a ela.

let students = []

/*
    6. Reatribua o valor para a variável acima, colocando dentro dela o objeto student da questão 4.
    Deve-se utilizar o objeto criado e insrei-lo no array.
 */
students = [
    student
]
console.log(students);

// 7. Coloque no console o valor da posição zero do array acima
console.log(students[0]);

// 8. Crie um novo student e coloque na posição 1 do Array students.

const john = {
    name: 'John',
    age: 23,
    weight: 74.5,
    isSubscribed: false
}
students = [
    student,
    john
]
// OU 
students[1] = john;
console.log(students);

/* Sem rodar o código, responda: qual a resposta do código abaixo e porque?? */
console.log(a);
var a = 1;

// Ela sofrerá o hosting, e terá o valor de undefined mesmo que tenha sido atribuída por um valor

