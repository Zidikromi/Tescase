import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const goToSave = () => {
    navigate('/saved');
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Test Case</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>

            <Link to="/" onClick={goToHome}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/saved" onClick={goToSave}>
              Saved
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
