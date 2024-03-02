let num = [5, 8, 2, 9, 3]
num.push(1) //Adicionar um ou mais elementos no final
num.sort() // Ordenar os elementos
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(2)
console.log(pos)
if (pos == -1) {
    console.log("O valor não foi encontrado!")
} else {
    console.log(`O valor está na posição ${pos}`)
}