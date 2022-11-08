function displayTime() {
    let dateTime = new Date();

    let hrs = ( dateTime.getHours() < 10)? "0" + dateTime.getHours(): dateTime.getHours();
    let min = (dateTime.getMinutes() < 10)? "0" + dateTime.getMinutes(): dateTime.getMinutes();
    let sec = (dateTime.getSeconds() < 10)? "0" + dateTime.getSeconds(): dateTime.getSeconds();
    
    let session = document.getElementById('time');
    
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;

    if(hrs>=12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }
    
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let month = ["January","February","March","April","May","June","July","August","September","October","Novembar","December"];
    let day = dateTime.getDate() ;

    var currentDate = days[dateTime.getDay()] + ", " + month[dateTime.getMonth()] + " " + day;

    document.getElementsByClassName("date")[0].innerHTML = currentDate;
}
setInterval(displayTime,1000);