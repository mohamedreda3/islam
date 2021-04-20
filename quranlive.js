var contain = document.querySelector('.contain2'); 
var cotain = document.querySelector('.cotain'); 
var audio = document.querySelector('.audi'); 
var range = document.querySelector('.range'),
displaybn = document.getElementById('displaybn'),
audioupdown = document.querySelector('.audioupdown');
var sheikh = document.querySelector('.sheikh');
var arr = new Array();
var x;
var imamname;

function changing(){
  
if(document.querySelector("#switchon").classList.contains("fa-pause")){
document.querySelector("#switchon").classList.remove("fa-pause");
document.querySelector("#switchon").classList.add("fa-play");
}else{
document.querySelector("#switchon").classList.add("fa-pause");
document.querySelector("#switchon").classList.remove("fa-play");
}
}



fetch("https://api.mp3quran.net/radios/radio_arabic.json").then(res=>res.json()).then((data)=>{
for(i=0;i<data["radios"].length;i++){
arr.push(`<div class="aema">
<p class="imamname">${data["radios"][i]["name"]} &nbsp;&nbsp; <i class="fas fa fa-satellite-dish disha"></i></p>
<p class="audplay" id="${data["radios"][i]["radio_url"]}"><i class="fas fa fa-play source"></i></p>
</div><br><br><br>`)
};

contain.innerHTML=arr.join("");
audplay= document.querySelectorAll('.audplay');
for(k=0;k<audplay.length;k++){
audplay[k].addEventListener("click",function(){
audio.src = this.id+".mp3";
var isPlaying = audio.currentTime > 0 && !audio.paused && !audio.ended 
&& audio.readyState > audio.HAVE_CURRENT_DATA;
if (!isPlaying) {
audio.play();
}
document.querySelector("#switchon").classList.add("fa-pause");
if(!range.classList.contains("switch")){range.classList.add("switch");};
});};});




function audiovolume(){
//switchon.classList.toggle("fa-pause");

changing();

var isPlaying = audio.currentTime > 0 && !audio.paused && !audio.ended 
&& audio.readyState > audio.HAVE_CURRENT_DATA;
if (!isPlaying) {
audio.play();
}if(isPlaying){
audio.pause();
}
range.classList.toggle("switch");
}

function setvolume() {
audio.volume = displaybn.value / 100;    
}

function audiooff(){
//if(range.style.width=="65%" ){range.style.width="92%" || range.style.width=="80%" }else{range.style.width="65%"};
range.classList.toggle("switch");
if(displaybn.style.display=="block"){displaybn.style.display="none"}else{displaybn.style.display="block"};
}


function filter(){
var search , name , profile;
search = document.getElementById('searchzekrname').value;
profile = document.getElementsByClassName('aema');
for(var i = 0 ; i < profile.length ; i++ ){
name = profile[i].getElementsByClassName('imamname');
if(name[0].innerHTML.includes(search)){
profile[i].style.display = "flex";
}else{
profile[i].style.display = "none";
};
};
};

var tole = document.querySelector('.tog');

function togle(){
tole.classList.toggle('active');
};
