import React, { createContext, useState } from 'react';

export const BagContext = createContext();

export const Context = (props) => {
  const [cart, setCart] = useState([]);

  console.log(cart)

  const addCart = (parcel) => {
    const exist = cart.find((item) => item.id === parcel.id);
    if (!exist) {
      setCart([...cart, { ...parcel }]);
    }else {
      alert('Item Already In Cart');
    }
  };

  const onIncrease = (parcel) => {
    const exist = cart.find((item) => item.id === parcel.id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === parcel.id ? { ...exist, qty: exist.qty + 1 } : item,
        ),
      );
    }
  };

  const onDecrease = (parcel) => {
    const exist = cart.find((item) => item.id === parcel.id);
    if (exist) {
      if (exist.qty === 1) return;
      setCart(
        cart.map((item) =>
          item.id === parcel.id ? { ...exist, qty: exist.qty - 1 } : item,
        ),
      );
    }
  };

const onRemove = (parcel) => {
  if(window.confirm('Are you sure you want to remove this item')){
    setCart(cart.filter((item) => item.id !== parcel.id))
  }
}

  return (
    <BagContext.Provider value={{ cart, addCart, onIncrease, onDecrease, onRemove }}>
      {props.children}
    </BagContext.Provider>
  );
};
