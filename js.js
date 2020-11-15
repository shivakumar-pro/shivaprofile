var circle = document.getElementById("circle");
var upbtn = document.getElementById("upbtn");
var downbtn = document.getElementById("downbtn");

var rotateValue = circle.style.transform;
var rotateSum;

upbtn.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;

}
downbtn.onclick = function(){
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
    
}
function myFunction() {
    document.getElementById("myDIV").innerHTML = "<h1>7829531238</h1>";
    // var x = document.getElementById("myDIV");
    
    // x.style.display = "myDIV";
    
  }