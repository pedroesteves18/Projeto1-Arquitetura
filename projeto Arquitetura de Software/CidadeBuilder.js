
const {Cidade} = require('./Cidade')
var idTotal = 5565

class CidadeBuilder extends Cidade{

    constructor(){
        super()
        this.cidade = new Cidade()
        this.id = idTotal
    }

    setNome(Nome){
        this.cidade.Nome = Nome
        return this;
    }

    setEstado(Estado){
        this.cidade.Estado = Estado
        return this;
    }

    setId(){
        this.cidade.ID = this.id
        idTotal++
        return this;
    }

    build(){
        return this.cidade
    }
}


module.exports = {CidadeBuilder}