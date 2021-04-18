/*fetch('https://raw.githubusercontent.com/mhashim6/Open-Hadith-Data/master/Sahih_Al-Bukhari/sahih_al-bukhari_ahadith.utf8.csv').then(response =>response.text()).then(data => console.log(data));
/****************************************************/

setTimeout(()=>{document.querySelector('.loading').style.display = "none";},5000)

var rand = document.querySelector('.random');

async function getdata(api,rawy){
const res = await fetch(api);
const data = await res.text();
const rows = data.split('\n').slice(1);
var arr = new Array();


arr.push(...rows);


var ahadith = new Array();


for(i=0;i<arr.length;i++){
ahadith.push(`<div class="ht-hb">
<p class="htop">${arr[i]}</p>
<p class="hbottom">${rawy}</p>
</div>
</div>`);
}

var x = ahadith.length;
var t = ahadith[Math.floor(Math.random() * x)];
rand.innerHTML=t;
contahadith.innerHTML = ahadith.join("");
}

/***********************************************/
var tole = document.querySelector('.tog');

function togle(){
tole.classList.toggle('active');
};
/***********************************************/



/**********************puplic-vars**********************/

var selection = document.querySelector('select');
var emampic = document.querySelectorAll('.rightsidetop');
var emampik = document.querySelectorAll('.rightsidetop');
var contahadith = document.querySelector('.contahadith');
var hadithsearch = document.getElementById('hadithsearch');
var random = document.querySelector('.randomhadith');

var ltop = document.querySelector(".ltop"),
rbottom = document.querySelector(".rbottom"),
lbottom = document.querySelector(".lbottom"),
rtop = document.querySelector(".rtop");

/**********************puplic-vars**********************/

function imaminformation(works = "",infos = " " ,bdate="" , ddate="" , nat="" , nickname ="" , rel = "الإسلام" ){
var date = new Array();
date.push(`<h1> بعض المعلومات عن الإمام رحمة الله عليه  </h1><p>تاريخ الميلاد  : ${bdate}</p><p>تاريخ الوفاة  : ${ddate}</p><p>اللقب : ${nickname}</p><p>الديانة : ${rel}</p><p>الوطن : ${nat}</p>`);
ltop.innerHTML = date.join("");
rbottom.innerHTML = `<h1> التعريف بالإمام رحمة الله عليه  </h1><p style =" padding: 0px;margin: 0px;font-size: 14.2px;font-weight: bold;line-height: 1.3;">${infos}</p>`;
lbottom.innerHTML = `<h1>أهم الأعمال  </h1><p style ="font-size: 14.2px;font-weight: bold;line-height: 1.3;">${works}</p>`;
};





/****************************************************/


var sidedark1 = document.querySelectorAll('.rightsidetop');
var sidedark2 = document.querySelectorAll('.leftsidetop');


/*********************Dark-Mode*************************************/
var dark = document.querySelectorAll('nav ul a li');
function ckeckbox(){
document.body.classList.toggle('dark');
document.querySelector('.nav').classList.toggle('dark');
document.querySelector('.sele').classList.toggle('dark');
document.querySelector('.selector').classList.toggle('dark');
document.querySelector('.navv').classList.toggle('dark');
document.querySelector('.rand').classList.toggle('dark');
document.querySelector('.random').classList.toggle('dark');
document.querySelector('.container').classList.toggle('dark');
document.querySelector('.toggle').classList.toggle('dark');
document.querySelector('.resource').classList.toggle('dark');
document.querySelector('.resource a').classList.toggle('dark');
rtop.classList.toggle('dark');
rbottom.classList.toggle('dark');
ltop.classList.toggle('dark');
lbottom.classList.toggle('dark');

for(i = 0 ; i < dark.length ; i++){
dark[i].classList.toggle('dark');
}


//document.querySelector('.hadithcont svg').classList.toggle('darek');
document.querySelector('.logo a').classList.toggle('darrk');
}
/*********************Dark-Mode*************************************/

/****************************************************/

function back_g(color){
emampic[0].style.backgroundColor = `${color}`;
}

/************************الأئمه************************/
selection.value = "buk";
imam();
function selectemam(){
imam();
}
/************************الأئمه************************/
/********************************Search************************************/

function filter(){
var search , name , profile;
search = document.getElementById('hadithsearch').value;
profile = document.getElementsByClassName('ht-hb');
for(var i = 0 ; i < profile.length ; i++ ){
name = profile[i].getElementsByClassName('htop');
if(name[0].innerHTML.toUpperCase().indexOf(search)>-1){
profile[i].style.display = "block";
}else{
profile[i].style.display = "none";
};
};
};

/********************************Search************************************/

var url ="";

function imam(){


if(selection.value == "buk"){
url = "https://raw.githubusercontent.com/mohamedreda3/hadith/main/Sahih_Bukhari_Without_Tashkel.csv";
var a7adith = new Array();
getdata(url,"رواه البخارى");
emampic[0].style.backgroundImage = "url('ImamBukhari1.png')";
var ddate = "256هـ";
var infos = "أبو عبد الله محمد بن إسماعيل البخاري أحد كبار الحفّاظ الفقهاء من أهم علماء الحديث وعلوم الرجال والجرح والتعديل والعلل عند أهل السنة والجماعة، له مصنّفات كثيرة أبرزها كتاب الجامع الصحيح، المشهور باسم صحيح البخاري، الذي يعد أوثق الكتب الستة الصحاح والذي أجمع علماء أهل السنة والجماعة أنه أصح الكتب بعد القرآن الكريم.";
var works ="صحيح البخاري و الأدب المفرد";
imaminformation(works,infos,"194هـ" , ddate , "ولد فى بخارى وتوفى فى سمرقند ودفن فى ضريح البخاري" , nickname ="البخاري" , rel = "الإسلام" );
back_g( "#055857" );
/************************************Random****************************************/
//var boom = ahadith[Math.floor(Math.random()*ahadith.length)];
//random.innerHTML = boom;
/************************************Random****************************************/
}
/************************البخارى***********************/
            
/************************بن حنبل***********************/
else if(selection.value == "ahm"){
emampic[0].style.backgroundImage = "url('Ahmad_bin_Hanbal_Name.png')";   
url = "https://raw.githubusercontent.com/mohamedreda3/hadith/main/Musnad_Ahmad_ibn_Hanbal_Without_Tashkel.csv";
getdata(url,"رواه أحمد بن حنبل");
var ddate = "241هـ / 855م";
var infos = "أبو عبد الله أحمد بن محمد بن حنبل الشيباني الذهلي (164-241هـ / 780-855م) فقيه ومحدِّث مسلم، ورابع الأئمة الأربعة عند أهل السنة والجماعة، وصاحب المذهب الحنبلي في الفقه الإسلامي. اشتُهر بعلمه الغزير وحفظه القوي، وكان معروفاً بالأخلاق الحسنة كالصبر والتواضع والتسامح،وقد أثنى عليه كثير من العلماء منهم الإمام الشافعي بقوله: «خرجتُ من بغداد وماخلَّفتُ بها أحداً أورع ولا أتقى ولا أفقه من أحمد بن حنبل»";
var works = "ويُعدُّ كتابه المسند من أشهر كتب الحديث وأوسعها";
imaminformation(works,infos,"164هـ / 780م" , ddate , "بغداد ، العراق" , nickname ="ابن حنبل" , rel = "الإسلام" );

back_g( "#647b43" );
}
/************************بن حنبل************************/
            
/**********************الترمذى**************************/
else if(selection.value == "der"){
emampic[0].style.backgroundImage = "url('termisi.png')";
url = "https://raw.githubusercontent.com/mohamedreda3/hadith/main/Sunan_al_Tirmidhi_Without_Tashkel.csv";
getdata(url,"رواه الترمذى ");
var ddate = "279 هـ / 892م";
var infos ="أبو عيسى التِّرْمذِي (209 هـ - 279 هـ) / (824م - 892م). هو محمد بن عيسى بن سَوْرة بن موسى بن الضحاك، السلمي الترمذي، أبو عيسى. مصنّف كتاب الجامع المعروف بسنن الترمذي، حافظ للحديث[؟]، ولد في مدينة ترمذ، ثم ارتحل لطلب الحديث فذهب إلى خراسان[؟]، والعراق، والحجاز، ولم يرحل إلى مصر والشام، وحدّث عن جمع كبير من المحدثين، وتفقه في الحديث بالبخاري، وأصبح ضريرًا في كِبره بعد رحلته وكتابته العلم، وتوفي في 13 رجب 279 هـ في بلدة ترمذ.";
var works = "سنن الترمذي و  الشمائل المحمدية و  الجرح والتعديل و علل الترمذي الكبير و  العلل الصغير و  كتاب العلل الكبرى و  كتاب التفسير و  كتاب التاريخ  و  كتاب الأسماء والكنى";
imaminformation(works,infos,"209 هـ / 824م" , ddate , "الدولة العباسية" , nickname ="الترمذى" , rel = "الإسلام" );
back_g( "#336633" );
}
/**********************الترمذى**************************/

/**********************مالك****************************/
else if(selection.value == "mal"){
emampic[0].style.backgroundImage = "url('Malik_Bin_Anas_Name.png')";    
url = "https://raw.githubusercontent.com/mohamedreda3/hadith/main/Maliks_Muwatta_Without_Tashkel.csv";
getdata(url,"رواه مالك ");
var ddate = "سنة 179هـ / 795م";
var infos = "أبو عبد الله مالك بن أنس بن مالك بن أبي عامر الأصبحي الحميري المدني. فقيه ومحدِّث مسلم، وثاني الأئمة الأربعة عند أهل السنة والجماعة، وصاحب المذهب المالكي في الفقه الإسلامي. ";
var works ="";
imaminformation(works,infos,"سنة 93هـ / 711م" , ddate , "المدينة المنورة" , nickname ="مالك بن أنس" , rel = "الإسلام" );
back_g( "#647b43" );
}
/**********************مالك****************************/
            
/**********************النسائى*************************/
else if(selection.value == "nes"){
emampic[0].style.backgroundImage = "url('nesai.png')";
url = "https://raw.githubusercontent.com/mohamedreda3/hadith/main/Sunan_al-Nasai_Without_Tashkel.csv";
getdata(url,"رواه النسائى ");
var ddate = "الإثنين 13 صفر 303 هـ، 915م";
var infos = "أبو عبد الرحمن أحمد بن شعيب بن علي بن سنان بن بحر بن دينار النَّسائي، محدّث، وقاضٍ، وأحد أئمة الحديث النبوي الشريف، صاحب السنن الصغرى والكبرى، المعروف بسنن النسائي، ولد سنة 215 هـ في بلدة نسا من بلاد خراسان قديمًا وتقع في تركمانستان حاليًا، وطلب العلم والحديث وهو صغير، فرحل إلى خراسان والحجاز والعراق والشام والجزيرة ";
var works ="";
imaminformation(works,infos,"	215 هـ، 829م. " , ddate , "ولد فى نسا، تركمانستان وتوفى فى الرمله ودفن فى مكة" , nickname ="النَّسائي" , rel = "الإسلام" );
back_g( "#663366" );
}
/**********************النسائى*************************/
            
/**********************ابن ماجه************************/
else if(selection.value == "mag"){
emampic[0].style.backgroundImage = "url('maga.png')";
url = "https://raw.githubusercontent.com/mohamedreda3/hadith/main/Sunan_Ibn_Maja_Without_Tashkel.csv";
getdata(url,"رواه ابن ماجه ");
var ddate = "رمضان 273 هـ/886م";
var infos = "أبو عبد الله محمد بن يزيد بن ماجه الربعي القزويني ( 209 هـ - 824م / 273 هـ - 886 م): محدِّث ومفسر ومؤرخ مسلم، وأحد الأئمة في علم الحديث. من أهل قزوين، مولده ووفاته فيها. رحل إلى البصرة و بغداد و الشام و مصر و مكة و المدينة و الري، في طلب الحديث. وصنف كتابه (سنن ابن ماجه)، وهو أحد الكتب الستة المعتمدة عند أهل السنة والجماعة. وله (تفسير القرآن) وكتاب في (تاريخ قزوين).";
var works ="سنن ابن ماجه";
imaminformation(works,infos,"209 هـ/824م" , ddate , "قزوين" , nickname ="ابن ماجه، وأبو عبد الله" , rel = "الإسلام" );
back_g( "#2c55be" );
}
/**********************ابن ماجه************************/
            
/**********************أبو داود*************************/
else if(selection.value == "seg"){
emampic[0].style.backgroundImage = "url('dawod.png')";
url = "https://raw.githubusercontent.com/mohamedreda3/hadith/main/Sunan_Abu_Dawud_Without_Tashkel.csv";
getdata(url,"رواه أبو داود ");
var ddate = "889 م";
var infos = "أبو داود سليمان بن الأشعث بن إسحاق بن بشير الأزدي السجستاني المشهور بأبي داود إمام أهل الحديث في زمانه، محدث البصرة، وهو صاحب كتابه المشهور بسنن أبي داود، ولد أبو داود سنة 202 هـ في عهد المأمون في إقليم صغير مجاور لمكران أرض البلوش الأزد يُدعي سجستان.";
var works ="سنن أبي داود";
imaminformation(works,infos,"817 م" , ddate , "سيستان أو سجستان وتوفى فى البصرة واشتهر بأنه محدث البصرة" , nickname ="أبو داود" , rel = "الإسلام" );
back_g( "#be924f" );
}
/**********************أبو داود*************************/
            
/**********************مسلم************************/
else if(selection.value == "mus"){
emampic[0].style.backgroundImage = "url('ImamMuslim1.png')";
url = "https://raw.githubusercontent.com/mohamedreda3/hadith/main/Sahih_Muslime_Without_Tashkel.csv";
getdata(url,"رواه مسلم ");
var ddate = "25 رجب 261 هـ";
var infos = "مسلم بن الحجاج بن مسلم بن ورد بن كوشاذ القشيري النيسابوري، أبو الحسين، (206 هـ - 25 رجب 261 هـ) / (822م - 6 يوليو 875م)، هو من أهم علماء الحديث النبوي عند أهل السنة والجماعة، وهو مصنف كتاب صحيح مسلم الذي يعتبر ثاني أصح كتب الحديث بعد صحيح البخاري،(1) وهو أحد كبار الحفّاظ،(2) ولد في نيسابور، طلب الحديث صغيرًا، وكان أول سماع له سنة 218 هـ، وعمره آنذاك اثنتا عشرة سنة.";
var works = "صحيح مسلم";
imaminformation(works,infos,"206 هـ" , ddate , "نيسابور" , nickname ="النيسابوري" , rel = "الإسلام" );
back_g( "#52262c" );
}
/**********************مسلم************************/
            
/**********************الدارمى*************************/
else if(selection.value == "dar"){
emampic[0].style.backgroundImage = "url('books-library.net-1605771166-758.jpg')";
url = "https://raw.githubusercontent.com/mohamedreda3/hadith/main/Sunan_al_Darami_Without_Tashkel.csv";
getdata(url,"رواه الدارمى ");
var ddate = "869";
var infos = "الدارمي السمرقندي، حافظ ومفسر ومحدث، من أهل سمرقند. هو أبو محمد، عبد الله بن عبد الرحمن بن الفضّل بن بهرام بن عبد الصمد الدارمي، التميمي، السمرقندي. روى عن ابن عون، ويزيد بن هارون، وغيرهما، وروى عنه: مسلم، وأبو داود، والترمذي، وأبو زرعة، وغيرهم.";
var works ="سنن الدارمي  و  مسند الدارمي المعروف بسنن الدارمي";
imaminformation(works,infos,"797" , ddate , "ولد فى سمرقند وتوفى فى مسقط" , nickname ="الدارمي السمرقندي" , rel = "الإسلام" );
back_g( "#9a9953" );
}
/**********************الدارمى*************************/
}

/************************************************************************/