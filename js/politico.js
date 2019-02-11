 /* Date to the election */
 var countDate = new Date("June 26, 2022 00:00:00").getTime();
    
 /*update count down time function */
 var countFunction = setInterval(function() {
 /*Get todays date and time*/
 var time_now = new Date().getTime();
     /*get the time period between now and the election date*/
 var time_period = countDate - time_now;

 /*Calculates days, hrs, mins, and secs*/
 var days = Math.floor(time_period / (1000 * 60 * 60 * 24));
 var hrs = Math.floor((time_period % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 var mins = Math.floor((time_period % (1000 * 60 * 60)) / (1000 * 60 ));
 var secs = Math.floor((time_period % (1000 * 60)) / 1000);

 //displays the count down result in the html element id="count"*/
 document.getElementById("count").innerHTML = days + " Days " + hrs + " Hrs " + mins + " Mins " + secs + " Secs " ;

 /* When election day reaches, show this output */
 if(time_period < 0){
     clearInterval(countFunction);
     document.getElementById("count").innerHTML = "Election on Process";

 }
 }, 1000);

 

 
