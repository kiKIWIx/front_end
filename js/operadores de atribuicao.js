function atAdicao() {
    var x = 2
    var y = 1
    let resultado = (x += y)
    
    document.getElementById("resultado-atAdicao").innerHTML = resultado
    document.getElementById("confirmado-atAdicao").innerHTML = "resultado✔"
}
function atSub() {
    var x = 4
    var y = 2
    let resultado = (x -= y)

    document.getElementById("resultado-atSub").innerHTML = resultado
    document.getElementById("confirmado-atSub").innerHTML = "resultado✔"
}
function atMult() {
    var x = 4
    var y = 2
    let resultado = (x *= y)

    document.getElementById("resultado-atMult").innerHTML = resultado
    document.getElementById("confirmado-atMult").innerHTML = "resultado✔"
}
function atDiv() {
    var x = 8 
    var y = 4
    let resultado = (x /= y)

    document.getElementById("resultado-atDiv").innerHTML = resultado
    document.getElementById("confirmado-atDiv").innerHTML = "resultado✔"
}
function atPot() {
    var x = 4
    var y = 2
    let resultado = (x **= y)

    document.getElementById("resultado-atPot").innerHTML = resultado
    document.getElementById("confirmado-atPot").innerHTML = "resultado✔"
}
function atRes() {
    var x = 4
    var y = 2
    let resultado = (x %= y)

    document.getElementById("resultado-atRes").innerHTML = resultado
    document.getElementById("confirmado-atRes").innerHTML = "resultado✔"
}