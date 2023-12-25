var icon = document.getElementById("Dark_Mood_icon");

icon.onclick = function(){
    document.body.classList.toggle("dark_Mode");
    if(document.body.classList.contains("dark_Mode")){
        icon.src = "/assesst/img/sun.png";
    }else{
        icon.src = "/assesst/img/moon.png";
    }
     
}