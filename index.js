const getCurrentTimeDate = () => {
        let currentTimeDate = new Date();

        var weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";

        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        var hours   =  currentTimeDate.getHours();

        var minutes =  currentTimeDate.getMinutes();
        minutes = minutes < 10 ? '0'+minutes : minutes;

         var AMPM = hours >= 12 ? 'PM' : 'AM';

        if(hours === 12){
            hours=12;

        }else{

            hours = hours%12;

        }

        var currentTime = `${hours}:${minutes}  ${AMPM}`;
        var currentDay = weekday[currentTimeDate.getDay()];

        var currentDate  = currentTimeDate.getDate();
        var currentMonth = month[currentTimeDate.getMonth()];
        var CurrentYear = currentTimeDate.getFullYear();

        var fullDate = `${currentDate} ${currentMonth} ${CurrentYear}`;


        document.getElementById("time").innerHTML = currentTime;
        document.getElementById("day").innerHTML = currentDay;
        document.getElementById("date").innerHTML = fullDate;

        setTimeout(getCurrentTimeDate, 500);

    }
    getCurrentTimeDate();

var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12)
  greet = 'Good Morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening';

document.getElementById('greeting').innerHTML ='<b>' + greet + '</b>';