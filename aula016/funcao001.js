function parimpar(n) {
    if (n % 2 == 0) {
        return "Par!"
    } else {
        return "Ímpar!"
    }
}

var res = parimpar(5)
console.log(`O número é ${res}`)