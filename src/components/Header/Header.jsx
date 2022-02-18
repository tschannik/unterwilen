import { Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div class="max-width-1100">
        <Link to="/">
          <img
            class="logo"
            src="/Vitznauer_Wappen.png"
            alt="Vitznauer Wappen als Logo"
          ></img>
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
