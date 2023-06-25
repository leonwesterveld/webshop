let polo = document.getElementById("polo_v");
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
                case "blue":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[12].front);
                        images[1].setAttribute("src", data.information[12].wear);
                        images[2].setAttribute("src", data.information[12].colour);
                        images[3].setAttribute("src", data.information[12].back);
                        images[4].setAttribute("src", data.information[12].full);
                        prijs.innerHTML = "€" + data.information[12].prijs + ",-";
                        
                    }
                    break;
                
                case "navy":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[13].front);
                        images[1].setAttribute("src", data.information[13].wear);
                        images[2].setAttribute("src", data.information[13].colour);
                        images[3].setAttribute("src", data.information[13].back);
                        images[4].setAttribute("src", data.information[13].full);
                        prijs.innerHTML = "€" + data.information[13].prijs + ",-";
                    }
                    break;

                case "pink":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[14].front);
                        images[1].setAttribute("src", data.information[14].wear);
                        images[2].setAttribute("src", data.information[14].colour);
                        images[3].setAttribute("src", data.information[14].back);
                        images[4].setAttribute("src", data.information[14].full);
                        prijs.innerHTML = "€" + data.information[14].prijs + ",-";
                    }
                    break;

                case "red":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[15].front);
                        images[1].setAttribute("src", data.information[15].wear);
                        images[2].setAttribute("src", data.information[15].colour);
                        images[3].setAttribute("src", data.information[15].back);
                        images[4].setAttribute("src", data.information[15].full);
                        prijs.innerHTML = "€" + data.information[15].prijs + ",-";
                    }
                    break;
                    
                case "white":
                    for (let i = 0; i < images.length; i++) {
                        images[0].setAttribute("src", data.information[16].front);
                        images[1].setAttribute("src", data.information[16].wear);
                        images[2].setAttribute("src", data.information[16].colour);
                        images[3].setAttribute("src", data.information[16].back);
                        images[4].setAttribute("src", data.information[16].full);
                        prijs.innerHTML = "€" + data.information[16].prijs + ",-";
                    }
                    break;
            }
        };

    });
