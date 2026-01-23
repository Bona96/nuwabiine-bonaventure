import { CTA } from "../components";
import ExperienceCard from "../components/ExperienceCard";
import { bio, experiences, skills } from "../constants";

const About = () => {
  return (
    <section className="flex flex-col p-20 text-center w-full  text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <h1 className="text-xl">
        Hello, I'm{" "}
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
          <a href="tel:{bio.phone}" className="text-blue-600 hover:underline">
            {bio.phone}
          </a>
          . I'm based in {bio.address.city}, {bio.address.country}.
        </p>
      </div>

      <div className="py-10 flex flex-col justify-center items-center">
        <h3 className="subhead-text">Tech Stack</h3>

        <div className="mt-16 grid grid-cols-6 gap-12">
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
