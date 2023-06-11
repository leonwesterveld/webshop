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