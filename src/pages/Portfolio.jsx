import { Link } from "react-router-dom";
import { CTA } from "../components";
import { arrow } from "../assets/icons";
import { projects } from "../constants";

const Portfolio = () => {
  const porttextColor = "text-slate-800 dark:text-slate-200/70";
  const portlinkColor = "text-cyan-800/80 dark:text-cyan-200/90";
  return (
    <section className="max-container min-h-screen py-16 px-4  text-gray-800 dark:text-gray-200 transition-colors duration-500 shadow-2xl rounded-3xl">
      <h1 className="head-text mb-4">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p
        className={`${porttextColor} mt-2 leading-relaxed text-lg max-w-3xl mx-auto text-center`}
      >
        I am a full-stack JavaScript developer with a strong technical
        foundation in building scalable web applications. On the frontend, I use
        React and modern tooling (e.g., Vite, Webpack, Redux, Tailwind CSS) to
        architect interactive, component-driven UIs. For backend services, I
        work with Node.js, Express, Sequelize ORM and MySQL to develop secure,
        high-performance REST APIs, integrating authentication, authorization,
        and real-time capabilities when needed.
      </p>

      <div className="flex flex-wrap justify-center my-20 gap-16">
        {projects.map((project) => (
          <div
            className="lg:w-[400px] w-full bg-white/80 dark:bg-gray-900/70 rounded-2xl shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300 p-6 border border-blue-100 dark:border-blue-900"
            key={project.name}
          >
            <div className="block-container w-16 h-16 mx-auto">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt={project.name}
                  className="w-2/3 h-2/3 object-contain drop-shadow-lg"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col items-center">
              <h4 className="text-2xl font-poppins font-semibold text-blue-700 dark:text-blue-300 text-center">
                {project.name}
              </h4>
              <p
                className={`${porttextColor} mt-2 leading-relaxed text-center`}
              >
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
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
