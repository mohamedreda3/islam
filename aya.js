var ran = document.querySelector('.ran'), 
aya_ar = document.querySelector('.ayaran') ,
aya_en = document.querySelector('.ayaranen'),
close = document.querySelector('.x'); 

close.addEventListener('click',()=>{ran.style.display == "none" ? ran.style.display = "flex" : ran.style.display = "none";})



var navigation = document.querySelector('.nav');
var list1 = document.querySelector('.listf');
var list2 = document.querySelector('.lists');
var list3 = document.querySelector('.listt');

window.addEventListener('scroll',function(){
if(window.pageYOffset > 1){
navigation.classList.add('navigation');
}else{
navigation.classList.remove('navigation');
}
});

var taqweemhijri = document.querySelector('.takweem-hegry');

setInterval(()=>{
var higri = new Intl.DateTimeFormat('ar-Fr-u-ca-islamic', {day: 'numeric', month: 'long',weekday: 'long',year : 'numeric',hour : 'numeric',minute:'numeric',second:'numeric'}).format(Date.now())
taqweemhijri.innerHTML=higri
},1000);

var toggle = document.querySelector('.toggle');
var menu = document.querySelector('.menu');
var pages = document.querySelectorAll('.pages');


menu.addEventListener('click',()=>{
toggle.classList.toggle('active');
list1.classList.toggle('list1');
list2.classList.toggle('list2');
list3.classList.toggle('list3');
});

for(i=0;i<pages.length;i++){
pages[i].addEventListener('click',()=>{
toggle.classList.remove('active');
list1.classList.remove('list1');
list2.classList.remove('list2');
list3.classList.remove('list3');
});
}


var h = document.querySelectorAll(".slatwaqt");
/****************************Mawaqeet Salat********************************/
var elsalahpoint = document.querySelector('.elsalah-point'),
salawatpoint = document.querySelector('.salawat-point'),
fajr = document.querySelector('.fajr'),
duhur = document.querySelector('.duhur'),
asr = document.querySelector('.asr'),
maghrib = document.querySelector('.maghrib'),
isha = document.querySelector('.isha'),
point;

function innerpoint(exp,imgsrc){
elsalahpoint.style.backgroundImage = `url(${imgsrc})`;
salawatpoint.innerHTML = exp;
}


fajr.addEventListener('click',()=>{
elsalahpoint.classList.add('explain3');
salawatpoint.classList.add('explain4');
point=" <span class='expl'>???????? ?????????? ???? ???????? ?????????? ????: ?????? ?????????????? ?????????? ?????????????????? ???????? ?????? ???? ????????<br>???????? ?????????? ???????????? ?????????????????? ???????????????? ???? ?????????? ???? ?????? ???????? ?????????? ?????????? ?????????????? ???????? ???????? ???????? ?????????? ???????? ???????????? ?????? ?????????? ?????????????? ?????????????????? ?????? ???????? ?????????? ???????? ???????? ?????? ???????? ???????????? ???????? ???? ?????????? ???????? ?????????? ???????? ???? ?????????????? ?????????????? ???????????? ?????? ???????? ?????????????? ?????? ?????? ???????????? ?????? ???????? ???????????? ???????? ???????????? ???????????????? ??????????????.</span><span class='source'><a href='https://mawdoo3.com/%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA_%D8%B9%D9%86_%D8%B5%D9%84%D8%A7%D8%A9_%D8%A7%D9%84%D9%81%D8%AC%D8%B1'>???????? ??????????</a></span>";
var imgsrc= '48.png';
innerpoint(point,imgsrc);
});

duhur.addEventListener('click',()=>{
salawatpoint.classList.add('explain4');
elsalahpoint.classList.add('explain3');
point = "<span class='expl'>???????? ?????????? ???? ???????? ?????????????? ?????????? ???????????????? ???? ?????? ??????????<br>?????????????? ???????? ???????? ?????????? ???? ?????????????? ?????????? ?????????? ?????? ?????????????? ???????? ???????????? ???????? ?????? ???????????? ?????? ?????????????? ???? ?????????????? ?????? ???????? ???????????? ???????? ???????????? ???????? ?????????????? ???????????? ??????.</span><span class='source'><a href='https://www.elbalad.news/4365108'>???????? ?????? ??????????</a></span>";
var imgsrc= '48.png';
innerpoint(point,imgsrc);
});

asr.addEventListener('click',()=>{
salawatpoint.classList.add('explain4');
elsalahpoint.classList.add('explain3');
point="<span class='expl'>???????? ?????????? ?????????? ???????? ?????? ???????????? ?????????????? ?????? ???????? ?????????????? ?????????? ?????? ???????? ???? ????????: ?????????????????? ?????????? ???????????????????????? ?????????????????????? ???????????????????? [????????????:238] ?????????? ???????????? ???????????? ?????????????? ?????? ???? ???????? ?????? ?????????? ???? ?????????? ?????? ?????????? ?????? ?????????? ???????????? ???????? ???? ?????????? ?????? ???????? ?????????????? ?????????? ???????????????? ???????????????????? ???????? ???????? ???????? ?????? ?????????? ?????? ???? ?????????????? ???????????? ?????????? ?????????? ??? ?????????? ?????????? ???: ???? ?????? ???????? ?????????? ?????? ?????????? ???????? ???: ???? ?????????? ???????? ?????????? ???????????? ?????? ???????? ?????????? ????????: ?????? ???????? ???????????? ???????? ?????? ?????? ???????? ???????????? ?????????????? ???? ???? ?????? ???????? ?????????????? ???????? ???????? ???????????? ???????? ???? ?????? ?????? ?????????????? ?????? ?????????? ?????????? ??? ???????? ???????? ?????????? ?????? ?????? ???????? ???????????? ???????? ???????????? ?????????? ???? ?????? ???????? ?????????? ???? ???????????? ???? ???????????? ???? ?????????? ???????????? ?????? ???????? ???????? ???????? ?????????? ???????? ???? ?????????? ?????? ?????????????? ?????????? ?????????? ?????? ?????? ?????????? ???????????? ?????? ?????????????? ?????????? ???? ???????????????? ?????? ?????????????? ?????????? ???????????? ???? ?????????????? ???? ?????????? ???????????????? ???????? ???????? ?????????? ?????? ???????? ???????? ???? ?????? ?????????????? ???????? ???????????? ?????? ?????? ?????????? ?????? ???????? ?????????? ?????????????? ?????????? ???? ???????? ??????????????.</span><span class='source'>???????????? ???????????? ???????????? ?????????? ?????? ???????????? ???? ?????? -???????? ????????-</span>";
var imgsrc= '48.png';
innerpoint(point,imgsrc);
});

maghrib.addEventListener('click',()=>{
salawatpoint.classList.add('explain4');
elsalahpoint.classList.add('explain3');
point="<span class='expl'>???????? ???????????? ???? ?????? ?????????????? ?????????? ???????????????? ?????????? ???????????? ?????? ???????????????? ?????????????????? ?????? ?????? ???????? ???????????? ?????????????? ?????? ???????????? ?????????????? ???? ?????????? ??????????????. ?????? ???????? ?????????? ?????????? ???? ???????? ??????????.?????????? ???????? ?????? ???????????? ?????????? ?????????? ???????? ?????????? ???????????? ??????????????.</span><span class='source'><a href='https://ar.wikipedia.org/wiki/%D8%B5%D9%84%D8%A7%D8%A9_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8'>???????? ??????????????????</a></span>";
var imgsrc= '48.png';
innerpoint(point,imgsrc);
});

isha.addEventListener('click',()=>{
salawatpoint.classList.add('explain4');
elsalahpoint.classList.add('explain3');
point="<span class='expl'>???? ?????? ?????????? ?? ?????? ???????? ?????? ?? ???? ?????????? ?????? ???????? ???????? ???????? ??????: ?????? ???????? ???????? ?????? ?????????????????? ???? ?????????? ???????????????? ?????? ???????????? ???? ?????????? ?????????????? ?????? ??????????. ?????? ?????????? ??????????????.<br>?????? ???????????? ?????? ?????? ???? ?????? ???????????? ?????? ?????? ????????????: ?????? ?????? ?????? ???? ???????????? ???????? ?????????? ?????? ?????????????????? ???????? ???????? ??????????: ?????? ?????????? ???????????? ?????? ?????? ?????????? ?? ?????????? ???????? ???????????? ???????????? ???????? ?????????? ???? ???????????? ???????? ???????????? ?????? ?????????????? ?????? ???????????? ?????? ???????????? ???????????????? ???????????? ?????? ?????? ???????????? ????????: ???????? ?????? ???????????????? ???????????? ?????? ???????? ???????????? ???? ?????????? ?????????????? ???????????? ?????? ??????????????????. ??????????.<br>?????? ???????? ???????? ???? ?????????? ???? ???????? ?? ?????? ???????? ?????? ?? ???? ???????? ???????? ?????? ???????? ???????? ????????: ???? ?????? ???????????? ???? ?????????? ???????????? ?????? ?????? ???????????? ?????? ?????? ?????????? ???? ?????????? ???????????? ?????? ?????????? ??????.<br>?????????? ?????????????? ????????: ???? ?????? ???????????? ???? ?????????? ?????? ???? ???????? ?????? ?????????? ?????? ?????? ???????????? ???????????? ???? ?????????? ?????? ???? ?????????? ????????.<br>?????????? ?????? ???????? ????????: ???? ?????? ???????????? ???? ?????????? ?????? ?????????? ?????? ?????????? ?????? ?????? ???????????? ???????????? ???? ?????????? ?????? ?????????? ????????. ?????????????? ???? ?????????? ??????????.</span><span class='source'><br><a href='https://www.islamweb.net/ar/fatwa/154029/%D9%81%D8%B6%D9%84-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B8%D8%A8%D8%A9-%D8%B9%D9%84%D9%89-%D8%B5%D9%84%D8%A7%D8%AA%D9%8A-%D8%A7%D9%84%D8%B9%D8%B4%D8%A7%D8%A1-%D9%88%D8%A7%D9%84%D9%81%D8%AC%D8%B1-%D9%81%D9%8A-%D8%AC%D9%85%D8%A7%D8%B9%D8%A9'>???????? ?????????? ??????</a></span>";   
var imgsrc= '48.png';
innerpoint(point,imgsrc);
});

var arkanexplaination = document.querySelector('.arkan-explaination'),
explaination = document.querySelector('.explaination'),
shehada = document.querySelector('.shehada'),
salat = document.querySelector('.salat'),
zakat = document.querySelector('.zakat'),
seyam = document.querySelector('.seyam'),
haj = document.querySelector('.haj'),
explain;

function innerexplain(exp,imgsrc){
arkanexplaination.style.backgroundImage = `url(${imgsrc})`;
explaination.innerHTML = exp;
}


shehada.addEventListener('click',()=>{
arkanexplaination.classList.add('explain');
explaination.classList.add('explain2');
explain=" <span class='expl'>??????????????????: ?????????? ???? ???? ?????? ?????? ?????????? ?????? ???????????? ???????? ?????????? ?????? ?????????? ?????????????? ?????? ???????? ???????????? ?????? ?????????????? ?????? ?????????? ?????????? ?????? ?????????? ?????? ???????? ???????? ???????? ???????? ???? ?????? ?????? ???????? ?????? ?????? ???????? ?????? ?????????? ???? ???????? ?????? ???? ???????????? ???????? ?????????? ???? ???? ?????? ?????? ?????????? ?????? ???????????? ???????? ???????? ?????????? ???? ???? ?????? ?????? ???????? ?????? ?????????? ?????????????? ???????????? ?????????? ???????? ???? ?????????? ?????? ?????? ???????? ???? ?????? ?????? ?????? ?????????? ?????????? ?????????????? ????????????. ?????????????? ?????? ???? ?????????? ???? ?????? ???????? ???????? <br>?????? ???????? ??????????: ???? ???????????? ???????? ????????  ?????? ?????????????? ?????????????? ???????????????? ???????????? ?????? ???????? ???? ?????? ???????? ???????????? ?????????????? ?????? ???????? ???????? ???????? ???????? ???????? ???? ?????? ?????? ???????? ?????????? ???? ???????? ???????????? ?????? ?????? ???????? ??????????: {???? ???? ???????? ?????????? ?????? ???????? ???????? ?????????? ???????????? ???????? ???? ?????? ???????????????? ???????????? ???? ?????? ?????? ???? ???????? ?????????? ???????????? ?????????? ???????????? ?????????? ?????????? ???????? ???????? ?????????? ?????????????? ?????????????? ?????????? ????????????}?? ???????? ??????????: {?????????? ???????? ?????? ?????????????? ?????? ???????? ?????????? ???????????????? ????????????}?? ???????????? ?????? ?????????????? ???? ???????????? ???????? ???????? ?????? ???????? ???????? ???????? ???????? ?????????? ?????? ?????????? ???????? ???????? ???????? ?????? ?????????? ???? ?????? ?????? ?????????? ?????? ???? ???????? ???????? ?????? ?????? ???????? ???????????? ?????? ?????????????? ?????????? ???? ???? ?????????? ???? ?????????? ???????? ?????? ???????? ???????? ???????? ?????????? ???? ???????????????? ???????????? ???????????? ???? ???????? ???? ???????????????? ???? ???? ?????? ???????? ???????? ???????? ?????? ???? ?????????? ?????????? ???? ?????????? ?????? ???????? ?????????? ?????? ?????????? ?????????? ???? ?????????? ???? ???????? ?????? ???? ?????? ???????? ?????? ?????? ???????? ??????????: {???? ???? ???????? ?????? ???????? ?????????? ???????? ?????? ???????? ?????????? ?????? ???????? ?????? ?????? ?????? ???? ???????? ?????? ???? ???????? ??????}. ?????? ?????? ?????????? ???????? ???? ?????? ?????? ???????? ???????? ??????????: {???? ?????? ???? ???????? ?????? ???????? ?????? ?????????? * ???? ?????? ???? ???????????? ???? ???????? ?????? ?????? ?????? ???? ???????? ??????????????}?? ???????? ????????????: {???? ???? ???????? ?????????? ?????????? ?????? ???????? ?????? ???? ?????? ???????? ?????? ?????? ???????? ?????????? ???????????????? ???? ?????????? ?????? ???????? ?????????? ???? ?????? ?????? ???????? ?????????? ???????? ????????????}?? ???????? ???????? ??????????: ???? ???? ?????? ?????? ?????????? ?????? ???????????? ???????? ????????. ??????????????????: ?????????? ???? ???? ?????? ?????? ?????????? ?????? ???????????? ???????? ?????????? ?????? ?????????? ?????????????? ?????? ???????? ???????????? ?????? ?????????????? ?????? ?????????? ?????????? ?????? ?????????? ?????? ???????? ???????? ???????? ???????? ???? ?????? ?????? ???????? ?????? ?????? ???????? ?????? ?????????? ???? ???????? ?????? ???? ???????????? ???????? ?????????? ???? ???? ?????? ?????? ?????????? ?????? ???????????? ???????? ???????? ?????????? ???? ???? ?????? ?????? ???????? ?????? ?????????? ?????????????? ???????????? ?????????? ???????? ???? ?????????? ?????? ?????? ???????? ???? ?????? ?????? ?????? ?????????? ?????????? ?????????????? ????????????. ?????????????? ?????? ???? ?????????? ???? ?????? ???????? ????????</span><span class='source'>?????????? ?????????? ?? ?????????? ?????????? ???????? ???? ???????? ???????????????? ???????????? ?????????? - ?????? ??????????????????</span>";
var imgsrc= '48.png';
innerexplain(explain,imgsrc);
});

salat.addEventListener('click',()=>{
explaination.classList.add('explain2');
arkanexplaination.classList.add('explain');
explain = "<span class='expl'>?????????? ???????????? ???? ?????????? ??????????????: ???????? ?????????????? ???????????? ???? ???????? ?????????? ?????????????? ?????? ???????????????????? ???????? ?????? ?????????? ???? ?????????? ?????? ?????????? ???????????? ?????????? ???????? ???????????????? ???????? ?????????? -?????? ???????? ???????? ????????-: ???????? ?????????? ?????????????? ???????????? ?????????????? ?????? ?????? ?????????? -?????? ???????? ???????? ???????? ?????? ????????- ???????? ???????????? ?????? ???????????? ?????? ???????????? ???????? ?????????????? ?????? ?????????????? ?????????? ?????????? ???????? ?????? ?????? ??????????????: ???????? ?????? ?????? ???????????? ?????????? ?????????????? ???? ???????????? ???????????? ????????..?? ?????? ?????? ?????????????? ???????? ?????????? ?????? ?????? ???????????????? ?????? ???????? ???????? -?????? ???????? ???????? ???????? ?????? ????????- ?????????? ?????? ???? ???????? ??????: ?????????? ?????? ???????????????? ?????????? ???????????????? ?????????? ???? ?????????? ???????????? ?????????????? ?????????????????? ???? ???????????? ???????????? ?????????? ???????????? ???????? ?????? ?????? ???????????? ???? ?????? ???????? ?????????? ???? ?????????????? ???? ???????? ???? ?????????? ???? ?????? ?????????? ???? ?????? ?????? ???????????? ?????? ?????????? ???????????? ?????? ?????????? ???? ???????????? ??????????: ?????????? ???????? ???????? ???????? ???????????? ?????? ?????????? ?????? ???????????? ???????????????? ?????????? ???????? ???? ???????????? ?????? ???????? ?????????? ???????????? ???? ???????????? ?????????? ???????????? ???? ???????????? ???????????? ???????????? ????????????.???? ????????: ???????????? ?????????? ?????????????? ???????????? ?????????? ???????????? ???????? ?????? ?????? ?????????? ???? ???????????? ?????????? ???? ?????????????? ????????????: ???????? ?????????? ???? ?????????????? ?????????????? ???? ???????? ?????????????? ?????????? ?????????? ???????????????? ??????????: ?????? ???????? ???????????? ???????????? ????????????????????? ?????????????? ?????????? ?????????????????????????? ?? ?????????????????????? ???????????????????? ?? ?????????????? ???????????? ???????????????? ?? ???????????????? ???????????????? ???????????????????? ?????????????????????? ?? ???????????????? ???????????????????? ???????????????????????????? ?? ?????????????? ?????????????????? ???????????????????? ???????????????????? ???????????? ???????????????????????? ???????????????????? ???????? ??????????????????????????? [??????????????:2-7] ?????? ?????? ???? ?????? ?????? ???????? ???????? ?????? ???? ???????? ???? ???????? ???? ???????? ???? ?????????????? ?????????? ?????????????? ???? ?????????? ?????????? ?????????? ???? ???????? ?????????????? ?????? ???????????? ?????????? ?????????? ???? ???????? ?????????????? ?????? ?????? ???? ???????? ?????????? ?????????? ???? ???????? ???????????? ?????????????? ?????? ?????? ?????????? -?????? ???????? ???????? ???????? ?????? ????????-?? ?????? ?????????? ???????????? ?????????????? ?????????? ?????????? ?????????? ?????? ?????? ?????????? ???? ???????? ???????? ???????????? ???????????? ???????? ???????? ?????? ???????????? ???????????? ???????????????? ?????????? ?????????????? ?????????? ???????? ???????? ?????????? ??????????: ?????????? ?????? ?????????????? ???????? ???????? ???? ?????????? ?????????? ????????: ???????????? ?????????? ???????? ?????????????? ?????????? ???????? ?????? ?????????? ??????????: ???????? ???????? ???? ???????????????? ?????????????? ???? ???????? ???????? ?????????? ?????? ???????????? ?????? ???????????? ??????????: ?????? ???????? ?????? ?????????? ?????? ?????????????? ?????????? ??????????: ???????? ?????? ?????????? ?????????? ???????????? ?????????? ?????????????? ?????? ?????? ???????????? ???????? ?????????? ???????? ???? ?????? ???? ?????? ???????? ???? ?????? ???????????? ???????????? ?????????? ???????????? ???? ???????? ???? ?????????? ???????????? ??????????: ?????????? ?????? ?????????????? ???????????? ???? ???????? ?????? ?????? ??????????: ???????????? ?????????? ???????? ???????????? ?????????? ???????? ?????? ?????????? ??????????: ???????? ???????? ???? ???????????????? ?????????????? ???? ???????? ?????? ???????? ?????????? ???? ???????????? ???? ?????????????? ???????? ?????????? -?????? ???????? ???????? ???????? ?????? ????????- ???????? ?????? ??????: ???????? ???????????? ???????????? ?????? ?????????? ???????? ???????????? ?????????????? ?????? ???? ???????????? ???????? ???? ???????????? ???????? ?????? ?????? ???????????? ???? ???????? ?????????? ???? ???????? ???? ???????????? ?????????? ?????? ???????????????? ?????????????? ???????? ???????????? ???????????? ???????? ?????????????? ?????????? ???????????? ?????? ?????????? ???? ?????????? ?????????????? ???????? ?????????? ?????????? ?????? ???????????? ??????????: ???? ???????? ?????? ???? ???????? ?????? ???? ???????? ?????? ?????????????? ???????????? ???????????? ???????????????? ???? ???????? ???????????? ?????????????? ???????????????? ???? ???????? ?????? ???????????? ?????????????? ?????????? ???????? ?????? ?????? ???? ???????????? ???????????? ?????? ?????????????????? ?????? ?????????????? ?????????????? ?????? ?????????? ?????? ?????????????? ????????: ???????? ?????? ?????? ???????? ???????? ???????????? ????????: ???????? ???????????? ?????????? ???? ???????????? ?????????????? ???? ?????? ?????? ???????????? ?????? ?????????????? ?????? ???????? ???????????? ???????????? ???????? ???????????? ???????? ?????? ???????? ???????????? ???????????? ???? ???????????? ???????? ???????? ???????????? ?????????? ?????? ???????? ?????????????? ???? ?????????? ???????? ?????????? ???????? ?????? ???????????????? ?????? ???????????? ???????????? ?????????? ?????? ????????: ?????????? ???? ???????????? ???????? ?????????????? ???????? ???????????? ???????? ???? ?????????? ?????? ?????? ?????????? -?????? ???????? ???????? ???????? ?????? ????????- ?????? ?????? ???????????? ??????: ?????? ???????????? ???? ???????????? ???? ???????? ?????? ???????? ???????? ???? ?????? ???????? ???? ???????? ???????? ???????? ???? ???????????? ???????? ???????? -???? ??????- ?????? ???????? ?????? ???????????? ???????? ???? ???????? ?????? ???????????????????? ???? ???????? ???? ??????????: ???????????? ?????????? ?????????? ?????????? ?????? ??????????: ???????????? ?????????? ?????????? ????????.</span><span class='source'>???????????? ???????????? ???????????? ?????????? / ???????? ???? ???????? ???? ???????????? - ???????? ????????-</span>";
var imgsrc= 'salat.png';
innerexplain(explain,imgsrc);
});

zakat.addEventListener('click',()=>{
explaination.classList.add('explain2');
arkanexplaination.classList.add('explain');
explain="<span class='expl'>???????????? ?????? ???? ?????????? ?????????????? ???????????? ?????????????? ?????????????? ???????????? ????????????????. ?????????? ???????????? ???? ?????? ???????????????? ???????????????? ?????????????? ???????????? ?????????? ???? ???????????? ????????????: ???? ?????????? ???????? ?????????????? ???? ?????? ?????????????? ?????????????????? ?????????????? ???????????????? ?????? ?????????? ???????? ?????????? ???????? ?????????????? ??????????????.?????????? ?????????? ???????? ???? ???????????????? ?????????? ?????????????? ???????? ???????????? ?????????????? ???????????? ?????????? ???? ?????????????? ?????????????? ???? ?????????????? ?????????????????? ?????????????????? ???????????? ???? ?????????? ???????????? ?????????????? ???????? ???????????? ???? ???????????????? ???????????????? ?????????????? ???????? ???????? ???? ?????????????????? ?????? ???????? ???? ?????????????? ???????????? ?????????? ???????? ?????? ???????????????? ???????????????????? ???? ???????? - ???? ???????????? - ???????? ???? ?????????????????????? ???????????????????????? ?????? ?????????? ?????????????? ?????????????????????? ?????????? ???????????????? ?????????????? ?????????????? ?????????????? ???????????????? ?????????????? ?????????????? ?????????????? ?????????? ?????????????????? ???????????? ???? ???????????? ???????? ???????? ???????? ???????????? ?????????????? ???????? ?????????? .?????? ???????????? ?????? ?????? ?????? ???????????? ?????? ???????? ???????? ???????? ???????? ???? ???????????????? ???????? ?????? ?????????????? ???????? ???????? ?????? ?????????? ?????????? ???????? ?????????? ?????????????????? ???????????? ?????????? ???????????????? ????????????????????.???????? ?????????? ???????? ???????? ?????? ???? ???????????? ( ?????? ???????? ???????????????? ?????? ?????????? ???? ?????????? ?????? ?????? ???????? - ?????? ???? ?????????? ???????? ???????? ?????????? ???? ?????????? - ???????? ?????????? ?????? ???? ?????? ?????????? ???????? ???????????? ?????????? ?????? ?????????????? ?????????? ?????? ?????????? ???????????? ???????????? ???????? ???? ???????? ?????????? ?????????? ???? ?????????????? ?????????????? ???????????????????? ?????? ?????????? ?????????? ?????????? ???????????? ) ?????????? . ?????????? ????????.</span><span class='source'><a href='https://www.islamweb.net/ar/fatwa/16101/'>???????? ?????????? ??????</a></span>";
var imgsrc= 'mus1.png';
innerexplain(explain,imgsrc);
});

seyam.addEventListener('click',()=>{
explaination.classList.add('explain2');
arkanexplaination.classList.add('explain');
explain="<span class='expl'>?????? ???????????? ?????? ???????????? ?????????????? ???????????? ?????????????? ?????? ?????????? ?????????????????? ?????? ?????????????? ?????????????????? ?????? ???????? ?????? ?????????? ?????????????? ???????????? ?????? ???????????????? ?????????? ?????? ???????????????? ?????? ???????? ?????? ???????????????? ?????????? ?????? ???????????????? ?????????? ?????? ??????????????<br>???? ???????????? ?????????? ?????????? ???????? ???????????? ???????? ?????????? ?????????? ???????????????? ???????????????? ???? ?????????????? ???????????? ???????????? ???????????? ?????????????? ???????????????? ?????????????? ?????????????? ???????????? ???????????? ???????????? ???????????? ?????????????? ?????????? ???????? ???????? ???????? ?????????? ????????</span><span class='source'>???????????? ???????????? ???????????? ?????????? / ?????? ???????????? ???? ?????? - ???????? ????????-</span>";
var imgsrc= 'mos5.png';
innerexplain(explain,imgsrc);
});

haj.addEventListener('click',()=>{
explaination.classList.add('explain2');
arkanexplaination.classList.add('explain');
explain="<span class='expl'>???????? ???????? ?????? ???????????? ?????? ?????????? ???? ?????????????? ?????? ?????????????? ?????? ???????? : ???????????????? ?????????? ???????????????? ?????????? ?????????????????? ???????? ???????????????????? ???????????????? ???????????????? ?????????? ???????????? ?????????????? ???????? ?????????????? ???????? ?????????????????????????? [???? ??????????:97]?? ?????????? ???? ?????????? ???????????? ???? ?????????? ???????????????? ?????? ???????? ???? ???????????????????? ?????? ???????????? ?????? ???? ?????????? ?????? ???? ???????????? ?????????? ?????????? ?????? ?????????? ???????? ???????????? ???????????? ?????? ?????????? ?????????? ?????????? ?????????? ???? ???????????? ???? ???????? ???????? ???????? ???????? ???? ???????? ?????? ???????? ??????[1].</span><span class='source'>???????????? ???????????? ???????????? ?????????? / ?????? ???????????? ???? ?????? - ???????? ????????-</span>";   
var imgsrc= 'haj.png';
innerexplain(explain,imgsrc);
});

var remove = document.querySelector('.delete-slider'),
del = document.querySelectorAll('.del'),
next = document.querySelector('.next'),
prev = document.querySelector('.prev'),
index = 0;

/*prev.addEventListener('click',()=>{
index < del.length-1 ? index++: index = 0; 
remove.style.marginLeft = `-${index*2*100}%`;
});

next.addEventListener('click',()=>{
index > 0  ? index--: index = del.length-1 ; 
remove.style.marginLeft = `-${index*2*100}%`
});*/

prev.addEventListener('click',()=>{

    if (index < del.length-1)  {index++; remove.style.transition = "1s all"} else {index = 0; remove.style.transition = "0.05s all" }
    
    remove.style.marginLeft = `-${index*2*100}%`;
    });
    
    next.addEventListener('click',()=>{
    if (index > 0)   {index--; remove.style.transition = "1s all"} else {index = del.length-1; remove.style.transition = "0.05s all" } ; 
    remove.style.marginLeft = `-${index*2*100}%`
    });



var apkpics = document.querySelector('.apk-pics');
var picsarr = new Array();
for( r = 90 ; r <=99 ; r++){
picsarr.push(`<div class="pic"><img src=${r}.jpg></div>`);
}
apkpics.innerHTML = picsarr.join('');

setTimeout(()=>{document.querySelector('.loading').style.display = "none";},5000)
setTimeout(()=>{document.querySelector('.shokr').style.display = "none";},20000)
document.querySelector('.shokr').addEventListener('click',()=>{
    document.querySelector('.shokr').style.display = "none";
})

/********** Scroll Reveal ***********/

window.sr = new ScrollReveal();

sr.reveal('.banner-appointment', {duration:500,origin:"top",distance:"80px"});
sr.reveal('.banner-text', {duration:600,origin:"bottom",distance:"80px"});
sr.reveal('.banner-img', {duration:700,origin:"top",distance:"80px"});
sr.reveal('.banner-takweem', {duration:700,origin:"right",distance:"100px"});
sr.reveal('.delete', {duration:800,origin:"left",distance:"1100px"});
sr.reveal('.apk-pic', {duration:1600,origin:"bottom",distance:"80px"});
// sr.reveal('.shehada', {duration:1600,origin:"top",distance:"80px"});
// sr.reveal('.salat', {duration:1600,origin:"bottom",distance:"80px"});
// sr.reveal('.zakat', {duration:1600,origin:"top",distance:"80px"});
// sr.reveal('.seyam', {duration:1600,origin:"bottom",distance:"80px"});
// sr.reveal('.haj', {duration:1600,origin:"top",distance:"80px"});
// sr.reveal('.fajr', {duration:1600,origin:"top",distance:"80px"});
// sr.reveal('.duhur', {duration:1600,origin:"bottom",distance:"80px"});
// sr.reveal('.asr', {duration:1600,origin:"top",distance:"80px"});
// sr.reveal('.maghrib', {duration:1600,origin:"bottom",distance:"80px"});
// sr.reveal('.isha', {duration:1600,origin:"top",distance:"80px"});




sr.reveal('.nav', {duration:1100});
sr.reveal('.logo', {duration:1000});
sr.reveal('.menu', {duration:1050});
sr.reveal('.flex-rw', {duration:1000});
sr.reveal('.taaref', {duration:1000});
sr.reveal('.arkan-container', {duration:1000});
sr.reveal('.arkan', {duration:1000});

sr.reveal('.elsalat', {duration:1000});
sr.reveal('.elsalah', {duration:1100});
sr.reveal('.elquran', {duration:1000});
sr.reveal('.salah', {duration:1100});
sr.reveal('.delete-slider', {duration:1100});
sr.reveal('.salah', {duration:1100});


/********** Scroll Reveal ***********/


setInterval(()=>{
num = Math.floor(Math.random()*6236);
fetch(`https://salamquran.com/en/api/v6/aya?index=${num}`)
.then(res=>res.json())
.then((data)=>{
aya_ar.innerHTML = data["result"]["text"];
// aya_en.innerHTML = data["result"]["translate"]["text"];
ran.style.display == "none" ? ran.style.display = "flex" : ran.style.display = "none";
})}
,15000);
 

fetch('https://api.aladhan.com/v1/hijriCalendarByCity?city=Abu%20Hammad&country=Egypt ').then(res=>res.json()).then((data)=>{console.log(data)})

/****************************Mawaqeet Salat********************************/
var hist = new Date();
var mwaket = document.querySelector('.appointment')
console.log(hist);
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var date = hist.getDate() < 10 ? `0${hist.getDate()} ${months[hist.getMonth()]} ${hist.getFullYear()}` : `${hist.getDate()} ${months[hist.getMonth()]} ${hist.getFullYear()}`;
console.log(date.toString());
var select = document.querySelector('.con');
var selection = document.querySelector('.city');


/*fetch(`https://api.pray.zone/v2/times/day.json?city=tanta&date=${hist.getFullYear()}-${(hist.getMonth()+1)}-${hist.getDate()}`).then(res=>res.json()).then((data)=>{*/

fetch(`https://api.aladhan.com/v1/hijriCalendarByCity?city=Tanta&country=Egypt`).then(res=>res.json()).then((data)=>{
var t =new Number();
for (var m = 0; m < data["data"].length; m++) {
if(data["data"][m]["date"]["readable"] == date){
t=m;
}
}
console.log(data["data"][t]["timings"]);
var long = Object.keys(data["data"][t]["timings"]).length;
var awqten = Object.keys(data["data"][t]["timings"]);
var awqtapp = Object.values(data["data"][t]["timings"]);
var awqat = ["??????????","????????????","??????????","??????????","????????????","????????????","????????????","??????????????","?????????? ??????????"]
var mwaqeet = new Array();
for(z = 0 ; z< long ; z++){
mwaqeet.push(`<span class="slatwaqt"><span class="waqten">${awqten[z]}</span><span class="waqtapp">${awqtapp[z]}</span><span class="waqtar">${awqat[z]}</span></span>`)
}
mwaket.innerHTML = mwaqeet.join('');
fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json').then(res=>res.json()).then((res)=>{
var array9 = new Array();
array9.push(Object.keys(res));
var array8 = new Array();
array8.push(Object.values(res[array9["0"][41]]))
var array7 = new Array();
for (var n = 0; n < array8["0"].length; n++) {
array7.push(`<option class="option">${array8["0"][n]}</option>`)
}
selection.innerHTML = array7.join("");
selection.addEventListener('change',function(){
for(f = 0 ; f < array9["0"].length ;f++){
if(this.value == array8["0"][f]){
x=f;
}
}
fetch(`https://api.aladhan.com/v1/hijriCalendarByCity?city=${array8["0"][x]}&country=${array9["0"][41]}`).then(res=>res.json()).then((data)=>{
var t = new Number();
for (var m = 0; m < data["data"].length; m++) {
if(data["data"][m]["date"]["readable"] == date){
t=m;
}
}
var mwaqeet = new Array();
var long = new Number();
var awqten,awqat;
console.log(data["data"][t]["timings"]);
console.log()
long = Object.keys(data["data"][t]["timings"]).length;
awqten = Object.keys(data["data"][t]["timings"]);
var awqtapp = Object.values(data["data"][t]["timings"]);
var awqat = ["??????????","????????????","??????????","??????????","????????????","????????????","????????????","??????????????","?????????? ??????????"]
var mwaqeet = new Array();
for(z = 0 ; z< long ; z++){
mwaqeet.push(`<span class="slatwaqt"><span class="waqten">${awqten[z]}</span><span class="waqtapp">${awqtapp[z]}</span><span class="waqtar">${awqat[z]}</span></span>`)
}
mwaket.innerHTML = mwaqeet.join('');
})
})
})
})
    /*mwaket.innerHTML = mwaqeet.join('');
    })console.log(data["results"]["datetime"]["0"]["times"]);
    var long = Object.keys(data["results"]["datetime"]["0"]["times"]).length;
    var awqten = Object.keys(data["results"]["datetime"]["0"]["times"]);
    var awqtapp = Object.values(data["results"]["datetime"]["0"]["times"]);
    var awqat = ["??????????","????????????","??????????","??????????","????????????","????????????","????????????","??????????????","?????????? ??????????"]
    var mwaqeet = new Array();
    for(z = 0 ; z< long ; z++){
    mwaqeet.push(`<span class="slatwaqt"><span class="waqten">${awqten[z]}</span><span class="waqtapp">${awqtapp[z]}</span><span class="waqtar">${awqat[z]}</span></span>`)
    }
    mwaket.innerHTML = mwaqeet.join('');
   })*/



fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json').then(res=>res.json()).then((data)=>{
console.log(data)
var arr = new Array();
arr.push(Object.keys(data));
console.log(arr);
var array = new Array();
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
fetch(`https://api.aladhan.com/v1/hijriCalendarByCity?city=${array2["0"][x]}&country=${arr["0"][c]}`).then(res=>res.json()).then((data)=>{
var t = new Number();
for (var m = 0; m < data["data"].length; m++) {
if(data["data"][m]["date"]["readable"] == date){
t=m;
}
}
var mwaqeet = new Array();
var long = new Number();
var awqten,awqat;
console.log(data["data"][t]["timings"]);
console.log()
long = Object.keys(data["data"][t]["timings"]).length;
awqten = Object.keys(data["data"][t]["timings"]);
var awqtapp = Object.values(data["data"][t]["timings"]);
var awqat = ["??????????","????????????","??????????","??????????","????????????","????????????","????????????","??????????????","?????????? ??????????"]
var mwaqeet = new Array();
for(z = 0 ; z< long ; z++){
mwaqeet.push(`<span class="slatwaqt"><span class="waqten">${awqten[z]}</span><span class="waqtapp">${awqtapp[z]}</span><span class="waqtar">${awqat[z]}</span></span>`)
}
mwaket.innerHTML = mwaqeet.join('');
})
})
})
})



