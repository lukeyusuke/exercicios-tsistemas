/* 
5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; 
*/

const reverteString = (str) => {
    let novaString = "";

    for(let cont = str.length - 1; cont >= 0; cont--){
        novaString += str[cont];
    }

    return novaString;
}

const resultado = reverteString('Target Sistemas');
console.log(resultado);