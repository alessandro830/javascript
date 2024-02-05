function contar() {
    var inicio = window.document.querySelector("input#inicio").value
    var fim = window.document.querySelector("input#fim").value
    var passo = window.document.querySelector("input#passo").value
    var res = window.document.querySelector("div#res")
    var i = Number(inicio)
    var f = Number(fim)
    var p = Number(passo)

    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        res.innerHTML = `<p>Impossivel contar!</p>`
    } else {
        if (p <= 0) {
            window.alert("Impossivel contar! Considerando Passo = 1")
            p = 1
        }
        if (i < f) {
            // Contagem crescente
            res.innerHTML = `Contando: `
            for (c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449} `
            }
            res.innerHTML += `\u{1f3c1}`
        } else {
            //Contagem decrescente
            res.innerHTML = `Contando: `
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1f449} `
            }
            res.innerHTML += `\u{1f3c1}`
        }
    }
}