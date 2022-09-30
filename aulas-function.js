/*
function soma(number1, number2) { //função com parametros, quando a função nao tem o return ela é considerada do tipo void
    return(number1 + number2)
     
}
const firstNumber = 5
const seccondNumber = 25
//Argumentos
console.log(`o primeiro número é ${firstNumber}`)
console.log(`o segundo número é ${seccondNumber}`)
console.log(`E a soma dos dois números é ${soma(firstNumber,seccondNumber)}`)*/
// Calc 
const calculate = (number1, number2, operation) => {
    let result
    switch (operation) {
        case "+":
            result = number1 + number2
            break;
        case "-":
            result = number1 - number2
            break;
        case "*":
            result = number1 * number2
            break;
        case "/":
            result = number1 / number2
            break;


        default: console.log("Escolha uma operação +,/,-,*,")
            break;
            
    }
    return result
}
console.log(calculate(6, 6, '*'))
console.log(calculate(6, 6, '+'))
console.log(calculate(6, 6, '-'))
console.log(calculate(6, 6, '/'))
console.log(calculate(6, 6, '.'))
