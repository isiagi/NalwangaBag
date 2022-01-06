import React from 'react';
import Product from '../product/Product';
import '../product/product.css';
import {productData} from '../API/Data'
import {Link} from 'react-router-dom'

const Pro = () => {
  return (
    <React.Fragment>
      <h2 style={{textAlign: 'center',margin: '20px 0'}}>Bags and accessories that every O bag Lover should have.</h2>
      <div className="card-grid">
        {productData.map((detail) => (
          <Link to={detail.id} style={{ textDecoration: 'none', color: 'black' }}>
          <Product img={detail.image} name={detail.name} price={detail.price}/>
          </Link>
        ))}
      </div>
    </React.Fragment>
  );
};

export default Pro;
