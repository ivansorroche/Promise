
async function buscaEndereco(cep){

    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ""
    try {
        const consultaCep = (`https://viacep.com.br/ws/${cep}/json/`)
        const response = await fetch(consultaCep)
        const endereco = await response.json()
        if (response.error) {
            throw Error('CEP não encontrado')
    }

    var cidade = document.getElementById('cidade')
    var logradouro = document.getElementById('endereco')
    var estado = document.getElementById('estado')

    cidade.value = endereco.localidade
    logradouro.value = endereco.logradouro
    estado.value = endereco.uf

    console.log(endereco)
    return endereco

    } catch(erro){
        mensagemErro.innerHTML = `<p> Cep Invalido. Tente novamente`
        console.log(erro)
    }

}


var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value))