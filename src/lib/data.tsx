import { Github, Twitter, Figma, Linkedin } from 'lucide-react';

import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoAndroid from '/public/images/logos/icon-android.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoIOS from '/public/images/logos/icon-apple.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';

import LogoGit from '/public/images/logos/icon-git.svg';
import LogoJest from '/public/images/logos/jest-js-icon.svg';
import LogoRedux from '/public/images/logos/Redux-js-icon.svg';
import LogoD3 from '/public/images/logos/D3-js-icon.svg';

import LogoMSI from '/public/images/logos/logo-msi.svg';
import LogoMSIDark from '/public/images/logos/logo-msi-dark.svg';
import Texas from '/public/images/logos/icon-texas.avif';
import TexasDark from '/public/images/logos/icon-texas-dark.png';

import AvatarRajat from '/public/images/avatar-rajat.png';
import AvatarShubham from '/public/images/avatar-shukla.png';
import AvatarManju from '/public/images/avatar-manju.png';
import xtratune from '/public/images/xtratune.jpg';
import chatsphere from '/public/images/chatsphere.png';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/shekhardubey',
  },
  {
    icon: Twitter,
    url: 'https://x.com/',
  },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/shekhar-dubey-73662b161/',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'React Native',
    logo: LogoReact,
    url: 'https://reactnative.dev/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Android',
    logo: LogoAndroid,
    url: 'https://www.android.com/',
  },
  {
    label: 'iOS',
    logo: LogoIOS,
    url: 'https://www.apple.com/',
  },
  {
    label: 'D3.js',
    logo: LogoD3,
    url: 'https://d3js.org/',
  },
  {
    label: 'Redux',
    logo: LogoRedux,
    url: 'https://redux.js.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Jest',
    logo: LogoJest,
    url: 'https://jestjs.io/',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  }, 
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoMSIDark,
    darkModeLogo: LogoMSI,
    logoAlt: 'msi logo',
    position: 'Senior Member Technical Staff (R&D)',
    startDate: new Date(2021, 7),
    currentlyWorkHere: true,
    summary: [
      "Managed the end-to-end development of a mobile app (iOS/Android) and maintained strong customer relationships through regular interactions and support.",
      "Full-stack development for the Audit Manager Project, including creating the Login Page UI and implementing all necessary REST APIs for user registration, login, password change, and password reset. Utilized ReactJS for the frontend and NodeJS with ExpressJS and MongoDB for the backend.",
      "Engineered the migration of GRC application from Backbone.js to Next.js, driving a 40% enhancement in user experience and a 30% reduction in load times, resulting in a significant boost in performance & efficiency metrics.",
      "Led the successful migration of charts within a GRC application from Fusion Charts to D3, resulting in a 50% increase in data visualization capabilities and a 40% enhancement in interactivity.",
      "Implemented mpowerAPIs for consumption by the Business Rules team.",
      "Fostered cross-functional collaboration to align project requirements and seamlessly integrate components.",
      "Collaborated with the development team to identify and fix performance bottlenecks, resulting in a 20% increase in application speed using caching.",
      "Resolved 300+ critical bugs in the company’s software, improving stability and customer satisfaction.",
      "Collaborated with cross-functional teams to coordinate project requirements and ensure seamless integration of components, resulting in a 20% reduction in integration issues.",
      "Proven track record of successfully delivering projects within tight deadlines, and ability to manage multiple tasks simultaneously while maintaining attention to detail and quality."
    ],
  },
  {
    logo: Texas,
    darkModeLogo: TexasDark,
    logoAlt: 'Texas Instruments India',
    position: 'Project Trainee',
    startDate: new Date(2021, 1),
    endDate: new Date(2021, 7),
    summary: [
      'Developed Line of Credit Payer Portal for ti.com/store.',
      'Brainstormed new ideas & gathered requirements for internal projects.',
      'Designed architecture of different projects (frontend + backend).',
      'Created schemas for customers and payers using Oracle SQL.',
      'Developed Spring Boot project with MVC architecture with front end as Thymeleaf.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'XtraTune',
    description: "Developed a sleek and intuitive song streaming application using Next.js and React.js, seamlessly integrating navigation and playback functionalities for an enhanced user experience.",
    url: 'https://github.com/kumarujjwal959/XtraTune',
    previewImage: xtratune,
    technologies: [
      'javascript',
      'React.js',
      'Next.js',
      'typescript',
      'tailwindcss'
    ],
  },
  {
    name: 'ChatSphere',
    description: "Developed a real-time chat application utilizing WebSocket API and the ws library, implementing a MERN (MongoDB, Express.js, React.js, Node.js) stack for seamless communication. Designed and styled the user interface of the chat application using TailwindCSS, ensuring a modern and responsive user experience.",
    url: 'https://github.com/kumarujjwal959/ChatSphere',
    previewImage: chatsphere,
    technologies: [
      'javascript',
      'React.js',
      'Next.js',
      'typescript',
      'WebSockets',
      'MongoDB',
      'ExpressJS',
      'Cloudinary',
      'tailwindcss'
    ],
  }
];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Manjunatha N',
    personAvatar: AvatarManju,
    title: 'Lead Engineer (MetricStream)',
    testimonial:
      "As the team lead, I've had the pleasure of collaborating closely with Shekhar. His coding proficiency and commitment to quality are unmatched. Shekhar's ability to tackle challenging problems head-on and deliver stellar results has been instrumental in our team's success. With Shekhar's expertise in our team, we're not just meeting expectations – we're delivering high quality products.",
  },
  {
    personName: 'Shubham Shukla',
    personAvatar: AvatarShubham,
    title: 'SMTS(MetricStream)',
    testimonial:
      "Working alongside Shekhar, I've witnessed his exceptional coding expertise and problem-solving skills. His dedication to quality and willingness to collaborate make him a valuable asset to our team. Shekhar's positive attitude and eagerness to learn also makes him a pleasure to work with, further solidifying his reputation as an outstanding software developer and a good team player.",
  },
  {
    personName: 'Rajat Shukla',
    personAvatar: AvatarRajat,
    title: 'MTS(MetricStream)',
    testimonial:
      "Shekhar was extremely easy and pleasant to work with and he truly cares about the project being a success. He has a high level of knowledge and was able to work on MERN stack application with me without any issues & consistently demonstrates a keen ability to tackle complex problems with innovative solutions, contributing greatly to our team's success. His collaborative nature and commitment to excellence make him an invaluable asset to any project.",
  },
];
