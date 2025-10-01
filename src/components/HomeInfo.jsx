import { Link } from "react-router-dom";
import { ArrowRight, User, Briefcase, Mail } from "lucide-react"; // Import Lucide icons

// Helper Component for the dynamic link (more reusable and cleaner)
const ActionLink = ({ to, label, icon: IconComponent }) => (
  <Link to={to} className='neo-brutalism-white neo-btn flex items-center justify-center gap-2 mt-4 text-sm sm:text-base'>
    {label}
    {/* Use the Lucide IconComponent */}
    <IconComponent className='w-4 h-4 object-contain transition-transform group-hover:translate-x-1' />
  </Link>
);

// Define the content and structure for each stage
const STAGE_CONTENT = {
  1: {
    title: (
      <>
        Hi, I'm <span className='font-semibold mx-2'>Nuwabiine</span> 👋
        <br />
      </>
    ),
    paragraph: "A Web & Software Developer from Uganda",
  },
  2: {
    paragraph: "Worked with a number of companies and individuals, and picked up many skills along the way.",
    link: {
      to: '/about',
      label: 'Learn more about me',
      icon: User, // Lucide User icon
    },
  },
  3: {
    paragraph: "Led multiple projects to success over the years. Curious about the impact?",
    link: {
      to: '/portfolio',
      label: 'Visit my portfolio',
      icon: Briefcase, // Lucide Briefcase icon
    },
  },
  4: {
    paragraph: "Need a project done or looking for a dev? I'm just a few keystrokes away.",
    link: {
      to: '/contact',
      label: "Let's talk",
      icon: Mail, // Lucide Mail icon
    },
  },
};

const HomeInfo = ({ currentStage }) => {
  // Class Names (kept for styling consistency)
  const hmInfoMainDiv = "p-5 rounded-md flex flex-col items-center bg-cyan-200/50 dark:bg-gray-800/50 shadow-md backdrop-blur-xs mx-5";
  const ptextClassName = "text-gray-800 dark:text-gray-100 text-center font-medium sm:text-xl";
  const h1ClassName = "sm:text-xl sm:leading-snug text-center py-4 px-6 text-black dark:text-cyan-200 mx-5";

  // Get content for the current stage
  const content = STAGE_CONTENT[currentStage];

  if (!content) return null;

  return (
    <div className={`${hmInfoMainDiv}`}>
      {/* Conditionally render the title (only for stage 1 in your original code) */}
      {content.title && (
        <h1 className={`${h1ClassName}`}>{content.title}</h1>
      )}

      {/* Always render the paragraph */}
      <p className={`${ptextClassName}`}>
        {content.paragraph}
      </p>

      {/* Conditionally render the dynamic link */}
      {content.link && (
        <ActionLink
          to={content.link.to}
          label={content.link.label}
          icon={content.link.icon}
        />
      )}
    </div>
  );
};

export default HomeInfo;