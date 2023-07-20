var cookie_balance_text = 0

function bake_cookie() {
    cookie_balance_text ++

    if (cookie_balance_text == 1) {
        document.getElementById("cookie_balance").innerHTML = cookie_balance_text + " Cookie";
    } else {
        document.getElementById("cookie_balance").innerHTML = cookie_balance_text + " Cookies";
    }
}