import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className='navbar navbar-light bg-white py-5'>
      <div className='container justify-content-end'>
        <NavLink to='/'>
          <h1 className='text-uppercase justify-content-start'>
            The International Yummy Guide
          </h1>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
