function reload() {
    location.reload()
}
window.setTimeout(reload, 3000);

cookie_balance_text = 0

function bake_cookie() {
    cookie_balance_text ++
    document.getElementById("cookie_balance").innerHTML = cookie_balance_text + " Cookies";
}

if (cookie_balance_text = 1) {
    document.getElementById("cookie_balance").innerHTML = cookie_balance_text + " Cookie";
}
