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
    personagem: "chick and duck",
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

const adicionarImagens = () => {
    for(let item of itens){
        divScroll.innerHTML += `<img src=${item.icon} alt="" srcset="">`
    }
}

adicionarImagens()

//Pesquisa de nomes

const boxMostraPersonagem = document.querySelector("#item-procurado")
const inputDeProcura = document.querySelector("#input-procura") 

const mostraPersonagem = `MOnica Geller`

function procuraPersonagem(){
    // for(let item of itens){
    //     if (inputDeProcura.value.toLowerCase().slice(0,4) === item.personagem.slice(0,4)){
    //         boxMostraPersonagem.innerHTML = `${item.personagem}`
    //     }
    // }
    const personagemProcurado = itens.filter(item => {
        return item.personagem.slice(0,4) === inputDeProcura.value.toLowerCase().slice(0,4)
    })

    if(personagemProcurado.length === 0){
        alert("Este personagem não foi encontrado.")
    } else{
        boxMostraPersonagem.classList.add("personagem-procurado")
    }

    inputDeProcura.value = ""

    return boxMostraPersonagem.innerHTML = `
    <div>
    <img class="icon-personagem" src="${personagemProcurado[0].icon}"/>
    </div>
    <div>
    <p>${personagemProcurado[0].personagem.toUpperCase()}</p>
    <p>Ator: ${personagemProcurado[0].ator}</p>
    <p>Elenco Principal? ${personagemProcurado[0].elencoPrincipal? "Sim" : "Não"}</p>
    <p>Número de episódios: ${personagemProcurado[0].numeroEpisodios}</p>
    </div>
    ` 
}




