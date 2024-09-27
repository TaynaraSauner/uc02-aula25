// escreva um programa que diga se  numero informado pelo usuário e par ou impar. Imprima o numero e o resultado

const divRoot = document.getElementById("root")

const numero = Number(prompt('Informe um número'))

const resto = numero % 2

console.log(resto)

let mensagem = ""
if (resto === 0){
    mensagem = `${numero} É PAR`
}
else {
    mensagem = `${numero} É IMPAR`
}

divRoot.appendChild(document.createTextNode(mensagem))