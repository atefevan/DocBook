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
    updateStore();
  }, [cart]);

  const updateStore = () => {
    localStorage.setItem("CART", JSON.stringify(cart));
  };

  const addItem = (data: Item) => {
    if (cart?.[data.medicine_id]) {
      const item: Item = cart[data.medicine_id];

      const quantity = item.quantity + 1;
      const price = item.price * quantity;

      const updated_item: Item = {
        ...item,
        quantity,
        price,
      };

      setCart({ ...cart, [data.medicine_id]: updated_item });
    } else {
      setCart({ ...cart, [data.medicine_id]: { ...data, quantity: 1 } });
    }

    updateStore();
  };

  const removeItem = (data: Item) => {
    const existing = cart[data.medicine_id];

    const quantity = existing.quantity - 1;

    if (quantity === 0) {
      const mutable_cart = cart;
      delete mutable_cart[data.medicine_id];

      setCart(mutable_cart);
    } else {
      const price = quantity * data.price;
      const updated_item: Item = {
        ...existing,
        quantity,
        price,
      };

      setCart({ ...cart, [data.medicine_id]: updated_item });
    }

    updateStore();
  };

  const getTotalPrice = (data: {}) => {
    const total = !data
      ? 0
      : Object.keys(data).map((key) => cart[key].price).reduce((
        a,
        b,
      ) => a + b);
    return total;
  };

  const getItemCount = (data: {}) => {
    return !data ? 0 : Object.keys(data).length;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        getTotalPrice,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
