let sweater = document.getElementById("sweater");
let prijs = document.getElementsByClassName("price")[0];

const images = document.getElementsByClassName("slides__pic");

fetch("../product.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {


        sweater.onchange = (event) => {
            event.preventDefault();

            value = sweater.value;
            switch (value) {
                case "beige":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[6].front);
                        images[1].setAttribute("src", data.information[6].wear);
                        images[2].setAttribute("src", data.information[6].colour);
                        images[3].setAttribute("src", data.information[6].back);
                        prijs.innerHTML = "€" + data.information[6].prijs + ",-";
                        
                    }
                    break;

                case "blue":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[7].front);
                        images[1].setAttribute("src", data.information[7].wear);
                        images[2].setAttribute("src", data.information[7].colour);
                        images[3].setAttribute("src", data.information[7].back);
                        prijs.innerHTML = "€" + data.information[7].prijs + ",-";
                    }
                    break;

                case "green":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[8].front);
                        images[1].setAttribute("src", data.information[8].wear);
                        images[2].setAttribute("src", data.information[8].colour);
                        images[3].setAttribute("src", data.information[8].back);
                        prijs.innerHTML = "€" + data.information[8].prijs + ",-";
                    }
                    break;

                case "pink":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[9].front);
                        images[1].setAttribute("src", data.information[9].wear);
                        images[2].setAttribute("src", data.information[9].colour);
                        images[3].setAttribute("src", data.information[9].back);
                        prijs.innerHTML = "€" + data.information[9].prijs + ",-";
                    }
                    break;

                case "purple":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[10].front);
                        images[1].setAttribute("src", data.information[10].wear);
                        images[2].setAttribute("src", data.information[10].colour);
                        images[3].setAttribute("src", data.information[10].back);
                        prijs.innerHTML = "€" + data.information[10].prijs + ",-";
                    }
                    break;

                case "yellow":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[11].front);
                        images[1].setAttribute("src", data.information[11].wear);
                        images[2].setAttribute("src", data.information[11].colour);
                        images[3].setAttribute("src", data.information[11].back);
                        prijs.innerHTML = "€" + data.information[11].prijs + ",-";
                    }
                    break;
                default:
            }
        };

    });
