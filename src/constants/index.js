import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    stethoscope,
    summiz,
    tailwindcss,
    threads,
    typescript,
    youtube
} from "../assets/icons";
import heroImg from "../assets/images/hero.jpg";
import metaImg from "../assets/images/meta.png";
import reactessntialscertificateImg from "../assets/images/react-essentials-training.png";

export const bio = {
    name: {
        first: "Nuwabiine",
        last: "Bonaventure"
    },
    title: "A Fullstack Developer",
    subtitle: "Mobile, Web & Software  Development",
    description: "Specializing in the modern JavaScript ecosystem, focused on architecting and deploying dynamic, high-performance web and mobile applications.",
    email: "mnuwabiine@gmail.com",
    phone: "+256 760 420 592",
    address: {
        city: "Wakiso",
        country: "Uganda"
    }
} 
export const academics = [
  {
    title: "Bachelor's Degree in Information & Communication Technology",
    institution: "Uganda Martyrs University - Nkozi Campus",
    description:
      "Graduated with 2nd class. Then focused and specialised in Web and Mobile Application development, Graphics desgin with canva and Website development with WordPress, PHP, PhpMyAdmin, MySQL and cPanel. I also understand AI concepts and know my way around designing models with python.",
    image: heroImg,
    link: 'https://umu.ac.ug//',
    pdf: '/pdfs/transcript.pdf',
    year: '2022',
  },
  {
    title: "Computational Thinking Course",
    institution: "University of Pennsylvania - Coursera",
    description:
      "Completed Andrew Ng's ML course. Learned supervised/unsupervised learning, neural networks, and practical ML skills.",
    image: metaImg,
    link: 'https://www.coursera.org/learn/machine-learning',
    pdf: '/pdfs/transcript.pdf',
    year: '2023',
  },

  {
    title: "React Esentials Professional Certificate",
    institution: "LinkedIn Learning",
    description:
      "In this course, software developer and instructor Eve Porcello highlights the latest techniques for building a React app from scratch. Learn how to create elements, write components, and use React hooks. Get familiar with libraries like Next and Vite, and discover the differences between React Server Components and Client Components. Find out how to use the latest tools, techniques, and patterns that will help futureproof applications and make them more scalable and performant. After watching the course, you will be able to start your own project from scratch, and you will also be able to jump into an existing React codebase and make an impact.",
    image: reactessntialscertificateImg,
    link: 'https://www.linkedin.com/learning/certificates/2722e251fced4147ecb83a594c7ca502a86462f11bafe32aca19668aa50adc1c?trk=share_certificate',
    pdf: '/pdfs/react-essentials-training.pdf',
    year: '2025',
  },
];
export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
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
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    // {
    //     imageUrl: mui,
    //     name: "Material-UI",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Website Developer",
        company_name: "EVOTech",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Jan 2022 - July 2022",
        points: [
            "Engineered high-performance websites using WordPress, focusing on custom themes and plugin integration.",
            "Facilitated collaboration between design and product teams to translate Figma wireframes into functional code.",
            "Optimized front-end assets for maximum speed, achieving a 20% improvement in PageSpeed Insights scores.",
            "Conducted rigorous cross-browser testing and code reviews to maintain high standards of code quality."
        ],
    },
    {
        title: "Web & Software Developer",
        company_name: "Billbrain Technologies",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Oct 2022 - July 2023",
        points: [
            "Architected a robust School Management System using React.js, improving administrative efficiency.",
            "Developed interactive UI components and managed complex state transitions using modern JavaScript (ES6+).",
            "Maintained version control integrity across the team using Git/GitHub, resolving complex merge conflicts.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Kniht Technologies",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Nov 2023 - Aug 2025",
        points: [
            "Built scalable web applications utilizing the JavaScript ecosystem to deliver seamless user experiences.",
            "Bridged the gap between design and development by using Canva to create high-fidelity assets and marketing graphics.",
            "Implemented API integrations that streamlined data flow between frontend and backend services."
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "KNIHT Digital Solutions",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Sept 2025 - Present",
        points: [
            "Leading full-stack development for web and mobile applications using React Native and Node.js environments.",
            "Managing end-to-end deployment pipelines including cPanel, MySQL database architecture, and PHP backend logic.",
            "Hardened platform security by implementing Wordfence and conducting penetration testing via Kali Linux.",
            "Spearheaded the design language for the brand using Canva and ensured pixel-perfect responsive implementation."
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Bona96',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/nuwabiine-bonaventure',
    },
    {
        name: 'YouTube',
        iconUrl: youtube,
        link: 'https://www.youtube.com/channel/UC35EQJomaJ3nkAAwUvSxbfg',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-green',
        name: 'TAMI Uganda',
        description: 'Developed a website for the Transafrican Management Institute (TAMI) in Uganda, showcasing their services and facilitating user engagement in the digital space',
        link: 'https://tamiuganda.org/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'GN Associates',
        description: 'Developed a website for GN Associates, a finance company in Uganda, to enhance their online presence and attract potential clients.',
        link: 'https://gnassociatesug.com/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'Anita\'s Kitchen',
        description: 'A one page site for Anita\'s Kitchen, a catering company in Uganda, showcasing their services and facilitating user engagement in the digital space',
        link: 'https://anita-s-kitchen.vercel.app/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'Marlan\'s Unisex Beauty Salon',
        description: 'A one page site for Marlan\'s Unisex Beauty Salon, a salon in Uganda, showcasing their services and facilitating user engagement in the digital space',
        link: 'https://marlan-sunisexbeautysalon.vercel.app/',
    },
    {
        iconUrl: stethoscope,
        theme: 'btn-back-pink',
        name: 'Full Stack Clinic Management System',
        description: 'A comprehensive clinic management system that streamlines patient records, appointments, billing, and communication between healthcare providers and patients.',
        link: 'https://github.com/',
    }
];

// Centralized theme and styling for the app
export const themes = {
  default: {
    primary: 'bg-cyan-500 text-gray-200',
    secondary: 'bg-gray-200 dark:bg-gray-800 text-cyan-500 dark:text-cyan-200',
    accent: 'bg-cyan-200/50 dark:bg-cyan-800/50',
    border: 'border-blue-100 dark:border-blue-900',
    card: 'rounded-2xl shadow-xl p-6',
    button: 'px-6 py-2 rounded-lg font-semibold shadow transition-colors duration-200',
    link: 'text-cyan-700 dark:text-cyan-300 underline hover:text-cyan-500',
    tableHead: 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300',
    tableRow: 'border-t border-blue-100 dark:border-blue-900 hover:bg-blue-50 dark:hover:bg-blue-950',
    excerpt: 'text-slate-500 dark:text-slate-400',
  },
  theme1: {
    primary: 'bg-purple-600 text-white',
    secondary: 'bg-white dark:bg-gray-900 text-purple-600 dark:text-purple-300',
    accent: 'bg-purple-200/50 dark:bg-gray-800/50',
    border: 'border-purple-100 dark:border-purple-900',
    card: 'rounded-2xl shadow-xl p-6',
    button: 'px-6 py-2 rounded-lg font-semibold shadow transition-colors duration-200',
    link: 'text-purple-700 dark:text-purple-300 underline hover:text-purple-500',
    tableHead: 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300',
    tableRow: 'border-t border-purple-100 dark:border-purple-900 hover:bg-purple-50 dark:hover:bg-purple-950',
    excerpt: 'text-slate-500 dark:text-slate-400',
  },
  theme2: {
    primary: 'bg-green-600 text-white',
    secondary: 'bg-white dark:bg-gray-900 text-green-600 dark:text-green-300',
    accent: 'bg-green-200/50 dark:bg-gray-800/50',
    border: 'border-green-100 dark:border-green-900',
    card: 'rounded-2xl shadow-xl p-6',
    button: 'px-6 py-2 rounded-lg font-semibold shadow transition-colors duration-200',
    link: 'text-green-700 dark:text-green-300 underline hover:text-green-500',
    tableHead: 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300',
    tableRow: 'border-t border-green-100 dark:border-green-900 hover:bg-green-50 dark:hover:bg-green-950',
    excerpt: 'text-slate-500 dark:text-slate-400',
  },
};