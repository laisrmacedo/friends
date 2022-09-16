//SEMANA 1
//Parte 1 e 2

const nome1 = "Chocolate Ruby"
const porcentagemCacau1 = 47
const vegano1 = false

const nome2 = "Chocolate de soja"
const porcentagemCacau2 = 70
const vegano2= true

const nome3 = "Chocolate ao leite"
const porcentagemCacau3 = 37
const vegano3 = false


//Parte 3 

const mediaDos3 = (porcentagemCacau1 + porcentagemCacau2 + porcentagemCacau3)/3
console.log(mediaDos3)

//Parte 4

const todosVeganos = vegano1 && vegano2 && vegano3
console.log(todosVeganos)

//Parte 5

//Chocolate de soja
const ingredientes2 = ["extrato de soja","açucar", "mateiga de cacau", "flocos de arroz"]

//Parte 6
console.log(`
${nome2.toUpperCase()}
Porcentagem de cacau: ${porcentagemCacau2}%
É vegano? ${vegano2}
Ingredientes: ${ingredientes2}
`)


