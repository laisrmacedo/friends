//SEMANA 2
//Parte 1

let item1 = {
    nome: "Chocolate ruby",
    porcentagemCacau: 47,
    vegano: false,
    ingredientes: ["grãos de cacau", "leite", "mateiga de cacau"]
}

let item2 = {
    nome: "Chocolate de soja",
    porcentagemCacau: 47,
    vegano: true,
    ingredientes: ["extrato de soja","açucar", "mateiga de cacau", "flocos de arroz"]

}

let item3 = {
    nome: "Chocolate ao leite",
    porcentagemCacau: 37,
    vegano: false,
    ingredientes: ["licor de cacau", "açúcar", "manteiga de cacau", "leite", "baunilha"]
}

//Parte 2

let itens = []

//Parte 3 

// itens.push(item1)
// itens.push(item2)
// itens.push(item3)

// itens.push(item1, item2, item3)


//Parte 4 e 5

if(item1.vegano){
    itens.push(item1)
} else {
    alert("O item 1 não foi adicionado")
}

if(item2.vegano){
    itens.push(item2)
} else {
    alert("O item 2 não foi adicionado")
}

if(item3.vegano){
    itens.push(item3)
} else {
    alert("O item 3 não foi adicionado")
}

console.log(itens)

