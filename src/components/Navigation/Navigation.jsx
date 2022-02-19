import { Link } from "react-router-dom";
import NavItem from "../NavItem/NavItem";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">
        <NavItem title="Home" />
      </Link>
      <Link to="webcams">
        <NavItem title="Webcams" />
      </Link>
      <Link to="impressum">
        <NavItem title="Kontakt & Impressum" />
      </Link>
    </nav>
  );
};

export default Navigation;
