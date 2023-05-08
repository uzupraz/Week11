document.getElementById("parent").innerHTML=("sth else");
document.getElementById("parent").style.cssText=("background-color:red; color:white; text-align:center;");
document.getElementsByClassName("exercise")[0].innerHTML=("I am index 0");
document.getElementsByClassName("exercise")[1].innerHTML=("I am index 1");
document.getElementsByTagName("h1")[0].innerHTML=("changed");
document.querySelector("h1").style.cssText=("background-color:aqua; color:blue;");
document.querySelector("#ram").style.cssText=("background-color:grey; color:red;");
document.querySelector(".mili").style.cssText=("background-color:teal; color:white;");
document.querySelectorAll("h2")[0].style.cssText=("background-color:black; color:white;");
const change=document.querySelectorAll("h2");
for(i=0;i<=change.length;i++){
    change[i].innerHTML=("I am not h2");
}
function myFunction(){
    const element=document.body;
    element.classList.toggle("dark-mode");
}
