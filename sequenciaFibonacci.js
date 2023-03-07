/* 
2 - Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

*/

const numero = 13;

const calculaFibonacci = () => {
    let soma = 0;
    let numeroAnterior = 0;
    let proximoNumero = 1;

    for(let cont = 0; cont <= numero; cont++){
        soma = numeroAnterior + proximoNumero;
        
        if(numeroAnterior === numero){
            console.log(`${numeroAnterior} - pertence a sequência de Fibonacci`);
        }else{
            console.log(numeroAnterior);
        }

        proximoNumero = numeroAnterior;
        numeroAnterior = soma;
    }
}

calculaFibonacci();


