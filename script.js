//SEMANA 4 ============= MUDANÇA DE TEMA ============= 

//Parte 1

let item1 = {
    personagem: "monica geller",
    ator: "Courteney Bass Cox",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["cozinheira", "competitiva", "perfeccionista"]
}

console.log(`${item1.personagem.toUpperCase()}
Ator/atriz: ${item1.ator}
Faz parte do elenco principal? ${item1.elencoPrincipal === true ? "Sim!" : "Não!"}
Número de episódios: ${item1.numeroEpisodios}
Características: ${item1.caracteristicas.join(", ")}
`)

console.log(typeof item1.caracteristicas.join(", ") )

let item2 = {
    personagem: "rachel karen green",
    ator: "Jennifer Joanna Aniston",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["estilista", "mimada", "ex-esposa-ross"]
}

let item3 = {
    personagem: "phoebe buffay",
    ator: "Lisa Valerie Kudrow",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["massagista", "supersticiosa", "ingênua"]
}

let item4 = {
    personagem: "ross geller",
    ator: "David Lawrence Schwimmer",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["paleontólogo", "nerd", "divorciado"]
}

let item5 = {
    personagem: "joey tribbiani",
    ator: "Matthew Steven LeBlanc",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["ator", "mulherengo", "comilão"]
}

let item6 = {
    personagem: "chandler bing",
    ator: "Matthew Langford Perry",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["contador", "piadista", "sarcástico"]
}

let item7 = {
    personagem: "gunther",
    ator: "James Michael Tyler",
    elencoPrincipal: false,
    numeroEpisodios: 148,
    caracteristicas: ["gerente", "apaixonado", "inseguro"]
}

let item8 = {
    personagem: "janice",
    ator: "Margaret Emily Wheeler",
    elencoPrincipal: false,
    numeroEpisodios: 19,
    caracteristicas: ["risada", "irritante", "oh-my-god"]
}

let item9 = {
    personagem: "jack e judy geller",
    ator: "Elliott Gould e Christina Pickles",
    elencoPrincipal: false,
    numeroEpisodios: 19,
    caracteristicas: ["casal","pais", "ross-preferido"]
}


let item10 = {
    personagem: "carol willick",
    ator: "Jane Moore Sibbett",
    elencoPrincipal: false,
    numeroEpisodios: 18,
    caracteristicas: ["ex-esposa-ross", "mãe", "ben"]
}

let item11 = {
    personagem: "mike hannigan",
    ator: "Paul Rudd",
    elencoPrincipal: false,
    numeroEpisodios: 17,
    caracteristicas: ["marido-phoebe", "estranho", "pianista"]
}

let item12 = {
    personagem: "emily",
    ator: "Helen Baxendale",
    elencoPrincipal: false,
    numeroEpisodios: 14,
    caracteristicas: ["ex-esposa-ross", "london", "nome-errado-altar"]
}

let item13 = {
    personagem: "richard burke",
    ator: "Margaret Emily Wheeler",
    elencoPrincipal: false,
    numeroEpisodios: 10,
    caracteristicas: ["ex-namorado-monica", "mais-velho", "bigode"]
}

let item14 = {
    personagem: "chick and duck",
    ator: "Chick and Duck",
    elencoPrincipal: false,
    numeroEpisodios: 10,
    caracteristicas: ["pintinho", "patinho", "pinto-nao-nada"]
}

let item15 = {
    personagem: "frank jr",
    ator: "Giovanni Ribisi",
    elencoPrincipal: false,
    numeroEpisodios: 9,
    caracteristicas: ["meio-irmao", "pai-trigemeos", "queima-coisas"]
}








//Parte 2

let itens = []
itens.push(item1, item2, item3)


// for(let item of itens){
//     console.log(`${item.personagem.toUpperCase()}
//     Ator/atriz: ${item.ator}
//     Faz parte do elenco principal? ${item.elencoPrincipal === true ? "Sim!" : "Não!"}
//     Número de episódios: ${item.numeroEpisodios}
//     Características: ${item.caracteristicas.join(", ")}
//     `)
// }


//Parte 3 

// function escreveObjeto (objeto){
//     console.log(`Usando funçao: 
//     ${objeto.nome.toUpperCase()}
//     Porcentagem de cacau: ${objeto.porcentagemCacau}
//     É vegano? ${objeto.vegano}
//     Ingredientes: ${objeto.ingredientes.join(", ")}
//     `)
// }

// escreveObjeto(item1)

//Parte 4 

let qualPersonagem = prompt("Personagem")

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



