// CRIADO A PARTIR DA AULA 25/07
const getToken = (req) =>{
    /* Abaixo a função split() do JS pega a String dentro de autHeader e a divide
    quando encontrar como separar um espaço. Por fim, considera apenas a segunda
    parte um array começa na posição [0], então [1] é o segundo elemento de um array */

    const token = autHeader.split("")[1]
    return token
}

module.exports = getToken 