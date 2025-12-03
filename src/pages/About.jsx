import { CTA } from "../components";
import { bio, experiences, skills } from "../constants";
import { motion } from "framer-motion"; // 1. Import motion
// import "react-vertical-timeline-component/style.min.css"; // 2. Remove the old import

// Utility for Framer Motion Variants
// This will animate the item in from the side as it comes into view
const fadeIn = {
  initial: { opacity: 0, x: -50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
  viewport: { once: true, amount: 0.25 }, // Animate once when 25% of the element is visible
};

// 3. Define the new ExperienceCard component (or put it in a separate file)
const ExperienceCard = ({ experience }) => (
  <motion.div
    {...fadeIn} // Apply the fadeIn variant
    className="flex relative items-start mb-8 last:mb-0 group"
  >
    {/* Timeline Dot & Line */}
    <div className="flex flex-col items-center mr-4">
      {/* Dot */}
      <div
        className="w-4 h-4 rounded-full border-4 shadow-lg flex-shrink-0"
        style={{ borderColor: experience.iconBg }}
      />
      {/* Vertical Line */}
      <div className="w-0.5 bg-gray-300 dark:bg-gray-700 h-full group-last:hidden" />
    </div>

    {/* Content Box */}
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-xl flex-grow transition-all duration-300 hover:shadow-2xl">
      <p className="text-sm font-light text-gray-500 dark:text-gray-400 mb-1">
        {experience.date}
      </p>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        {experience.title}
      </h3>
      <p className="text-base text-blue-600 dark:text-blue-400 font-medium mb-4">
        {experience.company_name}
      </p>

      <ul className="list-disc ml-5 space-y-2 text-sm text-gray-600 dark:text-gray-300">
        {experience.points.map((point, index) => (
          <li key={`experience-point-${index}`}>{point}</li>
        ))}
      </ul>

      {/* Optional: Add the icon inside the card content if you want */}
      {/*
      <div className='absolute top-2 right-2 w-8 h-8 rounded-full' style={{ background: experience.iconBg }}>
        <img src={experience.icon} alt={experience.company_name} className='w-full h-full object-contain p-1' />
      </div>
      */}
    </div>
  </motion.div>
);

const About = () => {
  return (
    <section className="flex flex-col p-12 text-center w-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <h1 className="">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          {" "}
          {bio.name.first} {bio.name.last}
        </span>{" "}
        👋
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          {bio.description} You can reach me at{" "}
          <a
            href={`mailto: ${bio.email}`}
            className="text-blue-600 hover:underline"
          >
            {bio.email}
          </a>{" "}
          or call me on{" "}
          <a href="tel:{bio.phone}" className="text-blue-600 hover:underline">
            {bio.phone}
          </a>
          . I'm based in {bio.address.city}, {bio.address.country}.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Work Experience Section with Framer Motion --- */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        {/* The custom timeline structure */}
        <div className="mt-12 flex justify-center items-">
          <div className="relative max-w-4xl w-full">
            {experiences.map((experience, index) => (
              // Use the new ExperienceCard component
              <ExperienceCard
                key={experience.company_name}
                experience={experience}
              />
            ))}
          </div>
        </div>
      </div>
      {/* ------------------------------------------------- */}

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
