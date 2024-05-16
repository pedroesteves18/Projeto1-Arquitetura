const cidades = require('./cidades/cidades2')

module.exports = {

    add(cidade){
        for(const chave in cidade){
            if(cidade[chave] === null){
                return null
            }
        } 
        cidades.push(cidade)
        return cidade
    },
    
    remove(id) {
        for (let i = 0; i < cidades.length; i++) {
            if (cidades[i].ID === id) {
                const cidadeRemovida = cidades.splice(i, 1);
                return cidadeRemovida[0];
            }
        }
        return null;
    },

    getCidades(){
        return cidades
    }
}