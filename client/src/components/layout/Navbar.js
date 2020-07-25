import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className='navbar bg-dark'>
      <div>
        <Link to='/'>
          <div style={{ marginTop: "20px", marginLeft: "20px" }}>
            <h1 className='h1-top-nav'>{"< Dev"}</h1>
            <h1
              className='h1-top-nav'
              style={{ marginLeft: "29px", marginTop: "-10px" }}
            >
              {"Book >"}
            </h1>
          </div>
        </Link>
      </div>
      <ul>
        <li>
          <a href='profiles.html'>Developers</a>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  );
};
