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

export const bio = {
    name: {
        first: "Nuwabiine",
        last: "Bonaventure"
    },
    title: "Web & Software Developer",
    description: "A results-driven Full Stack Developer from Uganda - specializing in the modern JavaScript ecosystem, focused on architecting and deploying dynamic, high-performance web and mobile applications.",
    email: "mnuwabiine@gmail.com",
    phone: "+256 760 420 592",
    address: {
        city: "Wakiso",
        country: "Uganda"
    }
} 

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
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
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
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }
];

export const experiences = [
    {
        title: "Website Developer",
        company_name: "EVOTech",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Jan 2022 - July 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web & Software Developer",
        company_name: "Billbrain Technologies",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Oct 2022 - July 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Kniht Technologies",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "Nov 2023 - Aug 2025",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "KNIHT Digital Solutions",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "Sept 2025 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
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
    primary: 'bg-blue-600 text-white',
    secondary: 'bg-white dark:bg-gray-900 text-blue-600 dark:text-blue-300',
    accent: 'bg-cyan-200/50 dark:bg-gray-800/50',
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