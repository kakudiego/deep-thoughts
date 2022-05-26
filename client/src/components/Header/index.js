import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import Button from '@mui/material/Button';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className='bg-secondary mb-4 py-2 flex-row align-center'>
      <div className='container flex-row justify-space-between-lg justify-center align-center'>
        <Link to='/'>
          <h1>Deep Thoughts</h1>
        </Link>

        <nav className='text-center'>
          {Auth.loggedIn() ? (
            <>
              {/* <Button variant='text'>
                <Link to='/profile'>Me</Link>
              </Button> */}

              <Link to='/profile'>Me</Link>

              {/* <Button variant='contained'>
                <a href='/' onClick={logout}>
                  Logout
                </a>
              </Button> */}

              <a href='/' onClick={logout}>
                Logout
              </a>
            </>
          ) : (
            <>
              <Link to='/login'>Login</Link>
              <Link to='/signup'>Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
