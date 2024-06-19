var count=0;
var time=false;
var sec=0;
var min=0;
var hour=0;
function start(){
time=true;
stopwatch();
}
function stop(){
    time=false;
}
function reset(){
    time=false;
    count=0;
    sec=0;
    min=0;
    hour=0;
    document.getElementById("hours").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";

}
function stopwatch(){
if(time==true){
    count=count+1;
    // count++;
    if(count==100){
        sec=sec+1;
        count=0;
    }
        if(sec==60){
        min=min+1;
        sec=0;
        }
    
    if(min==60){
        hour=hour+1;
        min=0;
        sec=0;
        count=0;
    }
    var hstring=hour;
    var minstring=min;
    var secstring=sec;
    var millistring=count;
    if(sec<10){
        secstring="0"+secstring;
    }
    if(min<10){
        minstring="0"+minstring;
    }
    if(hour<10){
        hstring="0"+hstring;
    }
    document.getElementById("hours").innerHTML=hstring;
    document.getElementById("min").innerHTML=minstring;
    document.getElementById("sec").innerHTML=secstring;
    document.getElementById("count").innerHTML=count;
    myInterval=setTimeout("stopwatch()",10);
}
}
// stopwatch();