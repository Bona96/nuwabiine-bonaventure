import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <header className="header">
        <NavLink
            to="/"
            className="w-50 h-10 rounded-lg bg-black dark:bg-white items-center justify-center flex font-bold shadow-md"
        >
            <p className='blue-gradient_text'>SIXBITS</p>
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink 
                to="/about"
                className={({ isActive }) => isActive ? 'blue-gradient_text' : 'text-gray-800 hover:cyan-gradient_text transition-colors duration-300' }
            >
                About
            </NavLink>
            <NavLink 
                to="/portfolio"
                className={({ isActive }) => isActive ? 'blue-gradient_text' : 'text-gray-700 dark:text-gray-300 hover:cyan-gradient_text transition-colors duration-300' }
            >
                Portfolio
            </NavLink>
        </nav>
    </header>
  )
}

export default Navbar
