import io from 'console-read-write'

const main = async()=>{
    const target = Number(await io.ask("Digite um número"))
    let n1 = 0, n2 = 1, nextTerm;
    let contain = false

    for(let i = 0; i < 20; i++){
        if(n1 === target){
            contain = true
        }
        io.write(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    if(contain === true){
        io.write(`O número ${target} está na sequência dos 10 primeiros números de fibonacci`)
    }
    else{
        io.write(`O número ${target} não está na sequência dos 10 primeiros números de fibonacci`)
    }
}

main()