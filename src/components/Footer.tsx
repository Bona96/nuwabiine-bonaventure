import { Link } from "react-router-dom";
import { socialLinks } from "../constants/index.tsx";

type FooterProps = {
  isHome: boolean;
  setIsHome: React.Dispatch<React.SetStateAction<boolean>>;
};

const Footer: React.FC<FooterProps> = ({ isHome }) => {
  return (
    <footer
      className={`${
        isHome ? "z-99 fixed bottom-0 left-0 right-0" : "mt-10"
      } flex items-center justify-between gap-6 rounded border-2 border-cyan-500 hover:border-cyan-700 footer font-poppins p-2 md:p-4 lg:p-2 text-gray-800 dark:text-gray-200`}
    >
        <p className="text-center text-sm">
          © 2025 <strong>Nuwabiine Mbiine Bonaventure</strong>. All rights
          reserved.
        </p>

        <div className="flex flex-row gap-3 flex-wrap justify-center items-center rounded-md p-2 bg-cyan-300 dark:bg-cyan-200">
          {socialLinks.map((link) => (
            <Link key={link.name} to={link?.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                className="w-6 h-6 object-contain bg-transparent hover:opacity-70 transition-opacity duration-200 dark:bg-transparent"
              />
            </Link>
          ))}
        </div>
    </footer>
  );
};

export default Footer;
