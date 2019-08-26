"use strict";

var countdownDate = new Date("September 29, 2019 16:00:00").getTime();

var x = setInterval(function()
{
    var now = new Date().getTime();
    var distance = countdownDate - now;
    var oneDay = 1000 * 60 * 60 * 24;
    
    var days = Math.floor(distance / oneDay);
    var hours = Math.floor((distance % (oneDay)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector("#demo").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";

    if (distance < 0)
    {
        clearInterval(x);
        document.querySelector("#demo").innerHTML = "Congratulations, you're married!";
    }
}, 1000);