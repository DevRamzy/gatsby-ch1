import * as React from "react";
import { Link } from "gatsby";
import { container } from "../assets/css/index.module.css";

const Navbar = ({ pageTitle, children }) => {
  return (
    <div>
      <title>{pageTitle}</title>
      <nav>
        <Link to="/">
          <img src="../images/icon.png" alt="" />
        </Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/">Logo</Link>
        <Link to="/">Logo</Link>
      </nav>
    </div>
  );
};
export default Navbar;
