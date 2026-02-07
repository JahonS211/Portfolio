'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'uz' | 'ru' | 'uz_cyrl';

type Translations = {
   nav: {
      about: string;
      skills: string;
      projects: string;
      contact: string;
      education: string;
   };
   hero: {
      available: string;
      hi: string;
      role: string;
      description: string;
      viewProjects: string;
      contactMe: string;
      downloadCv: string;
      experience: string;
      projectsDone: string;
      clients: string;
   };
   about: {
      title: string;
      bio1: string;
      bio2: string;
      bio3: string;
      languagesTitle: string;
      skillsTitle: string;
   };
   projects: {
      title: string;
   };
   contact: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      sendButton: string;
   };
   playlist: {
      title: string;
      nowPlaying: string;
      description: string;
      listen: string;
   };
   education: {
      title: string;
      subtitle: string;
      role: string;
      course: string;
      description: string;
      years: string;
      achievements: string[];
      technologiesTitle: string;
   };
};

const translations: Record<Language, Translations> = {
   en: {
      nav: { about: 'About', skills: 'Skills', projects: 'Projects', contact: 'Contact', education: 'Education' },
      hero: {
         available: 'Available for Work',
         hi: 'Hi   I   am',
         role: 'Front-End \ndeveloper',
         description: 'I build accessible, pixel-perfect, secure, and performant web applications. Student at PDP School with 2 years of experience in modern web technologies.',
         viewProjects: 'View Projects',
         contactMe: 'Contact Me',
         downloadCv: 'Download CV',
         experience: 'Years Experience',
         projectsDone: 'Projects Done',
         clients: 'Happy Clients',
      },
      about: {
         title: 'About Me',
         bio1: 'I am 15 years old and a passionate Front End Developer.',
         bio2: 'My coding journey began at IT Park Uzbekistan, where I studied for 3 years, completing courses in Computer Literacy and HTML/CSS.',
         bio3: 'Currently, I am continuing my education at PDP School (2 years), focusing on advanced web technologies like React and Next.js. I specialize in building responsive, user-friendly web interfaces.',
         languagesTitle: 'Languages',
         skillsTitle: 'Technical Skills',
      },
      projects: { title: 'Featured Projects' },
      contact: {
         title: "Let's Work Together!",
         nameLabel: 'Your Name',
         namePlaceholder: 'Enter your name',
         emailLabel: 'Your Email',
         emailPlaceholder: 'Enter your email',
         phoneLabel: 'Phone Number',
         phonePlaceholder: 'Enter your phone',
         subjectLabel: 'Subject',
         subjectPlaceholder: 'Enter subject',
         messageLabel: 'Message',
         messagePlaceholder: 'Enter your message',
         sendButton: 'Send Message',
      },
      playlist: {
         title: 'My Yandex Music Vibe',
         nowPlaying: 'NOW PLAYING',
         description: 'Music is my fuel. Check out my Yandex Music playlist for coding and focus.',
         listen: 'Listen on Yandex Music',
      },
      education: {
         title: 'Education',
         subtitle: 'My journey at PDP School',
         role: 'Student',
         course: 'Frontend Development',
         description: 'Currently studying at PDP School, mastering modern web technologies.',
         months: 'Months',
         achievements: ['Real-world projects', 'Deep understanding of React', 'Team collaboration', 'Problem solving'],
         technologiesTitle: 'Technologies I learned',
      },
   },
   uz: {
      nav: { about: 'Men haqimda', skills: 'Ko\'nikmalar', projects: 'Loyihalar', contact: 'Bog\'lanish', education: 'Ta\'lim' },
      hero: {
         available: 'Ishlash uchun tayyorman',
         hi: 'Salom, men',
         role: 'Front-End \ndasturchi',
         description: 'Men qulay, pikselga mos, xavfsiz va tez ishlaydigan veb-ilovalarni yarataman. PDP maktabi o\'quvchisi va zamonaviy veb texnologiyalari bo\'yicha 2 yillik tajribaga egaman.',
         viewProjects: 'Loyihalar',
         contactMe: 'Bog\'lanish',
         downloadCv: 'CV yuklab olish',
         experience: 'Yillik Tajriba',
         projectsDone: 'Bitirgan Loyihalar',
         clients: 'Mamnun Mijozlar',
      },
      about: {
         title: 'Men Haqimda',
         bio1: 'Men 15 yoshdaman va ishtiyoqli Front End dasturchiman.',
         bio2: 'Mening dasturlashdagi sayohatim IT Park O\'zbekistonda boshlangan, u yerda 3 yil davomida Kompyuter savodxonligi va HTML/CSS kurslarini tamomlaganman.',
         bio3: 'Hozirda o\'qishimni PDP School da davom ettirmoqdaman (2 yil), React va Next.js kabi ilg\'or veb texnologiyalariga e\'tibor qaratmoqdaman. Men moslashuvchan va qulay veb-interfeyslarni yaratishga ixtisoslashganman.',
         languagesTitle: 'Tillar',
         skillsTitle: 'Texnik Ko\'nikmalar',
      },
      projects: { title: 'Saralangan Loyihalar' },
      contact: {
         title: 'Keling, birga ishlaymiz!',
         nameLabel: 'Ismingiz',
         namePlaceholder: 'Ismingizni kiriting',
         emailLabel: 'Emailingiz',
         emailPlaceholder: 'Emailingizni kiriting',
         phoneLabel: 'Telefon Raqam',
         phonePlaceholder: 'Telefon raqamingizni kiriting',
         subjectLabel: 'Mavzu',
         subjectPlaceholder: 'Mavzuni kiriting',
         messageLabel: 'Xabar',
         messagePlaceholder: 'Xabaringizni yozing',
         sendButton: 'Xabar Yuborish',
      },
      playlist: {
         title: 'Mening Yandex Music kayfiyatim',
         nowPlaying: 'HOZIR TINGLANMOQDA',
         description: 'Musiqa — mening kundalik quvvatim. Yandex Music pleylistimda kod yozish va diqqatni jamlash uchun musiqalar.',
         listen: 'Yandex Music-da tinglash',
      },
      education: {
         title: 'Ta\'lim',
         subtitle: 'PDP School dagi sayohatim',
         role: 'O\'quvchi',
         course: 'Frontend Dasturlash',
         description: 'Hozirda PDP School da tahsil olyapman, zamonaviy veb texnologiyalarini o\'zlashtiryapman.',
         months: 'Oy',
         achievements: ['Haqiqiy loyihalar', 'React ni chuqur o\'rganish', 'Jamoaviy ishlash', 'Muammolarni hal qilish'],
         technologiesTitle: 'O\'rgangan texnologiyalarim',
      },
   },
   ru: {
      nav: { about: 'Обо мне', skills: 'Навыки', projects: 'Проекты', contact: 'Контакты', education: 'Образование' },
      hero: {
         available: 'Открыт к предложениям',
         hi: 'Привет, я',
         role: 'Front-End \nразработчик',
         description: 'Я создаю удобные, пиксельные, безопасные и производительные веб-приложения. Студент PDP School с 2-летним опытом работы с современными веб-технологиями.',
         viewProjects: 'Проекты',
         contactMe: 'Связаться',
         downloadCv: 'Скачать резюме',
         experience: 'Лет Опыта',
         projectsDone: 'Завершенные Проекты',
         clients: 'Довольные Клиенты',
      },
      about: {
         title: 'Обо Мне',
         bio1: 'Мне 15 лет, и я увлеченный Front End разработчик.',
         bio2: 'Мой путь в программировании начался в IT Park Uzbekistan, где я учился 3 года, закончив курсы компьютерной грамотности и HTML/CSS.',
         bio3: 'В настоящее время я продолжаю обучение в PDP School (2 года), изучая передовые веб-технологии, такие как React и Next.js. Я специализируюсь на создании адаптивных и удобных веб-интерфейсов.',
         languagesTitle: 'Языки',
         skillsTitle: 'Технические Навыки',
      },
      projects: { title: 'Избранные Проекты' },
      contact: {
         title: 'Давайте работать вместе!',
         nameLabel: 'Ваше Имя',
         namePlaceholder: 'Введите ваше имя',
         emailLabel: 'Ваш Email',
         emailPlaceholder: 'Введите ваш email',
         phoneLabel: 'Номер Телефона',
         phonePlaceholder: 'Введите ваш номер телефона',
         subjectLabel: 'Тема',
         subjectPlaceholder: 'Введите тему',
         messageLabel: 'Сообщение',
         messagePlaceholder: 'Введите ваше сообщение',
         sendButton: 'Отправить Сообщение',
      },
      playlist: {
         title: 'Мое настроение в Yandex Music',
         nowPlaying: 'СЕЙЧАС ИГРАЕТ',
         description: 'Музыка — моя энергия. Послушайте мой плейлист в Yandex Music для кодинга и концентрации.',
         listen: 'Слушать в Yandex Music',
      },
      education: {
         title: 'Образование',
         subtitle: 'Мой путь в PDP School',
         role: 'Студент',
         course: 'Frontend Разработка',
         description: 'В настоящее время я учусь в PDP School, осваивая современные веб-технологии.',
         months: 'Месяцев',
         achievements: ['Реальные проекты', 'Глубокое понимание React', 'Командная работа', 'Решение проблем'],
         technologiesTitle: 'Изученные технологии',
      },
   },
   uz_cyrl: {
      nav: { about: 'Мен ҳақимда', skills: 'Кўникмалар', projects: 'Лойиҳалар', contact: 'Боғланиш', education: 'Таълим' },
      hero: {
         available: 'Ишлаш учун тайёрман',
         hi: 'Салом, мен',
         role: 'Front-End \nдастурчи',
         description: 'Мен қулай, пикселга мос, хавфсиз ва тез ишлайдиган веб-иловаларни яратаман. PDP мактаби ўқувчиси ва замонавий веб технологиялари бўйича 2 йиллик тажрибага эгаман.',
         viewProjects: 'Лойиҳалар',
         contactMe: 'Боғланиш',
         downloadCv: 'CV юклаб олиш',
         experience: 'Йиллик Тажриба',
         projectsDone: 'Битирган Лойиҳалар',
         clients: 'Мамнун Мижозлар',
      },
      about: {
         title: 'Мен Ҳақимда',
         bio1: 'Мен 15 ёшдаман ва иштиёқли Front End дастурчиман.',
         bio2: 'Менинг дастурлашдаги саёҳатим IT Park Ўзбекистонда бошланган, у ерда 3 йил давомида Компьютер саводхонлиги ва HTML/CSS курсларини тамомлаганман.',
         bio3: 'Ҳозирда ўқишимни PDP School да давом эттирмоқдаман (2 йил), React ва Next.js каби илғор веб технологияларига эътибор қаратмоқдаман. Мен мослашувчан ва қулай веб-интерфейсларни яратишга ихтисослашганман.',
         languagesTitle: 'Тиллар',
         skillsTitle: 'Техник Кўникмалар',
      },
      projects: { title: 'Сараланган Лойиҳалар' },
      contact: {
         title: 'Келинг, бирга ишлаймиз!',
         nameLabel: 'Исмингиз',
         namePlaceholder: 'Исмингизни киритинг',
         emailLabel: 'Emailингиз',
         emailPlaceholder: 'Emailингизни киритинг',
         phoneLabel: 'Телефон Рақам',
         phonePlaceholder: 'Телефон рақамингизни киритинг',
         subjectLabel: 'Мавзу',
         subjectPlaceholder: 'Мавзуни киритинг',
         messageLabel: 'Хабар',
         messagePlaceholder: 'Хабарингизни ёзинг',
         sendButton: 'Хабар Юбориш',
      },
      playlist: {
         title: 'Менинг Yandex Music кайфиятим',
         nowPlaying: 'ҲОЗИР ТИНГЛАНМОҚДА',
         description: 'Мусиқа — менинг қувватим. Yandex Music плейлистимда код ёзиш ва диққатни жамлаш учун мусиқалар.',
         listen: 'Yandex Music-да тинглаш',
      },
      education: {
         title: 'Таълим',
         subtitle: 'PDP School даги саёҳатим',
         role: 'Ўқувчи',
         course: 'Frontend Дастурлаш',
         description: 'Ҳозирда PDP School да таҳсил оляпман, замонавий веб технологияларини ўзлаштиряпман.',
         months: 'Ой',
         achievements: ['Ҳақиқий лойиҳалар', 'React ни чуқур ўрганиш', 'Жамоавий ишлаш', 'Муаммоларни ҳал қилиш'],
         technologiesTitle: 'Ўрганган технологияларим',
      },
   },
};

const LanguageContext = createContext<{
   language: Language;
   setLanguage: (lang: Language) => void;
   t: Translations;
}>({
   language: 'en',
   setLanguage: () => { },
   t: translations.en,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
   const [language, setLanguage] = useState<Language>('en');

   return (
      <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
         {children}
      </LanguageContext.Provider>
   );
};

export const useLanguage = () => useContext(LanguageContext);
