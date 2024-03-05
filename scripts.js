
//update the time every second
setInterval(myTimer, 1000);

//get and display the time in the p element with id "time"
function myTimer(){
    let now = new Date();
    let diff = now.getTimezoneOffset();
    //console.log(diff);
    let m = addZero(now.getMinutes());
    let s = addZero(now.getSeconds());

    document.querySelector("#time").innerText="5:" + m + ":" + s;
    
    

}
//function to add a zero to the minutes or seconds for less than 10
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}


