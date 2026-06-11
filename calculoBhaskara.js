// Calculo de bascara

// Delta

const deltaA = 1
const deltaB = -5
const deltaC = 6

let delta = (deltaB ** 2) - (4 * deltaA * deltaC)

if (delta > 0) {
    console.log(`A equação tem duas raízes. ${delta}`)
} else if (delta == 0) {
    console.log(`A equação tem apenas uma raíz real. ${delta}`)
} else if (delta < 0) {
    console.log(`A equação não possui raizes reais. ${delta}`)
}

// Bhaskara

const a = 1
const b = -5
const c = 6
let raizDelta = Math.sqrt(delta)

const x1 = (-b + delta) / 2 * delta
const x2 = (-b - delta) / 2 * delta

console.log(`Resultado da fórmula de bascara do X¹: ${x1}\nResultado da fórmula de bhaskara do X²: ${x2}`)