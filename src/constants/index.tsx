import { AnitaKitchen, CandyKProject, GNAssociates, KnihtLogo, MarlanUnisex, reactessntialscertificateImg, TamiUganda } from "../assets/images/index";
import {
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  stethoscope,
  tailwindcss,
  typescript,
  youtube,
} from "../assets/icons";
// @ts-ignore
import heroImg from "../assets/images/hero.jpg";
// @ts-ignore
import metaImg from "../assets/images/meta.png";

import { Briefcase, Mail, User } from "lucide-react";
// @ts-ignore
import sakura from "../assets/music/sakura.mp3";
// @ts-ignore
import onecallaway from "../assets/music/onecallaway.mp3";

import type { Bio, StageContentType, ThemeType } from "../lib/types";


//Home hero section
// Define the content and structure for each stage
export const STAGE_CONTENT: Record<number, StageContentType> = {
  1: {
    title: (
      <>
        Hi, <span className="font-semibold mx-2">Nuwabiine here...</span> 👋
        <br />
      </>
    ),
    paragraph: "A Fullstack Web & Mobile Developer - Proud to be Ugandan",
  },
  2: {
    paragraph:
      "It has been a very exciting journey learning and building my skills as a developer. Want to know more about me?",
    link: {
      to: "/about",
      label: "Learn more...",
      icon: User, // Lucide User icon
    },
  },
  3: {
    paragraph: "Interested in seeing some of my work and projects?",
    link: {
      to: "/portfolio",
      label: "Visit my portfolio",
      icon: Briefcase, // Lucide Briefcase icon
    },
  },
  4: {
    paragraph:
      "Get in touch with me for collaborations, projects, or just to say hi!",
    link: {
      to: "/contact",
      label: "Let's talk",
      icon: Mail, // Lucide Mail icon
    },
  },
};

// Bio
export const bio: Bio = {
  name: {
    first: "Nuwabiine",
    last: "Bonaventure",
  },
  title: "A Fullstack Developer",
  subtitle: "Mobile, Web & Software  Development",
  description: `
    Fullstack Developer & Product Engineer specializing in Next.js, React Native, and Node.js. I
    transform complex business requirements into high-performance digital products, from type-safe
    database architectures with Prisma to immersive 3D web experiences using Three.js. With a
    background spanning both software development and secure server administration, I offer a holistic
    approach to the modern web. Enthusiast for Machine Learning and Quantum Computing,
    always looking to apply emerging technologies to solve real-world problems.
  `,
  email: "mnuwabiine@gmail.com",
  phone: "+256 760 420 592",
  address: {
    city: "Wakiso",
    country: "Uganda",
  },
};
// Academics
export const academics = [
  {
    title: "Bachelor's Degree in Information & Communication Technology",
    institution: "Uganda Martyrs University - Nkozi Campus",
    description:
      "Graduated with 2nd class. Then focused and specialised in Web and Mobile Application development, Graphics desgin with canva and Website development with WordPress, PHP, PhpMyAdmin, MySQL and cPanel. I also understand AI concepts and know my way around designing models with python.",
    image: heroImg,
    link: "https://umu.ac.ug//",
    pdf: "/pdfs/transcript.pdf",
    year: "2022",
  },
  {
    title: "Computational Thinking Course",
    institution: "University of Pennsylvania - Coursera",
    description:
      "Completed a course on computational thinking. Learned computational problem solving skills.",
    image: metaImg,
    link: "https://www.coursera.org/learn/machine-learning",
    pdf: "/pdfs/transcript.pdf",
    year: "2023",
  },

  {
    title: "React Esentials Professional Certificate",
    institution: "LinkedIn Learning",
    description:
      "In this course, software developer and instructor Eve Porcello highlights the latest techniques for building a React app from scratch. Learn how to create elements, write components, and use React hooks. Get familiar with libraries like Next and Vite, and discover the differences between React Server Components and Client Components. Find out how to use the latest tools, techniques, and patterns that will help futureproof applications and make them more scalable and performant. After watching the course, you will be able to start your own project from scratch, and you will also be able to jump into an existing React codebase and make an impact.",
    image: reactessntialscertificateImg,
    link: "https://www.linkedin.com/learning/certificates/2722e251fced4147ecb83a594c7ca502a86462f11bafe32aca19668aa50adc1c?trk=share_certificate",
    pdf: "/pdfs/react-essentials-training.pdf",
    year: "2025",
  },
];

// Skills
export const skills = [
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Fullstack",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "KNIHT Digital Solutions",
    icon: KnihtLogo,
    iconBg: "#a2d2fd",
    date: "Sept 2025 - Present",
    points: [
      `
        Product Architecture: Architected and deployed high-performance web and mobile
        applications using Next.js, React Native, and Node.js, focusing on SEO
        optimization and cross-platform accessibility.
      `,
      `
        Database & Cloud Orchestration: Managed complex data layers using Prisma
        ORM with Neon Serverless PostgreSQL and MySQL, ensuring type-safety and
        efficient data migrations.
      `,
      `
        Infrastructure Management: Streamlined deployment pipelines across Vercel,
        Railway, and cPanel, maintaining 99.9% uptime for a diverse portfolio of client
        projects (including TAMI Uganda and AMDA).
      `,
      `
        3D Web Development: Engineered immersive user interfaces using Three.js,
        pushing the boundaries of traditional web design to increase user engagement.
      `,
      `
        Hardened platform security by implementing Wordfence in websites
        deployed on cpanel server, http security using axios interceptors and 
        cors for server-side implementation using Node.js on webapps,
        while conducting penetration testing via Kali Linux.
      `,
      `
        Spearheaded the design language for the brand using Canva 
        and ensured pixel-perfect responsive implementation.
      `,
    ],
  },
  {
    title: "Web Developer",
    company_name: "Kniht Technologies",
    icon: react,
    iconBg: "#b7e4c7",
    date: "Nov 2023 - Aug 2025",
    points: [
      "Built scalable web applications utilizing the JavaScript ecosystem to deliver seamless user experiences.",
      "Bridged the gap between design and development by using Canva to create high-fidelity assets and marketing graphics.",
      "Implemented API integrations that streamlined data flow between frontend and backend services.",
    ],
  },

  {
    title: "Web & Software Developer",
    company_name: "Billbrain Technologies",
    icon: react,
    iconBg: "#fbc3bc",
    date: "Oct 2022 - July 2023",
    points: [
      ` System Integrity: Conducted rigorous performance monitoring and testing of
        enterprise web applications, ensuring high availability and robust data
        confidentiality.
      `,
      ` Maintenance & Optimization: Maintained a suite of legacy and modern websites
        (PHP/WordPress/JavaScript), implementing performance patches that improved
        page load speeds
      `,
      ` Compliance: Audited internal systems to ensure data integrity and security
        protocols were consistently met across all company digital assets.
      `,
    ],
  },
  {
    title: "Website Developer",
    company_name: "EVOTech",
    icon: html,
    iconBg: "#accbe1",
    date: "Jan 2022 - July 2022",
    points: [
      `
        Server Administration: Managed cPanel server environments and provided core
        technical support for the OSLIS Africa school management system, ensuring
        seamless service delivery.

      `,
      `
        Process Automation: Spearheaded automation initiatives for financial workflows,
        specifically developing tools for credit disbursement that reduced manual
        processing time
      `,
      `
        Disaster Recovery & Monitoring: Proactively diagnosed and resolved server-side
        issues, optimizing system uptime and establishing reliable backup/restoration
        routines
      `,
      `
        Agile Collaboration: Worked within an agile framework to facilitate rapid product
        releases and upgrades, acting as the bridge between development and system
        operations.
      `,
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Bona96",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/nuwabiine-bonaventure",
  },
  {
    name: "YouTube",
    iconUrl: youtube,
    link: "https://www.youtube.com/channel/UC35EQJomaJ3nkAAwUvSxbfg",
  },
];

export const projects = [
  {
    iconUrl: CandyKProject,
    theme: "btn-back-pink",
    name: "Candy K Luxe Cosmetics",
    description:
      "An Ecommerce website for Candy K Luxe Cosmetics, a beauty company in Uganda, showcasing their products and retailing services, facilitating user engagement and online sales.",
    link: "https://candykluxecosmetics.vercel.app/",
  },
  {
    iconUrl: MarlanUnisex,
    theme: "btn-back-yellow",
    name: "Marlan's Unisex Beauty Salon",
    description:
      "A one page site for Marlan's Unisex Beauty Salon, a salon in Uganda, showcasing their services and facilitating user engagement in the digital space",
    link: "https://marlan-sunisexbeautysalon.vercel.app/",
  },
  {
    iconUrl: TamiUganda,
    theme: "btn-back-green",
    name: "TAMI Uganda",
    description:
      "Developed a wordpress website for the Transafrican Management Institute (TAMI) in Uganda, showcasing their services and facilitating user engagement in the digital space",
    link: "https://tamiuganda.org/",
  },
  {
    iconUrl: GNAssociates,
    theme: "btn-back-yellow",
    name: "GN Associates",
    description:
      "Developed a wordpress website for GN Associates, a finance company in Uganda, to enhance their online presence and attract potential clients.",
    link: "https://gnassociatesug.com/",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-yellow",
    name: "STAWI Hope of Africa",
    description:
      "Developed a wordpress website for STAWI, an NGO in Uganda, to enhance their online presence and attract potential clients.",
    link: "https://stawihopeofafrica.org/",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-yellow",
    name: "KNiHT Digital School",
    description:
      "Currently developing a web application, for KNIHT Digital School. Meant to extend the learning experience to the online space.",
    link: "https://kniht-digital-school.vercel.app/",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-yellow",
    name: "KNiHT Digital Solutions",
    description:
      "Currently developing a web application, for KNIHT Digital School. Meant to extend the learning experience to the online space.",
    link: "https://knihtdigitalsolutions.vercel.app/",
  },
  {
    iconUrl: AnitaKitchen,
    theme: "btn-back-yellow",
    name: "Anita's Kitchen",
    description:
      "A one page site for Anita's Kitchen, a catering company in Uganda, showcasing their services and facilitating user engagement in the digital space",
    link: "https://anita-s-kitchen.vercel.app/",
  },
  
  {
    iconUrl: stethoscope,
    theme: "btn-back-pink",
    name: "Full Stack Clinic Management System",
    description:
      "A comprehensive clinic management system that streamlines patient records, appointments, billing, and communication between healthcare providers and patients.",
    link: "https://github.com/",
  },
];

// Centralized theme and styling for the app
export const themes: ThemeType[] = [
  {
    id: 1,
    name: "default",
    styles: {
      primary: "bg-cyan-500 text-gray-200",
      secondary:
        "bg-gray-200 dark:bg-gray-800 text-cyan-500 dark:text-cyan-200",
      accent: "bg-cyan-200/50 dark:bg-cyan-800/50",
      border: "border-blue-100 dark:border-blue-900",
      card: "rounded-2xl shadow-xl p-6",
      button:
        "px-6 py-2 rounded-lg font-semibold shadow transition-colors duration-200",
      link: "text-cyan-700 dark:text-cyan-300 underline hover:text-cyan-500",
      tableHead:
        "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
      tableRow:
        "border-t border-blue-100 dark:border-blue-900 hover:bg-blue-50 dark:hover:bg-blue-950",
      excerpt: "text-slate-500 dark:text-slate-400",
    },
  },
  {
    id: 2,
    name: "themeOne",
    styles: {
      primary: "bg-purple-600 text-white",
      secondary:
        "bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-300",
      accent: "bg-purple-200/50 dark:bg-gray-800/50",
      border: "border-purple-100 dark:border-purple-900",
      card: "rounded-2xl shadow-xl p-6",
      button:
        "px-6 py-2 rounded-lg font-semibold shadow transition-colors duration-200",
      link: "text-purple-700 dark:text-purple-300 underline hover:text-purple-500",
      tableHead:
        "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
      tableRow:
        "border-t border-purple-100 dark:border-purple-900 hover:bg-purple-50 dark:hover:bg-purple-950",
      excerpt: "text-slate-500 dark:text-slate-400",
    },
  },
  {
    id: 3,
    name: "themeTwo",
    styles: {
      primary: "bg-green-600 text-white",
      secondary: "bg-white dark:bg-gray-900 text-green-600 dark:text-green-300",
      accent: "bg-green-200/50 dark:bg-gray-800/50",
      border: "border-green-100 dark:border-green-900",
      card: "rounded-2xl shadow-xl p-6",
      button:
        "px-6 py-2 rounded-lg font-semibold shadow transition-colors duration-200",
      link: "text-green-700 dark:text-green-300 underline hover:text-green-500",
      tableHead:
        "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      tableRow:
        "border-t border-green-100 dark:border-green-900 hover:bg-green-50 dark:hover:bg-green-950",
      excerpt: "text-slate-500 dark:text-slate-400",
    },
  },
];

export const SONGS = [
  { label: "One call", value: onecallaway },
  { label: "Sakura", value: sakura },
  // Add more songs here, e.g. { label: "Another Song", value: anotherSong }
];

// Configurable form fields for reusability
export const FORM_FIELDS = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "Bonaventure",
    required: true,
  },
  {
    name: "email",
    label: "Email",
    type: "email",
    placeholder: "example@gmail.com",
    required: true,
  },
  {
    name: "message",
    label: "Your Message",
    type: "textarea",
    placeholder: "Write your thoughts here...",
    required: true,
    rows: 4,
  },
];
