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
