import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Bots</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/our-bot">Our Bot</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
