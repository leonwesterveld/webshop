
let allGames = document.getElementsByClassName("game");
let filters = document.getElementsByClassName("filter");


for(let i = 0; i < filters.length; i++){
    filters[i].checked = true;
}//zet checkboxes op checked bij refresh

let polos = document.getElementById("checkbox-polos");
let sweaters = document.getElementById("checkbox-sweaters");
let Xbox = document.getElementById("checkbox-Xbox");
let Nintendo = document.getElementById("checkbox-Nintendo");

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

Xbox.onchange = function(){
    if(Xbox.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Xbox"){    
                allGames[i].style.display = "block";
            }
        }
    }//laat list items zien
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Xbox"){    
                allGames[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}

Nintendo.onchange = function(){
    if(Nintendo.checked === true){
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Nintendo"){    
                allGames[i].style.display = "block";
            }
        }
    }//laat list items zien
    else{
        for(let i = 0; i < allGames.length; i++){
            if(allGames[i].dataset.category === "Nintendo"){    
                allGames[i].style.display = "none";
            }
        }
    }//laat list items verdwijnen
}

console.log("hoi");