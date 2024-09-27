//faça um programa aonde tenha notas de um aluno, em seguida, calcule a media simples das notas. Se a media for maior ou igual a 7 imprima "Aluno Aprovado", senão, se a nora for maior ou igual a 5, imprima "Aluno em Recuperação", senão, imprima "aLUNO Reprovado"

//ENTRADA
const nota1 = Number(prompt("Informe a primeira nota"))
const nota2 = Number(prompt("Informe a segunda nota"))
const nota3 = Number(prompt("Informe a terceira nota"))
const nota4 = Number(prompt("Informe a quarta nota"))

//PROCESSAMENTO
const media = (nota1 + nota2 + nota3 + nota4) / 4

let mensagem = ""

//se a media e maior ou igual a 7, aluno aprovado
//senão se a media for maior ou igual a 5, aluno em recuperação
//senão aluno reprovado

if (media >= 7) {
    mensagem = `A média do aluno é ${media} sendo assim Aprovado`
}
else {
    if (media >= 5) {
        mensagem =`A média do aluno é ${media}sendo assim  em Recuperação`
    }
    else {
        mensagem = `A média do aluno é ${media} sendo assim  Reprovado`
}
}

document.body.appendChild(document.createTextNode(mensagem))
