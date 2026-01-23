import { Link } from "react-router-dom";
import { ArrowRight, User, Briefcase, Mail } from "lucide-react"; // Import Lucide icons

import { UG as Uganda } from "country-flag-icons/react/3x2";
import { STAGE_CONTENT } from "../constants";

// Helper Component for the dynamic link (more reusable and cleaner)
const ActionLink = ({ to, label, icon: IconComponent }) => (
  <Link
    to={to}
    className="rounded-md shadow-md p-2 shadow-cyan-600 hover:shadow-cyan-800 text-black dark:text-gray-200 flex items-center justify-center gap-2 mt-4 text-sm sm:text-base"
  >
    {label}
    {/* Use the Lucide IconComponent */}
    <IconComponent className="w-4 h-4 object-contain transition-transform group-hover:translate-x-1" />
  </Link>
);

const HomeInfo = ({ currentStage }) => {
  // Class Names (kept for styling consistency)
  const hmInfoMainDiv =
    "p-5 rounded-md flex flex-col items-center bg-cyan-200/50 dark:bg-gray-800/50 shadow-md shadow-cyan-600 hover:shadow-cyan-800 backdrop-blur-xs m-5 p-5 w-[600px]";
  const ptextClassName =
    "text-gray-800 dark:text-gray-100 text-center font-medium sm:text-lg";
  const h1ClassName =
    "sm:text-xl sm:leading-snug text-center py-4 px-6 text-black dark:text-cyan-200 mx-5";

  // Get content for the current stage
  const content = STAGE_CONTENT[currentStage];

  if (!content) return null;

  return (
    <div className={`${hmInfoMainDiv}`}>
      {/* Conditionally render the title (only for stage 1 in your original code) */}
      {content.title && <h1 className={`${h1ClassName}`}>{content.title}</h1>}

      {/* Always render the paragraph */}
      <p className={`${ptextClassName}`}>
        {content.paragraph}{" "}
        <Uganda className="inline-block w-6 h-4 ml-2" title="Uganda" />
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
