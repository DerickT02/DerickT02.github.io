var card1 = document.getElementById("friendzone")
var card2 = document.getElementById("chat-app")
var card3 = document.getElementById("video-app")
var card4 = document.getElementById("accounting-app")
var card5 = document.getElementById("red-light-green-light")

console.log(card1.childNodes)

let isClicked1 = false
let isClicked2 = false
let isClicked3 = false
let isClicked4 = false
let isClicked5 = false

card1.onclick = function(){
    if(!isClicked1){

        card1.childNodes[3].style.display = 'block'
        isClicked1 = true;
    }
    else{
        card1.childNodes[3].style.display = 'none'
        isClicked1 = false;
    }
   
}

card2.onclick = function(){
    if(!isClicked2){

        card2.childNodes[3].style.display = 'block'
        isClicked2 = true;
    }
    else{
        card2.childNodes[3].style.display = 'none'
        isClicked2 = false;
    }
   
}

card3.onclick = function(){
    if(!isClicked3){

        card3.childNodes[3].style.display = 'block'
        isClicked3 = true;
    }
    else{
        card3.childNodes[3].style.display = 'none'
        isClicked3 = false;
    }
   
}

card4.onclick = function(){
    if(!isClicked4){

        card4.childNodes[3].style.display = 'block'
        isClicked4 = true;
    }
    else{
        card4.childNodes[3].style.display = 'none'
        isClicked4 = false;
    }
   
}

card5.onclick = function(){
    if(!isClicked5){

        card5.childNodes[3].style.display = 'block'
        isClicked5 = true;
    }
    else{
        card5.childNodes[3].style.display = 'none'
        isClicked5 = false;
    }
   
}



 
    


