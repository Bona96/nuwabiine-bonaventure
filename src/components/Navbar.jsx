import { creatPortal } from 'react-dom'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { DarkModeToggle } from './Buttons'
import MobileNav from './MobileNav';
const Navbar = () => {
    const portalRoot = document.getElementById('portal-root');
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    // if (!portalRoot) return null; // Ensure portal root exists
    return (
        <header className="header">
            {/* main navigation */}
            <div>
                <NavLink
                    to="/"
                    className="w-50 h-10 rounded-lg bg-white dark:bg-gray-800 items-center justify-center flex font-bold shadow-md"
                >
                    <p className='blue-gradient_text'>NMB</p>
                </NavLink>
                <nav className='hidden lg:flex space-x-4 text-lg font-medium'>
                    <NavLink 
                        to="/about"
                        className={({ isActive }) => isActive ? 'blue-gradient_text' : 'text-gray-800 hover:cyan-gradient_text transition-colors duration-300' }
                    >
                        About
                    </NavLink>
                    <NavLink 
                        to="/portfolio"
                        className={({ isActive }) => isActive ? 'blue-gradient_text' : 'text-gray-800 dark:text-gray-200 hover:cyan-gradient_text transition-colors duration-300' }
                    >
                        Portfolio
                    </NavLink>
                    <DarkModeToggle />
                </nav>
            </div>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden text-gray-800 dark:text-white"
                aria-label="Toggle mobile menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>

            {/* Mobile Drawer */}
            <MobileNav isMobileMenuOpen={isMobileMenuOpen} setIsMobileMenuOpen={setMobileMenuOpen}/>
        </header>
    )
}

export default Navbar
