var ran = document.querySelector('.ran'), 
aya_ar = document.querySelector('.ayaran') ,
aya_en = document.querySelector('.ayaranen'),
close = document.querySelector('.x'); 

close.addEventListener('click',()=>{ran.style.display == "none" ? ran.style.display = "flex" : ran.style.display = "none";})

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
var awqat = ["الفجر","الشروق","الظهر","العصر","الغروب","المغرب","العشاء","الإمساك","منتصف الليل"]
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
point=" <span class='expl'>صلاة الفجر أو صلاة الصبح هي: أول الصلوات الخمس المفروضات عينا على كل مكلف<br>صلاة الفجر ركعتان جهريّتان، تُؤدّيان في الوقت ما بين أذان الفجر وطلوع الشّمس، ولها صلاة سنّة تُدعى سنّة الفجر، وهي أيضاً ركعتان، تُصلَّيان قبل صلاة الفرض وبعد دخول وقت صلاة الفجر، وعلى من فاتته صلاة الفجر لسبب من الأسباب أداؤُها مباشرة بعد زوال السّبب؛ فمن نسي أداءها على سبيل المثال عليه قضاؤها بمُجرَّد تذكّرها.</span><span class='source'><a href='https://mawdoo3.com/%D9%85%D8%B9%D9%84%D9%88%D9%85%D8%A7%D8%AA_%D8%B9%D9%86_%D8%B5%D9%84%D8%A7%D8%A9_%D8%A7%D9%84%D9%81%D8%AC%D8%B1'>موقع موضوع</a></span>";
var imgsrc= '48.png';
innerpoint(point,imgsrc);
});

duhur.addEventListener('click',()=>{
salawatpoint.classList.add('explain4');
elsalahpoint.classList.add('explain3');
point = "<span class='expl'>صلاة الظهر هي ثاني الصلوات الخمس المفروضة كل يوم وليلة<br>وتُصلّى سرًا بخفض الصوت في القراءة فيها، ويبلغ عدد ركعاتها أربع ركعات، إلاّ يوم الجمعة لمن يؤدّيها في المسجد؛ حيث تكون الصلاة فيها جهريّة وعدد ركعاتها اثنتين فقط.</span><span class='source'><a href='https://www.elbalad.news/4365108'>موقع صدى البلد</a></span>";
var imgsrc= '48.png';
innerpoint(point,imgsrc);
});

asr.addEventListener('click',()=>{
salawatpoint.classList.add('explain4');
elsalahpoint.classList.add('explain3');
point="<span class='expl'>صلاة العصر أمرها عظيم وهي الصلاة الوسطى، وهي أفضل الصلوات الخمس قال الله جل وعلا: حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلاةِ الْوُسْطَى [البقرة:238] فخصها بالذكر زيادة، فالواجب على كل مسلم وكل مسلمة أن يعتني بها أكثر، وأن يحافظ عليها، ويجب أن يحافظ على جميع الصلوات الخمس بطهارتها والطمأنينة فيها وغير ذلك، وأن يعتني بها في الجماعة الرجل، وخصها النبي ﷺ أيضاً بقوله ﷺ: من ترك صلاة العصر حبط عمله، وقال ﷺ: من فاتته صلاة العصر فكأنما وتر أهله وماله يعني: سلب أهله وماله، وهذا يدل على عظمة شأنها، والصواب أن من ترك بقية الصلوات يحبط عمله أيضاً؛ لأنه قد كفر على الصحيح، لكن تخصيص النبي ﷺ بذكر صلاة العصر يدل على مزية عظيمة، وإلا فالحكم واحد؛ من ترك صلاة الظهر أو المغرب أو العشاء أو الفجر تعمداً بطل عمله لأنه يكفر بذلك، لابد أن يحافظ على الصلوات الخمس كلها، فمن ترك واحدة فكأنما ترك الجميع، فلابد من المحافظة على الصلوات الخمس جميعاً في أوقاتها من الرجل والمرأة، ولكن صلاة العصر لها مزية عظمى في شدة العقوبة وشدة الإثم، وفي عظم الأجر لمن حافظ عليها واستقام عليها مع بقية الصلوات.</span><span class='source'>الموقع الرسمى لفضيلة الشيخ عبد العزيز بن باز -رحمه الله-</span>";
var imgsrc= '48.png';
innerpoint(point,imgsrc);
});

maghrib.addEventListener('click',()=>{
salawatpoint.classList.add('explain4');
elsalahpoint.classList.add('explain3');
point="<span class='expl'>صلاة المغرب هي أحد الصلوات الخمس المفروضة فرضًا عينيًا على المسلمين المكلفين، وهي أول صلاة مفروضة بالليل، وهي الصلاة الرابعة في اليوم والليلة. وهي صلاة جهرية تتكون من ثلاث ركعات.بتشهد أوسط بعد ركعتين منها، وتشهد أخير نهاية الركعة الثالثة.</span><span class='source'><a href='https://ar.wikipedia.org/wiki/%D8%B5%D9%84%D8%A7%D8%A9_%D8%A7%D9%84%D9%85%D8%BA%D8%B1%D8%A8'>موقع ويكيبيديا</a></span>";
var imgsrc= '48.png';
innerpoint(point,imgsrc);
});

isha.addEventListener('click',()=>{
salawatpoint.classList.add('explain4');
elsalahpoint.classList.add('explain3');
point="<span class='expl'>عن أبي هريرة ـ رضي الله عنه ـ أن النبي صلى الله عليه وسلم قال: ليس صلاة أثقل على المنافقين من الفجر والعشاء، ولو يعلمون ما فيهما لأتوهما ولو حبواً. هذه رواية البخاري.<br>قال الحافظ ابن حجر في فتح الباري عند شرح الحديث: ودل هذا على أن الصلاة كلها ثقيلة على المنافقين ومنه قوله تعالى: ولا يأتون الصلاة إلا وهم كسالى ـ وإنما كانت العشاء والفجر أثقل عليهم من غيرهما لقوة الداعي إلى تركهما، لأن العشاء وقت السكون والراحة، والصبح وقت لذة النوم، وقيل: وجهه كون المؤمنين يفوزون بما ترتب عليهما من الفضل لقيامهم بحقهما دون المنافقين. انتهى.<br>وفي صحيح مسلم عن عثمان بن عفان ـ رضي الله عنه ـ عن رسول الله صلى الله عليه وسلم: من صلى العشاء في جماعة فكأنما قام نصف الليل، ومن صلى الصبح في جماعة فكأنما صلى الليل كله.<br>ورواه الترمذي بلفظ: من شهد العشاء في جماعة كان له قيام نصف ليلة، ومن صلى العشاء والفجر في جماعة كان له كقيام ليلة.<br>ورواه أبو داود بلفظ: من صلى العشاء في جماعة كان كقيام نصف ليلة، ومن صلى العشاء والفجر في جماعة كان كقيام ليلة. وكلاهما عن عثمان أيضاً.</span><span class='source'><br><a href='https://www.islamweb.net/ar/fatwa/154029/%D9%81%D8%B6%D9%84-%D8%A7%D9%84%D9%85%D9%88%D8%A7%D8%B8%D8%A8%D8%A9-%D8%B9%D9%84%D9%89-%D8%B5%D9%84%D8%A7%D8%AA%D9%8A-%D8%A7%D9%84%D8%B9%D8%B4%D8%A7%D8%A1-%D9%88%D8%A7%D9%84%D9%81%D8%AC%D8%B1-%D9%81%D9%8A-%D8%AC%D9%85%D8%A7%D8%B9%D8%A9'>موقع إسلام ويب</a></span>";   
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
explain=" <span class='expl'>الشهادتان: شهادة أن لا إله إلا الله، وأن محمداً رسول الله، هما مفتاح الإسلام ولا يمكن الدخول إلى الإسلام إلا بهما، ولهذا أمر النبي صلي الله عليه وسلم معاذ بن جبل رضي الله عنه حين بعثه إلى اليمن أن يكون أول ما يدعوهم إليه شهادة أن لا إله إلا الله، وأن محمداً رسول الله شهادة أن لا إله إلا الله فأن يعترف الإنسان بلسانه وقلبه بأنه لا معبود حقٌ إلا الله عز وجل لأن إله بمعنى مألوه والتأله التعبد. والمعني أنه لا معبود حق إلا الله وحده <br>أما معنى شهادة: أن محمداً رسول الله  فهو الإقرار باللسان والإيمان بالقلب بأن محمد بن عبد الله القرشي الهاشمي صلى الله عليه وسلم رسول الله عز وجل إلى جميع الخلق من الجن والإنس كما قال الله تعالى: {قل يا أيها الناس إني رسول الله إليكم جميعاً الذي له ملك السماوات والأرض لا إله إلا هو يحيي ويميت فآمنوا بالله ورسوله النبي الأمي الذي يؤمن بالله وكلماته واتبعوه لعلكم تهتدون}، وقال تعالى: {تبارك الذي نزل الفرقان على عبده ليكون للعالمين نذيراً}، ومقتضى هذه الشهادة أن تصدِّق رسول الله صلى الله عليه وسلم فيما أخبر، وأن تمتثل أمره فيما أمر، وأن تجتنب ما عنه نهى وزجر، وأن لا تعبد الله إلا بما شرع، ومقتضى هذه الشهادة أيضاً أن لا تعتقد أن لرسول الله صلى الله عليه وسلم حقّاً في الربوبية وتصريف الكون، أو حقاً في العبادة، بل هو صلى الله عليه وسلم عبد لا يعبد، ورسول لا يكذب، ولا يملك لنفسه ولا لغيره شيئاً من النفع أو الضر إلا ما شاء الله كما قال الله تعالى: {قل لا أقول لكم عندي خزائن الله ولا أعلم الغيب ولا أقول لكم إني ملك إن أتبع إلا ما يوحى إلي}. فهو عبد مأمور يتبع ما أمر به، وقال الله تعالى: {قل إني لا أملك لكم ضراً ولا رشداً * قل إني لن يجيرني من الله أحد ولن أجد من دونه ملتحداً}، وقال سبحانه: {قل لا أملك لنفسي نفعاً ولا ضراً إلا ما شاء الله ولو كنت أعلم الغيب لاستكثرت من الخير وما مسني السوء إن أنا إلا نذير وبشير لقوم يؤمنون}، فهذا معنى شهادة: أن لا إله إلا الله، وأن محمداً رسول الله. الشهادتان: شهادة أن لا إله إلا الله، وأن محمداً رسول الله، هما مفتاح الإسلام ولا يمكن الدخول إلى الإسلام إلا بهما، ولهذا أمر النبي صلي الله عليه وسلم معاذ بن جبل رضي الله عنه حين بعثه إلى اليمن أن يكون أول ما يدعوهم إليه شهادة أن لا إله إلا الله، وأن محمداً رسول الله شهادة أن لا إله إلا الله فأن يعترف الإنسان بلسانه وقلبه بأنه لا معبود حقٌ إلا الله عز وجل لأن إله بمعنى مألوه والتأله التعبد. والمعني أنه لا معبود حق إلا الله وحده</span><span class='source'>مجموع فتاوى و رسائل الشيخ محمد بن صالح العثيمين المجلد الاول - باب الشهادتان</span>";
var imgsrc= '48.png';
innerexplain(explain,imgsrc);
});

salat.addEventListener('click',()=>{
explaination.classList.add('explain2');
arkanexplaination.classList.add('explain');
explain = "<span class='expl'>الركن الثاني من أركان الإسلام: إقام الصلاة، الصلاة هي أعظم أركان الإسلام بعد الشهادتين، ويجب على المرء أن يعتني بها عناية كاملة؛ لأنها عمود الإسلام؛ لقول النبي -صلى الله عليه وسلم-: «رأس الأمر الإسلام وعموده الصلاة» وقد كان النبي -صلى الله عليه وعلى آله وسلم- يعلم أصحابه صفة الصلاة إما بالقول وإما بالفعل، أما بالقول، كقوله للرجل الذي صلى بلا طمأنينة: «إذا قمت إلى الصلاة فأسبغ الوضوء، ثم استقبل القبلة فكبر..» إلى آخر الحديث، وإما الفعل فقد كان الوافدون إلى رسول الله -صلى الله عليه وعلى آله وسلم- يصلون معه ثم يقول لهم: «صلوا كما رأيتموني أصلي» فالإنسان يتطهر من الحدث الأكبر والأصغر والنجاسة، ثم يستقبل القبلة فيكبر رافعاً يديه إلى حذو منكبيه أو إلى فروع أذنيه مع التكبير أو بعده أو قبله، كل ذلك جائز، ثم يضع يده اليمنى على ذراعه اليسرى على صدره، ثم يستفتح فيقول: اللهم باعد بيني وبين خطاياي كما باعدت بين المشرق والمغرب، اللهم نقني من خطاياي كما ينقى الثوب الأبيض من الدنس، اللهم اغسلني من خطاياي بالماء والثلج والبرد.أو يقول: سبحانك اللهم وبحمدك، وتبارك اسمك، وتعالى جدك، ولا إله غيرك، ثم يستعيذ بالله من الشيطان الرجيم: أعوذ بالله من الشيطان الرجيم، ثم يقرأ الفاتحة ويقدم عليها البسملة، فيقول: بسم الله الرحمن الرحيم ﴿الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۞ الرَّحْمَنِ الرَّحِيمِ ۞ مَالِكِ يَوْمِ الدِّينِ ۞ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۞ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۞ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلا الضَّالِّينَ﴾ [الفاتحة:2-7] يقف على كل آية كما وقفت الآن على كل آية، ثم يقرأ ما تيسر من القرآن، وتكون القراءة في الفجر قراءة طويلة من طوال المفصل، وفي المغرب قراءة قصيرة من قصار المفصل، ولا بأس أن يقرأ قراءة طويلة في صلاة المغرب أحياناً كما فعل النبي -صلى الله عليه وعلى آله وسلم-، أما الظهر والعصر والعشاء فيقرأ قراءة وسطاً بين هذا وهذا، ثم يرفع يديه مكبراً راكعاً ويضع يديه على ركبتيه مفرجتي الأصابع، ويكون مستوياً ويكون رأسه حيال ظهره، ويقول: سبحان ربي العظيم، ثلاث مرات أو أكثر، ويقول كذلك: سبحانك اللهم ربنا وبحمدك، اللهم اغفر لي، ويقول أيضاً: سبوح قدوس رب الملائكة والروح، ثم يرفع رأسه ويديه كما رفعهما عند الركوع فيقول: سمع الله لمن حمده، إلا المأموم فيقول بدلها: ربنا ولك الحمد حمداً كثيراً طيباً مباركاً فيه ملء السماء وملء الأرض وملء ما شئت من شيء بعد، ثم يخر ساجداً مكبراً ويقدم ركبتيه ثم كفيه ثم جبهته وأنفه، ويقول: سبحان ربي الأعلى، ثلاثاً أو أكثر كما أحب ويقول: سبحانك اللهم ربنا وبحمدك اللهم اغفر لي، ويقول أيضاً: سبوح قدوس رب الملائكة والروح، ثم يدعو بما شاء، ويكثر من الدعاء في السجود؛ لأمر النبي -صلى الله عليه وعلى آله وسلم- بذلك حيث قال: «أما الركوع فعظموا فيه الرب، وأما السجود فأكثروا فيه من الدعاء فقمن أن يستجاب لكم» وفي حال السجود لا يرفع يديه، ثم يرفع من السجود ويجلس بين السجدتين مفترشاً رجله اليسرى ناصباً رجله اليمنى، وأعني بالرجل هنا القدم لا الساق والفخذ، ينصب القدم ويجلس على اليسرى ويقول: رب اغفر لي، رب اغفر لي، رب اغفر لي، وارحمني وعافني واهدني واجبرني، ثم يسجد السجدة الثانية كالأولى، ثم ينهض إلى الركعة الثانية ويفعل فيها كما فعل في الركعة الأولى إلا الاستفتاح فلا يستفتح، والتعوذ فيه خلاف، بعض العلماء يقول: كلما قام إلى ركعة تعوذ وبعضهم يقول: يكفي التعوذ الأول في الركعة الأولى، ثم إذا صلى ركعتين جلس للتشهد، فإن كانت الصلاة ثنائية أكمل التشهد كله، وإن كانت الصلاة ثلاثية أو رباعية فإذا تشهد التشهد الأول قام وأتى بالباقي من صلاته لكنه يقتصر فيها على الفاتحة، أما التشهد فالأول ينتهي عند قوله: وأشهد أن محمداً عبده ورسوله، وأما الأخير فإنه لا نهاية له؛ لأن النبي -صلى الله عليه وعلى آله وسلم- لما ذكر التشهد قال: «ثم ليتخير من الدعاء ما شاء» فلو بقيت أكثر من نصف ساعة أو ساعة وأنت جالس في التشهد تدعو الله -عز وجل- فلا حرج، إلا الإمام فإنه لا يطيل على المأمومين، ثم تسلم عن يمينك: السلام عليكم ورحمة الله، وعن يسارك: السلام عليكم ورحمة الله.</span><span class='source'>الموقع الرسمى لفضيلة الشيخ / محمد بن صالح بن عثيمين - رحمه الله-</span>";
var imgsrc= 'salat.png';
innerexplain(explain,imgsrc);
});

zakat.addEventListener('click',()=>{
explaination.classList.add('explain2');
arkanexplaination.classList.add('explain');
explain="<span class='expl'>الزكاة ركن من أركان الإسلام الخمسة الثابتة بالكتاب والسنة والإجماع. وتختص الزكاة من بين الجبايات والضرائب المالية الأخرى بسمات من أبرزها وأعمها: ما يقترن بهذه الفريضة من روح الإيمان والاحتساب والقيام بالواجب، وهي الروح التي تتجرد منها الضرائب الرسمية.وتختص بأنها تؤخذ من الأغنياء الذين يستوفون شروط وجوبها ويملكون نصابها وتصرف في مصارفها المحددة من الفقراء والمساكين والغارمين وغيرهم من أصناف مستحقي الزكاة، وهذا بالعكس في الجبايات والضرائب والمكوس التي تفرض من الحكومات، فهي تؤخذ من الفقراء وأوساط الناس وترد على أغنيائهم وأقويائهم، إذ أنها - في أغلبها - تصرف في الاستقبالات والاحتفالات، وفي نفقات الولائم والمهرجانات ومآدب السفارات ودعايات الإعلام وجعالات الصحفيين ووكالات الأنباء وتكاليف الصحف والمجلات، وغيرها من الأمور التي يدفع فيها الضعيف ليستفيد منها القوي .أما الزكاة فهي كما قال رسولنا صلى الله عليه وسلم تؤخذ من أغنيائهم وترد على فقرائهم متفق عليه فهي فريضة فرضها الله عبادة للموسرين، ولطفاً ورحمة بالفقراء والمحتاجين.يقول السيد محمد رشيد رضا في تفسيره ( ولو أقام المسلمون هذا الركن من دينهم لما وجد فيهم - بعد أن كثرهم الله ووسع عليهم في الرزق - فقير مدقع، ولا ذو غرم مفجع، ولكن أكثرهم تركوا هذه الفريضة فجنوا على دينهم وأمتهم فصاروا أسوأ من جميع الأمم حالاً في مصالحهم المالية والسياسية، حتى فقدوا ملكهم وعزهم وشرفهم ) انتهى . والله أعلم.</span><span class='source'><a href='https://www.islamweb.net/ar/fatwa/16101/'>موقع اسلام ويب</a></span>";
var imgsrc= 'mus1.png';
innerexplain(explain,imgsrc);
});

seyam.addEventListener('click',()=>{
explaination.classList.add('explain2');
arkanexplaination.classList.add('explain');
explain="<span class='expl'>شهر رمضان، شهر الصيام والقيام وتلاوة القرآن، شهر العتق والغفران، شهر الصدقات والإحسان، شهر تفتح فيه أبواب الجنات، وتضاعف فيه الحسنات، وتقال فيه العثرات، شهر تجاب فيه الدعوات، وترفع فيه الدرجات، وتغفر فيه السيئات<br>في الصيام فوائد كثيرة وحكم عظيمة، منها تطهير النفس وتهذيبها وتزكيتها من الأخلاق السيئة كالأشر والبطر والبخل، وتعويدها للأخلاق الكريمة كالصبر والحلم والجود والكرم ومجاهدة النفس فيما يرضي الله ويقرب لديه</span><span class='source'>الموقع الرسمى لفضيلة الشيخ / عبد العزيز بن باز - رحمه الله-</span>";
var imgsrc= 'mos5.png';
innerexplain(explain,imgsrc);
});

haj.addEventListener('click',()=>{
explaination.classList.add('explain2');
arkanexplaination.classList.add('explain');
explain="<span class='expl'>الحج واجب على المكلف على الفور مع القدرة، إذا استطاع، قال الله : وَلِلّهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ مَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا وَمَن كَفَرَ فَإِنَّ الله غَنِيٌّ عَنِ الْعَالَمِينَ [آل عمران:97]، فالحج هو الركن الخامس من أركان الإسلام، وهو واجب مع الاستطاعة، أما العاجز فلا حج عليه، لكن لو استطاع ببدنه وماله وجب عليه، وإذا استطاع بماله، ولم يستطع ببدنه لكونه هرمًا أو مريضًا لا يرجى برؤه فإنه يقيم من ينوب عنه ويحج عنه[1].</span><span class='source'>الموقع الرسمى لفضيلة الشيخ / عبد العزيز بن باز - رحمه الله-</span>";   
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


/********** Scroll Reveal ***********/


/********** Scroll Reveal ***********/