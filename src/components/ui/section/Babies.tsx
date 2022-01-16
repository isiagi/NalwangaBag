import React from 'react';
import Product from '../../Hero/Pro';
import Container from '@mui/material/Container';

const Babies = () => {
  return (
    <React.Fragment>
      <Container>
        <div
          style={{ marginTop: '70px', textAlign: 'center', minHeight: '90vh' }}
        >
          <Product />
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Babies;
