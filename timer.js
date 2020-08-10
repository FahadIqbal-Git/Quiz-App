// timer
let currentT=new Date(new Date().setTime(0));
let time = currentT.getTime();
let secs = Math.floor((time % (100*60))/1000)
let mins = Math.floor((time % (1000*60*60))/(1000*60))
let timex = 0;
let mytime=setInterval(function() {
    if (secs < 59){
        secs++;
    }else{
        mins++;
        secs=0;
    }
    let secsD = secs < 10 ? `0${secs}` : `${secs}`
    let minsD = mins < 10 ? `0${mins}` : `${mins}`
    document.querySelector(".time").innerHTML=`${minsD} : ${secsD}`
}, 1000)