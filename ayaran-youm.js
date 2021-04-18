var aya_ar = document.querySelector('.ayaran') ,
aya_en = document.querySelector('.ayaranen'); 

setInterval(()=>{
num = Math.floor(Math.random()*6236);
fetch(`https://salamquran.com/en/api/v6/aya?index=${num}`)
.then(res=>res.json())
.then((data)=>{
aya_ar.innerHTML = data["result"]["text"];
aya_en.innerHTML = data["result"]["translate"]["text"];
})}
,9000);


