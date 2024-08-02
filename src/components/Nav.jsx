import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'; // Optional: For additional custom styling

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-navyblue text-white p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <Link to="/">Md Abdul Kyum</Link>
                </div>

                {/* Hamburger Icon */}
                <button 
                    className="lg:hidden text-white focus:outline-none" 
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

                {/* Menu Items */}
                <div className={`lg:flex lg:items-center ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex flex-col lg:flex-row lg:space-x-6">
                        <li><Link to="/" className="block py-2 px-4 text-white hover:bg-skyblue">Home</Link></li>
                        <li><Link to="/about" className="block py-2 px-4 text-white hover:bg-skyblue">About</Link></li>
                        {/* Add more menu items as needed */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
