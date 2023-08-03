var cookie_balance = 0
var cookie_balance_text = 0
var bake_value = 1

const click = new Audio("snd/click1.mp3")

function bake_cookie() {
    cookie_balance_text = cookie_balance_text + bake_value
    cookie_balance = cookie_balance + bake_value

    click.play();

    if (cookie_balance_text == 1) {
        document.getElementById("cookie_balance").innerHTML = cookie_balance_text + " cookie";
    } else {
        document.getElementById("cookie_balance").innerHTML = cookie_balance_text + " cookies";
    }

    if (cookie_balance >= 15) {
        document.getElementById("buttom").style.opacity = "100%";
        document.getElementById("cursor").style.backgroundPositionX = "0px"
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