import "./Footer.css";

const Footer = () => {
  const today = new Date();
  return (
    <footer>
      <div class="max-width-1100">
        © 2020 - {today.getFullYear()} Unterwilen.ch
      </div>
    </footer>
  );
};

export default Footer;
