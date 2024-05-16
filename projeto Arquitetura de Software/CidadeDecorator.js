const {CidadeBuilder} = require('./CidadeBuilder')

class CidadeDecorator {
    constructor(cidade) {
        this.cidade = cidade
    }

    setPopulacao(populacao){
        this.cidade.populacao = populacao
        return this
    }
}

module.exports = CidadeDecorator