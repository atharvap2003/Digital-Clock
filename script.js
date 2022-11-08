function displayTime() {
    let dateTime = new Date();
    
    
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    datenum = dateTime.getDate();
    month = dateTime.getUTCMonth();
    year = dateTime.getFullYear();
    let session = document.getElementById('time');
    
    const cars = ["Jan", "Feb", "March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    if(hrs>=12){
        hrs = hrs - 12;
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM';
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
    document.getElementById('day').innerHTML = datenum; 
    document.getElementById('month').innerHTML = month;
    document.getElementById('year').innerHTML = year;
}
setInterval(displayTime,10);