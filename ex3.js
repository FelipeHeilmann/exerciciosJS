//Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
//O menor valor de faturamento ocorrido em um dia do mês;
//O maior valor de faturamento ocorrido em um dia do mês;
//Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.


let greater = 0
let avarage = 0
let rentableDays = 0
const values = [20000,50000,70000,0,4000,2,10000,0]
let smaller = values[0]

for(let i = 0; i < values.length; i++){
    if(values[i] > greater){
        greater = values[i]
    }
    if(values[i] < smaller && values[i] != 0){
        smaller = values[i]
    }
   if(values[i] != 0){
    avarage +=values[i]
    rentableDays++
   }
}
avarage = avarage / rentableDays

for(let i =0; i < values.length; i++){
    if(values[i] > avarage){
        console.log(`O dia ${i+1} tem faturamento de ${values[i]} maior que a média de ${avarage}`)
    }
}

console.log(`O maior faturamento foi de ${greater}`)
console.log(`O menor faturamento foi de ${smaller}`)