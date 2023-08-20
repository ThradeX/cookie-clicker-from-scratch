var cookie_balance = 0 //Total number of cookies baked
var cookie_balance_text = 0 //Current cookie balance
var cookie_per_sec = 0 //Amount of cookies being earned per sec
var bake_value = 10 //Value of each click

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

    document.getElementById("cookie_persec").innerHTML = "per second: " + Math.round(cookie_per_sec * 1000)/10;

    if (cookie_balance_text == 1) {
        document.getElementById("cookie_balance").innerHTML = Math.trunc(cookie_balance_text).toLocaleString() + " cookie";
    } else {
        document.getElementById("cookie_balance").innerHTML = Math.trunc(cookie_balance_text).toLocaleString() + " cookies";
    }

    //Function to update Cursor Button when possible to buy/unlocked
    if (cookie_balance_text >= cursor_price) {
        document.getElementById("cursor").style.opacity = "100%";
        document.getElementById("cursor_icon").style.backgroundPositionX = "0px"
        document.getElementById("cursor_price").style.color = "rgb(55, 255, 55)"
        document.getElementById("cursor_name").innerHTML = "Cursor"
        document.getElementById("farm").style.display = ""
    } else {
        document.getElementById("cursor").style.opacity = "60%";
        document.getElementById("cursor_price").style.color = "rgb(255, 55, 55)"
    }
        var cursor_upgrade1_cost = 100
        if (cursor_quantity >= 1) {
            document.getElementById("upgrade_icon").style.display = "";
        }
    //Function to update Grandma Button when possible to buy/unlocked
    if (cookie_balance_text >= grandma_price) {
        document.getElementById("grandma").style.opacity = "100%";
        document.getElementById("grandma_icon").style.backgroundPositionX = "0px"
        document.getElementById("grandma_price").style.color = "rgb(55, 255, 55)"
        document.getElementById("grandma_name").innerHTML = "Grandma"
        document.getElementById("mine").style.display = ""
    } else {
        document.getElementById("grandma").style.opacity = "60%";
        document.getElementById("grandma_price").style.color = "rgb(255, 55, 55)"
    }

    //Function to update Farm Button when possible to buy/unlocked
    if (cookie_balance_text >= farm_price) {
        document.getElementById("farm").style.opacity = "100%";
        document.getElementById("farm_icon").style.backgroundPositionX = "0px"
        document.getElementById("farm_price").style.color = "rgb(55, 255, 55)"
        document.getElementById("farm_name").innerHTML = "Farm"
    } else {
        document.getElementById("farm").style.opacity = "60%";
        document.getElementById("farm_price").style.color = "rgb(255, 55, 55)"
    }

    //Function to update Mine Button when possible to buy/unlocked
    if (cookie_balance_text >= mine_price) {
        document.getElementById("mine").style.opacity = "100%";
        document.getElementById("mine_icon").style.backgroundPositionX = "0px"
        document.getElementById("mine_price").style.color = "rgb(55, 255, 55)"
        document.getElementById("mine_name").innerHTML = "Mine"
    } else {
        document.getElementById("mine").style.opacity = "60%";
        document.getElementById("mine_price").style.color = "rgb(255, 55, 55)"
    }
}
setInterval(update_cookie_amount, 10) //The game is locked at 30 FPS, but is too complicated to work with 1000/30 updates, will only do that if have performance issues in the future

//Variables and functions referring to the Cursor Button
var cursor_price = 15 //cost of purchasing the cursor
var cursor_production = 0.001
var cursor_quantity = 0
function buy_cursor() {
    if (cookie_balance_text >= cursor_price) {
        cookie_balance_text = cookie_balance_text - cursor_price;
        cookie_per_sec = cookie_per_sec + cursor_production;
        cursor_price = cursor_price * 1.15;
        cursor_quantity = cursor_quantity + 1;
        document.getElementById("cursor_price").innerHTML = Math.trunc(cursor_price).toLocaleString();
        document.getElementById("cursor_quantity").innerHTML = cursor_quantity
    }
}

//Variables and functions referring to the Grandma Button
var grandma_price = 100 //cost of purchasing the grandma
var grandma_production = 0.01
var grandma_quantity = 0
function buy_grandma() {
    if (cookie_balance_text >= grandma_price) {
        cookie_balance_text = cookie_balance_text - grandma_price;
        cookie_per_sec = cookie_per_sec + grandma_production;
        grandma_price = grandma_price * 1.15;
        grandma_quantity = grandma_quantity + 1;
        document.getElementById("grandma_price").innerHTML = Math.trunc(grandma_price).toLocaleString();
        document.getElementById("grandma_quantity").innerHTML = grandma_quantity
    }
}

//Variables and functions referring to the Farm Button
var farm_price = 1100 //cost of purchasing the farm
var farm_production = 0.08
var farm_quantity = 0
function buy_farm() {
    if (cookie_balance_text >= farm_price) {
        cookie_balance_text = cookie_balance_text - farm_price;
        cookie_per_sec = cookie_per_sec + farm_production;
        farm_price = farm_price * 1.15;
        farm_quantity = farm_quantity + 1;
        document.getElementById("farm_price").innerHTML = Math.trunc(farm_price).toLocaleString();
        document.getElementById("farm_quantity").innerHTML = farm_quantity
    }
}

//Variables and functions referring to the Mine Button
var mine_price = 12000 //cost of purchasing the mine
var mine_production = 0.47
var mine_quantity = 0
function buy_mine() {
    if (cookie_balance_text >= mine_price) {
        cookie_balance_text = cookie_balance_text - mine_price;
        cookie_per_sec = cookie_per_sec + mine_production;
        mine_price = mine_price * 1.15;
        mine_quantity = mine_quantity + 1;
        document.getElementById("mine_price").innerHTML = Math.trunc(mine_price).toLocaleString();
        document.getElementById("mine_quantity").innerHTML = mine_quantity
    }
}