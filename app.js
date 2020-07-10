var interval;
var min =0;
var sec = 0;
var msec = 0;
var minheading =document.getElementById("min")
var secheading =document.getElementById("sec")
var msecheading =document.getElementById("minsec")
// var bt = getElementById("btplay");
function timer(){
    msec++;
    msecheading.innerHTML = msec
    if (msec>=100) {
        sec++
        secheading.innerHTML = sec;
        msec = 00;
    }
    else if (sec>=60) {
        min++
        minheading.innerHTML = min;
        sec = 00;
    }
}
function start(){
    interval = setInterval(timer,10)
    document.getElementById("btplay").disabled = true;    
}   
function stop(){
    clearInterval(interval)
    document.getElementById("btplay").disabled = false;
    myFunction();   
}
function reset(){
    var min =00;
    minheading.innerHTML = min;
    var sec = 00;
    secheading.innerHTML = sec;
    var msec = 00;
    msecheading.innerHTML = msec
}
function myFunction() {
    var para = document.createElement("P");
    para.innerHTML = min+":"+sec;
    document.getElementById("myDIV").appendChild(para);
  }
