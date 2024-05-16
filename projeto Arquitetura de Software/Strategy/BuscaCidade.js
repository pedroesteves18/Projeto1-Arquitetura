
const functions = require('../Functions')

function buscaCidade(tipo, valor) {
    const cidades = functions.getCidades();

    const resultados = []

    for (const cidade of cidades) {
        if (cidade[tipo] === valor){
            resultados.push(cidade)
        }
    }

    if(resultados.length > 0){
        return resultados
    } else {

        return "nao encontrado"
    }
}

module.exports = buscaCidade