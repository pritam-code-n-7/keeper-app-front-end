import { Link, useLocation } from "react-router-dom";

function Header() {
  const myLocation = useLocation();
  return (
    <>
      <header>
        <h1>Keeper App!</h1>
        {myLocation.pathname !== "/reg" &&
          myLocation.pathname !== "/contact" && (
            <>
              <ul className="head-ul">
                <li className="head-li">
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="head-li">
                  <Link to="/reg">Register</Link>
                </li>
              </ul>
            </>
          )}
      </header>
    </>
  );
}

export default Header;
