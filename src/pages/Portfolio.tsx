import { Link } from "react-router-dom";
import { CTA } from "../components/index.ts";
import { arrow } from "../assets/icons/index.ts";
import { projects } from "../constants/index.tsx";

const Portfolio = () => {
  const porttextColor = "text-slate-800 dark:text-slate-200/70";
  const portlinkColor = "text-cyan-800/80 dark:text-cyan-200/90";

  return (
    <section className="max-container min-h-screen py-16 px-4 text-gray-800 dark:text-gray-200 transition-colors duration-500 shadow-2xl rounded-3xl">
      <h1 className="head-text mb-4">
        Live{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className={`${porttextColor} mt-2 leading-relaxed text-lg max-w-3xl mx-auto text-center`}>
        These projects allow me to showcase my skills and creativity, and I hope
        they inspire you to explore the possibilities of technology. Feel free to
        check them out and reach out if you have any questions or want to
        collaborate!
      </p>

      <div className="flex flex-wrap justify-center my-10 gap-8">
        {projects.map((project) => (
          <div
            key={project.name}
            className="lg:w-96 w-full bg-white/80 dark:bg-gray-900/70 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 border border-blue-100 dark:border-blue-900 overflow-hidden flex flex-col"
          >
            {/* Fixed-height container — object-contain shows full image regardless of ratio */}
            <div className={`w-full h-52 flex items-center justify-center ${project.theme}`}>
              <img
                src={project.iconUrl}
                alt={project.name}
                className="w-full h-full object-contain p-2"
              />
            </div>

            {/* Card body */}
            <div className="p-6 flex flex-col items-center flex-1">
              <h4 className="text-2xl font-poppins font-semibold text-blue-700 dark:text-blue-300 text-center">
                {project.name}
              </h4>
              <p className={`${porttextColor} mt-2 leading-relaxed text-center`}>
                {project.description}
              </p>
              <div className="mt-auto pt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`font-semibold ${portlinkColor} flex items-center gap-1 hover:underline hover:text-cyan-500 dark:hover:text-cyan-300`}
                >
                  Live Link
                  <img
                    src={arrow}
                    alt="arrow"
                    className="w-4 h-4 object-contain inline-block"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200 dark:border-slate-700 my-8" />

      <CTA />
    </section>
  );
};

export default Portfolio;