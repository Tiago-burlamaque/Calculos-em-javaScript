// Calculo de desconto

const preco = 200
const desconto = 15

const valorFinal = preco - (preco * desconto / 100)

console.log(`O preço do produto está em promoção por R$${valorFinal.toFixed(2)}`)