// Imagine um sistema de estacionamento:

// Fórmula

// Total = horas x valor por hora

const horas = 3

if (horas <= 2) {
    let valorHora = 8
    let totalValor = horas * valorHora
    console.log(`O valor total é de R$${totalValor.toFixed(2)}.`)
}
else if (horas > 2) {
    const valorHora = 6
    const totalValor = horas * valorHora
    console.log(`O valor total é de R${totalValor.toFixed(2)}.`)
}

