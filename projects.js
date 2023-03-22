var card1 = document.getElementById("friendzone")
var card2 = document.getElementById("chat-app")
var card3 = document.getElementById("video-app")
var card4 = document.getElementById("accounting-app")
var card5 = document.getElementById("red-light-green-light")
var card6 = document.getElementById("keyboard-shop")

var card1close = document.getElementById("close-friendzone")
var card2close = document.getElementById("close-chat-app")
var card3close = document.getElementById("close-video-app")
var card4close = document.getElementById("close-accounting-app")
var card5close = document.getElementById("close-rlgl")
var card6close = document.getElementById("close-keyboard-shop")
console.log(card1close)



console.log(card1.childNodes)

let isClicked1 = false
let isClicked2 = false
let isClicked3 = false
let isClicked4 = false
let isClicked5 = false
let isClicked6 = false

card1.onclick = function(){
    if(!isClicked1){

        card1.childNodes[3].style.display = 'block'
        isClicked1 = true;
    }

    
}

card1close.onclick = function(){
        
    if(card1.childNodes[3].style.display == 'block'){
    card1.childNodes[3].style.display = 'none'
    
    }
    
}   





card2.onclick = function(){
    if(!isClicked2){

        card2.childNodes[3].style.display = 'block'
        isClicked2 = true;
    }

    
}

card2close.onclick = function(){
        
    if(card2.childNodes[3].style.display == 'block'){
    card2.childNodes[3].style.display = 'none'
   
    
    }
    
}   

card3.onclick = function(){
    if(!isClicked3){

        card3.childNodes[3].style.display = 'block'
        isClicked1 = true;
    }

    
}

card3close.onclick = function(){
        
    if(card3.childNodes[3].style.display == 'block'){
    card3.childNodes[3].style.display = 'none'
    
    
    }
    
}

card4.onclick = function(){
    if(!isClicked4){

        card2.childNodes[3].style.display = 'block'
        isClicked4 = true;
    }

    
}

card4close.onclick = function(){
        
    if(card4.childNodes[3].style.display == 'block'){
    card4.childNodes[3].style.display = 'none'
   
    
    }
    
}

card5.onclick = function(){
    if(!isClicked5){

        card5.childNodes[3].style.display = 'block'
        isClicked5 = true;
    }

    
}

card5close.onclick = function(){
        
    if(card5.childNodes[3].style.display == 'block'){
    card5.childNodes[3].style.display = 'none'
    
    
    }
    
}

card6.onclick = function(){
    if(!isClicked6){

        card6.childNodes[3].style.display = 'block'
        isClicked6 = true;
    }

    
}

card6close.onclick = function(){
        
    if(card6.childNodes[3].style.display == 'block'){
    card6.childNodes[3].style.display = 'none'
   
    
    }
    
}   



 
    


