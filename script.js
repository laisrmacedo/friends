//SEMANA 4 ============= MUDANÇA DE TEMA ============= 

//Parte 1

let item1 = {
    personagem: "monica geller",
    ator: "Courteney Bass Cox",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["cozinheira", "competitiva", "perfeccionista"],
    icon: "./Media/icon-perso/monica-icon.jpg"
}

<<<<<<< HEAD
=======
// console.log(`${item1.personagem.toUpperCase()}
// Ator/atriz: ${item1.ator}
// Faz parte do elenco principal? ${item1.elencoPrincipal === true ? "Sim!" : "Não!"}
// Número de episódios: ${item1.numeroEpisodios}
// Características: ${item1.caracteristicas.join(", ")}
// `)

>>>>>>> d141784239ade0358b38b2649c827ab1fffcf35c

let item2 = {
    personagem: "rachel karen green",
    ator: "Jennifer Joanna Aniston",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["estilista", "mimada", "ex-esposa-ross"],
    icon: "./Media/icon-perso/rachel-icon.png"
}

let item3 = {
    personagem: "phoebe buffay",
    ator: "Lisa Valerie Kudrow",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["massagista", "supersticiosa", "ingênua"],
    icon: "./Media/icon-perso/phoebe-icon.png"
}

let item4 = {
    personagem: "ross geller",
    ator: "David Lawrence Schwimmer",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["paleontólogo", "nerd", "divorciado"],
    icon: "./Media/icon-perso/ross-icon.png"
}

let item5 = {
    personagem: "joey tribbiani",
    ator: "Matthew Steven LeBlanc",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["ator", "mulherengo", "comilão"],
    icon: "./Media/icon-perso/joey-icon.png"
}

let item6 = {
    personagem: "chandler bing",
    ator: "Matthew Langford Perry",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["contador", "piadista", "sarcástico"],
    icon: "./Media/icon-perso/chandler-icon.png"
}

let item7 = {
    personagem: "gunther",
    ator: "James Michael Tyler",
    elencoPrincipal: false,
    numeroEpisodios: 148,
    caracteristicas: ["gerente", "apaixonado", "inseguro"],
    icon: "./Media/icon-perso/gunther.png"
}

let item8 = {
    personagem: "janice",
    ator: "Margaret Emily Wheeler",
    elencoPrincipal: false,
    numeroEpisodios: 19,
    caracteristicas: ["risada", "irritante", "oh-my-god"],
    icon: "./Media/icon-perso/janice.png"
}

let item9 = {
    personagem: "jack e judy geller",
    ator: "Elliott Gould e Christina Pickles",
    elencoPrincipal: false,
    numeroEpisodios: 19,
    caracteristicas: ["casal","pais", "ross-preferido"],
    icon: "./Media/icon-perso/jack-judy.png"
}


let item10 = {
    personagem: "carol willick",
    ator: "Jane Moore Sibbett",
    elencoPrincipal: false,
    numeroEpisodios: 18,
    caracteristicas: ["ex-esposa-ross", "mãe", "ben"],
    icon: "./Media/icon-perso/carol.png"
}

let item11 = {
    personagem: "mike hannigan",
    ator: "Paul Rudd",
    elencoPrincipal: false,
    numeroEpisodios: 17,
    caracteristicas: ["marido-phoebe", "estranho", "pianista"],
    icon: "./Media/icon-perso/mike.jpg"
}

let item12 = {
    personagem: "emily",
    ator: "Helen Baxendale",
    elencoPrincipal: false,
    numeroEpisodios: 14,
    caracteristicas: ["ex-esposa-ross", "london", "nome-errado-altar"],
    icon: "./Media/icon-perso/emily.png"
}

let item13 = {
    personagem: "richard burke",
    ator: "Margaret Emily Wheeler",
    elencoPrincipal: false,
    numeroEpisodios: 10,
    caracteristicas: ["ex-namorado-monica", "mais-velho", "bigode"],
    icon: "./Media/icon-perso/richard.png"
}

let item14 = {
    personagem: "duck and chick",
    ator: "Chick and Duck",
    elencoPrincipal: false,
    numeroEpisodios: 10,
    caracteristicas: ["pintinho", "patinho", "pinto-nao-nada"],
    icon: "./Media/icon-perso/duck.png"
}

let item15 = {
    personagem: "frank jr",
    ator: "Giovanni Ribisi",
    elencoPrincipal: false,
    numeroEpisodios: 9,
    caracteristicas: ["meio-irmao", "pai-trigemeos", "queima-coisas"],
    icon: "./Media/icon-perso/frank.png"
}

let itens = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15]

const divScroll = document.querySelector("#icons")

const adicionarImagensScroll = (itens) => {
    for(let item of itens){
        divScroll.innerHTML += `<img src=${item.icon} onclick="clickPersonagem(event)" alt="">`
    }
}

adicionarImagensScroll(itens)

const imagensScroll = document.querySelector(".img-scroll")

function onInputChange(event){
    imagensScroll.innerHTML = ""
    const value = event.target.value.trim()
    const itensFiltrados = itens.filter(item => {
        return item.personagem.includes(value)
    })

    // if(itensFiltrados.length === 0){
    //     alert("Este personagem não foi encontrado.")
    // }

    adicionarImagensScroll(itensFiltrados)
}

//Personagem procurado

const boxMostraPersonagem = document.querySelector("#item-procurado")
const inputDeProcura = document.querySelector("#input-procura") 

// let personagemEncontrado

function verificaPersonagemProcurado(){

    const personagemDigitado = itens.filter(item => {
        if(item.personagem.includes(inputDeProcura.value.toLowerCase())){
            return item
        }
    })

    if(personagemDigitado.length === 0){
        alert("Este personagem não foi encontrado.")
    } else{
        mostraPersonagem(personagemDigitado)
    }

    inputDeProcura.value = ""
    return personagemDigitado
}

//Personagem clicado

function clickPersonagem (event){
    const personagemClicado = itens.filter(item => {
        if( event.target.src.includes(item.personagem.toLowerCase().slice(0,4))){
            return item
        }
    })
    mostraPersonagem(personagemClicado)
}

//Mostrar personagem clicado ou digitado

function mostraPersonagem(personagem){
    boxMostraPersonagem.classList.add("personagem-procurado")
    return boxMostraPersonagem.innerHTML = `
        <div>
        <img class="icon-personagem" src="${personagem[0].icon}"/>
        </div>
        <div>
        <p>${personagem[0].personagem.toUpperCase()}</p>
        <p>Ator: ${personagem[0].ator}</p>
        <p>Elenco Principal? ${personagem[0].elencoPrincipal? "Sim" : "Não"}</p>
        <p>Número de episódios: ${personagem[0].numeroEpisodios}</p>
        </div>
        ` 
}

const teste = itens.filter((valor) => {
    let array
    for(let i in valor.caracteristicas){
        array = valor.caracteristicas[i]
        console.log(array)
    }
    return array === 'estilista'
})

console.log(teste);




