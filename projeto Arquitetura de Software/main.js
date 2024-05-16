
const Strategy = require('./Strategy/Strategy')
const buscaCidade = require('./Strategy/BuscaCidade')

const functions = require('./Functions')


const CidadeDecorator = require('./CidadeDecorator')
const {CidadeBuilder} = require('./CidadeBuilder')

const busca = new Strategy(buscaCidade)


console.log("Busca de cidade por ID: ", busca.execute('ID', '1231'))
console.log("Busca de cidade por Nome: ", busca.execute('Nome', 'São Paulo'))
console.log("Busca de cidade de um Estado: ", busca.execute('Estado', '21'))

let builder = new CidadeBuilder()
const cidade1 = builder
    .setNome('Cidade1 Teste')
    .setEstado('100')
    .setId()
    .build();
console.log("\n\nAdicionar cidade nova de um Estado novo: ", functions.add(cidade1))


builder = new CidadeBuilder()
const cidade2 = builder
    .setNome('Cidade2 Teste')
    .setEstado('100')
    .setId()
    .build();
console.log("Adicionar cidade nova de um Estado novo: ", functions.add(cidade2))


console.log("Pesquisa de cidade: ", busca.execute('Nome', 'Cidade1 Teste'))
console.log("Pesquisa nesse estado novo: ", busca.execute('Estado', '100'))



// ------------------ Decorator ---------------------

let decorator = new CidadeDecorator(cidade1)
.setPopulacao(100000)
console.log("Incrementando cidade com Decorator: ")
console.log(busca.execute('Nome','Cidade1 Teste'))

decorator = new CidadeDecorator(cidade2)
.setPopulacao(100)


builder = new CidadeBuilder()
const cidade3 = builder
    .setNome('Cidade3 Teste')
    .setEstado('100')
    .setId()
    .build();
functions.add(cidade3)

console.log("\n\nBusca por Estado Final:",busca.execute('Estado', '100'))