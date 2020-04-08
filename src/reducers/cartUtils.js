export const addItemsToCart = (cartItems, itemsToBeAdded) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === itemsToBeAdded.id;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === itemsToBeAdded.id
        ? { ...itemsToBeAdded, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }
  return [...cartItems, { ...itemsToBeAdded, quantity: 1 }];
};
