let polo = document.getElementById("polo");
let prijs = document.getElementsByClassName("price")[0];
const images = document.getElementsByClassName("slides__pic");

const colorInfo = {
    beige: {
        index: 0,
        images: ["front", "wear", "colour", "back"]
    },
    blue: {
        index: 1,
        images: ["front", "wear", "colour", "back"]
    },
    navy: {
        index: 2,
        images: ["front", "wear", "colour", "back"]
    },
    pink: {
        index: 3,
        images: ["front", "wear", "colour", "back"]
    },
    red: {
        index: 4,
        images: ["front", "wear", "colour", "back"]
    },
    white: {
        index: 5,
        images: ["front", "wear", "colour", "back"]
    }
};

fetch("../product.json")
    .then(response => response.json())
    .then(data => {
        polo.onchange = function() {
            const value = polo.value;
            const color = colorInfo[value];
            for (let i = 0; i < images.length; i++) {
                images[i].setAttribute("src", data.information[color.index][color.images[i]]);
            }
            prijs.innerHTML = "€" + data.information[color.index].prijs + ",-";
        };
    }); 