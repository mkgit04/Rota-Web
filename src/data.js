import developerImage from "./assets/developer.jpg";

export const navigation = [
  ["home", "Home", "الرئيسية"],
  ["features", "Features", "المزايا"],
  ["tickets", "Tickets", "التذاكر"],
  ["how-it-works", "How it works", "كيف يعمل"],
  ["faq", "FAQ", "الأسئلة"],
  ["support", "Support", "الدعم"],
  ["about", "About", "عن روتا"],
  ["download", "Download", "التحميل"],
];

export const features = [
  ["Browse lines & stations", "تصفح الخطوط والمحطات"],
  ["Search stations by name", "البحث عن المحطات بالاسم"],
  ["Plan origin → destination", "تخطيط الرحلة من البداية للوجهة"],
  ["Automatic fare calculation", "حساب الأجرة تلقائيًا"],
  ["Full route and transfer stations", "المسار الكامل ومحطات التبديل"],
  ["Estimated journey duration", "المدة التقديرية للرحلة"],
  ["Find the nearest station", "أقرب محطة إليك"],
  ["Navigate to a station", "التنقل إلى محطة"],
  ["Start and stop a live trip", "بدء وإنهاء رحلة مباشرة"],
  ["Current station, next station, progress", "المحطة الحالية والتالية والتقدم"],
  ["Ongoing trip notification", "إشعار مستمر أثناء الرحلة"],
  ["Arabic/English and light/dark", "عربي/إنجليزي ووضع فاتح/داكن"],
];

export const downloadLinks = [
  { platform: "ApkPure", icon: "android", url: "https://apkpure.com/rota/com.mk.rota#google_vignette" },
  { platform: "Android", icon: "android", url: "" },
  { platform: "iOS", icon: "ios", url: "" },
];

export const contacts = [
  { label: "Email", labelAr: "البريد الإلكتروني", icon: "email", value: "support.rota@gmail.com" },
  { label: "Phone", labelAr: "الهاتف", icon: "phone", value: "" },
  { label: "WhatsApp", labelAr: "واتساب", icon: "whatsapp", value: "" },
  { label: "Instagram", labelAr: "إنستغرام", icon: "instagram", value: "https://www.instagram.com/rota.metro/" },
  { label: "Facebook", labelAr: "فيسبوك", icon: "facebook", value: "https://www.facebook.com/people/Rota-Metro-App/61596184497860/" },
];

export const developer = {
  name: "Mohammed Khattab",
  nameAr: "محمد خطاب",

  image: developerImage,
  imageAlt: "Mohammed Khattab - Software Developer",
  imageAltAr: "محمد خطاب - مطوّر برمجيات",

  role: "Software Engineer | Flutter Developer",
  roleAr: "مهندس برمجيات | مطوّر Flutter",

  bio: "A software developer passionate about building modern, user-friendly mobile applications. Focused on creating practical solutions through clean architecture, thoughtful design, and innovative technologies.",

  bioAr: "مطوّر برمجيات شغوف ببناء تطبيقات جوّال عصرية وسهلة الاستخدام. أهتم بتقديم حلول عملية من خلال كتابة كود منظم، وتصميم تجارب استخدام مميزة، وتوظيف التقنيات الحديثة.",

  email: "mhmd.ahmd.khattab@gmail.com",
  website: "https://mkgit04.github.io",
  github: "https://github.com/mkgit04",
  linkedin: "https://www.linkedin.com/in/mohammed-mk-khattab",
};
export const developerLinks = [
  { field: "email", label: "Email", labelAr: "البريد الإلكتروني", icon: "email" },
  { field: "website", label: "Website", labelAr: "الموقع الإلكتروني", icon: "website" },
  { field: "github", label: "GitHub", labelAr: "GitHub", icon: "github" },
  { field: "linkedin", label: "LinkedIn", labelAr: "LinkedIn", icon: "linkedin" },
];

export const gpsNotice = [
  "GPS can be weak or unavailable underground, so station detection may be interrupted. Background tracking depends on permissions, battery settings and system limits, and is not guaranteed after the operating system closes the app.",
  "قد تضعف إشارة GPS أو تنقطع تحت الأرض، لذلك قد يتوقف اكتشاف المحطات. يعتمد التتبع في الخلفية على الأذونات وإعدادات البطارية وقيود النظام، ولا يُضمن بعد إغلاق النظام للتطبيق.",
];


export const faqItems = [
  [
    "What is Rota?",
    "Rota is an independent mobile app that helps you explore Cairo Metro, plan journeys, calculate fares, find the nearest station, and track your trips.",
    "ما هو روتا؟",
    "روتا تطبيق مستقل يساعدك على استكشاف مترو القاهرة وتخطيط رحلاتك وحساب الأجرة والعثور على أقرب محطة ومتابعة رحلاتك."
  ],
  [
    "Can I explore all Cairo Metro stations?",
    "Yes. You can browse metro lines, explore their stations, and view station information to help plan your journey.",
    "هل يمكنني استكشاف جميع محطات مترو القاهرة؟",
    "نعم. يمكنك تصفح خطوط المترو واستكشاف محطاتها والاطلاع على معلوماتها لمساعدتك في تخطيط رحلتك."
  ],
  [
    "Can I calculate metro fares?",
    "Yes. Rota calculates fares for supported journeys based on the fare rules available in the app. Always verify the latest official fare before travelling.",
    "هل يمكنني حساب أجرة المترو؟",
    "نعم. يحسب روتا أجرة الرحلات المدعومة وفق قواعد الأجرة المتاحة في التطبيق. يُرجى التأكد من الأسعار الرسمية قبل السفر."
  ],
  [
    "How can I find the nearest metro station?",
    "Allow location access, and Rota will help you find the nearest station and estimate the walking distance and time.",
    "كيف يمكنني العثور على أقرب محطة مترو؟",
    "اسمح للتطبيق بالوصول إلى موقعك، وسيساعدك روتا في العثور على أقرب محطة وتقدير مسافة ووقت المشي إليها."
  ],
  [
    "Does walking navigation work offline?",
    "Rota can calculate walking distance and estimated walking time locally using available station coordinates, without relying on an external navigation API.",
    "هل تعمل حسابات المشي دون إنترنت؟",
    "يمكن لروتا حساب مسافة المشي والوقت المتوقع محليًا باستخدام إحداثيات المحطات المتاحة، دون الاعتماد على واجهة برمجية خارجية للملاحة."
  ],
  [
    "Does Rota track my trip live?",
    "Yes. During an active trip, Rota can help you follow your journey by showing your current station, next station, and trip progress. Accuracy depends on location data and device conditions.",
    "هل يتتبع روتا رحلتي مباشرة؟",
    "نعم. أثناء الرحلة النشطة، يساعدك روتا على متابعة رحلتك من خلال عرض المحطة الحالية والمحطة التالية وتقدم الرحلة. وتعتمد الدقة على بيانات الموقع وظروف الجهاز."
  ],
  [
    "Does live tracking work underground?",
    "GPS signals may become weak or unavailable underground. Rota includes some handling for GPS signal loss, but continuous and fully accurate tracking cannot be guaranteed.",
    "هل يعمل التتبع المباشر تحت الأرض؟",
    "قد تضعف إشارات GPS أو تنقطع تحت الأرض. يتضمن روتا بعض آليات التعامل مع فقدان الإشارة، لكن لا يمكن ضمان تتبع مستمر ودقيق بالكامل."
  ],
  [
    "Does trip tracking continue in the background?",
    "Rota is designed to continue tracking during an active trip when the required permissions and device conditions allow it. Battery optimization and system restrictions may interrupt tracking.",
    "هل يستمر تتبع الرحلة في الخلفية؟",
    "تم تصميم روتا لمواصلة التتبع أثناء الرحلة النشطة عندما تسمح الأذونات المطلوبة وظروف الجهاز بذلك. وقد تؤثر إعدادات توفير البطارية وقيود النظام على استمرار التتبع."
  ],
  [
    "Does tracking continue if I force-close the app?",
    "Reliable tracking after force-closing or terminating the app is not guaranteed. For the best experience, keep the app running during your trip.",
    "هل يستمر التتبع إذا أغلقت التطبيق قسرًا؟",
    "لا يمكن ضمان استمرار التتبع بشكل موثوق بعد إغلاق التطبيق قسرًا أو إنهائه. للحصول على أفضل تجربة، اترك التطبيق يعمل أثناء رحلتك."
  ],
  [
    "Can I view my previous trips?",
    "Yes. Rota saves your trip history locally so you can review your previous journeys.",
    "هل يمكنني عرض رحلاتي السابقة؟",
    "نعم. يحفظ روتا سجل رحلاتك محليًا حتى تتمكن من مراجعة رحلاتك السابقة."
  ],
  [
    "Can I save my favourite trips?",
    "Yes. You can mark trips as favourites to make them easier to find and use again later.",
    "هل يمكنني حفظ رحلاتي المفضلة؟",
    "نعم. يمكنك إضافة الرحلات إلى المفضلة لتسهيل الوصول إليها واستخدامها مرة أخرى لاحقًا."
  ],
  [
    "Can I start a previous trip again?",
    "Yes. You can use the retrip option in your trip history to quickly plan the same journey again.",
    "هل يمكنني إعادة رحلة سابقة؟",
    "نعم. يمكنك استخدام خيار إعادة الرحلة من سجل رحلاتك لتخطيط الرحلة نفسها مرة أخرى بسهولة."
  ],
  [
    "Does Rota require an account?",
    "Rota is currently designed to work without traditional account registration. Check the final app release for any changes.",
    "هل يتطلب روتا إنشاء حساب؟",
    "تم تصميم روتا حاليًا للعمل دون الحاجة إلى إنشاء حساب تقليدي. يُرجى مراجعة الإصدار النهائي لمعرفة أي تغييرات."
  ],
  [
    "Does Rota support Arabic and English?",
    "Yes. You can use Rota in both Arabic and English.",
    "هل يدعم روتا اللغتين العربية والإنجليزية؟",
    "نعم. يمكنك استخدام روتا باللغتين العربية والإنجليزية."
  ],
  [
    "Can I change the app theme?",
    "Yes. Rota supports light and dark themes.",
    "هل يمكنني تغيير مظهر التطبيق؟",
    "نعم. يدعم روتا المظهر الفاتح والمظهر الداكن."
  ],
  [
    "Does Rota provide live metro service alerts?",
    "No. Live metro service announcements and disruption alerts are not currently available in Rota.",
    "هل يوفر روتا تنبيهات مباشرة عن حالة المترو؟",
    "لا. لا يوفر روتا حاليًا إعلانات مباشرة عن حالة الخدمة أو تنبيهات الأعطال والتأخيرات."
  ],
  [
    "Does Rota sell metro tickets or accept payments?",
    "No. Rota is an informational and journey-planning app. It does not sell tickets, process payments, or open metro gates.",
    "هل يبيع روتا تذاكر المترو أو يستقبل المدفوعات؟",
    "لا. روتا تطبيق للمعلومات وتخطيط الرحلات، ولا يبيع التذاكر أو يعالج المدفوعات أو يفتح بوابات المترو."
  ],
  [
    "How can I send feedback or report a problem?",
    "Use the Support page to send suggestions or report an issue. Your message is saved to Rota's support Google Sheet.",
    "كيف يمكنني إرسال ملاحظات أو الإبلاغ عن مشكلة؟",
    "استخدم صفحة الدعم لإرسال اقتراحاتك أو الإبلاغ عن مشكلة. تُحفظ رسالتك في جدول بيانات دعم روتا على Google."
  ],
  [
    "Is Rota officially affiliated with Cairo Metro?",
    "No. Rota is an independent project and is not affiliated with, operated by, or officially endorsed by the Cairo Metro operator or the National Authority for Tunnels.",
    "هل روتا تابع رسميًا لمترو القاهرة؟",
    "لا. روتا مشروع مستقل، ولا يتبع أو يُدار بواسطة جهة تشغيل مترو القاهرة أو الهيئة القومية للأنفاق، كما أنه غير معتمد رسميًا من أي منهما."
  ]
];

export const howItWorks = [
  ["Open Rota and explore lines", "افتح روتا واستكشف الخطوط"],
  ["Search a station or choose origin and destination", "ابحث عن محطة أو اختر البداية والوجهة"],
  ["Review route, transfers, fare and duration", "راجع المسار والتبديل والأجرة والمدة"],
  ["Find and navigate to a nearby station", "اعثر على محطة قريبة وتوجّه إليها"],
  ["Start a live trip when boarding", "ابدأ رحلة مباشرة عند الركوب"],
  ["Follow current station, next station and progress", "تابع المحطة الحالية والتالية والتقدم"],
  ["Stop the trip when finished", "أنهِ الرحلة عند الوصول"],
];


export const privacySections = [
  [
    "Introduction and scope",
    "Rota is an independent application designed to help users navigate Cairo Metro. This Privacy Policy explains what information may be processed when using the application, why it is processed, and how it is handled. For questions or privacy requests, contact ",
    "المقدمة والنطاق",
    "روتا تطبيق مستقل مصمم لمساعدة المستخدمين على التنقل باستخدام مترو القاهرة. توضح سياسة الخصوصية هذه المعلومات التي قد تتم معالجتها عند استخدام التطبيق، وأسباب معالجتها، وكيفية التعامل معها. للاستفسارات أو طلبات الخصوصية، يُرجى التواصل عبر: ",
  ],
  [
    "Information processed",
    "Depending on the features you use, Rota may process: device location to identify nearby stations, calculate walking distances and estimated walking times, and support active-trip tracking; trip information such as starting and destination stations, trip dates, status and journey progress; locally stored data such as trip history, favourite trips, language and theme preferences; and support messages you submit, including your email address and any optional name or device details. The use of analytics, crash reporting and other diagnostic services, as well as whether location data is transmitted outside your device, must be confirmed before publication.",
    "المعلومات التي تتم معالجتها",
    "وفقًا للمزايا التي تستخدمها، قد يعالج روتا: موقع الجهاز لتحديد أقرب المحطات وحساب مسافات وأوقات المشي المتوقعة ودعم تتبع الرحلات النشطة؛ ومعلومات الرحلات مثل محطات البداية والوجهة وتواريخ الرحلات وحالتها ومدى التقدم فيها؛ والبيانات المحفوظة محليًا مثل سجل الرحلات والرحلات المفضلة وتفضيلات اللغة والمظهر؛ ورسائل الدعم التي ترسلها، بما فيها بريدك الإلكتروني وأي اسم أو تفاصيل جهاز اختيارية. يجب التأكد قبل النشر من استخدام خدمات التحليلات وتقارير الأعطال والتشخيص، وما إذا كانت بيانات الموقع تُرسل خارج جهازك.",
  ],
  [
    "How information is used",
    "Information is processed to identify nearby metro stations, calculate walking distances and estimated travel times, explore metro lines and plan routes, calculate estimated fares, track active journeys and their progress, maintain trip history and favourites, remember application preferences, deliver requested notifications, and receive and respond to user feedback.",
    "كيف تُستخدم المعلومات",
    "تُعالج المعلومات لتحديد محطات المترو القريبة، وحساب مسافات المشي وأوقاته المتوقعة، واستكشاف خطوط المترو وتخطيط المسارات، وحساب الأجرة التقديرية، وتتبع الرحلات النشطة ومدى التقدم فيها، والاحتفاظ بسجل الرحلات والمفضلة، وحفظ تفضيلات التطبيق، وإرسال الإشعارات المطلوبة، واستقبال ملاحظات المستخدمين والرد عليها.",
  ],
  [
    "Location permissions and background tracking",
    "Location permission is required for location-based features such as finding nearby stations and tracking an active trip. If background location access is enabled and granted, Rota may receive location updates while an active trip is in progress, including when the application is not in the foreground. You can manage location permissions through your device settings. Disabling location access may limit these features. Location accuracy and availability may be affected by GPS reception, network conditions, device settings and underground environments.",
    "أذونات الموقع والتتبع في الخلفية",
    "يلزم السماح بالوصول إلى الموقع لاستخدام المزايا المعتمدة عليه، مثل العثور على المحطات القريبة وتتبع الرحلة النشطة. إذا كانت صلاحية الموقع في الخلفية مفعّلة وممنوحة، فقد يستقبل روتا تحديثات الموقع أثناء الرحلة النشطة حتى عندما لا يكون التطبيق مفتوحًا في الواجهة. يمكنك إدارة أذونات الموقع من إعدادات جهازك. وقد يؤدي تعطيل الوصول إلى الموقع إلى تقييد هذه المزايا. وقد تتأثر دقة الموقع وتوافره باستقبال GPS وظروف الشبكة وإعدادات الجهاز والوجود تحت الأرض.",
  ],
  [
    "Data storage and local trip information",
    "Trip history, favourite trips and application preferences may be stored locally on your device. The retention and deletion of any information processed by external services depend on the applicable service and its configuration. The exact storage and deletion behavior of each service must be confirmed before publication.",
    "تخزين البيانات ومعلومات الرحلات المحلية",
    "قد يُحفظ سجل الرحلات والرحلات المفضلة وتفضيلات التطبيق محليًا على جهازك. وتعتمد مدة الاحتفاظ بأي معلومات تتم معالجتها بواسطة خدمات خارجية وإمكانية حذفها على الخدمة وإعداداتها. يجب التأكد من تفاصيل التخزين والحذف الخاصة بكل خدمة قبل النشر.",
  ],
  [
    "Legal basis and permissions",
    "Device permissions, including location and notifications, are requested to enable the relevant application features. These technical permissions are distinct from any consent or other legal basis required under applicable privacy laws. The applicable legal bases will be specified following verification.",
    "الأساس القانوني والأذونات",
    "تُطلب أذونات الجهاز، بما في ذلك الموقع والإشعارات، لتفعيل مزايا التطبيق ذات الصلة. وتختلف هذه الأذونات التقنية عن أي موافقة أو أساس قانوني آخر قد تتطلبه قوانين الخصوصية المعمول بها. سيتم تحديد الأسس القانونية المنطبقة بعد التحقق منها.",
  ],
  [
    "Third-party services",
    "Rota uses Google Apps Script and Google Sheets to receive and store support messages submitted through the support form. Google processes this information under its applicable privacy terms. Other Firebase services, including push notifications and any analytics or crash reporting tools, must be identified and confirmed before this policy is finalized.",
    "خدمات الأطراف الثالثة",
    "يستخدم روتا Google Apps Script وGoogle Sheets لاستقبال رسائل الدعم المرسلة عبر نموذج الدعم وتخزينها. وتعالج Google هذه المعلومات وفقًا لشروط الخصوصية المعمول بها لديها. يجب تحديد خدمات Firebase الأخرى المستخدمة، بما في ذلك الإشعارات الفورية وأي أدوات للتحليلات أو تقارير الأعطال، والتأكد منها قبل اعتماد هذه السياسة.",
  ],
  [
    "Sharing and disclosure",
    "Rota does not describe information as shared with third parties unless the relevant service integrations and data flows have been verified. Information may be processed by service providers necessary to operate application features or disclosed when required by applicable law. The exact categories of recipients and information involved will be specified after verification.",
    "مشاركة المعلومات والإفصاح عنها",
    "لا يصف روتا المعلومات بأنها تتم مشاركتها مع أطراف ثالثة إلا بعد التحقق من تكامل الخدمات وتدفقات البيانات ذات الصلة. وقد تتم معالجة المعلومات بواسطة مزودي الخدمات اللازمين لتشغيل مزايا التطبيق، أو الإفصاح عنها إذا كان ذلك مطلوبًا بموجب القانون المعمول به. سيتم تحديد فئات الجهات المستلمة وأنواع المعلومات المعنية بعد التحقق.",
  ],
  [
    "Retention and deletion",
    "Information stored locally may remain on your device until you delete it, clear the application data or uninstall the application, subject to the application's storage implementation. Support messages are stored in Rota's Google Sheet until they are deleted by the support team. Other information processed by third-party providers is subject to their retention policies and applicable configurations.",
    "الاحتفاظ بالبيانات وحذفها",
    "قد تظل المعلومات المحفوظة محليًا على جهازك حتى تقوم بحذفها أو مسح بيانات التطبيق أو إلغاء تثبيته، وذلك وفقًا لطريقة تنفيذ التخزين داخل التطبيق. وتُحفظ رسائل الدعم في جدول بيانات روتا على Google حتى يحذفها فريق الدعم. أما المعلومات الأخرى التي تعالجها الجهات الخارجية فتخضع لسياسات الاحتفاظ وإعدادات تلك الجهات.",
  ],
  [
    "Security",
    "Reasonable technical and organizational measures are used to help protect information. However, no method of electronic storage or transmission is completely secure, and absolute security cannot be guaranteed.",
    "أمان المعلومات",
    "يتم اتخاذ تدابير تقنية وتنظيمية معقولة للمساعدة في حماية المعلومات. ومع ذلك، لا توجد وسيلة تخزين أو نقل إلكتروني آمنة تمامًا، ولا يمكن ضمان الأمان المطلق.",
  ],
  [
    "Children's privacy",
    "The intended minimum age for using Rota and any additional requirements relating to children's personal information must be confirmed before publication. The application should not be used by individuals who are not permitted to use it under applicable law.",
    "خصوصية الأطفال",
    "يجب التأكد قبل النشر من الحد الأدنى للعمر المسموح به لاستخدام روتا وأي متطلبات إضافية تتعلق بالمعلومات الشخصية للأطفال. ولا ينبغي استخدام التطبيق من قبل الأشخاص غير المسموح لهم بذلك وفقًا للقانون المعمول به.",
  ],
  [
    "International data processing",
    "Third-party service providers may process information on servers located in different countries. Whether international data transfers occur depends on the providers and configurations used by Rota and must be confirmed.",
    "المعالجة الدولية للبيانات",
    "قد يعالج مزودو الخدمات الخارجية المعلومات على خوادم موجودة في دول مختلفة. ويعتمد حدوث أي نقل دولي للبيانات على مزودي الخدمات والإعدادات المستخدمة في روتا، ويجب التأكد من ذلك.",
  ],
  [
    "Your privacy rights",
    "Subject to applicable law, you may have the right to request access to, correction of or deletion of your personal information, or to object to certain processing activities. You may also manage application permissions through your device settings. For privacy-related requests, contact ",
    "حقوقك المتعلقة بالخصوصية",
    "وفقًا للقانون المعمول به، قد يكون من حقك طلب الوصول إلى معلوماتك الشخصية أو تصحيحها أو حذفها، أو الاعتراض على بعض أنشطة المعالجة. ويمكنك أيضًا إدارة أذونات التطبيق من إعدادات جهازك. لطلبات الخصوصية، يُرجى التواصل عبر: ",
  ],
  [
    "Changes and contact",
    "This Privacy Policy may be updated when application features, services or legal requirements change. Any updates will be published on this page with a revised effective date. For questions about this policy, contact ",
    "التغييرات والتواصل",
    "قد يتم تحديث سياسة الخصوصية عند تغيير مزايا التطبيق أو الخدمات المستخدمة أو المتطلبات القانونية. وسيتم نشر أي تحديثات على هذه الصفحة مع تعديل تاريخ السريان. للاستفسارات المتعلقة بهذه السياسة، يُرجى التواصل عبر: ",
  ],
];

export const termsSections = [
  [
    "Acceptance of terms",
    "By downloading, accessing or using Rota, you acknowledge that you have read and agree to these Terms of Service. If you do not agree with these terms, please discontinue using the application.",
    "قبول الشروط",
    "بتنزيل روتا أو الوصول إليه أو استخدامه، فإنك تقر بأنك قرأت شروط الاستخدام هذه وتوافق عليها. إذا كنت لا توافق على هذه الشروط، يُرجى التوقف عن استخدام التطبيق.",
  ],
  [
    "Description of the application",
    "Rota is an independent application designed to help users explore Cairo Metro, discover stations and lines, plan journeys, calculate estimated fares, find nearby stations, estimate walking distances and times, track active trips, maintain trip history and save favourite trips.",
    "وصف التطبيق",
    "روتا تطبيق مستقل مصمم لمساعدة المستخدمين على استكشاف مترو القاهرة والتعرف على المحطات والخطوط وتخطيط الرحلات وحساب الأجرة التقديرية والعثور على المحطات القريبة وتقدير مسافات وأوقات المشي وتتبع الرحلات النشطة والاحتفاظ بسجل الرحلات وحفظ الرحلات المفضلة.",
  ],
  [
    "Permitted use",
    "You agree to use Rota only for lawful personal purposes. You must not misuse the application, interfere with its operation, attempt unauthorized access, reverse engineer or exploit its services in violation of applicable laws.",
    "الاستخدام المسموح",
    "توافق على استخدام روتا للأغراض الشخصية والمشروعة فقط. ويُحظر إساءة استخدام التطبيق أو التدخل في تشغيله أو محاولة الوصول غير المصرح به إليه أو إجراء هندسة عكسية أو استغلال خدماته بما يخالف القوانين المعمول بها.",
  ],
  [
    "Accuracy of routes, fares and estimates",
    "Station information, routes, walking distances, estimated walking times, trip durations and fares are provided for guidance only. They may be inaccurate, incomplete or outdated and may differ from official Cairo Metro information. Always check official announcements, signs and fare information before making travel decisions.",
    "دقة المسارات والأجرة والتقديرات",
    "تُقدم معلومات المحطات والمسارات ومسافات المشي وأوقاته المتوقعة ومدد الرحلات والأجرة لأغراض إرشادية فقط. وقد تكون غير دقيقة أو غير مكتملة أو غير محدثة، وقد تختلف عن المعلومات الرسمية لمترو القاهرة. يُرجى دائمًا مراجعة الإعلانات واللافتات ومعلومات الأجرة الرسمية قبل اتخاذ قرارات السفر.",
  ],
  [
    "Location and trip tracking",
    "Location-based features require appropriate device permissions. Trip tracking and walking navigation may be affected by GPS accuracy, device hardware, network availability, battery optimization and environmental conditions. Location signals may be weak or unavailable inside metro stations and underground areas. Rota must not be treated as a guaranteed real-time tracking or navigation service.",
    "الموقع وتتبع الرحلات",
    "تتطلب المزايا المعتمدة على الموقع منح أذونات الجهاز المناسبة. وقد يتأثر تتبع الرحلات والمشي بدقة GPS ومكونات الجهاز وتوافر الشبكة وتحسين استهلاك البطارية والظروف المحيطة. وقد تكون إشارات الموقع ضعيفة أو غير متاحة داخل محطات المترو والمناطق تحت الأرض. ولا ينبغي اعتبار روتا خدمة مضمونة للتتبع أو الملاحة في الوقت الفعلي.",
  ],
  [
    "Background operation and notifications",
    "Some features may require background location access or notification permissions. Their availability depends on your device, operating system, battery settings and granted permissions. The application cannot guarantee uninterrupted background tracking or delivery of every notification.",
    "التشغيل في الخلفية والإشعارات",
    "قد تتطلب بعض المزايا السماح بالوصول إلى الموقع في الخلفية أو منح أذونات الإشعارات. ويعتمد توفرها على الجهاز ونظام التشغيل وإعدادات البطارية والأذونات الممنوحة. ولا يضمن التطبيق استمرار التتبع في الخلفية دون انقطاع أو وصول جميع الإشعارات.",
  ],
  [
    "Trip history and favourites",
    "Trip history and favourite trips are provided to help you organize and revisit your journeys. Their availability and persistence depend on the application's storage implementation and device data. You are responsible for maintaining any information you wish to keep.",
    "سجل الرحلات والرحلات المفضلة",
    "يتم توفير سجل الرحلات والرحلات المفضلة لمساعدتك على تنظيم رحلاتك والرجوع إليها. ويعتمد توفرها واستمرار حفظها على آلية التخزين في التطبيق وبيانات الجهاز. وتقع على عاتقك مسؤولية الاحتفاظ بأي معلومات ترغب في عدم فقدانها.",
  ],
  [
    "Device and operating system dependencies",
    "Application functionality may depend on your device capabilities, operating system version, internet connectivity, location services, permissions and system restrictions. Certain features may not work as expected on all devices.",
    "الاعتماد على الجهاز ونظام التشغيل",
    "قد تعتمد وظائف التطبيق على إمكانيات جهازك وإصدار نظام التشغيل والاتصال بالإنترنت وخدمات الموقع والأذونات وقيود النظام. وقد لا تعمل بعض المزايا بالشكل المتوقع على جميع الأجهزة.",
  ],
  [
    "Third-party services",
    "Rota may use third-party services to provide certain features, including feedback forms, notifications and other integrations. These services are subject to their own terms and privacy policies. Rota is not responsible for independent third-party services beyond the extent required by applicable law.",
    "خدمات الأطراف الثالثة",
    "قد يستخدم روتا خدمات خارجية لتوفير بعض المزايا، بما في ذلك نماذج الملاحظات والإشعارات والتكاملات الأخرى. وتخضع هذه الخدمات لشروط الاستخدام وسياسات الخصوصية الخاصة بها. ولا يتحمل روتا مسؤولية الخدمات الخارجية المستقلة إلا في الحدود التي يفرضها القانون المعمول به.",
  ],
  [
    "Independent application and affiliation",
    "Rota is an independent application. It is not affiliated with, operated by, sponsored by or officially endorsed by Cairo Metro or the National Authority for Tunnels.",
    "التطبيق المستقل وعدم التبعية",
    "روتا تطبيق مستقل، ولا يتبع مترو القاهرة أو الهيئة القومية للأنفاق، ولا يتم تشغيله أو رعايته أو اعتماده رسميًا من قبلهما.",
  ],
  [
    "Intellectual property",
    "Unless otherwise stated, the Rota application, its original design, branding, graphics, software and content are protected by applicable intellectual property laws. You may not copy, distribute, modify or commercially exploit these materials without the required authorization.",
    "الملكية الفكرية",
    "ما لم يُذكر خلاف ذلك، فإن تطبيق روتا وتصميمه الأصلي وهويته البصرية ورسوماته وبرمجياته ومحتواه محمية بموجب قوانين الملكية الفكرية المعمول بها. ولا يجوز نسخ هذه المواد أو توزيعها أو تعديلها أو استغلالها تجاريًا دون الحصول على التصريح اللازم.",
  ],
  [
    "Disclaimer of warranties",
    "Rota is provided on an as-available basis without guarantees that it will always be available, uninterrupted, error-free or completely accurate. To the extent permitted by applicable law, all warranties not expressly stated are disclaimed.",
    "إخلاء الضمانات",
    "يُقدم روتا وفقًا للتوافر الفعلي للخدمة، دون ضمان استمرارية توفره أو عمله دون انقطاع أو أخطاء أو دقة جميع المعلومات بشكل كامل. وبالقدر الذي يسمح به القانون المعمول به، يتم استبعاد أي ضمانات غير منصوص عليها صراحةً.",
  ],
  [
    "Limitation of liability",
    "To the extent permitted by applicable law, Rota and its developer shall not be liable for indirect, incidental or consequential damages resulting from the use of, inability to use or reliance on the application, including decisions made based on estimated routes, fares, walking distances or travel times.",
    "حدود المسؤولية",
    "بالقدر الذي يسمح به القانون المعمول به، لا يتحمل روتا أو مطوّره المسؤولية عن الأضرار غير المباشرة أو العرضية أو التبعية الناتجة عن استخدام التطبيق أو عدم القدرة على استخدامه أو الاعتماد على معلوماته، بما في ذلك القرارات المبنية على المسارات أو الأجرة أو مسافات المشي أو أوقات الرحلات التقديرية.",
  ],
  [
    "Suspension and availability",
    "We reserve the right to modify, suspend or discontinue any application feature when necessary, including for maintenance, technical reasons, security concerns or service changes.",
    "تعليق الخدمات وتوافرها",
    "نحتفظ بالحق في تعديل أي ميزة من مزايا التطبيق أو تعليقها أو إيقافها عند الضرورة، بما في ذلك أعمال الصيانة أو الأسباب التقنية أو الاعتبارات الأمنية أو التغييرات في الخدمات.",
  ],
  [
    "Changes to these terms",
    "These Terms of Service may be updated from time to time. Updated versions will be published on this page, together with a revised effective date. Continued use of Rota after an update constitutes acceptance of the revised terms to the extent permitted by applicable law.",
    "تعديل الشروط",
    "قد يتم تحديث شروط الاستخدام هذه من وقت لآخر. وسيتم نشر النسخ المحدثة على هذه الصفحة مع تعديل تاريخ السريان. ويُعد استمرار استخدام روتا بعد التحديث موافقة على الشروط المعدلة بالقدر الذي يسمح به القانون المعمول به.",
  ],
  [
    "Contact and effective date",
    "For questions or concerns regarding these Terms of Service, contact: [YOUR CONTACT EMAIL]. Effective date: [PUBLICATION DATE].",
    "التواصل وتاريخ السريان",
    "للاستفسارات أو الملاحظات المتعلقة بشروط الاستخدام، يُرجى التواصل عبر: [بريد التواصل]. تاريخ السريان: [تاريخ النشر].",
  ],
];


export const pageTitles = {
  home: ["Rota – Cairo Metro journey planner", "روتا – مخطط رحلات مترو القاهرة"],
  features: ["Features – Rota", "المزايا – روتا"],
  tickets: ["Ticket information – Rota", "معلومات التذاكر – روتا"],
  "how-it-works": ["How it works – Rota", "كيف يعمل – روتا"],
  faq: ["FAQ – Rota", "الأسئلة الشائعة – روتا"],
  support: ["Support – Rota", "الدعم – روتا"],
  contact: ["Contact – Rota", "تواصل – روتا"],
  about: ["About – Rota", "عن روتا"],
  "privacy-policy": ["Privacy policy – Rota", "سياسة الخصوصية – روتا"],
  terms: ["Terms – Rota", "الشروط – روتا"],
  download: ["Download – Rota", "التحميل – روتا"],
};
