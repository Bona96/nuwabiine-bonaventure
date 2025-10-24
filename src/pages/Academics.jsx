
import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import Modal from '../components/Modal';

import heroImg from '../assets/images/hero.jpg';
import metaImg from '../assets/images/meta.png';
import shopifyImg from '../assets/images/shopify.png';
import reactessntialscertificateImg from '../assets/images/react-essentials-training.png';

const academics = [
  {
    title: "Bachelor's Degree in Information & Communication Technology",
    institution: "Uganda Martyrs University - Nkozi Campus",
    description:
      "Graduated with 2nd class. Then focused and specialised in Web and Mobile Application development, Graphics desgin with canva and Website development with WordPress, PHP, PhpMyAdmin, MySQL and cPanel. I also understand AI concepts and know my way around designing models with python.",
    image: heroImg,
    link: 'https://umu.ac.ug//',
    pdf: '/pdfs/transcript.pdf',
    year: '2022',
  },
  {
    title: "Computational Thinking Course",
    institution: "University of Pennsylvania - Coursera",
    description:
      "Completed Andrew Ng's ML course. Learned supervised/unsupervised learning, neural networks, and practical ML skills.",
    image: metaImg,
    link: 'https://www.coursera.org/learn/machine-learning',
    pdf: '/pdfs/transcript.pdf',
    year: '2023',
  },

  {
    title: "React Esentials Professional Certificate",
    institution: "LinkedIn Learning",
    description:
      "In this course, software developer and instructor Eve Porcello highlights the latest techniques for building a React app from scratch. Learn how to create elements, write components, and use React hooks. Get familiar with libraries like Next and Vite, and discover the differences between React Server Components and Client Components. Find out how to use the latest tools, techniques, and patterns that will help futureproof applications and make them more scalable and performant. After watching the course, you will be able to start your own project from scratch, and you will also be able to jump into an existing React codebase and make an impact.",
    image: reactessntialscertificateImg,
    link: 'https://www.linkedin.com/learning/certificates/2722e251fced4147ecb83a594c7ca502a86462f11bafe32aca19668aa50adc1c?trk=share_certificate',
    pdf: '/pdfs/react-essentials-training.pdf',
    year: '2025',
  },
];


const excerpt = (text, len = 80) => text.length > len ? text.slice(0, len) + '...' : text;

const Academics = () => {
  const [view, setView] = useState('table');
  const [modalOpen, setModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const { theme, themeName, switchTheme } = useTheme();

  const handleOpen = (item) => {
    setSelected(item);
    setModalOpen(true);
  };

  return (
    <section className={`max-container p-4 bg-gradient-to-br from-cyan-400 via-gray-300 to-cyan-400 dark:from-gray-800 dark:via-cyan-800 dark:to-gray-600 text-gray-800 dark:text-gray-200 transition-colors duration-500 rounded-3xl shadow-md ${theme.accent} ${theme.secondary}`}> 
      <div className="flex justify-between items-center mb-8">
        <h1 className="head-text text-center">
          Academics <span role="img" aria-label="books">📚</span>
        </h1>
        <div className="flex flex-row flex-wrap gap-2 ">
          {Object.keys(theme).map((t, i) => (
            <button
              key={t}
              className={`${theme.button} ${themeName === t ? theme.primary : theme.secondary}`}
              onClick={() => switchTheme(t)}
            >
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center mb-8 gap-4">
        <button
          className={`${theme.button} ${view === 'table' ? theme.primary : theme.secondary}`}
          onClick={() => setView('table')}
        >
          Table View
        </button>
        <button
          className={`${theme.button} ${view === 'cards' ? theme.primary : theme.secondary}`}
          onClick={() => setView('cards')}
        >
          Cards View
        </button>
      </div>

      {view === 'cards' ? (
        <div className="flex flex-row flex-wrap p-3 gap-10 justify-items-center">
          {academics.map((item, idx) => (
            <div
              key={idx}
              className={`${theme.card} ${theme.border} w-full max-w-sm flex flex-col items-center hover:scale-105 transition-transform duration-300 cursor-pointer`}
              onClick={e => {
                // Prevent modal on button/link click
                if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
                handleOpen(item);
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-32 h-32 object-cover rounded-xl mb-4 border-4 shadow-lg ${theme.border}`}
              />
              <h2 className={`text-xl font-bold mb-2 text-center`}>{item.title}</h2>
              <p className={`text-lg font-semibold mb-1 text-center`}>
                {item.institution}
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`ml-2 ${theme.link}`}
                    onClick={e => e.stopPropagation()}
                  >
                    Visit Site
                  </a>
                ) : (<span>No links</span>)}
              </p>
              <p className={`${theme.excerpt} mb-2 text-center`}>{excerpt(item.description)}</p>
              <span className="text-xs mb-2">Year: {item.year}</span>
              <a
                href={item.pdf}
                download
                className={`mt-2 inline-block ${theme.button} ${theme.primary}`}
                onClick={e => e.stopPropagation()}
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="">
          <table className={`min-w-full rounded-xl shadow-xl ${theme.border}`}>
            <thead>
              <tr className={theme.tableHead}>
                <th className="py-3 px-4 text-left rounded-tl-xl">Title</th>
                <th className="py-3 px-4 text-left">Institution</th>
                <th className="py-3 px-4 text-left">Year</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-left">Links</th>
                <th className="py-3 px-4 text-left rounded-tr-xl">PDF</th>
              </tr>
            </thead>
            <tbody>
              {academics.map((item, idx) => (
                <tr
                  key={idx}
                  className={`${theme.tableRow} cursor-pointer`}
                  onClick={e => {
                    if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') return;
                    handleOpen(item);
                  }}
                >
                  <td className="py-3 px-4 font-bold">{item.title}</td>
                  <td className="py-3 px-4 font-semibold">{item.institution}</td>
                  <td className="py-3 px-4 text-xs">{item.year}</td>
                  <td className={`${theme.excerpt} py-3 px-4`}>{excerpt(item.description)}</td>
                  <td className="py-3 px-4">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={theme.link}
                        onClick={e => e.stopPropagation()}
                      >
                        Visit Site
                      </a>
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <a
                      href={item.pdf}
                      download
                      className={`${theme.button} ${theme.primary} text-sm`}
                      onClick={e => e.stopPropagation()}
                    >
                      PDF
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        {selected && (
          <div className="flex flex-col items-center gap-4" onclick={() => setModalOpen(false) } >
            <img src={selected.image} alt={selected.title} className={`w-32 h-32 object-cover rounded-xl border-4 shadow-lg ${theme.border}`} />
            <h2 className="text-2xl font-bold text-center">{selected.title}</h2>
            <p className="text-lg font-semibold text-center">{selected.institution}</p>
            <span className="text-xs mb-2">Year: {selected.year}</span>
            <p className="text-slate-500 dark:text-slate-300 text-center whitespace-pre-line">{selected.description}</p>
            {selected.link && (
              <a href={selected.link} target="_blank" rel="noopener noreferrer" className={theme.link}>
                Visit Site
              </a>
            )}
            <a href={selected.pdf} download className={`${theme.button} ${theme.primary} mt-2`}>
              Download PDF
            </a>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Academics;
