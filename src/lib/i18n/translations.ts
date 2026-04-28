export type Language = "en" | "am" | "om";

export interface Translations {
  [key: string]: string | Translations;
}

export const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      pricing: "Pricing",
      about: "About",
      blog: "Blog",
      contact: "Contact",
      bookNow: "Book Now",
    },
    hero: {
      badge: "Trusted in Addis Ababa since 2009",
      title1: "The care",
      title2: "you need!",
      title3: "",
      description:
        "Comprehensive medical care, emergency services, and specialist consultations in the heart of Addis Ababa — delivered by certified doctors who treat you like family.",
      bookConsultation: "Book a Consultation",
      exploreServices: "Explore Services",
      trustedBy: "Trusted by 20,000+ patients",
      recoveryRate: "98% patient satisfaction",
    },
    about: {
      subtitle: "About us",
      title: "Healthcare that puts patients first.",
      description:
        "For over fifteen years, Karachi Health Care has been a trusted provider of emergency, inpatient, and outpatient medical services in Ethiopia. We combine modern medical expertise with compassionate, patient-centered care — because your health deserves nothing less than excellence.",
      stats: {
        years: "Years of care",
        patients: "Happy patients",
        doctors: "Doctors",
        satisfaction: "Satisfaction",
      },
    },
    services: {
      subtitle: "Our services",
      title: "Comprehensive care, under one calm roof.",
      description:
        "From emergency care to routine check-ups, every service is delivered with expertise and compassion.",
      viewAll: "View All Services",
      learnMore: "Learn more",
      items: {
        emergency: {
          title: "Emergency Services",
          desc: "Immediate, critical medical intervention for acute and life-threatening conditions.",
        },
        "acute-care": {
          title: "Acute & Life-Threatening Care",
          desc: "Critical intervention for trauma, severe injuries and medical emergencies.",
        },
        inpatient: {
          title: "Inpatient Care",
          desc: "Extended monitoring and clinical stability for patients requiring admission.",
        },
        "short-term": {
          title: "Short-term Admission",
          desc: "24-hour observation and treatment window for emergency patients.",
        },
        outpatient: {
          title: "Outpatient Services",
          desc: "Medical expertise without hospital stay - consultations and follow-ups.",
        },
        specialist: {
          title: "Specialist Consultations",
          desc: "Expert medical professionals for accurate diagnosis and treatment plans.",
        },
        followup: {
          title: "Follow-up Care",
          desc: "Continuous management of health conditions and post-treatment monitoring.",
        },
      },
    },
    whyUs: {
      subtitle: "Why choose us",
      title1: "A different kind of clinic — built around",
      title2: "you",
      description:
        "We combine clinical excellence with quiet, considered hospitality. No rushed appointments, no guesswork — just measurable progress, week after week.",
      accredited: "Licensed medical facility",
      inspected: "Inspected & approved annually",
      items: {
        certified: {
          title: "Certified Medical Team",
          desc: "Licensed physicians and healthcare professionals with specialized training and years of experience.",
        },
        emergency: {
          title: "24/7 Emergency Ready",
          desc: "Round-the-clock emergency services with modern life support equipment and rapid response capability.",
        },
        patient: {
          title: "Patient-Centered Care",
          desc: "Every treatment plan is tailored to your specific needs with compassion and clear communication.",
        },
        modern: {
          title: "Modern Facilities",
          desc: "Clean, comfortable environment with private rooms and state-of-the-art medical equipment.",
        },
      },
    },
    conditions: {
      subtitle: "Conditions we treat",
      title: "From everyday concerns to complex cases.",
    },
    process: {
      subtitle: "How it works",
      title: "Your path to better health, in four steps.",
      description:
        "A clear, predictable journey — so you always know where you are and what comes next.",
      steps: {
        registration: {
          step: "01",
          title: "Registration",
          desc: "Quick check-in with our friendly staff. Minimal paperwork, maximum care.",
        },
        consultation: {
          step: "02",
          title: "Consultation",
          desc: "Thorough examination by our experienced doctors with clear communication.",
        },
        treatment: {
          step: "03",
          title: "Treatment",
          desc: "Immediate care, medication, or procedures as needed. Inpatient if required.",
        },
        followup: {
          step: "04",
          title: "Follow-up",
          desc: "Scheduled check-ups to ensure complete recovery and ongoing health.",
        },
      },
    },
    team: {
      subtitle: "Meet the team",
      title: "Doctors you can trust.",
      meetFull: "Meet the Full Team",
    },
    pricing: {
      subtitle: "Pricing",
      title: "Honest pricing. No surprises.",
      description:
        "Transparent packages designed around the way real healthcare works.",
      insurance: "Most major insurance plans accepted",
      familyDiscount: "Family discounts available",
      choosePlan: "Choose Plan",
      mostPopular: "Most popular",
      packages: {
        single: {
          name: "Single Consultation",
          desc: "Perfect for one-time visits and assessments.",
        },
        recovery: {
          name: "Health Check Package",
          desc: "Most chosen — comprehensive health screening.",
        },
        wellness: {
          name: "Family Wellness Plan",
          desc: "Long-term care for your entire family.",
        },
      },
    },
    testimonials: {
      subtitle: "Patient stories",
      title: "Real care. Real people.",
    },
    faq: {
      subtitle: "FAQ",
      title: "Questions, answered.",
    },
    contact: {
      subtitle: "Visit us",
      title: "Begin your health journey today.",
      description:
        "Call us, drop in, or send a message. Our front desk responds within the hour.",
      form: {
        title: "Request a callback",
        name: "Your name",
        phone: "Phone number",
        email: "Email address",
        message: "How can we help?",
        send: "Send request",
        whatsapp: "Or message us on WhatsApp for instant response",
      },
    },
    trustBadges: {
      licensed: "Licensed & Certified",
      years: "15+ Years",
      patients: "20,000+",
      sameDay: "Same Day",
    },
    footer: {
      description:
        "Trusted medical care in Addis Ababa since 2009. Professional healthcare, compassionate service.",
      visit: "Visit",
      explore: "Explore",
      insurance: "Insurance partners we accept",
      crafted: "Crafted with care in Addis Ababa",
    },
    language: {
      title: "Language",
      en: "English",
      am: "Amharic",
      om: "Oromiffa",
    },
  },
  am: {
    nav: {
      home: "መነሻ",
      services: "አገልግሎቶች",
      pricing: "ዋጋ",
      about: "ስለእኛ",
      blog: "ብሎግ",
      contact: "አግኙን",
      bookNow: "አሁን ይያዙ",
    },
    hero: {
      badge: "በአዲስ አበባ የታመነው ከ2009 ጀምሮ",
      title1: "የሚይሳፈልጎት",
      title2: "አርዳታ ከኛ!",
      title3: "",
      description:
        "ሁሉን አቀፍ ሕክምና፣ የአስቸኳይ ጊዜ አገልግሎቶች፣ እና በአዲስ አበባ ልብ የሚነኩ የሐኪም ወኪሎች — በሰርቲፋይ የተደረጉ ሐኪሞች እንደ ቤተሰብዎ ይደርሳሉ።",
      bookConsultation: "ምክክር ይያዙ",
      exploreServices: "አገልግሎቶችን ይመልከቱ",
      trustedBy: "በ20,000+ ሕሙማን የታመነ",
      recoveryRate: "98% የሕሙማን ድርጅት",
    },
    about: {
      subtitle: "ስለ እኛ",
      title: "ሕሙማንን በማስቀደም የጤና ተቋም።",
      description:
        "ከፊያን ዓመታት በላይ፣ የካራቺ ሕክምና እንክብካቤ በኢትዮጵያ የአስቸኳይ ጊዜ፣ የውስጥ ሕሙማን እና የውጭ ሕሙማን የሕክምና አገልግሎቶችን የሚሰጥ ታማኝ ተቋም ሆኖ ቆይቷል። ዘመናዊ የሕክምና እውቀትን ከሰው ልጅ ማዕከል ካደረገ እንክብካቤ ጋር እናዋሃዳለን — ምክንያቱም ጤንነትዎ ከምርጥ የሚጠበቅበት ሌላ ምክንያት የለም።",
      stats: {
        years: "ዓመታት እንክብካቤ",
        patients: "ደስተኛ ሕሙማን",
        doctors: "ሐኪሞች",
        satisfaction: "ድርጅት",
      },
    },
    services: {
      subtitle: "አገልግሎቶቻችን",
      title: "ሁሉን አቀፍ እንክብካቤ፣ በአንድ ጣራ ሥር።",
      description:
        "ከአስቸኳይ እንክብካቤ እስከ ወቅታዊ ምርመራዎች፣ እያንዳንዱ አገልግሎት በእውቀት እና በስሜታዊነት ይቀርባል።",
      viewAll: "ሁሉንም አገልግሎቶች ይመልከቱ",
      learnMore: "ተጨማሪ ይወቁ",
      items: {
        emergency: {
          title: "የአስቸኳይ ጊዜ አገልግሎቶች",
          desc: "ለአስቸኳይ እና ለህይወት ማስጠንቀቂያ ሁኔታዎች ወዲያውኑ የሕክምና ጣልቃ ገብ።",
        },
        "acute-care": {
          title: "አስቸኳይ እና ህይወት ማስጠንቀቂያ እንክብካቤ",
          desc: "ለድብደባ፣ ለከባድ ጉዳቶች እና ለድንገተኛ የሕክምና ሁኔታዎች ወሳኝ ጣልቃ ገብ።",
        },
        inpatient: {
          title: "የውስጥ ሕሙማን እንክብካቤ",
          desc: "ለመተማመን የሚፈልጉ ሕሙማንን ለማስተናገድ የተዘረዘረ መቆጣጠሪያ እና የክሊኒክ መረጋጋት።",
        },
        "short-term": {
          title: "አጭር ጊዜ መተማመን",
          desc: "ለአስቸኳይ ጊዜ ሕሙማን የ24 ሰዓት ዝግጅት እና የሕክምና መስኮት።",
        },
        outpatient: {
          title: "የውጭ ሕሙማን አገልግሎቶች",
          desc: "የሆስፒታል እንግዳነት የሌለው የሕክምና እውቀት — ምክክሮች እና ተከታታይ እንክብካቤ።",
        },
        specialist: {
          title: "የሐኪም ወኪል ምክክሮች",
          desc: "ለትክክለኛ ውሳኔ እና የሕክምና ዕቅዶች የታለሙ የሕክምና ባለሙያዎች።",
        },
        followup: {
          title: "ተከታታይ እንክብካቤ",
          desc: "የጤና ሁኔታዎች እና የሕክምና ተከታታይ መቆጣጠሪያ።",
        },
      },
    },
    whyUs: {
      subtitle: "እኛን ለምን ይመርጡ",
      title1: "የተለያየ አይነት ክሊኒክ — በዙሪያዎ የተሰራ",
      title2: "እርስዎ",
      description:
        "የክሊኒካል ምርጥነትን ከቀጥተኛ እንግዳ ተቀባይነት ጋር እናዋሃዳለን። የተቸገረ ቦታ አያስይዙ፣ ጥርጣሬ የለም — በሳምንት በሳምንት የሚተነተን እድገት ብቻ።",
      accredited: "የተፈቀደ የሕክምና ተቋም",
      inspected: "በየዓመቱ የሚመረመር እና የሚፈቀድ",
      items: {
        certified: {
          title: "የተመሰከረላቸው የሕክምና ቡድን",
          desc: "በአካባቢያዊ ስልጠና እና በአመታት ልምድ የታለሙ የተፈቀዱ ሐኪሞች እና የጤና ባለሙያዎች።",
        },
        emergency: {
          title: "24/7 አስቸኳይ ጊዜ ዝግጁ",
          desc: "በዘመናዊ የህይወት ድጋፍ መሳሪያዎች እና በፈጣን ምላሽ ችሎታ ዙሪያየሰዓት የአስቸኳይ ጊዜ አገልግሎቶች።",
        },
        patient: {
          title: "ሕሙማን-የማዕከል እንክብካቤ",
          desc: "እያንዳንዱ የሕክምና ዕቅድ በእረኛነት እና በብሩህ መገናኛ ለእርስዎ ልዩ ፍላጎቶች የተበጀ ነው።",
        },
        modern: {
          title: "ዘመናዊ መሠረተ ልማት",
          desc: "በግል ጓሮች እና በዘመናዊ የሕክምና መሳርያዎች የሞላ ንፁህ እና ምቹ አካባቢ።",
        },
      },
    },
    conditions: {
      subtitle: "ምን እናከናውናለን",
      title: "ከዕለትወር ጉዳዮች እስከ ከባድ ሁኔታዎች።",
    },
    process: {
      subtitle: "እንዴት እንደሚሰራ",
      title: "ወደ የተሻለ ጤና፣ በአራት ደረጃዎች።",
      description:
        "ግልጽ፣ የሚታመን ጉዞ — እርስዎ ወዴት እንደሆኑ እና የሚቀጥለው ምን እንደሆነ ሁሌም የሚያውቁበት።",
      steps: {
        registration: {
          step: "01",
          title: "መመዝገብ",
          desc: "ከደህና የሚያደርጉ ሰራተኞች ጋር ፈጣን መግቢያ። ትንሽ ወረቀት ስራ፣ ከፍተኛ እንክብካቤ።",
        },
        consultation: {
          step: "02",
          title: "ምክክር",
          desc: "በልምድ ያላቸው ሐኪሞች በብሩህ መገናኛ የሚከናወን የጥልቅ ምርመራ።",
        },
        treatment: {
          step: "03",
          title: "ሕክምና",
          desc: "ወዲያውኑ እንክብካቤ፣ መድሐኒት፣ ወይም አስፈላጊነት ካለው ድርጅት።",
        },
        followup: {
          step: "04",
          title: "ተከታታይ እንክብካቤ",
          desc: "ሙሉ ማገገም እና ቀጣይ ጤና ለማረጋገጥ የተደረደረ ምርመራ።",
        },
      },
    },
    team: {
      subtitle: "ቡድኑን ይገናኙ",
      title: "የሚታመኑባቸው ሐኪሞች።",
      meetFull: "ሙሉ ቡድኑን ይገናኙ",
    },
    pricing: {
      subtitle: "ዋጋ",
      title: "ታማኝ ዋጋ። ጥቁር አይደለም።",
      description:
        "እውነተኛ የጤና አገልግሎት የሚሰራበትን መንገድ በመከተል የተዘረዘሩ ፓኬጆች።",
      insurance: "ከብዙ ገንዘብ ዋጋ የሚቀበሉ",
      familyDiscount: "የቤተሰብ ቅናሾዎች ይገኛሉ",
      choosePlan: "ዕቅድ ይምረጡ",
      mostPopular: "በጣም ተወዳጅ",
      packages: {
        single: {
          name: "ነጠላ ምክክር",
          desc: "ለነጠሌ ጉዞዎች እና ምርመራዎች ፍጽም።",
        },
        recovery: {
          name: "የጤና ምርመራ ፓኬጅ",
          desc: "በጣም የተመረጠ — አጠቃላይ የጤና ምርመራ።",
        },
        wellness: {
          name: "የቤተሰብ ደህንነት ዕቅድ",
          desc: "ለሙሉ ቤተሰብዎ የረጅም ጊዜ እንክብካቤ።",
        },
      },
    },
    testimonials: {
      subtitle: "የሕሙማን ታሪኮች",
      title: "እውነተኛ እንክብካቤ። እውነተኛ ሰዎች።",
    },
    faq: {
      subtitle: "ተደጋጋሚ ጥያቄዎች",
      title: "ጥያቄዎች፣ የተመለሱ።",
    },
    contact: {
      subtitle: "ይጎብኙን",
      title: "የጤና ጉዞዎን ዛሬ ይጀምሩ።",
      description:
        "ይደውሉልን፣ ይጎብኙን፣ ወይም መልእክት ይላኩልን። የፊት ዴስካች በአንድ ሰዓት ውስጥ ይመልሳል።",
      form: {
        title: "መልሶ ጥሪ ይጠይቁ",
        name: "ስምዎ",
        phone: "ስልክ ቁጥር",
        email: "ኢሜይል አድራሻ",
        message: "እንዴት ልንረዳዎ እንችላለን?",
        send: "መልእክት ይላኩ",
        whatsapp: "ወዲያውኑ ምላሽ ለማግኘት በWhatsApp ይመረቱ",
      },
    },
    trustBadges: {
      licensed: "የተፈቀደ እና የተረጋገጠ",
      years: "15+ ዓመታት",
      patients: "20,000+",
      sameDay: "በዛሬው እለት",
    },
    footer: {
      description:
        "በአዲስ አበባ ከ2009 ጀምሮ የታመነ የሕክምና እንክብካቤ። ሙያዊ የሕክምና አገልግሎት፣ ስሜታዊነት።",
      visit: "ይጎብኙ",
      explore: "ያስሱ",
      insurance: "የገንዘብ ዋጋ አጋሮችን እንቀበላለን",
      crafted: "በአዲስ አበባ በጥንቃቄ የተሰራ",
    },
    language: {
      title: "ቋንቋ",
      en: "እንግሊዝኛ",
      am: "አማርኛ",
      om: "ኦሮሚፋ",
    },
  },
  om: {
    nav: {
      home: "Mana",
      services: "Tajaajila",
      pricing: "Gatii",
      about: "Waa'ee Keenyaa",
      blog: "Blogii",
      contact: "Nu Quunnamaa",
      bookNow: "Amma Reserve Godhaa",
    },
    hero: {
      badge: "Finfinnee irratti Amanamoo 2009 irraa eegalee",
      title1: "Eegumsa",
      title2: "Siif Barbaadamu!",
      title3: "",
      description:
        "Tajaajila fayyaa guutuu, tajaajila yeroon rakkisaa, fi marii dhakoota Finfinnee irratti — Ogeeyyiin sertifaayitii qabaniin akka maatii keessanii dhaabbataniif dhiheessu.",
      bookConsultation: "Marii Reserve Godhaa",
      exploreServices: "Tajaajila Sakatta'aa",
      trustedBy: "Dhihaatota 20,000+ irratti Amanamoo",
      recoveryRate: "98% Gammachuu Dhakootaa",
    },
    about: {
      subtitle: "Waa'ee Keenya",
      title: "Deebiin Fayyaa Dhihaata Dursa Dha.",
      description:
        "Waggaa 15 ol, Karachi Health Care tajaajila yeroon rakkisaa, tajaajila dhihaatotaa keessaatiifi alaatiif Itoophiyaa irratti dhaabbatameera. Beekumsa fayyaa barnoota haarawaa waliin hamaa; dhihaata gammachuu waliin walitti fiduun — sababin isaa fayyummaan keessan gatii ol'aanaa qofa eeggata.",
      stats: {
        years: "Waggaa Eegumsa",
        patients: "Dhihaatota Gammachuu Qaban",
        doctors: "Ogeeyyiin",
        satisfaction: "Gammachuu",
      },
    },
    services: {
      subtitle: "Tajaajila Keenya",
      title: "Eegumsa Guutuu, Garraaxa Tokko Jala.",
      description:
        "Eegumsa yeroon rakkisaa irraa gara qormaataa yeroo ti'ee, tajaajilii hundi beekumsaanii fi haammatamallaan dhiheeffama.",
      viewAll: "Tajaajila Hunda Sakatta'aa",
      learnMore: "Caalaa Baraa",
      items: {
        emergency: {
          title: "Tajaajila Yeroon Rakkisaa",
          desc: "Halleen jireenya dhabamsiisuu fi rakkisaa ta'an yeroon dhibee jirtiif seennuun dafaa.",
        },
        "acute-care": {
          title: "Eegumsa Yeroon Rakkisaa & Jireenya Dhabamsiisuu",
          desc: "Miidhama miidhamaa hammeenyaa, miidhama cimaafi halaa fayyaa yeroon rakkisaa qofaa.",
        },
        inpatient: {
          title: "Eegumsa Dhihaatotaa Keessa",
          desc: "Sakatta'inaa dheeraa fi tasgabbii klinikaa dhihaatotaa mana keessaa barbaadanif.",
        },
        "short-term": {
          title: "Ramadinni Sa'aatii Gabaabaa",
          desc: "Safartuu 24 sa'aatii dhihaatota yeroon rakkisaa qofaa, qormaataafii eegumsaaf.",
        },
        outpatient: {
          title: "Tajaajila Dhihaatotaa Alaa",
          desc: "Beekumsa fayyaa kan hospitaala barbaachisu dhabu — mariilee hordoffaallee.",
        },
        specialist: {
          title: "Marii Ogeeyyota",
          desc: "Beektota fayyaa ogeeyyummaa qaban tumaa fi tajaajila eegumsaaf.",
        },
        followup: {
          title: "Hordoffa Eegumsa",
          desc: "Bulchitoota fayyaa fi sakatta'ina eegumsa boodaa qabachuu itti fufuu.",
        },
      },
    },
    whyUs: {
      subtitle: "Maaf Nu Filattan",
      title1: "Klinika Adda - Kan Margaa Keessanii",
      title2: "Keessan",
      description:
        "Gaariin klinikaalaa fi kabajaa marfataa dhihaataa walitti fidna. Bakka dhipaa hin qabannee, shakkii hin qabannee — guddina yeroon gara yeroon qofaa.",
      accredited: "Dhaabbatni Fayyaa Hayyama Qabuun",
      inspected: "Waggaa Waggaan Sakatta'amee Hayyama Qaba",
      items: {
        certified: {
          title: "Gareen Fayyaa Hayyama Qabu",
          desc: "Ogeeyyiin fayyaa hayyama qaban barnoota addaa fi waggaa dhaabbatummaa qaban.",
        },
        emergency: {
          title: "Yeroon Rakkisaa 24/7 Jiraatuu",
          desc: "Tajaajila yeroon rakkisaa sa'aatii 24 meeshaa jireenya gargaaruu fi dandeettii deebii dafaa.",
        },
        patient: {
          title: "Eegumsa Dhihaataa",
          desc: "Tajaajilii hundi gammachuu fi qunnamtii qaraa qabuun siif ta'a.",
        },
        modern: {
          title: "Imaa Haaraa",
          desc: "Qulqullina fi mijataa meeshaalee fayyaa barnoota haarawaan.",
        },
      },
    },
    conditions: {
      subtitle: "Waa Hojjannu",
      title: "Waan Guyyaa Guyyaatiif gara Hala Cimaatti.",
    },
    process: {
      subtitle: "Akkamitti Hojjata",
      title: "Gara Fayyaa Gaariitti, Arfii Afurtam keessaa.",
      description:
        "Daawwannoo qaraa fi amanamoo - yeroo hundaa bakka jirtanii waan itti aanuf baruu.",
      steps: {
        registration: {
          step: "01",
          title: "Galmee",
          desc: "Seenuun dafaa hojjetoota namaa gammachiisuu waliin. Waajjira xiqqoo, eegumsa guddaa.",
        },
        consultation: {
          step: "02",
          title: "Marii",
          desc: "Qormaata ogeeyyiin qabaniin qunnamuu qaraa waliin.",
        },
        treatment: {
          step: "03",
          title: "Eegumsa",
          desc: "Eegumsa yeroon, dawaayyii ykn tajaajila barbaachisummaa jiraachuu. Mana keessaa yoo barbaachise.",
        },
        followup: {
          step: "04",
          title: "Hordoffa",
          desc: "Qormaata yeroo amanuun fayyuu guutu fi fayyumma itti fufuu mirkaneessu.",
        },
      },
    },
    team: {
      subtitle: "Garee Waliin Wal Arguu",
      title: "Ogeeyyiin Amanamanii.",
      meetFull: "Garee Guutuu Waliin Wal Arguu",
    },
    pricing: {
      subtitle: "Gatii",
      title: "Gatii Dhugaa. Hammeenya Hin Jiru.",
      description:
        "Tajaajilii fayyaa dhugaa hojjechuu akka danda'u qajeelfama paakeejii qaraa.",
      insurance: "Dhaabbilee insurance hedduu fudhanna",
      familyDiscount: "Gatii maatii ol aantummaa jira",
      choosePlan: "Plaana Filadhu",
      mostPopular: "Baay'ee Jaallatamaa",
      packages: {
        single: {
          name: "Marii Tokko",
          desc: "Deemuu tokkoo fi qormaataaf milkaa'aa.",
        },
        recovery: {
          name: "Paakeejii Qormaata Fayyaa",
          desc: "Baay'ee filatamaa — qormaata fayyaa guutuu.",
        },
        wellness: {
          name: "Plaana Fayyaa Maatii",
          desc: "Eegumsa yeroo dheeraa maatii guutuu keessaniif.",
        },
      },
    },
    testimonials: {
      subtitle: "Seenaa Dhihaatota",
      title: "Eegumsa Dhugaa. Namoota Dhugaa.",
    },
    faq: {
      subtitle: "Gaaffilee Irratti Deddeebi'aman",
      title: "Gaaffilee, Deebi'aniif.",
    },
    contact: {
      subtitle: "Nu Ilaalaa",
      title: "Daawwannoo Fayyaa Keessan Har'a Eegalaa.",
      description:
        "Nu bilbilaa, nu ilaalaa, ykn ergaa nu ergaa. Deeskii fuulaa waggaa tokko keessatti deebisaa.",
      form: {
        title: "Deebii Bilbilaa Gaafadhuu",
        name: "Maqaa Keessan",
        phone: "Lakkoofsa Bilbilaa",
        email: "Teessoo Email",
        message: "Akkamitti Nu Gargaaruu Dandeenya?",
        send: "Ergaa Ergaa",
        whatsapp: "Yeroon deebii argachuuf WhatsApp irratti nu qunnamaa",
      },
    },
    trustBadges: {
      licensed: "Hayyama Qabu & Mirkanaa'aa",
      years: "Waggaa 15+",
      patients: "20,000+",
      sameDay: "Guyyaa Tokkotti",
    },
    footer: {
      description:
        "Eegumsa fayyaa Finfinnee irratti 2009 irraa eegalee amanamoo. Tajaajila fayyaa misha'aa, nama hubannoo qabu.",
      visit: "Nu Ilaalaa",
      explore: "Sakatta'aa",
      insurance: "Dhaabbilee insurance fudhanna",
      crafted: "Finfinnee irratti oognaan hojjatame",
    },
    language: {
      title: "Afaan",
      en: "Ingliffa",
      am: "Amaaraa",
      om: "Oromiffa",
    },
  },
} as const;

export type TranslationKey = keyof typeof translations.en;
