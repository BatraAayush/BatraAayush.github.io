var img = document.querySelector("img");


img.onclick = function(){
    var source = img.getAttribute("src");
    if(source ==="images/negan.jpg"){
        img.src=("images/my-image.jpeg")
    }else{
        img.src="images/negan.jpg";
    }
    
}



var button = document.querySelector("button");
var heading = document.querySelector("h1");

button.onclick = function (){
    changeUsername();
}

function changeUsername(){
    var userName = prompt("enter your name");
    if(!userName){
        changeUsername();
    }else{
    localStorage.setItem("name",userName);
    heading.textContent = "hello "+ userName;
    }
}

if(!localStorage.getItem("name")){
    changeUsername();
}else{
var storedName = localStorage.getItem("name");
heading.textContent = "hello "+ storedName;
}



















