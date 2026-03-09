// Your component file (e.g., Header.jsx or wherever the menu logic is)
import React from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { DarkModeToggle } from "./Buttons";
// import DarkModeToggle from './DarkModeToggle'; // Assuming this component exists

// Define the component where your mobile menu is:
const MobileNav = ({ isMobileMenuOpen, setIsMobileMenuOpen, links }) => {
  // 1. Get the target DOM node
  const portalRoot = document.getElementById("portal-root");

  // If the mobile menu isn't open, or the target node isn't found, return null
  if (!isMobileMenuOpen || !portalRoot) {
    return null;
  }

  // 2. The component to be rendered by the portal
  const mobileMenuContent = (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className={`w-[300px] lg:hidden absolute inset-0 z-99 bg-gray-200 dark:bg-gray-800 p-2 `}
        >
          <div
            className={`flex flex-col items-center justify-center p-4 gap-4`}
          >
            <div className="flex text-gray-800 dark:text-gray-200/60 justify-between w-full sm:ml-4 items-center mb-10">
              <h3 className="text-x2 sm:text-md font-bold">Nuwabiine</h3>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex flex-col space-y-2 text-lg font-medium">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "blue-gradient_text"
                    : "text-gray-800 dark:text-gray-200 hover:text-cyan-600 transition-colors duration-300"
                }
              >
                About
              </NavLink>
              <NavLink
                to="/academics"
                className={({ isActive }) =>
                  isActive
                    ? "blue-gradient_text"
                    : "text-gray-800 dark:text-gray-200 hover:text-cyan-600 transition-colors duration-300"
                }
              >
                Academics
              </NavLink>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  isActive
                    ? "blue-gradient_text"
                    : "text-gray-800 dark:text-gray-200 hover:text-cyan-600 transition-colors duration-300"
                }
              >
                Portfolio
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "blue-gradient_text"
                    : "text-gray-800 dark:text-gray-200 hover:text-cyan-600 transition-colors duration-300"
                }
              >
                Contact
              </NavLink>
            </nav>
            <hr className="border-2 w-full mt-5 mb-5  border-cyan-500/50 dark:border-cyan-200/50 my-2" />
            <DarkModeToggle />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
  // 3. Use createPortal to render the content into the designated DOM node
  return createPortal(mobileMenuContent, portalRoot);
};

export default MobileNav;
