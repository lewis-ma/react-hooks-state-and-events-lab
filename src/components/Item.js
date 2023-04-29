import React from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
  };

  useEffect(() => {
    // You can implement cart logic here, e.g. adding the item to a cart state
    // array or object
    if (isAdded) {
      console.log(`${name} added to cart`);
    }
  }, [isAdded, name]);
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* <button className="add">Add to Cart</button> */}
      <button className="add" disabled={isAdded} onClick={handleAddToCart}>
        {isAdded ? "Added to Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
