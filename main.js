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


