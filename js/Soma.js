function soma(){
    var x = 2
    var y = 2
    let resultado = x+y

    document.getElementById("resultado").innerHTML=resultado
    document.getElementById("confirmado-ad").innerHTML="resultado✔"
}

function multiplicacao(){
    var x = 2 
    var y = 2 
    let resultado = x*y

    document.getElementById("resultado2").innerHTML=resultado
    document.getElementById("confirmado-mu").innerHTML="resultado✔"
}

function subtracao(){
    var x = 5
    var y = 3
    let resultado = x-y

    document.getElementById("resultado3").innerHTML=resultado
    document.getElementById("confirmado-sub").innerHTML="resultado✔"
}
    
function divisao(){
    var x = 8
    var y = 2
    let resultado = x/y

    document.getElementById("resultado4").innerHTML=resultado
    document.getElementById("confirmado-div").innerHTML="resultado✔"
}

function exponenciacao(){
    var x = 2
    var y = 3
    let resultado = x**y

    document.getElementById("resultado-ex").innerHTML=resultado
    document.getElementById("confirmado-ex").innerHTML="Resultado✔"
}

function resto(){
    var x = 5
    var y = 2
    let resultado = x%y
    
    document.getElementById("resultado-res").innerHTML=resultado
    document.getElementById("confirmado-res").innerHTML="Resultado✔"
}

function incrementacao(){
    var x = 5
    x++
    let resultado = x++

    document.getElementById("resultado-inc").innerHTML=resultado
    document.getElementById("confirmado-inc").innerHTML="Resultado✔"
}

function decrementacao(){
    var x = 5
    x--
    let resultado = x--

    document.getElementById("resultado-dec").innerHTML=resultado
    document.getElementById("confirmado-dec").innerHTML="Resultado✔"
}