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

let meta = {
    value: 'ler um livro por mês',
    address: 2,
    checked: false,
    log: (info) => {
        console.log(info)
    }
}

meta.value = "não é mais ler um livro"
meta.log(meta.value)


//function //arrow function
// const criarMeta = () => {}

// function criarMeta() {}