function calcular() {
    var num = window.document.querySelector("input#num").value
    var tab = window.document.querySelector("select#seltab")
    if (num.length == 0) {
        window.alert("[ERRO] Digite algum número!")
    } else {
        var n = Number(num)
        var c = 0
        tab.innerHTML = ""
        while (c <= 10) {
            var item = window.document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }

        /*
        for (c = 0; c <= 10; c++) {
            var item = window.document.createElement("option")
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
        */
    }
}