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


export const gpsNotice = [
  "GPS can be weak or unavailable underground, so station detection may be interrupted. Background tracking depends on permissions, battery settings and system limits, and is not guaranteed after the operating system closes the app.",
  "قد تضعف إشارة GPS أو تنقطع تحت الأرض، لذلك قد يتوقف اكتشاف المحطات. يعتمد التتبع في الخلفية على الأذونات وإعدادات البطارية وقيود النظام، ولا يُضمن بعد إغلاق النظام للتطبيق.",
];

export const faqItems = [
  ["What is Rota?", "Rota is a mobile app to explore Cairo Metro stations, plan journeys, calculate fares, find nearby stations and follow active trips.", "ما هو روتا؟", "روتا تطبيق للجوال لاستكشاف محطات مترو القاهرة وتخطيط الرحلات وحساب الأجرة وإيجاد أقرب محطة ومتابعة الرحلة."],
  ["Can I calculate metro fares?", "Yes, for supported journeys using the fare rules in the app. Verify the fare before travelling, as official prices can change.", "هل يمكنني حساب أجرة المترو؟", "نعم للرحلات المدعومة وفق قواعد الأجرة في التطبيق. تحقق من الأجرة قبل السفر لأن الأسعار الرسمية قد تتغير."],
  ["Can I find the nearest station?", "Yes, if you allow location access.", "هل أستطيع إيجاد أقرب محطة؟", "نعم، بشرط السماح بالوصول إلى الموقع."],
  ["Does Rota track my trip live?", "Yes: current and next station and progress. Accuracy depends on location data and device conditions.", "هل يتتبع روتا رحلتي مباشرة؟", "نعم: المحطة الحالية والتالية والتقدم. تعتمد الدقة على بيانات الموقع وظروف الجهاز."],
  ["Does live tracking work underground?", "GPS may be weak or unavailable underground. Rota partly handles GPS loss, but uninterrupted tracking cannot be guaranteed.", "هل يعمل التتبع تحت الأرض؟", "قد تضعف إشارة GPS أو تنقطع. يتعامل روتا جزئيًا مع فقدان الإشارة لكن لا يمكن ضمان تتبع مستمر."],
  ["Does tracking continue in the background?", "During an active trip, when permissions and system conditions allow. Battery settings or restrictions may interrupt it.", "هل يستمر التتبع في الخلفية؟", "أثناء الرحلة النشطة عندما تسمح الأذونات وظروف النظام. قد تقطعه إعدادات البطارية أو القيود."],
  ["Does tracking continue after I force-close the app?", "No promise is made. Reliable continuation after the system terminates the app is not implemented.", "هل يستمر التتبع بعد إغلاق التطبيق قسرًا؟", "لا نَعِد بذلك. الاستمرار الموثوق بعد إنهاء النظام للتطبيق غير مُنفّذ."],
  ["Does Rota sell metro tickets?", "No. Rota provides journey and fare information, not a digital ticket or payment service.", "هل يبيع روتا تذاكر المترو؟", "لا. يقدم روتا معلومات الرحلة والأجرة وليس تذكرة رقمية أو خدمة دفع."],
  ["Does Rota require an account?", "The current app is designed without traditional account registration. This will be confirmed for the final release.", "هل يتطلب روتا حسابًا؟", "صُمم التطبيق الحالي دون تسجيل حساب تقليدي، وسيتم تأكيد ذلك في الإصدار النهائي."],
  ["Does Rota work in Arabic?", "Yes, Arabic and English are supported.", "هل يعمل روتا بالعربية؟", "نعم، العربية والإنجليزية مدعومتان."],
  ["Can I change the app theme?", "Yes, light and dark themes.", "هل يمكن تغيير المظهر؟", "نعم، مظهر فاتح وداكن."],
  ["How can I submit feedback?", "Through the app’s feedback form (Google Forms). The link will appear here once configured.", "كيف أرسل ملاحظاتي؟", "عبر نموذج الملاحظات في التطبيق (Google Forms). سيظهر الرابط هنا عند إعداده."],
  ["Does Rota provide live service alerts?", "No. Live service announcements are not implemented.", "هل يوفر روتا تنبيهات الخدمة المباشرة؟", "لا. إعلانات الخدمة المباشرة غير مُنفّذة."],
  ["Is Rota affiliated with Cairo Metro?", "No. Rota is an independent app, not operated or endorsed by the metro operator or the National Authority for Tunnels.", "هل روتا تابع لمترو القاهرة؟", "لا. روتا تطبيق مستقل ولا تشغّله أو تعتمده جهة تشغيل المترو أو الهيئة القومية للأنفاق."],
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
  ["Introduction and scope", "Rota helps people navigate Cairo Metro. This policy describes how the app processes information. Operator and contact details: ", "المقدمة والنطاق", "يساعد روتا الناس على التنقل في مترو القاهرة. توضح هذه السياسة كيف يعالج التطبيق المعلومات. بيانات الجهة المشغلة والتواصل: "],
  ["Information processed", "Device location (nearest station, active-trip updates, background updates during a trip), locally stored preferences (language, theme), feedback you enter, and notification registration data. Whether analytics or diagnostics are enabled, and whether location leaves the device, is being verified.", "المعلومات التي تتم معالجتها", "موقع الجهاز (أقرب محطة وتحديثات الرحلة النشطة والتحديثات في الخلفية أثناء الرحلة) والتفضيلات المحفوظة محليًا (اللغة والمظهر) والملاحظات التي تدخلها وبيانات تسجيل الإشعارات. جارٍ التحقق من تفعيل التحليلات والتشخيص ومن خروج الموقع من الجهاز."],
  ["How information is used", "To find stations and routes, support live trips, save preferences, deliver requested notifications and process feedback.", "كيف تُستخدم المعلومات", "للعثور على المحطات والمسارات ودعم الرحلات المباشرة وحفظ التفضيلات وإرسال الإشعارات المطلوبة ومعالجة الملاحظات."],
  ["Legal basis and permissions", "Device permissions (location, notifications) are separate from any legally required consent. The applicable legal bases will be stated once confirmed.", "الأساس القانوني والأذونات", "أذونات الجهاز (الموقع والإشعارات) منفصلة عن أي موافقة مطلوبة قانونًا. سيُذكر الأساس القانوني المنطبق بعد تأكيده."],
  ["Third-party services", "Feedback uses Google Forms. Push notifications and other Firebase services are being verified; the confirmed list will appear here.", "خدمات الأطراف الثالثة", "تستخدم الملاحظات Google Forms. يجري التحقق من الإشعارات وخدمات Firebase الأخرى وستظهر القائمة المؤكدة."],
  ["Sharing and disclosure", "Information may be handled by the service providers above or disclosed when legally required. Full details await verification.", "المشاركة والإفصاح", "قد تعالج الجهات المزودة أعلاه المعلومات أو يُفصح عنها عند الاقتضاء القانوني. التفاصيل الكاملة بانتظار التحقق."],
  ["Retention and deletion", "Retention periods for trip, feedback, notification and diagnostic data have not been finalized and will be stated here.", "الاحتفاظ والحذف", "لم تُحدد بعد مدد الاحتفاظ ببيانات الرحلة والملاحظات والإشعارات والتشخيص وستُذكر هنا."],
  ["Security", "We use reasonable measures but cannot promise absolute security.", "الأمان", "نستخدم إجراءات معقولة لكن لا يمكننا ضمان أمان مطلق."],
  ["Children’s privacy", "The intended age range is being confirmed.", "خصوصية الأطفال", "جارٍ تأكيد الفئة العمرية المستهدفة."],
  ["International processing", "Depends on the providers confirmed above.", "المعالجة الدولية", "تعتمد على الجهات المؤكدة أعلاه."],
  ["Your rights", "Depending on applicable law you may request access, correction or deletion. A verified privacy contact will be provided.", "حقوقك", "وفق القانون المنطبق يمكنك طلب الاطلاع أو التصحيح أو الحذف. ستتوفر وسيلة تواصل موثقة للخصوصية."],
  ["Changes and contact", "Changes will be posted on this page with an updated date. Contact: ", "التغييرات والتواصل", "ستُنشر التغييرات في هذه الصفحة بتاريخ محدّث. التواصل: "],
];

export const termsSections = [
  ["Acceptance of terms", "By using Rota you agree to these terms.", "قبول الشروط", "باستخدامك روتا فإنك توافق على هذه الشروط."],
  ["Description and permitted use", "Rota is an independent app for exploring Cairo Metro and planning trips. Use it lawfully and for personal navigation.", "الوصف والاستخدام المسموح", "روتا تطبيق مستقل لاستكشاف مترو القاهرة وتخطيط الرحلات. استخدمه بشكل قانوني وللتنقل الشخصي."],
  ["Accuracy of fares and estimates", "Fares, routes and durations are estimates and may differ from official information.", "دقة الأجرة والتقديرات", "الأجرة والمسارات والمدد تقديرية وقد تختلف عن المعلومات الرسمية."],
  ["Location and live-trip limits", "Tracking may be inaccurate or interrupted, especially underground.", "حدود الموقع والرحلة المباشرة", "قد يكون التتبع غير دقيق أو منقطعًا خاصة تحت الأرض."],
  ["Device and OS dependencies", "Features depend on permissions, battery settings and system restrictions.", "اعتماد الجهاز والنظام", "تعتمد المزايا على الأذونات وإعدادات البطارية وقيود النظام."],
  ["Third-party services", "Some features rely on third-party services governed by their own terms.", "خدمات الأطراف الثالثة", "تعتمد بعض المزايا على خدمات خارجية لها شروطها."],
  ["Intellectual property", "Rota’s name, design and content belong to their owners.", "الملكية الفكرية", "اسم روتا وتصميمه ومحتواه مملوكة لأصحابها."],
  ["Disclaimer of warranties", "Rota is provided as is, to the extent permitted by law.", "إخلاء الضمانات", "يُقدَّم روتا كما هو بالقدر الذي يسمح به القانون."],
  ["Limitation of liability", "Liability is limited to the extent permitted by applicable law.", "حدود المسؤولية", "تُحدّد المسؤولية بالقدر الذي يسمح به القانون المنطبق."],
  ["Changes", "The app and these terms may change; updates will be posted here.", "التغييرات", "قد يتغير التطبيق والشروط وستُنشر التحديثات هنا."],
  ["Contact and effective date", "Contact details and effective date will be published here when confirmed.", "التواصل وتاريخ السريان", "ستُنشر بيانات التواصل وتاريخ السريان هنا عند تأكيدها."],
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

export const ticketTypes = [0, 1, 2];
