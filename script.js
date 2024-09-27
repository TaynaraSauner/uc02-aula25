//Crie um programa, que leia dois valores numéricos do usuário e em seguida, calcule a sua soma. Em seguida, valide se o resultado da soma for maior que 5, então escreva a mensagem "Passou do limite". Se não, escreva a mensagem "Dentro do limite"

//ENTRADA
//1°passo obter um valor em guardar em uma variável chamada valor1
//2°passo obter um valor em guardar em uma variável chamada valor2

const valor1 = Number(prompt("Primeiro valor:"))
const valor2 = Number(prompt("Segundo valor"))
console.log(valor1, valor2)


//PROCESSAMENTO
//3°passo somar os valores das variáveis valor1 e valor2, e guardar em uma variável chamada resultado.
const resultado = valor1 + valor2
console.log(resultado)


//4°passo validar se o resultado da soma for maior que 5 e escrever a mensagem "Passou do limite". Senão, escreve a mensagem "Dentro do limite"
//se resultado for maior que 5 , então escreva a ,mensagem "Passou do limite", senão , escreva a mensagem "Dentro do limite"
let mensagem = ""
if (resultado > 5) {
    mensagem = "Passou do limite"
}
else {
    mensagem = "Dentro do limite"
}

const percentual = (valor1 * 0.10) / valor2

//se o porcentual for maior ou igual a 10 , então mude a mensagem para "Percentual ok", senão muda para a mensagem para "Percentual Alterado"

//if((percentual > 10) && (percentual === 10)){} e a mesma coisa que isso if (percentual >= 10) {}

if (percentual >= 10) {
    mensagem = "Percentual ok"
}
else {
    mensagem = "Percentual Alterado"
}


//SAÍDA
//5° imprimir a mensagem de acordo.
const divRoot = document.getElementById("root")
divRoot.appendChild(document.createTextNode(mensagem))