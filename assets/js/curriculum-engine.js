
/* =========================================
   PRO AUDIO MASTER ACADEMY
   CURRICULUM ENGINE v1.0
   Bilingual Academic System
========================================= */

"use strict";

const CurriculumEngine = (() => {

const DB = {

version: "1.0.0",

languages: ["ar", "en"],

levels: [
{
id: 1,
name: {ar:"التأسيس العلمي",en:"Foundation"},
rank: "Beginner",
description: {
ar:"فهم المبادئ الأساسية للصوت والإشارات.",
en:"Understanding the fundamentals of sound and signals."
}
},
{
id: 2,
name: {ar:"مشغل صوت",en:"Audio Operator"},
rank:"Beginner",
description:{
ar:"التعامل مع المعدات الصوتية الأساسية.",
en:"Operating basic audio equipment."
}
},
{
id:3,
name:{ar:"مهندس مزج صوت",en:"Professional Mixer"},
rank:"Intermediate",
description:{
ar:"التحكم في المزج والمعالجة الصوتية.",
en:"Controlling mixing and audio processing."
}
},
{
id:4,
name:{ar:"مهندس صوت رقمي",en:"Digital Engineer"},
rank:"Intermediate",
description:{
ar:"تشغيل المكسرات الرقمية وأنظمة التوجيه.",
en:"Operating digital consoles and routing."
}
},
{
id:5,
name:{ar:"فني أنظمة صوتية",en:"System Technician"},
rank:"Intermediate",
description:{
ar:"تركيب الأنظمة واختبارها وصيانتها.",
en:"Installing, testing and maintaining systems."
}
},
{
id:6,
name:{ar:"مهندس صوتيات",en:"Acoustic Engineer"},
rank:"Advanced",
description:{
ar:"تحليل البيئة الصوتية وتصميم الحلول.",
en:"Analyzing acoustic environments and designing solutions."
}
},
{
id:7,
name:{ar:"مهندس فعاليات",en:"Live Sound Engineer"},
rank:"Advanced",
description:{
ar:"تشغيل الفعاليات والإنتاج الحي.",
en:"Live event sound production."
}
},
{
id:8,
name:{ar:"مهندس متخصص",en:"Specialist Engineer"},
rank:"Advanced",
description:{
ar:"التخصص في التطبيقات المهنية.",
en:"Specializing in professional applications."
}
},
{
id:9,
name:{ar:"مصمم أنظمة",en:"System Designer"},
rank:"Expert",
description:{
ar:"تصميم الأنظمة الصوتية المتكاملة.",
en:"Designing integrated sound systems."
}
},
{
id:10,
name:{ar:"مهندس خبير",en:"Master Engineer"},
rank:"Expert",
description:{
ar:"تنفيذ مشاريع هندسية متقدمة.",
en:"Delivering advanced engineering projects."
}
}
],

colleges: [

{
id:"foundation",
icon:"🌊",
name:{ar:"أساسيات الصوت والفيزياء",en:"Sound Fundamentals & Physics"},
level:1,
modules:[
{
id:"waves",
name:{ar:"الموجات الصوتية",en:"Sound Waves"},
lessons:[
{
id:"F001",
title:{ar:"ما هو الصوت؟",en:"What Is Sound?"},
duration:20,
objectives:{
ar:["فهم طبيعة الصوت","معرفة الوسط الناقل","فهم الموجات الطولية"],
en:["Understand the nature of sound","Identify transmission media","Understand longitudinal waves"]
},
content:{
ar:"الصوت اضطراب ميكانيكي ينتقل عبر وسط مادي. في الهواء ينتشر الصوت على هيئة تضاغطات وتخلخلات. لا ينتقل الصوت في الفراغ.",
en:"Sound is a mechanical disturbance traveling through a medium. In air, sound propagates through compressions and rarefactions. Sound does not travel through a vacuum."
},
practice:{
ar:"ارسم مسار انتقال موجة صوتية من مكبر صوت إلى مستمع.",
en:"Draw how a sound wave travels from a loudspeaker to a listener."
},
quiz:[
{
q:{ar:"هل ينتقل الصوت في الفراغ؟",en:"Does sound travel through a vacuum?"},
options:[
{ar:"نعم",en:"Yes"},
{ar:"لا",en:"No"}
],
answer:1,
explanation:{
ar:"الصوت يحتاج إلى وسط مادي للانتقال.",
en:"Sound requires a physical medium to travel."
}
}
]
},
{
id:"F002",
title:{ar:"التردد والطول الموجي",en:"Frequency and Wavelength"},
duration:25,
objectives:{
ar:["تعريف التردد","حساب الطول الموجي","فهم العلاقة بين التردد والطول الموجي"],
en:["Define frequency","Calculate wavelength","Understand the frequency-wavelength relationship"]
},
content:{
ar:"التردد هو عدد الدورات في الثانية ويقاس بالهرتز. الطول الموجي هو المسافة بين نقطتين متماثلتين متتاليتين في الموجة.",
en:"Frequency is the number of cycles per second, measured in Hertz. Wavelength is the distance between successive corresponding points in a wave."
},
practice:{
ar:"احسب الطول الموجي لتردد 1000Hz عند سرعة صوت 343m/s.",
en:"Calculate the wavelength of a 1000Hz tone at 343m/s."
},
quiz:[
{
q:{ar:"ما وحدة قياس التردد؟",en:"What is the unit of frequency?"},
options:[
{ar:"Watt",en:"Watt"},
{ar:"Hertz",en:"Hertz"},
{ar:"Volt",en:"Volt"}
],
answer:1,
explanation:{
ar:"التردد يقاس بالهرتز.",
en:"Frequency is measured in Hertz."
}
}
]
}
]
},
{
id:"decibels",
name:{ar:"الديسيبل ومستويات الصوت",en:"Decibels and Sound Levels"},
lessons:[
{
id:"F003",
title:{ar:"مقدمة في الديسيبل",en:"Introduction to Decibels"},
duration:30,
objectives:{
ar:["فهم المقياس اللوغاريتمي","التمييز بين dB SPL وdBu وdBV"],
en:["Understand logarithmic scales","Distinguish dB SPL, dBu and dBV"]
},
content:{
ar:"الديسيبل مقياس لوغاريتمي للنسب. لا يمثل كمية مطلقة بمفرده، بل يحتاج إلى مرجع محدد. يستخدم dB SPL لقياس ضغط الصوت.",
en:"The decibel is a logarithmic ratio. It is not an absolute quantity without a reference. dB SPL is used to measure sound pressure level."
},
practice:{
ar:"قارن بين زيادة 3dB وزيادة 6dB في مستوى ضغط الصوت.",
en:"Compare a 3dB increase with a 6dB increase in sound pressure level."
},
quiz:[
{
q:{ar:"ما المرجع القياسي لضغط الصوت في الهواء؟",en:"What is the standard reference for sound pressure in air?"},
options:[
{ar:"20 µPa",en:"20 µPa"},
{ar:"1 Pa",en:"1 Pa"},
{ar:"1 Volt",en:"1 Volt"}
],
answer:0,
explanation:{
ar:"المرجع القياسي هو 20 ميكروباسكال.",
en:"The standard reference is 20 micropascals."
}
}
]
}
]
}
]
},

{
id:"microphones",
icon:"🎙️",
name:{ar:"الميكروفونات والتوصيلات",en:"Microphones & Connections"},
level:2,
modules:[
{
id:"microphone-types",
name:{ar:"أنواع الميكروفونات",en:"Microphone Types"},
lessons:[
{
id:"M001",
title:{ar:"Dynamic vs Condenser",en:"Dynamic vs Condenser"},
duration:30,
objectives:{
ar:["فهم الميكروفون الديناميكي","فهم الميكروفون المكثف","اختيار الميكروفون المناسب"],
en:["Understand dynamic microphones","Understand condenser microphones","Select the correct microphone"]
},
content:{
ar:"الميكروفون الديناميكي يستخدم الحث الكهرومغناطيسي، بينما يعتمد الميكروفون المكثف على تغير السعة الكهربائية. تختلف متطلبات الطاقة والحساسية والتطبيقات.",
en:"Dynamic microphones use electromagnetic induction, while condenser microphones operate through changes in capacitance. Their power requirements, sensitivity and applications differ."
},
practice:{
ar:"اختر ميكروفوناً مناسباً لخطيب في مسجد وفسر اختيارك.",
en:"Select a suitable microphone for a mosque speaker and explain your choice."
},
quiz:[
{
q:{ar:"أي نوع يحتاج غالباً إلى Phantom Power؟",en:"Which type commonly requires phantom power?"},
options:[
{ar:"Dynamic",en:"Dynamic"},
{ar:"Condenser",en:"Condenser"}
],
answer:1,
explanation:{
ar:"كثير من الميكروفونات المكثفة تحتاج إلى Phantom Power، مع وجود استثناءات.",
en:"Many condenser microphones require phantom power, although exceptions exist."
}
}
]
}
]
}
]
},

{
id:"analog",
icon:"🎚️",
name:{ar:"المكسرات التناظرية",en:"Analog Mixing Consoles"},
level:2,
modules:[
{
id:"mixer-basics",
name:{ar:"أساسيات المكسر",en:"Mixer Fundamentals"},
lessons:[
{
id:"A001",
title:{ar:"التعرف على أجزاء المكسر",en:"Understanding Mixer Sections"},
duration:35,
objectives:{
ar:["التعرف على Input Channels","فهم Master Section","فهم مسارات الإشارة"],
en:["Identify input channels","Understand the master section","Understand signal paths"]
},
content:{
ar:"يتكون المكسر عادة من قنوات إدخال، ومعالجة، وإرسال AUX، ومجموعات، وقسم إخراج رئيسي. تختلف التفاصيل باختلاف الموديل.",
en:"A mixer typically includes input channels, processing, auxiliary sends, groups and a master output section. Details vary by model."
},
practice:{
ar:"حدد مسار الإشارة من مدخل الميكروفون حتى Main Out.",
en:"Trace the signal from microphone input to the main output."
},
quiz:[]
}
]
}
]
},

{
id:"dynacord",
icon:"🔴",
name:{ar:"Dynacord CMS وPowerMate",en:"Dynacord CMS & PowerMate"},
level:2,
modules:[
{
id:"cms",
name:{ar:"سلسلة CMS",en:"CMS Series"},
lessons:[
{
id:"D001",
title:{ar:"مقدمة في مكسرات Dynacord CMS",en:"Introduction to Dynacord CMS"},
duration:40,
objectives:{
ar:["فهم تصميم سلسلة CMS","التعرف على قنوات الإدخال","التعرف على قسم Master"],
en:["Understand the CMS series","Identify input channels","Identify the master section"]
},
content:{
ar:"تضم سلسلة Dynacord CMS مكسرات صوتية تناظرية احترافية. يجب دراسة كل إصدار وفق دليل تشغيله الخاص، لأن عدد القنوات والوظائف والتوصيلات تختلف بين الموديلات والأجيال.",
en:"The Dynacord CMS series includes professional analog mixing consoles. Each version must be studied using its own manual because channel counts, features and connections vary between models and generations."
},
practice:{
ar:"افتح صورة لوحة المكسر وحدد قنوات الإدخال وقسم الماستر.",
en:"Inspect a mixer panel image and identify the input channels and master section."
},
quiz:[]
}
]
},
{
id:"powermate",
name:{ar:"سلسلة PowerMate PM",en:"PowerMate Series"},
lessons:[
{
id:"D002",
title:{ar:"مقدمة في PowerMate",en:"Introduction to PowerMate"},
duration:40,
objectives:{
ar:["التمييز بين المكسر العادي والمكسر المزود بمضخم قدرة","فهم مخارج السماعات","التعرف على متطلبات الأحمال"],
en:["Distinguish standard mixers from powered mixers","Understand speaker outputs","Identify load requirements"]
},
content:{
ar:"تجمع أجهزة PowerMate بين المزج الصوتي ومضخمات القدرة في جهاز واحد. يجب مراجعة إصدار الجهاز ودليل الشركة قبل توصيل الأحمال.",
en:"PowerMate units combine audio mixing and power amplification in one device. Always consult the exact model documentation before connecting speaker loads."
},
practice:{
ar:"ارسم مخطط توصيل آمن لمكسر PowerMate مع سماعتين متوافقتين.",
en:"Draw a safe connection diagram for a PowerMate and two compatible speakers."
},
quiz:[]
}
]
}
]
},

{
id:"processing",
icon:"🎛️",
name:{ar:"معالجة الصوت والمؤثرات",en:"Audio Processing & Effects"},
level:3,
modules:[
{
id:"equalization",
name:{ar:"المعادلة الصوتية",en:"Equalization"},
lessons:[
{
id:"P001",
title:{ar:"أساسيات EQ",en:"EQ Fundamentals"},
duration:35,
objectives:{
ar:["فهم نطاقات التردد","استخدام High Pass Filter","فهم Cut وBoost"],
en:["Understand frequency bands","Use high-pass filters","Understand cut and boost"]
},
content:{
ar:"المعادلة الصوتية تغير الاستجابة الترددية للإشارة. يجب التعلم على الاستماع والتحليل، لا على حفظ إعدادات ثابتة.",
en:"Equalization changes the frequency response of a signal. Effective EQ requires listening and analysis rather than memorizing fixed settings."
},
practice:{
ar:"تدرب على إزالة تردد مزعج دون إضعاف وضوح الصوت.",
en:"Practice removing an unwanted frequency without reducing vocal clarity."
},
quiz:[]
}
]
},
{
id:"dynamics",
name:{ar:"المعالجة الديناميكية",en:"Dynamic Processing"},
lessons:[
{
id:"P002",
title:{ar:"Compressor وGate",en:"Compressor and Gate"},
duration:40,
objectives:{
ar:["فهم Threshold","فهم Ratio","فهم Attack وRelease"],
en:["Understand threshold","Understand ratio","Understand attack and release"]
},
content:{
ar:"يستخدم Compressor للتحكم في المجال الديناميكي، بينما يستخدم Gate لتقليل الإشارة عندما تنخفض عن عتبة محددة.",
en:"A compressor controls dynamic range, while a gate reduces signal when it falls below a defined threshold."
},
practice:{
ar:"اضبط Compressor لصوت متحدث مع المحافظة على طبيعية الأداء.",
en:"Set a compressor for a spoken voice while maintaining natural dynamics."
},
quiz:[]
}
]
}
]
},

{
id:"digital",
icon:"💻",
name:{ar:"المكسرات الرقمية",en:"Digital Mixing Consoles"},
level:4,
modules:[
{
id:"digital-basics",
name:{ar:"أساسيات المزج الرقمي",en:"Digital Mixing Basics"},
lessons:[
{
id:"G001",
title:{ar:"Digital Signal Flow",en:"Digital Signal Flow"},
duration:40,
objectives:{
ar:["فهم Digital Routing","التعرف على Buses","فهم Scenes"],
en:["Understand digital routing","Identify buses","Understand scenes"]
},
content:{
ar:"تتيح المكسرات الرقمية توجيه الإشارة ومعالجتها وتخزين إعدادات المشاهد. تختلف بنية التوجيه بين الشركات والموديلات.",
en:"Digital consoles allow signal routing, processing and scene storage. Routing architecture differs across manufacturers and models."
},
practice:{
ar:"أنشئ مخططاً افتراضياً يربط أربع قنوات بأربع مجموعات وMain Bus.",
en:"Create a virtual routing plan connecting four channels to four groups and a main bus."
},
quiz:[]
}
]
}
]
},

{
id:"speakers",
icon:"🔊",
name:{ar:"السماعات والمضخمات",en:"Speakers & Amplifiers"},
level:5,
modules:[
{
id:"speaker-basics",
name:{ar:"مبادئ السماعات",en:"Loudspeaker Fundamentals"},
lessons:[
{
id:"S001",
title:{ar:"Passive vs Active Speakers",en:"Passive vs Active Speakers"},
duration:30,
objectives:{
ar:["التمييز بين السماعة النشطة والسلبية","فهم المضخم الداخلي والخارجي"],
en:["Distinguish active and passive speakers","Understand internal and external amplification"]
},
content:{
ar:"السماعة النشطة تتضمن عادة مضخماً داخلياً، أما السلبية فتحتاج إلى مضخم خارجي مناسب. يجب مراعاة القدرة والممانعة والتوصيلات.",
en:"An active speaker typically includes internal amplification, while a passive speaker requires a suitable external amplifier. Power, impedance and connections must be considered."
},
practice:{
ar:"حدد المعدات المطلوبة لتشغيل زوج من السماعات السلبية.",
en:"Identify the equipment required to operate a pair of passive speakers."
},
quiz:[]
}
]
}
]
},

{
id:"systems",
icon:"📐",
name:{ar:"هندسة الأنظمة الصوتية",en:"Sound System Engineering"},
level:6,
modules:[
{
id:"coverage",
name:{ar:"التغطية الصوتية",en:"Sound Coverage"},
lessons:[
{
id:"E001",
title:{ar:"مقدمة في التغطية الصوتية",en:"Introduction to Sound Coverage"},
duration:45,
objectives:{
ar:["فهم زاوية الانتشار","فهم توزيع السماعات","مقدمة في SPL"],
en:["Understand dispersion angles","Understand speaker distribution","Introduction to SPL"]
},
content:{
ar:"تحدد زاوية انتشار السماعة المنطقة التي يمكن أن تغطيها وفق ظروف التركيب والترددات. لا يكفي النظر إلى زاوية الانتشار وحدها لتقدير التغطية الفعلية.",
en:"A loudspeaker's dispersion describes its coverage pattern under specified conditions. Dispersion angles alone are insufficient to predict real-world coverage."
},
practice:{
ar:"ارسم توزيع سماعتين في قاعة مستطيلة وحدد مناطق التداخل.",
en:"Draw two speakers in a rectangular hall and identify overlap regions."
},
quiz:[]
}
]
}
]
},

{
id:"acoustics",
icon:"🏛️",
name:{ar:"الصوتيات المعمارية",en:"Architectural Acoustics"},
level:6,
modules:[
{
id:"room-acoustics",
name:{ar:"صوتيات الغرف",en:"Room Acoustics"},
lessons:[
{
id:"R001",
title:{ar:"Reverberation وEcho",en:"Reverberation and Echo"},
duration:40,
objectives:{
ar:["التمييز بين الصدى والارتداد","فهم زمن الارتداد RT60"],
en:["Distinguish echo from reverberation","Understand RT60"]
},
content:{
ar:"الارتداد ينتج من تتابع الانعكاسات الصوتية داخل المكان، بينما يكون الصدى انعكاساً منفصلاً يمكن تمييزه. يستخدم RT60 لوصف زمن انخفاض مستوى الصوت 60dB بعد توقف المصدر.",
en:"Reverberation results from successive sound reflections in a space, while an echo is a distinguishable reflected sound. RT60 describes the time for sound level to decay by 60dB after the source stops."
},
practice:{
ar:"قارن بين قاعة ذات أسطح رخامية وقاعة تحتوي على مواد ماصة للصوت.",
en:"Compare a marble-finished hall with a room containing sound-absorbing materials."
},
quiz:[]
}
]
}
]
},

{
id:"live",
icon:"🎤",
name:{ar:"الفعاليات والإنتاج الحي",en:"Live Sound & Event Production"},
level:7,
modules:[
{
id:"concert",
name:{ar:"الحفلات الموسيقية",en:"Concert Production"},
lessons:[
{
id:"L0010",
title:{ar:"التخطيط الصوتي للحفلات",en:"Concert Sound Planning"},
duration:50,
objectives:{
ar:["إعداد Stage Plot","إعداد Input List","التخطيط لـ FOH وMonitors"],
en:["Prepare a stage plot","Prepare an input list","Plan FOH and monitors"]
},
content:{
ar:"يبدأ إنتاج الحفلات بالتخطيط للمسرح والمدخلات ومواقع السماعات ومناطق الجمهور والقدرة الكهربائية والسلامة.",
en:"Concert production starts with planning the stage, inputs, speaker positions, audience areas, electrical supply and safety."
},
practice:{
ar:"أنشئ Input List لفرقة موسيقية تتكون من ثمانية أفراد.",
en:"Create an input list for an eight-member band."
},
quiz:[]
}
]
}
]
},

{
id:"venues",
icon:"🕌",
name:{ar:"المساجد والقاعات",en:"Mosques & Auditoriums"},
level:8,
modules:[
{
id:"mosques",
name:{ar:"هندسة صوت المساجد",en:"Mosque Sound Engineering"},
lessons:[
{
id:"MS001",
title:{ar:"تصميم نظام صوت مسجد",en:"Designing a Mosque Sound System"},
duration:50,
objectives:{
ar:["تحليل أبعاد المسجد","اختيار نوع السماعات","تحقيق وضوح الكلام","تقسيم مناطق الصوت"],
en:["Analyze mosque dimensions","Select loudspeaker types","Achieve speech intelligibility","Design audio zones"]
},
content:{
ar:"يجب أن يبدأ تصميم صوت المسجد بتحليل المساحة والارتفاع والأسطح ومواضع المصلين ومناطق الإمام والخطيب. الهدف هو وضوح الكلام وتجانس التغطية مع التحكم في الصدى والتغذية الراجعة.",
en:"Mosque sound design begins by analyzing dimensions, ceiling height, surfaces, worshipper positions, and imam and preacher locations. The goal is speech intelligibility and consistent coverage while controlling reverberation and feedback."
},
practice:{
ar:"صمم توزيعاً أولياً لمسجد مستطيل، وحدد مناطق الرجال والنساء والإمام.",
en:"Create an initial speaker layout for a rectangular mosque, identifying men's, women's and imam zones."
},
quiz:[]
}
]
},
{
id:"halls",
name:{ar:"القاعات والمؤتمرات",en:"Halls & Conferences"},
lessons:[
{
id:"H001",
title:{ar:"أنظمة صوت قاعات الاجتماعات",en:"Meeting Room Audio Systems"},
duration:45,
objectives:{
ar:["اختيار ميكروفونات المؤتمرات","توزيع السماعات","تقليل التغذية الراجعة"],
en:["Select conference microphones","Distribute speakers","Reduce feedback"]
},
content:{
ar:"يتطلب نظام قاعة الاجتماعات وضوح الكلام وتغطية متوازنة وتنسيقاً بين الميكروفونات والسماعات والتحكم.",
en:"A meeting room system requires speech intelligibility, balanced coverage and coordination between microphones, loudspeakers and control systems."
},
practice:{
ar:"أنشئ قائمة معدات لقاعة اجتماع تضم 20 مشاركاً.",
en:"Create an equipment list for a 20-person meeting room."
},
quiz:[]
}
]
}
]
},

{
id:"network",
icon:"🌐",
name:{ar:"الشبكات الصوتية وأنظمة AV",en:"Audio Networking & AV"},
level:9,
modules:[
{
id:"dante",
name:{ar:"Dante والشبكات الصوتية",en:"Dante & Audio Networking"},
lessons:[
{
id:"N001",
title:{ar:"مقدمة في Audio over IP",en:"Introduction to Audio over IP"},
duration:45,
objectives:{
ar:["فهم Audio over IP","التعرف على الشبكات","فهم متطلبات التزامن"],
en:["Understand audio over IP","Understand network fundamentals","Understand synchronization requirements"]
},
content:{
ar:"تتيح تقنيات Audio over IP نقل الإشارات الصوتية عبر شبكات البيانات. يتطلب التصميم مراعاة عرض النطاق والتوقيت والتزامن وإعدادات الشبكة.",
en:"Audio over IP technologies transport audio over data networks. Design must account for bandwidth, timing, synchronization and network configuration."
},
practice:{
ar:"ارسم مخططاً يربط مكسرين رقميين عبر شبكة صوتية.",
en:"Draw a diagram connecting two digital consoles over an audio network."
},
quiz:[]
}
]
}
]
}

]

};

/* =========================================
   HELPERS
========================================= */

function getColleges(){
 return DB.colleges;
}

function getCollege(id){
 return DB.colleges.find(c=>c.id===id)||null;
}

function getLevels(){
 return DB.levels;
}

function getLesson(id){
 for(const college of DB.colleges){
  for(const module of college.modules){
   const lesson=module.lessons.find(l=>l.id===id);
   if(lesson){
    return {lesson,module,college};
   }
  }
 }
 return null;
}

function getAllLessons(){
 const result=[];
 DB.colleges.forEach(college=>{
  college.modules.forEach(module=>{
   module.lessons.forEach(lesson=>{
    result.push({lesson,module,college});
   });
  });
 });
 return result;
}

function getLocalized(object,lang){
 return object?.[lang] ?? object?.en ?? "";
}

function search(query,lang="ar"){
 const q=query.toLowerCase();
 return getAllLessons().filter(item=>{
  const title=getLocalized(item.lesson.title,lang);
  const module=getLocalized(item.module.name,lang);
  const college=getLocalized(item.college.name,lang);
  return [title,module,college].some(v=>
   String(v).toLowerCase().includes(q)
  );
 });
}

return {
 DB,
 getColleges,
 getCollege,
 getLevels,
 getLesson,
 getAllLessons,
 getLocalized,
 search
};

})();
