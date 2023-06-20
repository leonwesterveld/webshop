
let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");


for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}//zet checkboxes op checked bij refresh

let polos = document.getElementById("checkbox-polos");
let sweaters = document.getElementById("checkbox-sweaters");

polos.onchange = function(){
    if(polos.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "polos"){    
                allGames[i].style.display = "block";
            }
        }
    }//laat list items zien
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "polos"){    
                allGames[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}

sweaters.onchange = function(){
    if(sweaters.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "sweaters"){    
                allGames[i].style.display = "block";
            }
        }
    }//laat list items zien
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "sweaters"){    
                allGames[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}



