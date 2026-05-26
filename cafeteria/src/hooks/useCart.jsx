import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = useCallback((product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.id === product.id);
      if (existing) {
        return prev.map((c) =>
          c.id === product.id ? { ...c, qty: c.qty + qty } : c,
        );
      }
      return [...prev, { ...product, qty }];
    });
  }, []);

  const updateQty = useCallback((id, delta) => {
    setCart((prev) => {
      const updated = prev.map((c) =>
        c.id === id ? { ...c, qty: c.qty + delta } : c,
      );
      return updated.filter((c) => c.qty > 0);
    });
  }, []);

  const removeItem = useCallback((id) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const totalItems = cart.reduce((s, c) => s + c.qty, 0);
  const subtotal = cart.reduce((s, c) => s + c.price * c.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQty,
        removeItem,
        totalItems,
        subtotal,
        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
