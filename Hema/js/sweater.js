let sweater = document.getElementById("sweater");
let prijs = document.getElementsByClassName("price")[0];
const images = document.getElementsByClassName("slides__pic");

const colorInfo = {
    beige: {
        index: 6,
        images: ["front", "wear", "colour", "back"]
    },
    blue: {
        index: 7,
        images: ["front", "wear", "colour", "back"]
    },
    green: {
        index: 8,
        images: ["front", "wear", "colour", "back"]
    },
    pink: {
        index: 9,
        images: ["front", "wear", "colour", "back"]
    },
    purple: {
        index: 10,
        images: ["front", "wear", "colour", "back"]
    },
    yellow: {
        index: 11,
        images: ["front", "wear", "colour", "back"]
    }
};

fetch("../product.json")
    .then(response => response .json())
    .then(data => {
        sweater.onchange = function() {
            const value = sweater.value;
            const color = colorInfo[value];
            for (let i = 0; i < images.length; i++) {
                images[i].setAttribute("src", data.information[color.index][color.images[i]]);
            }
            prijs.innerHTML = "€" + data.information[color.index].prijs + ",-";
        };
    }); 
