import { createPortal } from 'react-dom'; // Note: corrected typo from creatPortal
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react'; // Import Lucide icons for mobile menu
import { DarkModeToggle } from './Buttons';
import MobileNav from './MobileNav'; // Assuming MobileNav is handled separately
import { motion, AnimatePresence } from 'framer-motion';

// 1. Define the Navigation Links data structure
const NAV_LINKS = [
    { to: "/about", label: "About" },
    { to: "/academics", label: "Academics" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/contact", label: "Contact" }, // Added 'Contact' for completeness
];

const Navbar = ({width=10, height=10}) => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    
    // --- UX Improvement: Disable body scroll when mobile menu is open ---
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'unset'; // Re-enable scrolling
        }
        // Cleanup function
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);
    // ------------------------------------------------------------------

    // Define the class names once for consistency and maintainability
    const navLinkClasses = ({ isActive }) => 
        isActive 
        ? 'blue-gradient_text font-bold' // Highlight active link
        : 'text-gray-800 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-300';

    return (
        // The main header should likely use `flex justify-between` to separate the logo and the nav elements
        <header className="header relative flex items-center justify-between w-full p-4 bg-gray-100 dark:bg-gray-900 shadow-md z-50">
            
            {/* Logo/Brand Link */}
            <NavLink
                to="/"
                className="w-auto h-10 rounded-lg bg-white dark:bg-gray-800 items-center justify-center flex font-bold shadow-md px-4"
            >
                {/* <p className='blue-gradient_text text-xl'>NMB</p> */}
                <img 
                    src="/nuwabiine-logo-transparent.png" 
                    alt="Logo" 
                    className={`w-${width} h-${height} ml-2`}
                />
            </NavLink>

            {/* Desktop Navigation (Dynamic) */}
            <nav className='hidden lg:flex items-center space-x-6 text-md font-medium'>
                {NAV_LINKS.map((link) => (
                    <NavLink 
                        key={link.to} 
                        to={link.to}
                        className={navLinkClasses}
                    >
                        {link.label}
                    </NavLink>
                ))}
                
                {/* Dark Mode Toggle is a separate component */}
                <DarkModeToggle />
            </nav>

            {/* Mobile Menu Button (Lucide Icon) */}
            <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle mobile menu"
            >
                {/* Use Lucide icons: X when open, Menu when closed */}
                {isMobileMenuOpen ? (
                    ''
                ) : (
                    <Menu className="w-6 h-6" />
                )}
            </button>

            {/* Mobile Drawer - Assuming MobileNav uses createPortal or a fixed/full-screen modal */}
            {/* The MobileNav component should handle rendering the links dynamically as well */}
            <MobileNav 
                isMobileMenuOpen={isMobileMenuOpen} 
                setIsMobileMenuOpen={setMobileMenuOpen}
                links={NAV_LINKS} // Pass the dynamic links to the MobileNav
            />

        </header>
    )
}

export default Navbar;