import "./NavItem.css";

const NavItem = (props) => {
  return (
    <div class="navItem">
      <p>{props.title}</p>
    </div>
  );
};

export default NavItem;
