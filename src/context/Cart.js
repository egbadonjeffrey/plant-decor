import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [openCart, setCloseCart] = useState(false);

  const handleAddToCart = (flower) => {
    const exist = cart.find((x) => x.id === flower.id);

    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === flower.id
            ? {
                ...exist,
                quantity: exist.quantity + 1,
              }
            : x
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...flower,
          quantity: 1,
        },
      ]);
    }
  };

  const handleRemoveFromCart = (flower) => {
    const exist = cart.find((x) => x.id === flower.id);

    if (exist.quantity === 1) {
      setCart(cart.filter((x) => x.id !== flower.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === flower.id
            ? {
                ...exist,
                quantity: exist.quantity - 1,
              }
            : x
        )
      );
    }
  };

  const showCart = () => {
    console.log("clicked");
    setCloseCart(!openCart);
    if (!openCart) {
      const { body } = document;
      body.style.overflow = "hidden";
    } else {
      const { body } = document;
      body.style.overflow = "";
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        openCart,
        showCart,
        handleAddToCart,
        handleRemoveFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
