//SEMANA 4 ============= MUDANÇA DE TEMA ============= 

//Parte 1

let item1 = {
    personagem: "monica geller",
    ator: "Courteney Bass Cox",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["Cozinheira", "competitiva", "perfeccionista."],
    icon: "./Media/icon-perso/monica-icon.jpg"
}


let item2 = {
    personagem: "rachel karen green",
    ator: "Jennifer Joanna Aniston",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["Estilista", "mimada", "terceira ex esposa de Ross."],
    icon: "./Media/icon-perso/rachel-icon.png"
}

let item3 = {
    personagem: "phoebe buffay",
    ator: "Lisa Valerie Kudrow",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["Massagista", "supersticiosa", "ingênua."],
    icon: "./Media/icon-perso/phoebe-icon.png"
}

let item4 = {
    personagem: "ross geller",
    ator: "David Lawrence Schwimmer",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["Paleontólogo", "nerd", "3 divórcios."],
    icon: "./Media/icon-perso/ross-icon.png"
}

let item5 = {
    personagem: "joey tribbiani",
    ator: "Matthew Steven LeBlanc",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["Ator", "mulherengo", "comilão."],
    icon: "./Media/icon-perso/joey-icon.png"
}

let item6 = {
    personagem: "chandler bing",
    ator: "Matthew Langford Perry",
    elencoPrincipal: true,
    numeroEpisodios: 236,
    caracteristicas: ["Ninguém sabe a profissão", "piadista", "sarcástico."],
    icon: "./Media/icon-perso/chandler-icon.png"
}

let item7 = {
    personagem: "gunther",
    ator: "James Michael Tyler",
    elencoPrincipal: false,
    numeroEpisodios: 148,
    caracteristicas: ["Gerente", "apaixonado", "inseguro."],
    icon: "./Media/icon-perso/gunther.png"
}

let item8 = {
    personagem: "janice",
    ator: "Margaret Emily Wheeler",
    elencoPrincipal: false,
    numeroEpisodios: 19,
    caracteristicas: ["Risada estranha", "irritante", "OH MY GOD!."],
    icon: "./Media/icon-perso/janice.png"
}

let item9 = {
    personagem: "jack e judy geller",
    ator: "Elliott Gould e Christina Pickles",
    elencoPrincipal: false,
    numeroEpisodios: 19,
    caracteristicas: ["Casal Geller","pai e mãe", "Ross <3"],
    icon: "./Media/icon-perso/jack-judy.png"
}


let item10 = {
    personagem: "carol willick",
    ator: "Jane Moore Sibbett",
    elencoPrincipal: false,
    numeroEpisodios: 18,
    caracteristicas: ["Primeira ex esposa de Ross", "lésbica", "Mãe de Ben."],
    icon: "./Media/icon-perso/carol.png"
}

let item11 = {
    personagem: "mike hannigan",
    ator: "Paul Rudd",
    elencoPrincipal: false,
    numeroEpisodios: 17,
    caracteristicas: ["Marido de Phoebe", "legal", "pianista."],
    icon: "./Media/icon-perso/mike.jpg"
}

let item12 = {
    personagem: "emily",
    ator: "Helen Baxendale",
    elencoPrincipal: false,
    numeroEpisodios: 14,
    caracteristicas: ["Segunda ex esposa de Ross", "ciumenta", "ouviu o nome errado no altar"],
    icon: "./Media/icon-perso/emily.png"
}

let item13 = {
    personagem: "richard burke",
    ator: "Margaret Emily Wheeler",
    elencoPrincipal: false,
    numeroEpisodios: 10,
    caracteristicas: ["Ex namorado de Mônica", "mais velho", "bigode legal."],
    icon: "./Media/icon-perso/richard.png"
}

let item14 = {
    personagem: "duck and chick",
    ator: "Chick and Duck",
    elencoPrincipal: false,
    numeroEpisodios: 10,
    caracteristicas: ["Pintinho", "patinho", "pintinho não sabe nadar."],
    icon: "./Media/icon-perso/duck.png"
}

let item15 = {
    personagem: "frank jr",
    ator: "Giovanni Ribisi",
    elencoPrincipal: false,
    numeroEpisodios: 9,
    caracteristicas: ["Meio irmão", "pai de três", "queima coisas."],
    icon: "./Media/icon-perso/frank.png"
}

let itens = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15]

const divScroll = document.querySelector("#icons")

const adicionarImagensScroll = (itens) => {
    for(let item of itens){
        divScroll.innerHTML += `
        <div class="box-img-scroll"> 
        <img src=${item.icon} onclick="clickPersonagem(event)" alt="">
        </div>`
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

    if(inputDeProcura.value.trim() === ""){
        alert("Nenhum personagem foi procurado.")
        divScroll.innerHTML = ""
        adicionarImagensScroll(itens)
    }else if (personagemDigitado.length === 0){
        alert("Este personagem não foi encontrado.")
        divScroll.innerHTML = ""
        adicionarImagensScroll(itens)
    }else {
        mostraPersonagem(personagemDigitado)
        divScroll.innerHTML = ""
        adicionarImagensScroll(itens)
    }

    inputDeProcura.value = ""
    // return personagemDigitado
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
    boxMostraPersonagem.classList.add("personagem-encontrado")
    boxMostraPersonagem.classList.remove("item-procurado")
    return boxMostraPersonagem.innerHTML = `
        <div>
        <img class="icon-personagem" src="${personagem[0].icon}"/>
        </div>
        <div>
        <p>${personagem[0].personagem.toUpperCase()}</p>
        <p>${personagem[0].caracteristicas.join(", ")}</p>
        <p>Ator: ${personagem[0].ator}</p>
        <p>Elenco Principal? ${personagem[0].elencoPrincipal? "Sim" : "Não"}</p>
        <p>Número de episódios: ${personagem[0].numeroEpisodios}</p>
        </div>
        ` 
}

function calcularMedia() {
    let soma = 0
    for (let i of itens){
        let numeroEpisodios = Number(i.numeroEpisodios)
        soma += numeroEpisodios
    }

    let media = soma/itens.length
    console.log("A média do número de episódios é", media)
}

calcularMedia()

function mostrarBooleanosTrue(){
    const filtrarTrue = itens.filter((item) => {
        return item.elencoPrincipal
    })
    console.log("Itens com booleano = true:", filtrarTrue)
}

mostrarBooleanosTrue()


function imprimirRelatorio(){
    for (let i of itens){
    console.log(`${i.personagem.toUpperCase()}
    Ator/atriz: ${i.ator}
    Faz parte do elenco principal? ${i.elencoPrincipal? "Sim!" : "Não!"}
    Número de episódios: ${i.numeroEpisodios}
    Características: ${i.caracteristicas.join(", ")}
    `)
    }
}

imprimirRelatorio()

function keyEnter(){
    window.addEventListener("keyup", (e) => {
        if( e.key === "a"){
          console.log("teste")
        // novaTarefa !== "" &&
        // verificaPersonagemProcurado()
      }
    })

  }



