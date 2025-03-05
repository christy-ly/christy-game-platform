import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Game Platform</h1>
      <div>
        <Link to="/" className="mx-2">
          Home
        </Link>
        <Link to="/games" className="mx-2">
          Games
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
