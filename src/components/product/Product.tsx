import React from 'react';
// import img from '../images/1.jpg'
import './product.css'

interface ProductProps {
  img: string;
  name: string;
  price: number;
}

const Product = (props: ProductProps) => {
  const {img, name, price} = props
  return (
  
      <div className="card card-shadow">
        <div className="card-img">
          <img src={img} alt="bag" />
        </div>
        <div className="card-header">
          <h4>{name}</h4>
          <h4 className="card__h4">Shs {price}</h4>
        </div>
      </div>

  );
};

export default Product;
