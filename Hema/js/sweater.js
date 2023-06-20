let sweater = document.getElementById("sweater");

sweater.onchange = (event) => {
    event.preventDefault();

    value_sweater = sweater.value;
    switch (value_sweater) {
        case "green":
            window.location.href = "sweaters_green.html";
            break;
        
        case "blue":
            window.location.href = "sweaters_blue.html";
            break;

        case "yellow":
            window.location.href = "sweaters_yellow.html";
            break;

        case "pink":
            window.location.href = "sweaters_pink.html";
            break;

        case "purple":
            window.location.href = "sweaters_purple.html";
            break;

        case "beige":
            window.location.href = "sweaters_beige.html";
            break;

        default:
    }
};

let small = document.getElementById('small');
let medium = document.getElementById("medium");
let large = document.getElementById('large');

let size = "hoi"

var modal = document.getElementById("myModal");
let picture = document.getElementById("picture").src;
var voeg = document.getElementById('voeg');
var grote = document.getElementById('grote');
var img = document.getElementById("card");
var modalImg = document.getElementById("img01");
var closing = document.getElementById("close");
var item = document.getElementById("item");


small.onclick = function () {
    small.style.background = "#ff9898";
    medium.style.background = "buttonface";
    large.style.background = "buttonface";
    size = "small"
    console.log(size);
    img.onclick = function(){
        modal.style.display = "flex";
        modalImg.src = picture;
        grote.innerHTML = size;
    }
}
medium.onclick = function () {
    small.style.background = "buttonface";
    medium.style.background = "#ff9898";
    large.style.background = "buttonface";
    size = "medium"
    console.log(size);
    img.onclick = function(){
        modal.style.display = "flex";
        modalImg.src = picture;
        grote.innerHTML = size;
    }
}
large.onclick = function () {
    small.style.background = "buttonface";
    medium.style.background = "buttonface";
    large.style.background = "#ff9898";
    size = "large"
    console.log(size);
    img.onclick = function(){
        modal.style.display = "flex";
        modalImg.src = picture;
        grote.innerHTML = size;
    }
}

closing.onclick = function() { 
    modal.style.display = "none"; 
}   

let aantal = 1;
voeg.onclick = function() {
    modal.style.display = "none"; 
    item.innerHTML = aantal ++;
}
