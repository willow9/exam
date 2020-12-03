import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <ul className='navbar-nav'>
          <Link className='nav-link' to='/'>
            Exams
          </Link>
          <Link className='nav-link' to='/categories'>
            Categories
          </Link>
          <Link className='nav-link' to='/questions'>
            Questions
          </Link>
        </ul>
      </nav>
    </div>
  );
}
