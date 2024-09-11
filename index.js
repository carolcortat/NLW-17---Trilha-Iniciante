// olá, mundo!
//const mensagem = "olá, carol!"

//{
    //const mensagem = "olá, manu!"
    //console.log(mensagem)
//}

//console.log(mensagem);

// para rodar o código - coloco no terminal node index.js
//console significa objeto - log é uma função caixinha - as aspas é o que vc esta mandando para caixinha executar
//variavel é uma caixinha - um tipo de dado
// const é uma variavel que não pode mudar
// {} é um escopo - é local só funciona o que esta dentro das chaves

// arrays, objetos
//let metas = ["carol", "hello"]
//console.log(metas[0] + ", " + metas[1])

// let meta = {
//     value: 'ler um livro por mês',
//     address: 2,
//     checked: false,
//     log: (info) => {
//         console.log(info)
//     }
// }

// let metas = [
//     meta,
//     {
//         value: "caminhar 20 minutos todos os dias",
//         checked: false
//     }
// ]
// console.log(metas[1].value)

   
// meta.value = "não é mais ler um livro"
// meta.log(meta.value)


//function //arrow function
// const criarMeta = () => {}

// function criarMeta() {}

//return dentro da função ele acaba

// const start = () => {
//     let count = 0
//     while(count < 10){
//     console.log(count)
//     count = count + 1
//     }
// }

// start()

const start = () => {

   while(true){
    let opcao = "sair"
    switch(opcao){
        case "cadastrar":
            console.log("vamos cadastar")
            break
            case "listar":
                console.log("vamos listar")
                break
                case "sair":
                    return

    }
    }
 }

 start()

