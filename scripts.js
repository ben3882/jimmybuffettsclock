
const timezones = [
  // UTC-12:00
  {
    offset: -12,
    cities: ['Baker Island', 'Howland Island'],
    observesDST: false
  },
  // UTC-11:00
  {
    offset: -11,
    cities: ['Pago Pago', 'Midway Atoll'],
    observesDST: false
  },
  // UTC-10:00
  {
    offset: -10,
    cities: ['Honolulu', 'Anchorage'],
    observesDST: true
  },
  // UTC-9:00
  {
    offset: -9,
    cities: ['Juneau', 'Vancouver'],
    observesDST: true
  },
  // UTC-8:00
  {
    offset: -8,
    cities: ['Los Angeles', 'Seattle'],
    observesDST: true
  },
  // UTC-7:00
  {
    offset: -7,
    cities: ['Denver', 'Phoenix'],
    observesDST: true
  },
  // UTC-6:00
  {
    offset: -6,
    cities: ['Chicago', 'Mexico City'],
    observesDST: true
  },
  // UTC-5:00
  {
    offset: -5,
    cities: ['New York', 'Toronto'],
    observesDST: true
  },
  // UTC-4:00
  {
    offset: -4,
    cities: ['Santiago', 'Sao Paulo'],
    observesDST: true
  },
  // UTC-3:00
  {
    offset: -3,
    cities: ['Buenos Aires', 'Rio de Janeiro'],
    observesDST: true
  },
  // UTC-2:00
  {
    offset: -2,
    cities: ['Fernando de Noronha', 'South Georgia'],
    observesDST: false
  },
  // UTC-1:00
  {
    offset: -1,
    cities: ['Cape Verde', 'Azores'],
    observesDST: true
  },
  // UTC
  {
    offset: 0,
    cities: ['London', 'Lisbon'],
    observesDST: true
  },
  // UTC+1:00
  {
    offset: 1,
    cities: ['Berlin', 'Paris'],
    observesDST: true
  },
  // UTC+2:00
  {
    offset: 2,
    cities: ['Athens', 'Istanbul'],
    observesDST: true
  },
  // UTC+3:00
  {
    offset: 3,
    cities: ['Moscow', 'Baghdad'],
    observesDST: true
  },
  // UTC+4:00
  {
    offset: 4,
    cities: ['Dubai', 'Baku'],
    observesDST: false
  },
  // UTC+5:00
  {
    offset: 5,
    cities: ['Karachi', 'Tashkent'],
    observesDST: false
  },
  // UTC+6:00
  {
    offset: 6,
    cities: ['Dhaka', 'Almaty'],
    observesDST: false
  },
  // UTC+7:00
  {
    offset: 7,
    cities: ['Bangkok', 'Jakarta'],
    observesDST: false
  },
  // UTC+8:00
  {
    offset: 8,
    cities: ['Beijing', 'Singapore'],
    observesDST: false
  },
  // UTC+9:00
  {
    offset: 9,
    cities: ['Tokyo', 'Seoul'],
    observesDST: false
  },
  // UTC+10:00
  {
    offset: 10,
    cities: ['Sydney', 'Guam'],
    observesDST: false
  },
  // UTC+11:00
  {
    offset: 11,
    cities: ['New Caledonia', 'Norfolk Island'],
    observesDST: false
  },
  // UTC+12:00
  {
    offset: 12,
    cities: ['Auckland', 'Fiji'],
    observesDST: false
  },
];



//boolean variable for the local time button
let showLocalTime = false;

//show local time
let button = document.querySelector("#localtime");

button.addEventListener("pointerdown", function(e){
  e.preventDefault();
  showLocalTime = true;
})

// button.addEventListener("pointerup", function(e){
//   e.preventDefault();
//   showLocalTime = false;
// })

//update the time every second
setInterval(myTimer, 1000);

//get and display the time in the p element with id "time"
function myTimer(){
    let now = new Date();
    
    let timezone = fiveoclock(now);
    //console.log(timezone);
    let h;
    if(showLocalTime == true){
        h = now.getHours() < 13 && now.getHours() > 0 ? now.getHours(): Math.abs(now.getHours() - 12);
        setTimeout(()=>showLocalTime = false, 3000);
    } else {
        h = now.getHours(now.setHours(5));
    }
    
    let m = addZero(now.getMinutes());
    let s = addZero(now.getSeconds());

    document.querySelector("#time").innerText=h + ":" + m + ":" + s;
    document.querySelector("#fiveoclock").innerText = "It's " + now.getHours(now.setHours(5)) + ":" + m + " in " + timezone[0] + ", " + timezone[1];
    

}
//function to add a zero to the minutes or seconds for less than 10
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

//where is it 5:00?
function fiveoclock(now){
  let here = now.getHours();

  let gmt = now.getUTCHours();
  // console.log(gmt);
  let zone;
  gmt < 5 ? zone = 17 - gmt -24 : zone = 17 - gmt;
   
  
  for (let timezone of timezones){
    if (timezone["offset"] == zone){
      return timezone["cities"];
    }
  }
}

