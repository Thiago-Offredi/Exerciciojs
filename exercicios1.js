/*[ ] Faça um programa que SOME 2 números
[ ] Faça um programa que multiplique 2 números e o resultado adicione 10
[ ] Faça um programa que encontre a raiz quadrada de um número, multiplique o resultado por 10 e divida por 33
[ ] Faça um programa que inicie com dois nomes, e o programa imprima na tela o seguinte dado:
 Olá, meu nome é (nome 1) e meu partner do CodeClub é (nome2)
[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Ex: João e João,
 imprime true. João e Maria, imprime false.
[ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Ex: João e João,
 imprime false. João e Maria, imprime true.
[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
Porém, os dois nomes devem estar em um Array. Ex: const array = ["João", "Maria"].
 João e João, imprime true. João e Maria, imprime false.
[ ] Faça um programa que imprima na tela se um nome é diferente ao outro nome digitado. Porém, os dois nomes 
devem estar em um Array. Ex: const array = ["João", "Maria"]. João e João, imprime false. João e Maria, imprime true.
[ ] Criei 5 Objetos, neles devem conter os dados de 5 pessoas que você conhece. Mínimo 5 dados por pessoa.
[ ] Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. 
Porém, os dois nomes devem estar em dois objetos separados. 
Ex: const object1 = {name:"João"}, object1 = {name:"Maria"}. João e João, imprime true. João e Maria, imprime false.Faça um programa que imprima na tela se um nome é igual ao outro nome digitado. Porém, os dois nomes devem estar em um objeto. Ex: const object1 = {firstName:"João", seccondName:"Maria"}. João e João, imprime true. João e Maria, imprime false.
[ ] Faça um programa onde toda vez que ele rodar, coloca na tela um número aleatório entre 1 e 100.
[ ] Faça um programa onde colocamos dois numeros ímpares e o programa imprima o resto da divisão. Ex: 7/3 deve imprimir: 1, 25/5 deve imprimir: 0.Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é maior que o segundo. Ex: 2 e 5. Imprime: false.Faça um programa onde entramos com dois números, e ele imprime se o primeiro número é menor que o segundo. Ex: 2 e 5. Imprime: true.
[ ] Crie um programa que mostra o tamanho do Array. Ex: const array = [0, 1] imprime: 2. const array = ["banana", "Maça", "laranja"] imprime: 3
*/
//1-
/*const firstNumber = 85
const seccondtNumber = 20
const soma = firstNumber + seccondtNumber
console.log("O resultado da soma é ",soma)*/
//2-
/*const firstNumber = 5
const seccondtNumber = 30
const result = (firstNumber * seccondtNumber) + 10
console.log("O resultado é ",result)*/
//3-
/*const raiz = (Math.sqrt(16) * 10 / 33)
console.log(raiz)*/
//4- 
/*const firstName = "Thiago"
const seccondName = "Mateus"
console.log(`Olá meu nome é ${firstName} e o nome do meu parter é ${seccondName}`)*/
//5-
/*const firstName = "Thiago"
const seccondName = "Thiag"

if (firstName === seccondName) {
    console.log(true)

}else{
    console.log(false) 
}*/

//6-
/*
const firstName = "Thiago"
const seccondName = "Thiago"

if (firstName != seccondName) {
    console.log(true)

}else{
    console.log(false) 
}*/
//7-
/*const names = ['Thiago', 'Maria','Thiago']
const compare = names[0] === names[2]
 
console.log(true)


    //console.log(false)*/

/*const person0 = {
    name: 'snow',
    age: 25,
    town: 'Brasília',
    sons: 'yes',
    work: 'no'

}
const person1 = {
    name: 'snow',
    age: 20,
    town: 'Brasília',
    sons: 'yes',
    work: 'no'

}
const person2 = {
    name: 'snow',
    age: 21,
    town: 'Brasília',
    sons: 'yes',
    work: 'no'

}
const person3 = {
    name: 'snow',
    age: 24,
    town: 'Brasília',
    sons: 'yes',
    work: 'yes'

}
const person4 = {
    name: 'snow',
    age: 28,
    town: 'Brasília',
    sons: 'yes',
    work: 'no'
}
console.log(person4.age)
*/

/*const person0 = {
    name: 'snow',
    age: 25,
    town: 'Brasília',
    sons: 'yes',
    work: 'no'

}
const person1 = {
    name: 'snow',
    age: 20,
    town: 'Brasília',
    sons: 'yes',
    work: 'no'

}
const compare= person0.name === person1.name
console.log(compare)*/
/*const number = Math.floor(Math.random() * (100 - 1) + 1)
console.log(number)*/

/*const size = ['uva','maça','pera',]
console.log(size.length)*/

