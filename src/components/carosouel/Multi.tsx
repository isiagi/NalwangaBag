import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Product from '../product/Product';
import {productData} from '../API/Data'

const Multi = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel responsive={responsive}>
        <div style={{margin: '0 12px'}}>
          <Product img={productData[0].image} name={productData[0].name} price={productData[0].price}  />
        </div>
        <div style={{margin: '0 12px'}}>
        <Product img={productData[1].image} name={productData[1].name} price={productData[1].price}/>
        </div>
        <div style={{margin: '0 12px'}}>
        <Product img={productData[2].image} name={productData[2].name} price={productData[2].price}/>
        </div>
        <div style={{margin: '0 12px'}}>
        <Product img={productData[3].image} name={productData[3].name} price={productData[3].price}/>
        </div>
        <div style={{margin: '0 12px'}}>
        <Product img={productData[4].image} name={productData[4].name} price={productData[4].price}/>
        </div>
      </Carousel>
    </div>
  );
};

export default Multi;
