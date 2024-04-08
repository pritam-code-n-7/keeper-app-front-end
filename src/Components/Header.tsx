import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <h1>Keeper App!</h1>
        <ul className="head-ul">
          <li className="head-li">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="head-li">
            <Link to="/reg">Register</Link>
          </li>
        </ul>
      </header>
    </>
  );
}

export default Header;
