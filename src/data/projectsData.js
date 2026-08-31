import { L } from '../utils/locale';

export const companyDetails = {
  name: { ar: 'كودنيكس للحلول البرمجية', en: 'CodeNext Software Solutions' },
  tagline: {
    ar: 'نبتكر أفكارك ونحولها إلى حلول برمجية ذكية فائقة الأداء',
    en: 'We turn your ideas into high-performance smart software solutions',
  },
  description: {
    ar: 'شركة متخصصة في تطوير البرمجيات المخصصة، تطبيقات الجوال، الأنظمة السحابية، وحلول الذكاء الاصطناعي بمستويات أمان وجودة عالمية.',
    en: 'Specialists in custom software, mobile apps, cloud systems, and AI solutions with world-class security and quality.',
  },
  phone: '+20 100 123 4567',
  email: 'info@codenext-tech.com',
  location: { ar: 'القاهرة، مصر - التجمع الخامس', en: 'Cairo, Egypt – Fifth Settlement' },
  whatsapp: 'https://wa.me/201001234567',
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    facebook: 'https://facebook.com',
  },
};

export const stats = [
  { id: 1, label: { ar: 'مشروع برمجي ناجح', en: 'successful projects' }, value: '+85', icon: 'Code2' },
  { id: 2, label: { ar: 'عميل يثق بنا', en: 'trusted clients' }, value: '+50', icon: 'Users' },
  { id: 3, label: { ar: 'سنوات من الخبرة', en: 'years of expertise' }, value: '+7', icon: 'Award' },
  { id: 4, label: { ar: 'نسبة رضا العملاء', en: 'client satisfaction' }, value: '99.4%', icon: 'Zap' },
];

export const services = [
  {
    id: 'web-dev',
    title: { ar: 'تطوير منصات وتطبيقات الويب', en: 'Web platforms & applications' },
    description: {
      ar: 'بناء مواقع وتطبيقات ويب سريعة وآمنة وقابلة للتوسع باستخدام أحدث التقنيات كـ React, Next.js, Node.js.',
      en: 'Fast, secure, scalable websites and web apps using React, Next.js, Node.js, and modern stacks.',
    },
    icon: 'Globe',
    features: {
      ar: ['أداء عالي وسرعة فائقة', 'تصميم متجاوب لكافة الشاشات', 'تحسين محركات البحث SEO', 'حماية متقدمة وتشفير'],
      en: ['High performance & speed', 'Responsive across devices', 'SEO optimization', 'Advanced security & encryption'],
    },
  },
  {
    id: 'mobile-dev',
    title: { ar: 'تطوير تطبيقات الهواتف الذكية', en: 'Mobile app development' },
    description: {
      ar: 'تطوير تطبيقات أندرويد و iOS باستخدام Flutter و React Native بتجربة مستخدم سلسة وأداء ممتاز.',
      en: 'Android & iOS apps with Flutter and React Native — smooth UX and excellent performance.',
    },
    icon: 'Smartphone',
    features: {
      ar: ['تطبيقات iOS و Android', 'واجهات تفاعلية جليّة', 'ربط الإشعارات والـ GPS', 'رفع التطبيقات للمتاجر'],
      en: ['iOS & Android apps', 'Polished interactive UI', 'Push notifications & GPS', 'App store deployment'],
    },
  },
  {
    id: 'custom-software',
    title: { ar: 'أنظمة إدارة الشركات (ERP & CRM)', en: 'ERP & CRM business systems' },
    description: {
      ar: 'تصميم وتطوير أنظمة إدارية مخصصة لأتمتة عمليات الشركات، إدارة المبيعات، المخازن، والعملاء.',
      en: 'Custom management systems to automate sales, inventory, customers, and daily operations.',
    },
    icon: 'Layers',
    features: {
      ar: ['لوحات تحكم تفاعلية', 'تقارير وتحليلات فورية', 'أتمتة المهام اليومية', 'إدارة صلاحيات مستخدمين'],
      en: ['Interactive dashboards', 'Real-time reports & analytics', 'Daily task automation', 'Role-based access control'],
    },
  },
  {
    id: 'cloud-devops',
    title: { ar: 'الحوسبة السحابية و DevOps', en: 'Cloud & DevOps' },
    description: {
      ar: 'إدارة واستضافة السيرفرات، إعداد خطوط الإنتاج الآلية (CI/CD)، وتأمين البنية التحتية على AWS و Docker.',
      en: 'Server hosting, CI/CD pipelines, and secure infrastructure on AWS and Docker.',
    },
    icon: 'Cloud',
    features: {
      ar: ['جاهزية عالية 99.9%', 'نسخ احتياطي تلقائي', 'توازن الأحمال Load Balancing', 'حماية من هجمات DDoS'],
      en: ['99.9% uptime', 'Automated backups', 'Load balancing', 'DDoS protection'],
    },
  },
  {
    id: 'ai-data',
    title: { ar: 'حلول الذكاء الاصطناعي والبيانات', en: 'AI & data solutions' },
    description: {
      ar: 'دمج نماذج الذكاء الاصطناعي وبناء البوتات الذكية وأنظمة التوصية وتحليل البيانات الضخمة.',
      en: 'AI model integration, smart bots, recommendation systems, and big data analytics.',
    },
    icon: 'Cpu',
    features: {
      ar: ['دمج نماذج GPT و LLMs', 'تحليل السلوك والتنبؤ', 'معالجة اللغات الطبيعية NLP', 'أنظمة الدردشة الذكية'],
      en: ['GPT & LLM integration', 'Behavior analysis & forecasting', 'Natural language processing', 'Smart chat systems'],
    },
  },
  {
    id: 'ui-ux',
    title: { ar: 'تصميم واجهات وتجربة المستخدم UI/UX', en: 'UI/UX design' },
    description: {
      ar: 'ابتكار واجهات مستخدم مذهلة وسهلة الاستخدام تُبهر عملائك وتزيد من معدلات التحويل للمشروع.',
      en: 'Stunning, easy-to-use interfaces that delight users and improve conversion rates.',
    },
    icon: 'Palette',
    features: {
      ar: ['نماذج تفاعلية Prototype', 'دراسة رحلة العميل', 'تصاميم فريدة وعصرية', 'اختبارات القابلية للاستخدام'],
      en: ['Interactive prototypes', 'Customer journey mapping', 'Unique modern designs', 'Usability testing'],
    },
  },
];

export const projectCategories = [
  { id: 'all', label: { ar: 'جميع المشاريع', en: 'All projects' } },
  { id: 'web', label: { ar: 'تطبيقات الويب', en: 'Web apps' } },
  { id: 'mobile', label: { ar: 'تطبيقات الجوال', en: 'Mobile apps' } },
  { id: 'ai', label: { ar: 'الذكاء الاصطناعي', en: 'AI' } },
  { id: 'saas', label: { ar: 'أنظمة سحابية SaaS', en: 'SaaS platforms' } },
];

export const projects = [
  {
    id: 1,
    title: { ar: 'منصة معلم لحل المشكلات الرقمية', en: 'Moallem digital solutions platform' },
    category: 'web',
    client: { ar: 'مؤسسة معلم التقنية', en: 'Moallem Tech' },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    shortDesc: {
      ar: 'منصة ويب متكاملة تهدف لإدارة الخدمات والتواصل السريع بين المزودين والعملاء بذكاء.',
      en: 'An integrated web platform for smart service management and fast provider–client communication.',
    },
    fullDesc: {
      ar: 'مشروع منصة رائدة يعتمد على لوحة تحكم ذكية، واجهات تفاعلية فورية، وإشعارات حية. تم تطويره لخدمة آلاف المستخدمين يومياً بنجاح وتوفير أداء ممتاز.',
      en: 'A leading platform with a smart dashboard, real-time interfaces, and live notifications — serving thousands of users daily with excellent performance.',
    },
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Socket.io'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 2,
    title: { ar: 'تطبيق تسوق كويك ماركت', en: 'Quick Market shopping app' },
    category: 'mobile',
    client: { ar: 'شركة سوبر ماركت العالمية', en: 'Global Supermarket Co.' },
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop',
    shortDesc: {
      ar: 'تطبيق تجارة إلكترونية سريع للتسوق والتوصيل الفوري مع تتبع الطلبات على الخريطة.',
      en: 'Fast e-commerce app for shopping and instant delivery with live order tracking on the map.',
    },
    fullDesc: {
      ar: 'تطبيق جوال مميز يعمل على أجهزة أندرويد و iOS، يتميز بمدفوعات إلكترونية آمنة، تتبع الشحنات بالوقت الفعلي، ونظام مكافآت ونقاط للعملاء.',
      en: 'A standout mobile app for Android and iOS with secure payments, real-time shipment tracking, and a customer rewards system.',
    },
    techStack: ['Flutter', 'Firebase', 'Node.js', 'Stripe API', 'Google Maps API'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 3,
    title: { ar: 'مساعد خدمة العملاء الذكي (AI Chatbot)', en: 'AI customer support assistant' },
    category: 'ai',
    client: { ar: 'بنك الأمل الاستثماري', en: 'Al-Amal Investment Bank' },
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=1200&auto=format&fit=crop',
    shortDesc: {
      ar: 'نظام بوت ذكي يعتمد على نماذج LLMs للرد التلقائي وحل 80% من استفسارات العملاء.',
      en: 'An LLM-powered bot that auto-responds and resolves 80% of customer inquiries.',
    },
    fullDesc: {
      ar: 'نظام ذكاء اصطناعي مدرب على قاعدة معرفية بنكية ومستندات الخدمة، قادر على الإجابة باللغة العربية والإنجليزية بدقة فائقة مع إمكانية تحويل المحادثة للموظف.',
      en: 'AI trained on banking knowledge bases, answering in Arabic and English with high accuracy and seamless handoff to human agents.',
    },
    techStack: ['Python', 'FastAPI', 'OpenAI API', 'React', 'Vector DB (Pinecone)'],
    demoUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    id: 4,
    title: { ar: 'نظام إدارة الموارد والشركات ERP-Cloud', en: 'ERP-Cloud resource management' },
    category: 'saas',
    client: { ar: 'مجموعة الابتكار الصناعية', en: 'Industrial Innovation Group' },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    shortDesc: {
      ar: 'نظام سحابي شامل لإدارة المبيعات، الحسابات، المخازن، وشؤون الموظفين بمرونة كاملة.',
      en: 'A full cloud ERP for sales, accounting, inventory, and HR with complete flexibility.',
    },
    fullDesc: {
      ar: 'برنامج ERP متكامل يمنح الإدارة رؤية كاملة للشركة عبر تقارير بيانية تفاعلية وشاشات تحكم مخصصة لكل قسم مع أعلى معدلات حماية.',
      en: 'Integrated ERP giving leadership full visibility through interactive reports and custom dashboards per department with top-tier security.',
    },
    techStack: ['React', 'Express.js', 'PostgreSQL', 'Docker', 'Tailwind CSS'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 5,
    title: { ar: 'منصة عيادتي للاستشارات الطبية', en: 'Clinic telehealth platform' },
    category: 'web',
    client: { ar: 'مجموعة العيادات التخصصية', en: 'Specialty Clinics Group' },
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop',
    shortDesc: {
      ar: 'حجز مواعيد أطباء واستشارات عبر الفيديو مع ملف طبي إلكتروني مشفر للمريض.',
      en: 'Doctor booking and video consultations with an encrypted electronic patient record.',
    },
    fullDesc: {
      ar: 'تطبيق ويب تفاعلي يتيح للأطباء إدارة جدول المواعيد وتوفير استشارات طبية مرئية مباشرة بجودة عالية ونظام مدفوعات متعدد.',
      en: 'Interactive web app for doctors to manage schedules and deliver high-quality video consultations with multi-payment support.',
    },
    techStack: ['Next.js', 'WebRTC', 'Tailwind CSS', 'Node.js', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
  {
    id: 6,
    title: { ar: 'تطبيق اللياقة البدنية والتمارين الذكية', en: 'Smart fitness & workout app' },
    category: 'mobile',
    client: { ar: 'فيتنس بلاص', en: 'Fitness Plus' },
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop',
    shortDesc: {
      ar: 'تطبيق يساعد الأفراد على تتبع التمارين والسعرات الحرارية بخطط تدريب مخصصة.',
      en: 'Helps users track workouts and calories with personalized training plans.',
    },
    fullDesc: {
      ar: 'تطبيق لياقة وتغذية مع خطط شخصية، تذكيرات ذكية للتمارين، والتكامل مع الساعات الذكية Apple Watch و Android Wear.',
      en: 'Fitness & nutrition app with personal plans, smart workout reminders, and Apple Watch / Android Wear integration.',
    },
    techStack: ['React Native', 'GraphQL', 'Node.js', 'Firebase'],
    demoUrl: '#',
    githubUrl: '#',
    featured: false,
  },
];

export const techStack = [
  { name: 'React', category: { ar: 'واجهات', en: 'Frontend' }, icon: 'Code' },
  { name: 'Next.js', category: { ar: 'واجهات', en: 'Frontend' }, icon: 'Globe' },
  { name: 'Tailwind CSS', category: { ar: 'تصميم', en: 'Styling' }, icon: 'Palette' },
  { name: 'Node.js', category: { ar: 'خلفية', en: 'Backend' }, icon: 'Server' },
  { name: 'Python', category: { ar: 'ذكاء اصطناعي', en: 'AI & Data' }, icon: 'Terminal' },
  { name: 'Flutter', category: { ar: 'جوال', en: 'Mobile' }, icon: 'Smartphone' },
  { name: 'PostgreSQL', category: { ar: 'قواعد بيانات', en: 'Database' }, icon: 'Database' },
  { name: 'AWS & Docker', category: { ar: 'DevOps', en: 'DevOps' }, icon: 'Cloud' },
];

export const whyChooseUs = [
  {
    title: { ar: 'كود نظيف وقابل للتطوير', en: 'Clean, scalable code' },
    desc: {
      ar: 'نلتزم بأعلى معايير كتابة الكود وبنية الهندسة البرمجية Clean Code لضمان سهولة الصيانة والتوسع المستقبلي.',
      en: 'We follow Clean Code and solid architecture standards for easy maintenance and future growth.',
    },
    icon: 'ShieldCheck',
  },
  {
    title: { ar: 'التسليم والدقة في المواعيد', en: 'On-time delivery' },
    desc: {
      ar: 'نعتمد منهجية Agile التراكمية، مما يضمن تسليم المراحل في مواعيدها الدقيقة مع إطلاعك المستمر.',
      en: 'Agile delivery keeps milestones on schedule with continuous progress updates.',
    },
    icon: 'Clock',
  },
  {
    title: { ar: 'دعم فني وضمان مستمر', en: 'Ongoing support & warranty' },
    desc: {
      ar: 'نوفر ضمان فني شامل بعد إطلاق المشروع مع خدمات الصيانة والتحديثات الدورية 24/7.',
      en: 'Full post-launch warranty with 24/7 maintenance and regular updates.',
    },
    icon: 'Headphones',
  },
  {
    title: { ar: 'حماية وأمان معتمد', en: 'Certified security' },
    desc: {
      ar: 'تشفير البيانات وحماية التطبيقات من الثغرات وفق مقاييس الأمان العالمية OWASP.',
      en: 'Data encryption and OWASP-grade protection against vulnerabilities.',
    },
    icon: 'Lock',
  },
];

export const testimonials = [
  {
    id: 1,
    name: { ar: 'م. أحمد عبد الرحمن', en: 'Eng. Ahmed Abdel Rahman' },
    role: { ar: 'الرئيس التنفيذي - شركة ريادة للتطوير', en: 'CEO – Riada Development' },
    text: {
      ar: 'التعامل مع الفريق كان تجربة رائعة حقاً، تم تنفيذ مشروعنا بأعلى درجة من الاحترافية والسرعة قبل الوقت المحدد.',
      en: 'Working with the team was excellent — our project was delivered professionally and ahead of schedule.',
    },
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 2,
    name: { ar: 'د. سارة المنصوري', en: 'Dr. Sara Al-Mansouri' },
    role: { ar: 'مديرة مركز المستقبل الرقمي', en: 'Director – Digital Future Center' },
    text: {
      ar: 'أنظمة الذكاء الاصطناعي وتطبيق الجوال الذي طوروه لنا غير مجرى أعمالنا وزاد من رضا المراجعين بنسبة 40%.',
      en: 'The AI systems and mobile app they built transformed our operations and raised client satisfaction by 40%.',
    },
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: 3,
    name: { ar: 'أ. خالد العتيبي', en: 'Mr. Khaled Al-Otaibi' },
    role: { ar: 'مؤسس منصة سمارتر', en: 'Founder – Smarter Platform' },
    text: {
      ar: 'فريق متمكن للغاية في React والأنظمة السحابية. الكود نظيف والتصميم جذاب جداً لمستخدمينا.',
      en: 'Highly skilled in React and cloud systems. Clean code and a design our users love.',
    },
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
];

export { L };
