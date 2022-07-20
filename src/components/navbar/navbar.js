import { Link } from 'react-router-dom';
import './navbar.css';
const Nav = () => (
  <div className="nav">
    <nav className="same">
      <h1 className="heading">KigaliFinder</h1>
      <ul className="nav-link">
        <li>
        <Link to="/">Home</Link>
        </li>
       <li>
       <Link to="/about">About Us</Link>
       </li>
        <li>
        <Link to="/Contact">Contact</Link>
        </li>
       <li>
       <Link to="/Blog">Blog</Link>
       </li>
       <li>
       <Link to="/acount">My Acount</Link>
       </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
