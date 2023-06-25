let allGames = document.getElementsByClassName("game");
let prijs = document.getElementById("prijs");
const images = document.getElementsByClassName("product__image");
const price = document.getElementsByClassName("price__text");

fetch("../product.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for (let i = 0; i < images.length; i++) {
            images[i].setAttribute("src", data.information[i].front);
            price[i].innerHTML = data.information[i].prijs + ",-";
        }

        prijs.onchange = (event) => {
            event.preventDefault();

            value = prijs.value;
            switch (value) {
                case "-":
                    for (let i = 0; i < allGames.length; i++) {
                        allGames[i].style.display = "block";
                    }
                    break;
                
                case "0":
                    for (let i = 0; i < allGames.length; i++) {
                        if (allGames[i].dataset.price === "0") {
                            allGames[i].style.display = "block";
                        }
                        if (
                            allGames[i].dataset.price === "100" ||
                            allGames[i].dataset.price === "200"
                        ) {
                            allGames[i].style.display = "none";
                        }
                    }
                    break;

                case "100":
                    for (let i = 0; i < allGames.length; i++) {
                        if (allGames[i].dataset.price === "100") {
                            allGames[i].style.display = "block";
                        }
                        if (
                            allGames[i].dataset.price === "0" ||
                            allGames[i].dataset.price === "200"
                        ) {
                            allGames[i].style.display = "none";
                        }
                    }
                    break;

                case "200":
                    for (let i = 0; i < allGames.length; i++) {
                        if (allGames[i].dataset.price === "200") {
                            allGames[i].style.display = "block";
                        }
                        if (
                            allGames[i].dataset.price === "0" ||
                            allGames[i].dataset.price === "100"
                        ) {
                            allGames[i].style.display = "none";
                        }
                    }
                    break;
            }
        };
    });

console.log(allGames[0]);
