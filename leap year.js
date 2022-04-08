

function leapyear(){
    let year = document.getElementById("button").value;
    if ((year % 4 == 0) && (year % 400 !== 0 ) || (year % 400 == 0)) {
        alert(" This is a LEap  year")
    }else{
        alert("Not a leap year")
    }
}