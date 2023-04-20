//Escreva um programa que inverta os caracteres de um string.

//IMPORTANTE:
//	a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
//	b) Evite usar funções prontas, como, por exemplo, reverse;

const string = "Essa é a string"
let newString = ""

for(let i = string.length-1; i >=0; i--){
    if(i === string.length-1){
        newString+= string[i].toUpperCase()
    }
    newString+= string[i].toLowerCase()
}

console.log(`A nova palavra é: ${newString}`)
