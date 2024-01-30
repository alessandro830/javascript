function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.querySelector("input#txtano").value
    var res = window.document.querySelector("div#res")
    var img = window.document.querySelector("div#imagem")
    if (fAno.length == 0 || fAno > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        var fSex = window.document.getElementsByName("radsex")
        var idade = ano - Number(fAno)
        var genero = ""
        if (fSex[0].checked) {
            genero = "Homem"
            if (idade >= 0 && idade < 10) {
                //criança
                img.style.backgroundImage = "url('images/criancaHomem.jpg')"
                img.style.backgroundPosition = "center right"
            } else if (idade < 21) {
                //Jovem
                img.style.backgroundImage = "url('images/jovemHomem.jpg')"
            } else if (idade < 50) {
                //Adulto
                img.style.backgroundImage = "url('images/adultoHomem.jpg')"
            } else {
                // Idoso
                img.style.backgroundImage = "url('images/idosoHomem.jpg')"
            }
        } else if (fSex[1].checked) {
            genero = "Mulher"
            if (idade >= 0 && idade < 10) {
                //criança
                img.style.backgroundImage = "url('images/criancaMulher.jpg')"
                img.style.backgroundPosition = "center"
            } else if (idade < 21) {
                //Jovem
                img.style.backgroundImage = "url('images/jovemMulher.jpg')"
            } else if (idade < 50) {
                //Adulto
                img.style.backgroundImage = "url('images/adultoMulher.jpg')"
            } else {
                // Idoso
                img.style.backgroundImage = "url('images/idosoMulher.jpg')"
            }
        }
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
    }

}