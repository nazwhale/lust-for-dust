import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Lust For Dust | Edinburgh Cleaners', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Edinburgh Cleaning', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `🧹 Hi, we're`,
  name: 'Lust For Dust!',
  subtitle: `We're the best cleaners in Edinburgh`,
  cta: 'Learn more about us',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Lust for Dust was...',
  paragraphTwo: 'You can trust us because xyz...',
  paragraphThree: 'Listen to what our customers say about us below',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bridget-mushroom.jpg',
    title: 'Bridget - Newhaven',
    info: `Lust for Dust have been cleaning my flat in Newhaven for 6 months now and they're the best I've found in Edinburgh.`,
    info2: `Julie is always a pleasure to see, does an AMAZING job, and I can absolutely trust her. Would highly recommend!`,
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Clo - Leith',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Stephen - Granton',
    info: '',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to book us in for a free trial clean? Great!',
  btn: 'Send us an email',
  email: 'naz@hyko.uk',
};

// FOOTER DATA
export const footerData = {
  networks: [],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
