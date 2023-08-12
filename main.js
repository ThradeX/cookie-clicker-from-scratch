var cookie_balance = 0 //Total number of cookies baked
var cookie_balance_text = 10 //Current cookie balance
var cookie_per_sec = 0 //Amount of cookies being earned per sec
var bake_value = 1 //Value of each click

const click = new Audio("snd/click1.mp3") //Sound when you click BIG COOKIE

//Function to bake a cookie when you click BIG COOKIE, increasing cookie number by X amount
function bake_cookie() {
    cookie_balance_text = cookie_balance_text + bake_value
    cookie_balance = cookie_balance + bake_value

    click.play();
}
//function to change title according to cookie balance
function update_title() {
    if (cookie_balance_text == 1) {
        document.title = Math.trunc(cookie_balance_text).toLocaleString() + " cookie" + " - Cookie Clicker";
    } else {
        document.title = Math.trunc(cookie_balance_text).toLocaleString() + " cookies" + " - Cookie Clicker";
    }
}
setInterval(update_title, 2000);

//function to update basically every displayed number on screen
function update_cookie_amount () {
    cookie_balance_text = cookie_balance_text + cookie_per_sec; 
    cookie_balance = cookie_balance + cookie_per_sec;

    document.getElementById("cookie_persec").innerHTML = "per second: " + Math.round(cookie_per_sec * 1000) / 10;;

    if (cookie_balance_text == 1) {
        document.getElementById("cookie_balance").innerHTML = Math.trunc(cookie_balance_text).toLocaleString() + " cookie";
    } else {
        document.getElementById("cookie_balance").innerHTML = Math.trunc(cookie_balance_text).toLocaleString() + " cookies";
    }

    if (cookie_balance_text >= cursor_price) {
        document.getElementById("button").style.opacity = "100%";
        document.getElementById("cursor_icon").style.backgroundPositionX = "0px"
        document.getElementById("cursor_price").style.color = "rgb(55, 255, 55)"
        document.getElementById("cursor_name").innerHTML = "Cursor"
    } else {
        document.getElementById("button").style.opacity = "60%";
        document.getElementById("cursor_price").style.color = "rgb(255, 55, 55)"
    }
}
setInterval(update_cookie_amount, 1)

//Variables and functions referring to the Cursor Button
var cursor_price = 15
var cursor_production = 0.001
var cursor_quantity = 0
function buy_cursor() {
    if (cookie_balance_text >= cursor_price) {
        cookie_balance_text = cookie_balance_text - cursor_price;
        cookie_per_sec = cookie_per_sec + cursor_production;
        cursor_price = cursor_price * 1.20;
        cursor_quantity = cursor_quantity + 1;
        document.getElementById("cursor_price").innerHTML = Math.trunc(cursor_price).toLocaleString();
        document.getElementById("cursor_quantity").innerHTML = cursor_quantity
    }
}