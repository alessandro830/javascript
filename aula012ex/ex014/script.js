function carregar() {
    var msg = window.document.querySelector("div#msg")
    var img = window.document.querySelector("div#imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.style.backgroundImage = "url('images/manha.jpg')"
        document.body.style.background = "#049DD9"
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.style.backgroundImage = "url('images/tarde.jpg')"
        document.body.style.background = "#675C73"
    } else {
        //boa noite
        img.style.backgroundImage = "url('images/noite.jpg')"
        document.body.style.background = "#394A59"
    }
}