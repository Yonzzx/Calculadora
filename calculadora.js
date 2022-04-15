
function Inserir(valor) {
    var res = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = res + valor

}

function getValue(){
    var res = document.getElementById('res').innerHTML
    if(res !== ''){
    document.getElementById('resVal').innerHTML = eval(res)
    }
}

function Limpar() {
    document.getElementById('res').innerHTML = ''
    document.getElementById('resVal').innerHTML = ''
}

function Voltar(){
   var res = document.getElementById('res').innerHTML 
   document.getElementById('res').innerHTML = res.substring(0, res.length -1)
}

