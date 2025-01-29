// Declaring Day to countDown
let end = new Date('02/07/2025 00:00 Am');

// declaring variables for counter
let sec = 1000, 
min = sec * 60, 
hour = min * 60, 
day = hour * 24,
timer;

function remainder(){
    let start = new Date();
    
    let difference = end - start;

    if (difference <= 0){
        clearInterval(timer);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00"
        return;
     }
     
     let days = (difference / day);
        let hours = ((difference % day)/ hour);
        let minutes = ((difference % hour) / min);
        let seconds = ((difference % min) / sec);

        //   Days Output
        if (days < 10){
            document.getElementById("days").innerHTML = "0" + Math.floor(days);
        }else{
            document.getElementById("days").innerHTML = Math.floor(days);
        }
        //  Hours Output
        if (hours < 10) {
            document.getElementById("hours").innerHTML = "0" + Math.floor(hours);
        }else{
            document.getElementById("hours").innerHTML = Math.floor(hours);
        }
        // Minutes Output
         if(minutes < 10) {
            document.getElementById("minutes").innerHTML = "0" + Math.floor(minutes);
         }else{
            document.getElementById("minutes").innerHTML = Math.floor(minutes);
         }
        // Seconds Output
        if(seconds < 10) {
            document.getElementById("seconds").innerHTML = "0" + Math.floor(seconds);
         }else{
            document.getElementById("seconds").innerHTML = Math.floor(seconds);
         }
        }    

timer = setInterval(remainder, 1000);