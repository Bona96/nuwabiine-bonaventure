import { AegisAI, AnitaKitchen, CandyKProject, GNAssociates, KnihtdigitalSolutions, KnihtLogo, MarlanUnisex, MigaddeCatholicParish, reactessntialscertificateImg, Slisuganda, Stawi } from "../assets/images/index";
import {
  contact,
  cybersecurity,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  linux,
  nextjs,
  nodejs,
  postgresSQL,
  quantum,
  react,
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

// Home hero section
export const STAGE_CONTENT: Record<number, StageContentType> = {
  1: {
    title: (
      <>
        Hi, <span className="font-semibold mx-2">Nuwabiine here...</span> 👋
        <br />
      </>
    ),
    paragraph: "Full-Stack Engineer · Security & DevOps · Post-Quantum Cryptography Researcher",
  },
  2: {
    paragraph:
      "Building, deploying, and securing production web platforms end-to-end—from database schema to hardened server. Want to know more about me?",
    link: {
      to: "/about",
      label: "Learn more...",
      icon: User,
    },
  },
  3: {
    paragraph: "Interested in seeing my production apps, client platforms, and security research?",
    link: {
      to: "/portfolio",
      label: "Visit my portfolio",
      icon: Briefcase,
    },
  },
  4: {
    paragraph:
      "Get in touch with me for collaborations, security audits, software engineering projects, or just to say hi!",
    link: {
      to: "/contact",
      label: "Let's talk",
      icon: Mail,
    },
  },
};

// Bio
export const bio: Bio = {
  name: {
    first: "Nuwabiine",
    last: "Bonaventure",
  },
  title: "Full-Stack Engineer & PQC Researcher",
  subtitle: "Security, DevOps & High-Performance Web Systems",
  description: `
    Full-stack JavaScript engineer and M.Sc. Cybersecurity & Digital Forensics candidate (Year 1 CGPA 4.8) who builds, deploys, and secures production web platforms end to end, from database schema to hardened server. Founder of KNiHT Digital Solutions, with live platforms serving e-commerce, NGO, hospitality, and faith-community clients. 

    Applies Linux hardening, incident response, and audit practice to every system under management. Active research focus in post-quantum cryptography for tamper-evident digital evidence, featuring open-source projects like pqdf-core (Rust/Node.js/gRPC with NIST ML-DSA & ML-KEM) and AegisVault AI (zero-trust quantum-aware dApp).
  `,
  email: "mnuwabiine@gmail.com",
  phone: "+256 760 420 592",
  address: {
    city: "Wakiso",
    country: "Uganda",
  },
};

// Academics & Certifications
export const academics = [
  {
    title: "M.Sc. Cybersecurity and Digital Forensics",
    institution: "Uganda Christian University (Faculty of Engineering, Design and Technology)",
    description:
      "Year 1 complete with a CGPA of 4.8. Coursework covers Security Governance & Compliance, Digital Forensic Analysis & Cybercrime Investigations, Cybersecurity Audit & Risk Management, Security Monitoring & Incident Response, Advanced Ethical Hacking & Penetration Testing, and Cybersecurity Research Methods.",
    image: heroImg,
    link: "https://ucu.ac.ug/",
    year: "2026 – Present",
  },
  {
    title: "B.Sc. Information Technology",
    institution: "Uganda Martyrs University",
    description:
      "Graduated with Second Class Honors (Lower Division). Coursework included Information Security, Operating Systems, Data Communication & Networks, System Administration, Database Management Systems, Web-based Systems Programming, and Data Structures & Algorithms.",
    image: heroImg,
    link: "https://umu.ac.ug/",
    year: "2016 – 2022",
  },
  {
    title: "React Essentials Professional Certificate",
    institution: "LinkedIn Learning",
    description:
      "Highlighted modern techniques for building React applications from scratch, utilizing components, hooks, Next.js, Vite, and React Server Components for scalable, performant architecture.",
    image: reactessntialscertificateImg,
    link: "https://www.linkedin.com/learning/certificates/2722e251fced4147ecb83a594c7ca502a86462f11bafe32aca19668aa50adc1c?trk=share_certificate",
    pdf: "/pdfs/react-essentials-training.pdf",
    year: "Oct 2025",
  },
  {
    title: "Computational Thinking for Problem Solving",
    institution: "University of Pennsylvania / Coursera",
    description:
      "Completed rigorous foundational training in computational thinking and algorithmic problem-solving methodologies.",
    image: metaImg,
    link: "https://www.coursera.org/",
    year: "Mar 2023",
  },
];

// Skills
export const skills = [
  { imageUrl: cybersecurity, name: "Cybersecurity", type: "Security" },
  { imageUrl: express, name: "Express", type: "Backend" },
  { imageUrl: git, name: "Git", type: "" },
  { imageUrl: html, name: "HTML 5", type: "Frontend" },
  { imageUrl: javascript, name: "JavaScript (ES6+)", type: "Languages & Web" },
  { imageUrl: linux, name: "Linux", type: "Infrastructure" },
  { imageUrl: nextjs, name: "Next.js", type: "Frontend" },
  { imageUrl: nodejs, name: "Node.js", type: "Backend" },
  { imageUrl: postgresSQL, name: "PostgreSQL", type: "Database" },
  { imageUrl: quantum, name: "Post-Quantum Cryptography", type: "Research" },
  { imageUrl: react, name: "React", type: "Frontend" },
  { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
  { imageUrl: typescript, name: "TypeScript", type: "Languages & Web" },
];

// Work Experience
export const experiences = [
  {
    title: "Founder, Full-Stack Developer & Server Administrator",
    company_name: "KNiHT Digital Solutions, Uganda",
    icon: KnihtLogo,
    iconBg: "#a2d2fd",
    date: "Oct 2023 – Present",
    points: [
      "Founded and run a development practice that has shipped 7+ production platforms across e-commerce, hospitality, NGO, and faith-community sectors, owning each from first commit through hosting, security, and uptime.",
      "Full-stack JavaScript delivery: Next.js (SSR) frontends, Node.js/Express APIs, and Prisma with PostgreSQL/MySQL (e.g., Candy.K Luxe Cosmetics and KNiHT agency site with Three.js).",
      "CI/CD automation: Vercel pipelines deploying main branches in under 2 minutes with automated Prisma migrations; cPanel deployments via Git hooks and CLI scripts.",
      "Linux & Server Administration: cPanel/Linux hosting management, file-permission hardening, user/group access control, HTTP-to-HTTPS redirects, SSL renewals, and WP-CLI cron automation.",
      "Monitoring & Incident Response: Tracking server health, Vercel analytics, and uptime alerts; rapidly resolving failed deployments, DB drops, and DNS issues.",
    ],
  },
  {
    title: "Embedded ICT & Server Administrator",
    company_name: "TAMI Uganda",
    icon: KnihtLogo,
    iconBg: "#b7e4c7",
    date: "Oct 2023 – Jun 2026",
    points: [
      "Revamped enterprise site infrastructure (WooCommerce, DNS, cPanel hardening), significantly improving page load speeds and Core Web Vitals.",
    ],
  },
  {
    title: "Web & Software Developer",
    company_name: "Billbrain Technologies",
    icon: react,
    iconBg: "#ffe5ec",
    date: "Oct 2022 – Jul 2023",
    points: [
      "Monitored and tested enterprise web applications for availability and data confidentiality; audited internal systems for data integrity and security compliance.",
      "Maintained and patched legacy and modern PHP, WordPress, and JavaScript systems to boost performance.",
    ],
  },
  {
    title: "Systems Administrator & Developer",
    company_name: "EVOTECH Uganda Limited",
    icon: react,
    iconBg: "#e2ece9",
    date: "Jan 2022 – Jul 2022",
    points: [
      "Administered cPanel servers and provided technical support for the OSLIS Africa school management system.",
      "Built automation tools for financial workflows (credit disbursement), reducing manual processing time.",
      "Diagnosed server-side issues, established backup/restoration routines, and worked in Agile release teams.",
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
    link: "https://github.com/bona96",
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

// Projects (Including Production Apps & PQC Research)
export const projects = [
  {
    iconUrl: CandyKProject,
    theme: "btn-back-pink",
    name: "pqdf-core (Research)",
    description:
      "Open-source post-quantum digital forensics platform in Rust & Node.js/gRPC. Replaces RSA/ECDSA with NIST-standardized ML-DSA and ML-KEM to counter Harvest-Now-Decrypt-Later attacks.",
    link: "https://github.com/bona96/pqdf-core",
  },
  {
    iconUrl: AegisAI,
    theme: "btn-back-yellow",
    name: "AegisVault AI (Research)",
    description:
      "Zero-trust, quantum-aware browser dApp featuring local key derivation (PBKDF2/AES-GCM), WOTS+ hybrid transaction signing, Ring-LWE key encapsulation, and a Solidity static analyzer.",
    link: "https://bona96.github.io/aegisvault-ai/",
  },
  {
    iconUrl: CandyKProject,
    theme: "btn-back-pink",
    name: "Candy K Luxe Cosmetics",
    description:
      "A sophisticated e-commerce storefront with cart, orders, reviews, serverless order notifications, and media uploads built with Next.js, Node.js, Prisma, and PostgreSQL.",
    link: "https://candykluxecosmetics.vercel.app/",
  },
  {
    iconUrl: KnihtdigitalSolutions,
    theme: "btn-back-yellow",
    name: "KNiHT Digital Solutions",
    description:
      "A modern, high-performance agency portfolio featuring a Three.js 3D interactive interface built with Next.js and Tailwind CSS.",
    link: "https://knihtdigitalsolutions.vercel.app/",
  },
  {
    iconUrl: MarlanUnisex,
    theme: "btn-back-yellow",
    name: "Marlan's Unisex Beauty Salon",
    description:
      "An elegant booking and showcase platform designed to elevate the salon's brand and simplify client appointments.",
    link: "https://marlan-sunisexbeautysalon.vercel.app/",
  },
  {
    iconUrl: AnitaKitchen,
    theme: "btn-back-yellow",
    name: "Anita's Kitchen",
    description:
      "An inviting digital interface highlighting culinary offerings and streamlining the customer ordering process.",
    link: "https://anita-s-kitchen.vercel.app/",
  },
  {
    iconUrl: MigaddeCatholicParish,
    theme: "btn-back-pink",
    name: "St Achileo Kiwanuka Catholic Parish",
    description:
      "Bilingual (English/Luganda) parish portal hosted on cPanel/Linux with SSL security, event management, and online donations.",
    link: "https://migaddecatholicparish.com",
  },
  {
    iconUrl: Stawi,
    theme: "btn-back-yellow",
    name: "Stawi Hope of Africa",
    description:
      "NGO platform dedicated to showcasing community-led child development and sustainable agriculture initiatives.",
    link: "https://stawihopeofafrica.org/",
  },
  {
    iconUrl: Slisuganda,
    theme: "btn-back-yellow",
    name: "SLIS Uganda",
    description:
      "Interactive digital ecosystem for community action, institutional collaboration, and change initiatives.",
    link: "https://slisuganda.org/",
  },
  {
    iconUrl: GNAssociates,
    theme: "btn-back-yellow",
    name: "GN Associates",
    description:
      "Professional digital presence highlighting expertise in financial risk management, corporate governance, and strategic advisory services.",
    link: "https://gnassociatesug.com/",
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
];

export const SONGS = [
  { label: "One call", value: onecallaway },
  { label: "Sakura", value: sakura },
];

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