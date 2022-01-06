import React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import HeroLeft from '../ui/HeroLeft';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Pro from './Pro';
import HeroMiddle from '../ui/HeroMiddle';
import HeroLast from '../ui/HeroLast';
// import Select from '../ui/select/Select';

const Hero = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <Grid container style={{ padding: '20px 0px' }}>
          <Grid container spacing={2}>
            <HeroLeft />
            <Grid
              item
              xs={12}
              sm={12}
              md={8}
              lg={8}
              xl={8}
              style={{ paddingTop: '70px' }}
            >
              <Card
                style={{
                  width: '100%',
                  height: '450px',
                  borderRadius: '12px',
                  boxShadow: 'none',
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="450px"
                  image="https://source.unsplash.com/0d_bsvUpbnQ"
                />
              </Card>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={2}
              lg={2}
              xl={2}
              style={{ paddingTop: '70px' }}
            >
              <Card
                style={{
                  width: '100%',
                  height: '150px',
                  borderRadius: '12px',
                  boxShadow: 'none',
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="150px"
                  image="https://source.unsplash.com/0d_bsvUpbnQ"
                />
              </Card>
              <Card
                style={{
                  marginTop: '20px',
                  width: '100%',
                  height: '150px',
                  borderRadius: '12px',
                  boxShadow: 'none',
                }}
              >
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="150px"
                  image="https://source.unsplash.com/0d_bsvUpbnQ"
                />
              </Card>
            </Grid>
          </Grid>
        </Grid>
        <Pro />
        <HeroMiddle />
        <HeroLast />
        {/* <Select /> */}
      </Container>
    </React.Fragment>
  );
};

export default Hero;
