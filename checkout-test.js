var c = 0;
var x = setInterval(function () {
    var html = [
        '<span class="field-tip">',
        '</span>'
    ].join('');
    if (document.getElementById("checkout-shipping-options")) {
        if (c < 1) {
            var div = document.createElement("div");
            div.setAttribute('class', 'kedge block aftershipping');
            div.innerHTMl = html;
            document.getElementById("checkout-shipping-options").appendChild(div);
            c = c + 1;
        }
    }
}, 2000);