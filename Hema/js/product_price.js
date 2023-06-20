let allGames = document.getElementsByClassName("game");
let prijs = document.getElementById("prijs");

prijs.onchange = (event) => {
    event.preventDefault();

    value = prijs.value;
    switch (value) {
        case "-":
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.price === "0") {
                    allGames[i].style.display = "block";
                }
            }
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.price === "100") {
                    allGames[i].style.display = "block";
                }
            }
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.price === "200") {
                    allGames[i].style.display = "block";
                }
            }
            console.log("hoi");
            break;

        case "0":
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.price === "0") {
                    allGames[i].style.display = "block";
                }
            }
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.price === "100") {
                    allGames[i].style.display = "none";
                }
            }
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.price === "200") {
                    allGames[i].style.display = "none";
                }
            }
            console.log("hoi");

            break;

        case "100":
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.price === "0") {
                    allGames[i].style.display = "none";
                }
            }
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.price === "100") {
                    allGames[i].style.display = "block";
                }
            }
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.price === "200") {
                    allGames[i].style.display = "none";
                }
            }
            console.log("hoi");

            break;

        case "200":
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.price === "0") {
                    allGames[i].style.display = "none";
                }
            }
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.price === "100") {
                    allGames[i].style.display = "none";
                }
            }
            for (let i = 0; i < allGames.length; i++) {
                if (allGames[i].dataset.price === "200") {
                    allGames[i].style.display = "block";
                }
            }
            console.log("hoi");

            break;

        default:
    }
};
