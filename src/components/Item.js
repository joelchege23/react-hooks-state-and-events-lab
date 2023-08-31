import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(true);
  };
  const itemClass = inCart ? "in-cart" : ""

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span>{category}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;