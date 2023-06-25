let polo = document.getElementById("polo");
let prijs = document.getElementsByClassName("price")[0];

const images = document.getElementsByClassName("slides__pic");

fetch("../product.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {


        polo.onchange = (event) => {
            event.preventDefault();

            value = polo.value;
            switch (value) {
                case "beige":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[0].front);
                        images[1].setAttribute("src", data.information[0].wear);
                        images[2].setAttribute("src", data.information[0].colour);
                        images[3].setAttribute("src", data.information[0].back);
                        prijs.innerHTML = "€" + data.information[0].prijs + ",-";
                        
                    }
                    break;

                case "blue":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[1].front);
                        images[1].setAttribute("src", data.information[1].wear);
                        images[2].setAttribute("src", data.information[1].colour);
                        images[3].setAttribute("src", data.information[1].back);
                        prijs.innerHTML = "€" + data.information[1].prijs + ",-";
                    }
                    break;

                case "navy":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[2].front);
                        images[1].setAttribute("src", data.information[2].wear);
                        images[2].setAttribute("src", data.information[2].colour);
                        images[3].setAttribute("src", data.information[2].back);
                        prijs.innerHTML = "€" + data.information[2].prijs + ",-";
                    }
                    break;

                case "pink":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[3].front);
                        images[1].setAttribute("src", data.information[3].wear);
                        images[2].setAttribute("src", data.information[3].colour);
                        images[3].setAttribute("src", data.information[3].back);
                        prijs.innerHTML = "€" + data.information[3].prijs + ",-";
                    }
                    break;

                case "red":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[4].front);
                        images[1].setAttribute("src", data.information[4].wear);
                        images[2].setAttribute("src", data.information[4].colour);
                        images[3].setAttribute("src", data.information[4].back);
                        prijs.innerHTML = "€" + data.information[4].prijs + ",-";
                    }
                    break;

                case "white":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[5].front);
                        images[1].setAttribute("src", data.information[5].wear);
                        images[2].setAttribute("src", data.information[5].colour);
                        images[3].setAttribute("src", data.information[5].back);
                        prijs.innerHTML = "€" + data.information[5].prijs + ",-";
                    }
                    break;
                default:
            }
        };

    });

