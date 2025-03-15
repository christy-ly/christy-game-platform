import { Link } from "react-router-dom";
import logo from "../media/logo.png";
const Header = () => {
  return (
    <div>
      <nav className="p-4 text-primary font-bold flex justify-between border-b-4 bg-white">
        <div className="header">
          <img className="w-7 h-7 inline" src={logo} alt="buzz..." />
          Buzz... - Christy's game platform
        </div>
        <div>
          <Link to="/" className="mx-2">
            Home
          </Link>
          <Link to="/games" className="mx-2">
            Games
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
