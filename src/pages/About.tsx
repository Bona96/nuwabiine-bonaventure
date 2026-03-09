import { CTA } from "../components/index.ts";
import ExperienceCard from "../components/ExperienceCard.js";
import { bio, experiences, skills } from "../constants/index.tsx";

const About = () => {
  return (
    <section className="flex flex-col p-20 text-left w-full  text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <h1 className="text-xl">
        Welcome, I'm{" "}
        <span className="blue-gradient_text text-2xl font-semibold drop-shadow">
          {" "}
          {bio.name.first} {bio.name.last}
        </span>{" "}
        👋
      </h1>
      <div className="mt-10 flex flex-col gap-3 text-slate-800 dark:text-slate-200 ">
        <p>
          {bio.description} You can reach me at{" "}
          <a
            href={`mailto: ${bio.email}`}
            className="text-cyan-800 dark:text-cyan-200 hover:underline "
          >
            {bio.email}
          </a>{" "}
          or call me on{" "}
          <a
            href={`tel:${bio.phone}`}
            className="text-cyan-600 dark:text-cyan-200 hover:underline"
          >
            {bio.phone}
          </a>
          . Based in {bio.address.country}.
        </p>
      </div>

      <div className="py-10 flex flex-col justify-center items-center">
        <h3 className="subhead-text">Tech Stack</h3>

        <div className="mt-16 grid grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-20">
          {skills.map((skill) => (
            <div
              className="block-container w-[130px] h-[130px]"
              key={skill.name}
            >
              <div className="btn-back rounded-xl drop-shadow-xl drop-shadow-cyan-600 dark:drop-shadow-cyan-200" />
              <div className="btn-front p-2 rounded-xl flex flex-col justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain mt-3"
                />
                <p className="text-gray-800  dark:text-gray-200 text-sm mt-2">
                  {skill.name}
                </p>
                <p className="text-gray-800 dark:text-gray-200 text-[10px] mt-2 mb-2">
                  {skill.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Work Experience Section with Framer Motion --- */}
      <div className="py-16">
        <h3 className="subhead-text">Work Experience.</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500 dark:text-slate-300">
          <p>
            I've worked with a number of companies, leveling up my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        {/* The custom timeline structure */}
        <div className="mt-12 flex justify-center items-">
          <div className="relative max-w-4xl w-full">
            {experiences.map((experience) => (
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
