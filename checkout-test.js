var c = 0;
var x = setInterval(function () {
    if (document.getElementById("checkout-shipping-options")) {
        if (c < 1) {
            var para = document.createElement("H1");
            var t = document.createTextNode("THIS IS WHERE KEDGE WILL GO :D");
            para.appendChild(t);
            document.getElementById("checkout-shipping-options").appendChild(para);
            c = c + 1;
            console.log("what");
        }
    }
}, 2000)