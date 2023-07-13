//function reload() {
//    location.reload()
//}
//window.setTimeout(reload, 5000);

cookie_balance_text = 0

function bake_cookie() {
    cookie_balance_text ++
    document.getElementById("cookie_balance").innerHTML = cookie_balance_text + " Cookies";
}