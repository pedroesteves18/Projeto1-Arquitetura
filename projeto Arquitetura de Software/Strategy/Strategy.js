
class Strategy{
    constructor(strategy){
        this.strategy = strategy
    }

    execute(tipo,valor){
        return this.strategy(tipo,valor)
    }
}

module.exports = Strategy