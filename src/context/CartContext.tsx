import * as React from "react";

interface Item {
  medicine_id: string;
  image_url: string;
  name: string;
  quantity: number;
  price: number;
}

const CartContext = React.createContext({});

const CartProvider = ({ children }: any) => {
  const store = localStorage.getItem("CART");
  const [cart, setCart] = React.useState<any>(store ? JSON.parse(store) : {});

  React.useEffect(() => {
    localStorage.setItem("CART", JSON.stringify(cart));
  }, []);

  const addItem = (data: Item) => {
    let updated_cart = {};

    if (cart?.[data.medicine_id]) {
      const item: Item = cart[data.medicine_id];

      const quantity = item.quantity + 1;
      const unit_price = item.price / item.quantity;

      const price = unit_price * quantity;

      const updated_item: Item = {
        ...item,
        quantity,
        price,
      };

      updated_cart = { ...cart, [data.medicine_id]: updated_item };
    } else {
      updated_cart = { ...cart, [data.medicine_id]: { ...data, quantity: 1 } };
    }

    setCart(updated_cart);
    localStorage.setItem("CART", JSON.stringify(updated_cart));
  };

  const removeItem = (data: Item) => {
    let updated_cart = {};

    const existing = cart[data.medicine_id];
    const quantity = existing.quantity - 1;

    if (quantity === 0) {
      const mutable_cart = cart;
      delete mutable_cart[data.medicine_id];

      updated_cart = mutable_cart;
      setCart(updated_cart);
      localStorage.setItem("CART", JSON.stringify(updated_cart));

      window.location.reload();
    } else {
      const unit_price = existing.price / existing.quantity;

      const price = quantity * unit_price;
      const updated_item: Item = {
        ...existing,
        quantity,
        price,
      };

      updated_cart = { ...cart, [data.medicine_id]: updated_item };
      setCart(updated_cart);
      localStorage.setItem("CART", JSON.stringify(updated_cart));
    }
  };

  const getTotalPrice = (data: {}) => {
    const total = !getItemCount(data)
      ? 0
      : Object.keys(data).map((key) => cart[key].price).reduce((
        a,
        b,
      ) => a + b);
    return total;
  };

  const getItemCount = (data: {}) => {
    return Object.keys(data).length;
  };

  const clearCart = () => {
    localStorage.setItem("CART", JSON.stringify({}));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        getTotalPrice,
        getItemCount,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
