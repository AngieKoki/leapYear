
function isLeapYear(year) {
    var year= document.getElementById('year').value;
   
    document.getElementById('answer').innerHTML=(year % 100 === 0) ? (year % 400 === 0) 
    : (year % 4 === 0); 
}
