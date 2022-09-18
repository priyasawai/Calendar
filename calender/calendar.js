var dt=new Date();
function renderDate()
{
//console.log(dt);
dt.setDate(1)
var day=dt.getDay();
//console.log(day);

var endDate=new Date(
dt.getFullYear(),//return year
dt.getMonth()+1,//return month
0
).getDate();//return date
//console.log(dt.getMonth()+1);
//var a=dt.getDate();
//console.log(a);
//console.log(endDate) // return month days

var prevDate=new Date(
    dt.getFullYear(),//return year
    dt.getMonth(),//return month
    0
    ).getDate();

 var today=new Date();
 //console.log(today);   

var months=[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
//console.log(months[dt.getMonth()]);
var a=document.getElementById('date_str').innerHTML=new Date().toDateString();
console.log(a);
document.getElementById('month').innerHTML=months[dt.getMonth()];
var cells="";

for(x=day;x>0;x--)
{
    cells+="<div class='prev_date'>"+ (prevDate-x+1) +"</div>";
}
for(let i=1;i<=endDate;i++)
{
    if(i==today.getDate() && dt.getMonth()==today.getMonth())
    {
    cells+="<div class='today'>" +i+"</div>"
    }
    else{
        cells+="<div>" +i+"</div>"
    }
}
document.getElementsByClassName('days')[0].innerHTML=cells;
}
function moveDate(para)
{
  if(para=='prev')
  {
   // console.log(para)
    var d=dt.setMonth(dt.getMonth()-1);
  }
  else{
    if(para=='next')
    dt.setMonth(dt.getMonth()+1);
  }
  renderDate();
}

