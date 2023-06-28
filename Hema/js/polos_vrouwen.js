let polo = document.getElementById("polo_v");
let prijs = document.getElementsByClassName("price")[0];
const images = document.getElementsByClassName("slides__pic");

const colorInfo = {
    blue: {
        index: 12,
        images: ["front", "wear", "colour", "back", "full"]
    },
    navy: {
        index: 13,
        images: ["front", "wear", "colour", "back", "full"]
    },
    pink: {
        index: 14,
        images: ["front", "wear", "colour", "back", "full"]
    },
    red: {
        index: 15,
        images: ["front", "wear", "colour", "back", "full"]
    },
    white: {
        index: 16,
        images: ["front", "wear", "colour", "back", "full"]
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