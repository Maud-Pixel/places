
//______________clock ________________________//

var hour = document.querySelectorAll(".hours");
var minute = document.querySelectorAll(".minutes");

function get_clock()
{
    var time = new Date();
    var time_hour = time.getHours();
    var time_minute = time.getMinutes();
    hour.forEach(item => 
    {
        if (time_hour < 10)
        {item.innerText = "0"+time_hour+":";}
        else 
        { item.innerText = time_hour +":";}
    })
    minute.forEach(item=>
        {
            if (time_minute < 10)
            {
            item.innerText = "0"+time_minute;
            }
            else 
            {item.innerText = time_minute;}
        })
        
}


setInterval(get_clock, 1000);

//_____________carrousel________________
