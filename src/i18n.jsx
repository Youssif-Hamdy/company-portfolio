import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const copy = {
  ar: {
    nav: ['الرئيسية', 'عن الشركة', 'خدماتنا', 'شركاؤنا', 'لماذا نحن؟', 'تواصل معنا'],
    tagline: 'وكالة برمجيات وذكاء اصطناعي',
    newProject: 'ابدأ مشروعاً',
    heroCtaPartners: 'تعرّف على شركائنا',
    heroSlides: [
      {
        image: '/hero/1.png',
        mobileImage: '/hero/mop1.jpeg',
        title: 'نبني التميز الرقمي.',
        text: 'حلول برمجية مخصصة مصممة لتنمية أعمالك.',
      },
      {
        image: '/hero/2.png',
        mobileImage: '/hero/mop2.jpeg',
        title: 'أفكارك. تقنيتنا.',
        text: 'نحوّل أفكارك إلى تجارب رقمية قوية.',
      },
      {
        image: '/hero/3.png',
        mobileImage: '/hero/mop3.jpeg',
        title: 'تقنية تدفعك للأمام.',
        text: 'حلول ذكية وقابلة للتوسع مبنية للمستقبل.',
      },
    ],
    techTitle: 'تقنيات نعمل بها',
    techText: 'أدوات حديثة لبناء تجارب سريعة وموثوقة',
    about: {
      badge: 'من نحن',
      title: 'نسخر التكنولوجيا لبناء',
      titleAccent: 'مستقبل أعمالك',
      desc: 'فريق متكامل من المهندسين والمطورين والمصممين الشغوفين بتحويل الأفكار المعقدة إلى برمجيات سهلة ومؤثرة.',
      visionTitle: 'رؤيتنا',
      missionTitle: 'رسالتنا',
      visionText:
        'أن نكون الشريك التقني الأول والأولى بالثقة للشركات والمؤسسات بالمنطقة العربية والعالم في تقديم الحلول البرمجية الذكية، والمساهمة الفعّالة في إحداث التحول الرقمي الحقيقي.',
      missionText:
        'تقديم أنظمة وتطبيقات برمجية مخصصة تجمع بين الجودة الفائقة، السرعة العالية، والأمان المعتمد، لتمكين العملاء من تحقيق أهدافهم التجارية وتطوير تجربة مستخدميهم.',
      stackTitle: 'التقنيات وأدوات التطوير الحديثة',
      stackDesc: 'نعتمد على بيئات تطوير متقدمة تضمن أقصى درجات الأداء والاستقرار لمشروعك.',
    },
    services: {
      badge: 'خدماتنا المتكاملة',
      title: 'حلول برمجية متخصصة تُلبي',
      titleAccent: 'طموحات مشروعك',
      desc: 'نقدم باقة واسعة من الخدمات البرمجية والهندسية المتطورة المصممة خصيصاً لرفع كفاءة أعمالك.',
      cta: 'طلب هذه الخدمة',
    },
    partners: {
      badge: 'شركاؤنا',
      title: 'علامات تجارية',
      titleAccent: 'تثق بنا',
      desc: 'نفخر بالشراكة مع شركات ومؤسسات بنينا لها منتجات رقمية مؤثرة.',
    },
    whyUs: {
      badge: 'لماذا نحن؟',
      title: 'عوامل تميزنا في',
      titleAccent: 'سوق البرمجيات',
      desc: 'نلتزم بتقديم قيمة استثنائية لمشروعك من خلال دمج الخبرة الفنية والمعايير العالمية.',
      testimonialBadge: 'آراء شركاء النجاح',
      testimonialTitle: 'ماذا يقول',
      testimonialAccent: 'عملاؤنا عنا؟',
    },
    contact: {
      badge: 'تواصل معنا الآن',
      title: 'دعنا نحول فكرتك إلى',
      titleAccent: 'مشروع ناجح',
      desc: 'فريقنا جاهز لمناقشة تفاصيل مشروعك وتقديم الاستشارة البرمجية المناسبة مجاناً.',
      infoTitle: 'معلومات التواصل',
      phone: 'الهاتف المباشر / واتساب',
      email: 'البريد الإلكتروني',
      location: 'العنوان والمقر الرئيسي',
      hours: 'ساعات العمل',
      hoursValue: 'الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً',
      whatsapp: 'تحدث مع المهندس المختص عبر الواتساب فوراً',
      formTitle: 'أرسل لنا تفاصيل مشروعك',
      name: 'الاسم الكامل',
      namePh: 'مثال: أحمد محمد',
      phoneLabel: 'رقم الهاتف / الواتساب',
      phonePh: 'مثال: 01001234567',
      emailLabel: 'البريد الإلكتروني',
      emailPh: 'مثال: name@company.com',
      service: 'الخدمة المطلوبة',
      message: 'تفاصيل وتطلعات المشروع',
      messagePh: 'اكتب هنا نبذة عن مشروعك والخدمات المطلوبة...',
      submit: 'إرسال طلب الاستشارة والانطلاق',
      successTitle: 'تم استلام طلبك بنجاح!',
      successText: 'شكراً لتواصلك معنا. سيتواصل معك أحد مهندسينا خلال أسرع وقت.',
    },
    footer: {
      quickLinks: 'روابط سريعة',
      newsletter: 'النشرة البريدية والتحديثات',
      newsletterDesc: 'اشترك معنا لمتابعة أحدث التقنيات والمشاريع البرمجية التي نطلقها شهرياً.',
      emailPh: 'بريدك الإلكتروني',
      subscribe: 'اشتراك',
      rights: 'جميع الحقوق محفوظة.',
      builtBy: 'تم التطوير بواسطة',
    },
    serviceOptions: [
      { value: 'web-dev', label: 'تطوير تطبيق / موقع ويب' },
      { value: 'mobile-dev', label: 'تطوير تطبيق جوال (iOS & Android)' },
      { value: 'custom-software', label: 'برنامج إدارة شركات ERP/CRM' },
      { value: 'ai-data', label: 'حلول ذكاء اصطناعي وبوتات' },
      { value: 'cloud-devops', label: 'سيرفرات واستضافة سحابية' },
      { value: 'ui-ux', label: 'تصميم واجهات مستخدم UI/UX' },
    ],
  },
  en: {
    nav: ['Home', 'About', 'Services', 'Partners', 'Why us?', 'Contact'],
    tagline: 'Software & AI Agency',
    newProject: 'Start a project',
    heroCtaPartners: 'Meet our partners',
    heroSlides: [
      {
        image: '/hero/1.png',
        mobileImage: '/hero/mop1.jpeg',
        title: 'We Build Digital Excellence.',
        text: 'Custom software solutions designed to grow your business.',
      },
      {
        image: '/hero/2.png',
        mobileImage: '/hero/mop2.jpeg',
        title: 'Your Ideas. Our Technology.',
        text: 'We turn your ideas into powerful digital experiences.',
      },
      {
        image: '/hero/3.png',
        mobileImage: '/hero/mop3.jpeg',
        title: 'Technology That Moves You Forward.',
        text: 'Smart, scalable solutions built for the future.',
      },
    ],
    techTitle: 'Technologies we use',
    techText: 'Modern tools for fast, reliable experiences',
    about: {
      badge: 'About us',
      title: 'We harness technology to build',
      titleAccent: 'your business future',
      desc: 'A full team of engineers, developers, and designers passionate about turning complex ideas into simple, impactful software.',
      visionTitle: 'Our vision',
      missionTitle: 'Our mission',
      visionText:
        'To be the most trusted technology partner for companies across the Arab world and globally — delivering smart software solutions that drive real digital transformation.',
      missionText:
        'Deliver custom software and applications that combine exceptional quality, speed, and security — empowering clients to reach business goals and elevate user experience.',
      stackTitle: 'Modern development stack',
      stackDesc: 'We rely on advanced tooling to ensure maximum performance and stability for your project.',
      },
    services: {
      badge: 'Our integrated services',
      title: 'Specialized software solutions for',
      titleAccent: 'your ambitions',
      desc: 'A wide range of advanced software and engineering services designed to boost your business efficiency.',
      cta: 'Request this service',
    },
    partners: {
      badge: 'Our partners',
      title: 'Brands that',
      titleAccent: 'trust us',
      desc: 'We are proud to partner with companies and teams we built impactful digital products for.',
    },
    whyUs: {
      badge: 'Why us?',
      title: 'What sets us apart in',
      titleAccent: 'the software market',
      desc: 'We deliver exceptional value by combining technical expertise with global standards.',
      testimonialBadge: 'Client success stories',
      testimonialTitle: 'What our',
      testimonialAccent: 'clients say',
    },
    contact: {
      badge: 'Contact us now',
      title: 'Let us turn your idea into a',
      titleAccent: 'successful product',
      desc: 'Our team is ready to discuss your project and provide a free software consultation.',
      infoTitle: 'Contact information',
      phone: 'Phone / WhatsApp',
      email: 'Email',
      location: 'Head office',
      hours: 'Working hours',
      hoursValue: 'Sun – Thu: 9:00 AM – 6:00 PM',
      whatsapp: 'Chat with our engineer on WhatsApp',
      formTitle: 'Send us your project details',
      name: 'Full name',
      namePh: 'e.g. John Smith',
      phoneLabel: 'Phone / WhatsApp',
      phonePh: 'e.g. +20 100 123 4567',
      emailLabel: 'Email address',
      emailPh: 'e.g. name@company.com',
      service: 'Service needed',
      message: 'Project details & goals',
      messagePh: 'Tell us about your project and what you need...',
      submit: 'Send consultation request',
      successTitle: 'Request received!',
      successText: 'Thanks for reaching out. One of our engineers will contact you shortly.',
    },
    footer: {
      quickLinks: 'Quick links',
      newsletter: 'Newsletter & updates',
      newsletterDesc: 'Subscribe for the latest tech insights and projects we launch each month.',
      emailPh: 'Your email',
      subscribe: 'Subscribe',
      rights: 'All rights reserved.',
      builtBy: 'Built with love by',
    },
    serviceOptions: [
      { value: 'web-dev', label: 'Web app / website development' },
      { value: 'mobile-dev', label: 'Mobile app (iOS & Android)' },
      { value: 'custom-software', label: 'ERP / CRM business software' },
      { value: 'ai-data', label: 'AI solutions & chatbots' },
      { value: 'cloud-devops', label: 'Cloud hosting & DevOps' },
      { value: 'ui-ux', label: 'UI/UX design' },
    ],
  },
};

const I18n = createContext(null);

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState(() => localStorage.getItem('locale') || 'ar');

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.classList.add('light'); // force light theme
    localStorage.setItem('locale', locale);
  }, [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, theme: 'light', t: copy[locale] }),
    [locale],
  );

  return <I18n.Provider value={value}>{children}</I18n.Provider>;
}

export const useI18n = () => useContext(I18n);

