import { nanoid } from 'nanoid';
import resume from '../documents/KrisRingler-Resume.pdf';

// HEAD DATA
export const headData = {
  title: 'Kris Ringler | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Kris Ringler.',
  subtitle: 'I want to be your next Developer',
  cta: 'Find Out More',
};

// ABOUT DATA
export const aboutData = {
  img: 'newProfile.jpg',
  paragraphOne: 'Hi! My name is Kris Ringler and I’m your friendly neighborhood Developer. I specialize in React.js, Gatsby, and Shopify with a background in Digital Marketing and SEO. I spent the first portion of my career working in more hands on marketing jobs, until slowly progressing more towards the digital spectrum, to finally full-stack developer. Since becoming a developer, I’ve gravitated heavily towards Gatsby and React due to its quick development time, incredibly quick sites with built in lazy loading, and of course the SEO components that come with Gatsby. ',
  paragraphTwo: 'I’ve been working with Shopify over this past year as its become the eCommerce giant that it is. I came on to work on some already established sites to maintain and got pretty familiar with the platform. I’ve built some collection pages, product pages, additional video features to products, and some other changes to these sites, but am currently building one from the ground up.',
  paragraphThree: 'I’m looking to expand my work to more team environments and get some more experience working with databases and backend, so if you think I’d be a great fit for your team or could bring a unique perspective, reach out and I’d love to connect!',
  resume: resume, // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'explore-american.png',
    title: 'Explore American Grills',
    info: 'Landing page for a American Made Grills. Built multiple landing pages across this site using Gatbsy, React.js, and Bootstrap. Organized the data using Schema - making it a simple editing process to change or reuse the same template.',
    info2: 'Created by using a Photoshop document as a template and edit / resize photos to work across multiple viewports. Tested across mobile devices and tablets to makre sure it works across all breakpoints.',
    url: 'http://explore.americanmadegrills.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'proje-products.png',
    title: 'Proje Products',
    info: 'Shopify website that sells an array of car maitenance products. I update product pages, create blog posts, and update components. The entire site has been animated using GSAP - most notably on the home page with scroll effects and menu hover effects.',
    info2: 'Created radio buttons for each product variant and updated the variant to change the product photo. Built a video modal on the product page that animates on click and can utilize mulitple different video sources, including YouTube, Vimeo, and a raw mp4 using React, Bootstrap, and GSAP.',
    url: 'https://projeproducts.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'summerset-grills.png',
    title: 'Summerset Grills',
    info: 'Shopify website that sells high end grills similar to American Made Grills. I create and update products, collection pages, blogs, and other sitewide templates. Most recently created were the Sizzler and TRL 2021 pages. ',
    info2: 'Assets have all be resized and cropped with Photoshop to maintain consistency across all viewports.',
    url: 'https://summersetgrills.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'explore-summerset.png',
    title: 'Explore Summerset Grills',
    info: 'Landing Page for Summerset Grills. Developed a form modal ("5 Mistakes to Avoid When Buying a New Grill") ubilt using React-Bootstrap and GSAP for timed animations. Since it was built using React.js, its reused as a component across a couple different projects. ',
    info2: '',
    url: 'http://explore.summersetgrills.com/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'shift-agency.png',
    title: 'Shift Agency',
    info: 'Contracting Agency. I created animations site-wide to give it a more modern and snappy feel to the user experience. ',
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
