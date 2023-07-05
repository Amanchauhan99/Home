import React, { useContext } from 'react';
// import '../CSS_files/NavBar.css';
import { NavLink } from 'react-router-dom';
import { allContext } from '../Assignment19/ContextProvider';

const NavBar = () => {
  const { cartCount } = useContext(allContext) ;

  console.log(cartCount);

  return (
    <> 
      <div className='navbar'>
        <h1>Shopping Mall</h1> 
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/product'>Product</NavLink>
          </li>
          <li className='count'>
            <NavLink to='/cart'>
              Add to cart {cartCount > 0 && <span>{cartCount}</span>}
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
