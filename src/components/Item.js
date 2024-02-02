import React from "react";

export default function Item({ item, onDeleteItem, handleSetPack }) {
  return (
    <li>
      <input
        type="checkbox"
        onChange={() => handleSetPack(item.id)}
        value={item.packed} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.description}
      </span>
      <button onClick={(e) => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
