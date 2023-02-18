import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
  items: JSON.parse(localStorage.getItem("dataProduct")) || [],
  totalAmount: JSON.parse(localStorage.getItem("totalAmount")) || 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    localStorage.setItem("dataProduct", JSON.stringify(updatedItems));
    localStorage.setItem("totalAmount", JSON.stringify(updatedTotalAmount));

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    localStorage.setItem("dataProduct", JSON.stringify(updatedItems));
    localStorage.setItem("totalAmount", JSON.stringify(updatedTotalAmount));

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVEALL") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    console.log(existingCartItemIndex);
    const updatedTotalAmount =
      state.totalAmount -
      state.items[existingCartItemIndex].amount *
        state.items[existingCartItemIndex].price;
    state.items.splice(existingCartItemIndex, 1);
   
    localStorage.setItem("totalAmount", JSON.stringify(updatedTotalAmount));
    localStorage.setItem("dataProduct", JSON.stringify(state.items));
    return {
      items: state.items,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };
  const removeHandler = (id) => {
    dispatchCartAction({ type: "REMOVEALL", id: id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    remove: removeHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
