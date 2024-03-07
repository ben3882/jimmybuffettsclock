
const timezones = [
  // UTC-12:00
  {
    offset: -12,
    cities: ['Baker Island', 'Howland Island']
  },
  // UTC-11:00
  {
    offset: -11,
    cities: ['Pago Pago', 'Midway Atoll']
  },
  // UTC-10:00
  {
    offset: -10,
    cities: ['Honolulu', 'Anchorage']
  },
  // UTC-9:00
  {
    offset: -9,
    cities: ['Juneau', 'Vancouver']
  },
  // UTC-8:00
  {
    offset: -8,
    cities: ['Los Angeles', 'Seattle']
  },
  // UTC-7:00
  {
    offset: -7,
    cities: ['Denver', 'Phoenix']
  },
  // UTC-6:00
  {
    offset: -6,
    cities: ['Chicago', 'Mexico City']
  },
  // UTC-5:00
  {
    offset: -5,
    cities: ['New York', 'Toronto']
  },
  // UTC-4:00
  {
    offset: -4,
    cities: ['Santiago', 'Sao Paulo']
  },
  // UTC-3:00
  {
    offset: -3,
    cities: ['Buenos Aires', 'Rio de Janeiro']
  },
  // UTC-2:00
  {
    offset: -2,
    cities: ['Fernando de Noronha', 'South Georgia']
  },
  // UTC-1:00
  {
    offset: -1,
    cities: ['Cape Verde', 'Azores']
  },
  // UTC
  {
    offset: 0,
    cities: ['London', 'Lisbon']
  },
  // UTC+1:00
  {
    offset: 1,
    cities: ['Berlin', 'Paris']
  },
  // UTC+2:00
  {
    offset: 2,
    cities: ['Athens', 'Istanbul']
  },
  // UTC+3:00
  {
    offset: 3,
    cities: ['Moscow', 'Baghdad']
  },
  // UTC+4:00
  {
    offset: 4,
    cities: ['Dubai', 'Baku']
  },
  // UTC+5:00
  {
    offset: 5,
    cities: ['Karachi', 'Tashkent']
  },
  // UTC+6:00
  {
    offset: 6,
    cities: ['Dhaka', 'Almaty']
  },
  // UTC+7:00
  {
    offset: 7,
    cities: ['Bangkok', 'Jakarta']
  },
  // UTC+8:00
  {
    offset: 8,
    cities: ['Beijing', 'Singapore']
  },
  // UTC+9:00
  {
    offset: 9,
    cities: ['Tokyo', 'Seoul']
  },
  // UTC+10:00
  {
    offset: 10,
    cities: ['Sydney', 'Guam']
  },
  // UTC+11:00
  {
    offset: 11,
    cities: ['New Caledonia', 'Norfolk Island']
  },
  // UTC+12:00
  {
    offset: 12,
    cities: ['Auckland', 'Fiji']
  },
];

//console.log(timezones);

//update the time every second
setInterval(myTimer, 1000);

//get and display the time in the p element with id "time"
function myTimer(){
    let now = new Date();
    let timezone = fiveoclock(now);
    //console.log(timezone);
    let m = addZero(now.getMinutes());
    let s = addZero(now.getSeconds());

    document.querySelector("#time").innerText="5:" + m + ":" + s;
    document.querySelector("#fiveoclock").innerText = "It's 5 o'clock in " + timezone;
    

}
//function to add a zero to the minutes or seconds for less than 10
function addZero(i) {
  if (i < 10) {i = "0" + i}
  return i;
}

//where is it 5:00?
function fiveoclock(now){
  let gmt = now.getUTCHours();
  //console.log(gmt);
  let zone;
  gmt < 5 ? zone = 17 - gmt -12 : zone = 17 - gmt;
   
  
  for (let timezone of timezones){
    if (timezone["offset"] == zone){
      return timezone["cities"];
    }
  }
}

