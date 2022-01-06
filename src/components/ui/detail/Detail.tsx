import React, { useContext, useState, useEffect, FC } from 'react';
import Box from '@mui/material/Box';
import img from '../../images/1.jpg';
import { Button } from '@mui/material';
import Multi from '../../carosouel/Multi';
import { BagContext } from '../../context/Context';
import { Link } from 'react-router-dom';
import { useParams} from 'react-router-dom';
import {productData} from '../../API/Data'

import './detail.css';
import SubDetail from './SubDetail';

interface ItemData {
  id:string;
  image: string;
  name: string;
  price: number;
  qty: number;
}

const Detail:FC = () => {
  const {id} = useParams()
  const { addCart } = useContext(BagContext);
  const [itemz, setItem] = useState<ItemData>(Object);
  const item = {}

useEffect(() => {
  const patu = productData.filter(item => {
    return item.id === id;
  })
  console.log(patu[0])
  setItem(patu[0])
}, [id])

  // const item = { item: 'bag', qty: 1, price: 5000 };
  return (
    <>
      <Box className="detail__wrapper">
        <Box className="detail__image">
          <img src={itemz!.image} alt="" />
        </Box>
        <Box className="detail__info">
          <h3>{itemz!.name}</h3>
          <h4>This is an elegant bag</h4>
          <h2>
            <small>Shs</small>{itemz!.price}
          </h2>
          <h4>This is a bag that blue in color with yellow leather coating </h4>
          <h5>Color</h5>
          <div
            style={{
              backgroundColor: 'green',
              height: '25px',
              width: '25px',
              borderRadius: '100%',
              marginBottom: '20px',
            }}
          ></div>
          <Button variant="contained" onClick={() => addCart(item)}>
            <Link to="/cart">Add to cart</Link>
          </Button>
        </Box>
      </Box>
      <SubDetail />
      {/* <Box>
            <h2>Subscribe To Get info About the New Stock</h2>
            <p>We shall be sending you all of the lastest stock that we will have to fit your design need</p>
            <p>Please enter Email Below</p>
            <input type="email" />
        </Box> */}
      <h3 style={{ textAlign: 'center', margin: '30px 0' }}>
        Products You May Like
      </h3>
      <Multi />
    </>
  );
};

export default Detail;
