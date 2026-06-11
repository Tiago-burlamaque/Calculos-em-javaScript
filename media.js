// Média de notas

const notas = [10, 4, 6, 0, 10]




const media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length

if (media >= 7) {
    console.log(`Aprovado: ${media}`)
} else if (media == 6) {
    console.log(`Recuperação: ${media}`)
} else {
    console.log(`Reprovado: ${media}`)
}