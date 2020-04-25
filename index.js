'use strict'

let fibSequenc = [0,1];

// Criando uma Array de Sequencia de Fibonacci
const fibonacci = () => {
    for (let i = 0 ; i <= 10; i++){
        let nextNumber = fibSequenc[fibSequenc.length - 1] + fibSequenc[fibSequenc.length - 2];
        fibSequenc.push(nextNumber);
    } 
    return fibSequenc;
}

// Teste para encontrar o número dentro da Array
const isFibonnaci = (num) => {
    return fibSequenc.includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}
