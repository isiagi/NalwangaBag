import { styled } from '@mui/system';
import { AppBar, Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import './navbar.css';

const NavWrapper = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
}));

export const NavBar: FC = () => {
  return (
    <>
      <AppBar position="fixed">
        <NavWrapper>
          <Box>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              PatuBags
            </Link>
          </Box>
          <Box>
            <ul className="list">
              <li>About Us</li>
              <li>Contact Us</li>
              <li>
                <Link
                  to="/cart"
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Cart
                </Link>
              </li>
            </ul>
          </Box>
        </NavWrapper>
      </AppBar>
    </>
  );
};
