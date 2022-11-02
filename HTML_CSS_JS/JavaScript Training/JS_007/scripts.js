function somar() {
    var txt1 = window.document.getElementById("txtn1");
    var txt2 = window.document.querySelector("input#txtn2");
    var res = window.document.getElementById("res");
    var n1 = Number(txt1.value)
    var n2 = Number(txt2.value)
    var s = n1 + n2
    res.innerHTML = s
}




