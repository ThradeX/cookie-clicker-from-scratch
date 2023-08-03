var cookie_balance = 0
var cookie_balance_text = 0
var observers = []

const click = new Audio("snd/click1.mp3")

function addObserver(observer) {
    observers.push(observer);
}
function notifyObservers() {
    observers.forEach(function(observer) {
      observer(cookie_balance_text);
    });
}

setInterval(function() {
    notifyObservers();
}, 1000);


function bake_cookie() {
    cookie_balance_text = cookie_balance_text + 1
    cookie_balance = cookie_balance + 1

    click.play();

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


function unlock_cursor () {
    if (cookie_balance >= 1) {
        document.getElementById("buttom").style.opacity = "100%";
    }
}