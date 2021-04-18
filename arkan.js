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