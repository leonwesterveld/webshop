let polo = document.getElementById("polo_v");

polo.onchange = (event) => {
    event.preventDefault();

    value = polo.value;
    switch (value) {
        case "navy":
            window.location.href = "polos_navy.html";
            break;
        
        case "blue":
            window.location.href = "polos_blue.html";
            break;

        case "white":
            window.location.href = "polos_white.html";
            break;

        case "red":
            window.location.href = "polos_red.html";
            break;

        case "beige":
            window.location.href = "polos_beige.html";
            break;

        case "pink":
            window.location.href = "polos_pink.html";
            break;

        default:
    }
};
