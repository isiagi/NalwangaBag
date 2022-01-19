import React, { createContext } from 'react';

function useLocalStorageState(
  key,
  defaultValue = '',
  { serialize = JSON.stringify, deserialize = JSON.parse } = {},
) {
  const [state, setState] = React.useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    if (valueInLocalStorage) {
      try {
        return deserialize(valueInLocalStorage);
      } catch (error) {
        window.localStorage.removeItem(key);
      }
    }
    return typeof defaultValue === 'function' ? defaultValue() : defaultValue;
  });

  const prevKeyRef = React.useRef(key);

  React.useEffect(() => {
    const prevKey = prevKeyRef.current;
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey);
    }
    prevKeyRef.current = key;
    window.localStorage.setItem(key, serialize(state));
  }, [key, state, serialize]);

  return [state, setState];
}

export const BagContext = createContext();

export const Context = (props) => {
  const [cart, setCart] = useLocalStorageState('cartItems', []);

  console.log(cart);

  const addCart = (parcel) => {
    const exist = cart.find((item) => item.id === parcel.id);
    if (!exist) {
      setCart([...cart, { ...parcel }]);
    } else {
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
    if (window.confirm('Are you sure you want to remove this item')) {
      setCart(cart.filter((item) => item.id !== parcel.id));
    }
  };

  return (
    <BagContext.Provider
      value={{ cart, addCart, onIncrease, onDecrease, onRemove }}
    >
      {props.children}
    </BagContext.Provider>
  );
};
