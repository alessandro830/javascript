function fatorial(n) {
    var res = 1
    for (c = n; c > 0; c--) {
        res *= c
    }
    return res
}

console.log(fatorial(10))