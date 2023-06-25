let grote = document.getElementsByClassName('size');

let size = "hoi"

let s = 0;
let m = 0;
let l = 0;
let total = 0;

var modal = document.getElementById("myModal");
var add = document.getElementById("card");
var closing = document.getElementById("close");
var aantal = document.getElementsByClassName("veel");
var item = document.getElementById("item");


grote[0].onclick = function () {
    grote[0].style.background = "#ff9898";
    grote[1].style.background = "buttonface";
    grote[2].style.background = "buttonface";
    size = "small"
    add.onclick = function(){
        modal.style.display = "flex";
        s += 1;
        aantal[0].innerHTML = s + "x";
        total += 1;
        item.innerHTML = total;
        
    }
}

grote[1].onclick = function () {
    grote[0].style.background = "buttonface";
    grote[1].style.background = "#ff9898";
    grote[2].style.background = "buttonface";
    size = "medium"
    add.onclick = function(){
        modal.style.display = "flex";
        m += 1;
        aantal[1].innerHTML = m + "x";
        total += 1;
        item.innerHTML = total;
        
    }
}

grote[2].onclick = function () {
    grote[0].style.background = "buttonface";
    grote[1].style.background = "buttonface";
    grote[2].style.background = "#ff9898";
    size = "large"
    add.onclick = function(){
        modal.style.display = "flex";
        l += 1;
        aantal[2].innerHTML = l + "x";
        total += 1;
        item.innerHTML = total;
        
    }
}

closing.onclick = function() { 
    modal.style.display = "none"; 
}   

let list = document.getElementsByClassName("checkout__listItem")
let filters = document.getElementsByClassName("checkboxes");
let numbers = document.getElementsByClassName("numbers");
let echte = document.getElementsByClassName("echte");
let max = 90;
let deze = false;

for (let i = 0; i < filters.length; i++){
    filters[i].checked = true;
    filters[i].onchange = function () {
        if (filters[i].checked === true) {
                list[i].style.opacity = "1";
            }
        else {
                list[i].style.opacity = "0.3";
        }
    
    }
}
for (let i = 0; i < numbers.length; i++) { 
    numbers[i].onchange = function () {
        tal = numbers[i].value *max;
        echte[i].innerHTML = "€"+ tal + ",-";
    }
}



const checkout = document.getElementsByClassName("shoppingcard")[0];
const checkoutWindow = document.getElementById("checkoutWindow");
const icon_arrow = document.getElementsByClassName("fa-arrow-left")[0];
const icon_cart = document.getElementsByClassName("fa-cart-shopping")[0];
let checkoutOpen = false;

checkout.onclick = function () {
    if (checkoutOpen === false) {
        document.querySelector("main").style.display = "none";
        checkoutWindow.style.display = "block"
        icon_arrow.style.display = "block"
        icon_cart.style.display = "none"
        checkoutOpen = true;
        return;
    }
    document.querySelector("main").style.display = "flex";
    checkoutWindow.style.display = "none"
    icon_arrow.style.display = "none"
    icon_cart.style.display = "block"
    checkoutOpen = false;
}