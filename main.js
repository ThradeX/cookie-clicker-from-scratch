var cookie_balance_text = 0

function bake_cookie() {
    cookie_balance_text ++

    if (cookie_balance_text == 1) {
        document.getElementById("cookie_balance").innerHTML = cookie_balance_text + " cookie";
    } else {
        document.getElementById("cookie_balance").innerHTML = cookie_balance_text + " cookies";
    }
}

function update_title() {
    if (cookie_balance_text == 1) {
        document.title = cookie_balance_text + " cookie" + " - Cookie Clicker";
    } else {
        document.title = cookie_balance_text + " cookies" + " - Cookie Clicker";
    }
}
setInterval(update_title, 2000);