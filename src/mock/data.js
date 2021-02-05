import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kris Ringler | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'newProfile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/kris-ringler/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAAAVdTuUBV0pRjNwaG_8PBCO18JtdLQjFwK4,1612484426360)/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'explore-american.png',
    title: 'Explore American Grills',
    info: '',
    info2: '',
    url: 'http://explore.americanmadegrills.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'explore-summerset.png',
    title: 'Explore Summerset Grills',
    info: '',
    info2: '',
    url: 'http://explore.summersetgrills.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'summerset-grills.png',
    title: 'Summerset Grills',
    info: '',
    info2: '',
    url: 'https://summersetgrills.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proje-products.png',
    title: 'Proje Products',
    info: '',
    info2: '',
    url: 'https://projeproducts.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'shift-agency.png',
    title: 'Shift Agency',
    info: '',
    info2: '',
    url: 'https://shiftagency.com/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'kmringler@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kris-ringler/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/KrisKringle1',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
