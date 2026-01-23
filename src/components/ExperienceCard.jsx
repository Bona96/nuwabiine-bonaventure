import { motion } from "framer-motion"; // 1. Import motion

// Utility for Framer Motion Variants
// This will animate the item in from the side as it comes into view
const fadeIn = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.25 }, // Animate once when 25% of the element is visible
};

// 3. Define the new ExperienceCard component (or put it in a separate file)
const ExperienceCard = ({ experience }) => {
  // Define the animation for the revealing icon
  const iconVariants = {
    initial: { opacity: 0, x: 20, scale: 0.8 },
    hover: { opacity: 1, x: 0, scale: 1 },
  };

  return (
    <motion.div
      {...fadeIn}
      initial="initial"
      whileHover="hover" // This triggers children animations with the same name
      className="flex relative items-start mb-12 last:mb-0 group cursor-default"
    >
      {/* Timeline Dot & Line */}
      <div className="flex flex-col items-center mr-6">
        <div
          className="w-5 h-5 rounded-full border-4 shadow-md shrink-0 z-10 transition-transform group-hover:scale-110"
          style={{ borderColor: experience.iconBg, backgroundColor: "#fff" }}
        />
        <div className="w-0.5 bg-gray-300 dark:bg-gray-700 h-full absolute top-5 group-last:hidden" />
      </div>

      {/* Content Box */}
      <div className="relative bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 grow transition-all duration-300 hover:shadow-2xl">
        {/* Floating Icon Reveal */}
        <motion.div
          variants={iconVariants}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute -top-4 -right-4 w-12 h-12 rounded-full shadow-lg flex items-center justify-center z-20 border-2 border-white dark:border-gray-900"
          style={{ background: experience.iconBg }}
        >
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </motion.div>

        {/* Header Section */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              {experience.title}
            </h3>
            <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm uppercase tracking-wider">
              {experience.company_name}
            </p>
          </div>
          <span className="hidden sm:block text-xs font-medium px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
            {experience.date}
          </span>
        </div>

        {/* Points Section */}
        <ul className="space-y-3">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="flex items-start text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
            >
              <span
                className="mr-3 mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                style={{ backgroundColor: experience.iconBg }}
              />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
