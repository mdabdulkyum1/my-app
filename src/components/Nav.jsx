import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <ul className='bg-green-600 text-red-700 text-4xl'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    );
}

export default Nav;
