import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className='container' id='navbar-wraper'>
      <div className=' navbar'>
        <nav className='navbar navbar-expand-lg text-capitalize text-white '>
          <ul className='navbar-nav align-items-center '>
            <Link className='nav-link text-white' to='/'>
              Exams
            </Link>
            <Link className='nav-link text-white' to='/categories'>
              Categories
            </Link>
            <Link className='nav-link text-white' to='/questions'>
              Questions
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
