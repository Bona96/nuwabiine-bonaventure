import { Link } from "react-router-dom";

import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <footer className='footer font-poppins px-6 md:px-16 lg:px-32 py-10 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex flex-col gap-6'>
      <hr className='border-slate-200' />

      <div className='footer-container flex '>
        <p className='text-center text-sm'>
          © 2025 <strong>Nuwabiine Mbiine</strong>. All rights reserved.
        </p>

        <div className='flex gap-3 justify-center items-center rounded-md p-2 bg-cyan-300 dark:bg-cyan-200'>
          {socialLinks.map((link) => (
            <Link key={link.name} to={link.link} target='_blank'>
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain bg-transparent hover:opacity-70 transition-opacity duration-200 dark:bg-transparent'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
