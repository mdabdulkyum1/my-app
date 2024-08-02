import { Link } from 'react-router-dom';
import './Nav.css';  // Assuming you have custom styles in Nav.css

function Nav() {
    return (
        <nav className="bg-green-200 p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
                {/* Logo */}
                <div className="text-black text-2xl font-bold">Md Abdul Kyum</div>
            </div>
            <ul className="flex space-x-4">
                {/* Menu Items */}
                <li><Link to="/" className="text-red-700 text-2xl hover:text-red-900">Home</Link></li>
                <li><Link to="/about" className="text-red-700 text-2xl hover:text-red-900">About</Link></li>
                {/* Add more menu items as needed */}
            </ul>
        </nav>
    );
}

export default Nav;
