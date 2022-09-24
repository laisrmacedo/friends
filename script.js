//SEMANA 4 ============= MUDANÇA DE TEMA ============= 

//Parte 1

let item1 = {
    nome: "Courteney Bass Cox",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    personagem: "Monica Geller",
    caracteristicas: ["cozinheira", "competitiva", "perfeccionista"]
}

console.log(`${item1.nome.toUpperCase()}
Porcentagem de cacau: ${item1.porcentagemCacau}
É vegano? ${item1.vegano}
Ingredientes: "${item1.ingredientes.join(", ")}"
`)

let item2 = {
    nome: "Chocolate de soja",
    porcentagemCacau: 47,
    vegano: true,
    ingredientes: ["extrato de soja","açucar", "mateiga de cacau", "flocos de arroz"]
}

console.log(`${item2.nome.toUpperCase()}
Porcentagem de cacau: ${item2.porcentagemCacau}
É vegano? ${item2.vegano}
Ingredientes: "${item2.ingredientes.join(", ")}"
`)

let item3 = {
    nome: "Chocolate ao leite",
    porcentagemCacau: 37,
    vegano: false,
    ingredientes: ["licor de cacau", "açúcar", "manteiga de cacau", "leite", "baunilha"]
}

console.log(`${item3.nome.toUpperCase()}
Porcentagem de cacau: ${item3.porcentagemCacau}
É vegano? ${item3.vegano}
Ingredientes: "${item3.ingredientes.join(", ")}"
`)

//Parte 2

let itens = []
itens.push(item1, item2, item3)


for(let item of itens){
    console.log(`${item.nome.toUpperCase()}
    Porcentagem de cacau: ${item.porcentagemCacau}
    É vegano? ${item.vegano}
    Ingredientes: ${item.ingredientes.join(", ")}
    `)
}


//Parte 3 

function escreveObjeto (objeto){
    console.log(`Usando funçao: 
    ${objeto.nome.toUpperCase()}
    Porcentagem de cacau: ${objeto.porcentagemCacau}
    É vegano? ${objeto.vegano}
    Ingredientes: ${objeto.ingredientes.join(", ")}
    `)
}

escreveObjeto(item1)

//Parte 4 

function retornarObjeto (string, objeto){
    if(objeto.nome === string){
        console.log(`${objeto.nome.toUpperCase()}
        Porcentagem de cacau: ${objeto.porcentagemCacau}
        É vegano? ${objeto.vegano}
        Ingredientes: ${objeto.ingredientes.join(", ")}
        `)
    } else {
        // alert("Este item não foi encontrado")
    }
}

retornarObjeto("Chocolate", item1)



