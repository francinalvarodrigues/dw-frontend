function verificar(){

let num1 = Number(document.getElementById("n1").value)
let num2 = Number(document.getElementById("n2").value)
let num3 = Number(document.getElementById("n3").value)

// Validação: verifica se os campos estão vazios ou se contêm NaN
if(document.getElementById("n1").value === "" || 
   document.getElementById("n2").value === "" || 
   document.getElementById("n3").value === ""){
    document.getElementById("resultado").innerText = "⚠️ Erro: Por favor, preencha todos os campos!"
    return
}

let maior = num1

if(num2 > maior){
    maior = num2
}

if(num3 > maior){
    maior = num3
}

document.getElementById("resultado").innerText = "O maior número é: " + maior

}