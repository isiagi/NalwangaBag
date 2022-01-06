import React from 'react';
import Grid from '@mui/material/Grid';
import { Link } from '@mui/material';
import ButtonGroup from '@mui/material/ButtonGroup';

const links = ['Ladies', 'Men', 'Babies', 'Children'];

const HeroLeft = () => {
  return (
   
      <Grid
        item
        xs={12} sm={12} md={2} lg={2} xl={2}
        style={{ paddingTop: '70px', height: '525px' }}
      >
        <Grid
          container
          style={{  width: '100%', height: '100%',backgroundColor: 'grey',padding: '10px 10%', }}
        >
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
            style={{ width: '100%' }}
          >
            {links.map((link) => (
              <Link
                style={{
                  width: '100%',
                  border: 'none',
                  marginTop: '15px',
                  textTransform: 'capitalize',
                  textAlign: 'left',
                  fontWeight: '500',
                  fontSize: '13px',
                  lineHeight: '150%',
                }}
              >
                {link}
              </Link>
            ))}
          </ButtonGroup>
        </Grid>
      </Grid>
   
  );
};

export default HeroLeft;
