/****************************Mawaqeet Salat********************************/
var hist = new Date();
var mwaket = document.querySelector('.appointment')
console.log(hist);
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var date = hist.getDate() < 10 ? `0${hist.getDate()} ${months[hist.getMonth()]} ${hist.getFullYear()}` : `${hist.getDate()} ${months[hist.getMonth()]} ${hist.getFullYear()}`;
console.log(date.toString());
var t = 0;
var select = document.querySelector('.con');
var selection = document.querySelector('.city');


/*fetch(`https://api.pray.zone/v2/times/day.json?city=tanta&date=${hist.getFullYear()}-${(hist.getMonth()+1)}-${hist.getDate()}`).then(res=>res.json()).then((data)=>{*/

fetch(`http://api.aladhan.com/v1/hijriCalendarByCity?city=Tanta&country=Egypt`).then(res=>res.json()).then((data)=>{
console.log(data["data"][t]["timings"]);
var long = Object.keys(data["data"][t]["timings"]).length;
var awqten = Object.keys(data["data"][t]["timings"]);
var awqtapp = Object.values(data["data"][t]["timings"]);
var awqat = ["الفجر","الشروق","الظهر","العصر","الغروب","المغرب","العشاء","الإمساك","منتصف الليل"]
var mwaqeet = new Array();
for(z = 0 ; z< long ; z++){
mwaqeet.push(`<span class="slatwaqt"><span class="waqten">${awqten[z]}</span><span class="waqtapp">${awqtapp[z]}</span><span class="waqtar">${awqat[z]}</span></span>`)
}
})
    /*mwaket.innerHTML = mwaqeet.join('');
    })console.log(data["results"]["datetime"]["0"]["times"]);
    var long = Object.keys(data["results"]["datetime"]["0"]["times"]).length;
    var awqten = Object.keys(data["results"]["datetime"]["0"]["times"]);
    var awqtapp = Object.values(data["results"]["datetime"]["0"]["times"]);
    var awqat = ["الفجر","الشروق","الظهر","العصر","الغروب","المغرب","العشاء","الإمساك","منتصف الليل"]
    var mwaqeet = new Array();
    for(z = 0 ; z< long ; z++){
    mwaqeet.push(`<span class="slatwaqt"><span class="waqten">${awqten[z]}</span><span class="waqtapp">${awqtapp[z]}</span><span class="waqtar">${awqat[z]}</span></span>`)
    }
    mwaket.innerHTML = mwaqeet.join('');
   })*/



fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json').then(res=>res.json()).then((data)=>{
console.log(data)
var arr = new Array();
var array = new Array();
arr.push(Object.keys(data));
console.log(arr);
for (var i = 0; i < arr["0"].length; i++) {
array.push(`<option class="options">${arr["0"][i]}</option>`)
}
select.innerHTML = array.join("");
select.value = "Egypt";
var options = document.querySelectorAll('.options')
console.log(options);
var c = 0;
select.addEventListener('change',function(){
for(k = 0 ; k < arr["0"].length ;k++){
if(this.value == arr["0"][k]){
c=k;
}
}
var array2 = new Array();
var array3 = new Array();
array2.push(Object.values(data[arr["0"][c]]))
for (var n = 0; n < array2["0"].length; n++) {
array3.push(`<option class="option">${array2["0"][n]}</option>`)
}
selection.innerHTML = array3.join("");
var x = 0;
selection.addEventListener('change',function(){
for(f = 0 ; f < arr["0"].length ;f++){
if(this.value == array2["0"][f]){
x=f;
}
}
fetch(`http://api.aladhan.com/v1/hijriCalendarByCity?city=${array2["0"][x]}&country=${arr["0"][c]}`).then(res=>res.json()).then((data)=>{
for (var m = 0; m < data["data"].length; m++) {
if(data["data"][m]["date"]["readable"] == date){
t=m;
}
}
console.log(data["data"][t]["timings"]);
console.log()
var long = Object.keys(data["data"][t]["timings"]).length;
var awqten = Object.keys(data["data"][t]["timings"]);
var awqtapp = Object.values(data["data"][t]["timings"]);
var awqat = ["الفجر","الشروق","الظهر","العصر","الغروب","المغرب","العشاء","الإمساك","منتصف الليل"]
var mwaqeet = new Array();
for(z = 0 ; z< long ; z++){
mwaqeet.push(`<span class="slatwaqt"><span class="waqten">${awqten[z]}</span><span class="waqtapp">${awqtapp[z]}</span><span class="waqtar">${awqat[z]}</span></span>`)
}
mwaket.innerHTML = mwaqeet.join('');
})
})
})
})
var h = document.querySelectorAll(".slatwaqt");
/****************************Mawaqeet Salat********************************/