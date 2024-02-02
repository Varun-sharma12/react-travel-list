import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list</em>
      </p>
    );
  const numItem = items.length;
  const packedItem = items.filter((item) => item.packed === true);
  const percentage = Math.round((packedItem.length / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You are ready to go"
          : `👜 You have ${numItem} items on your list, and you already packed ${percentage}%`}
      </em>
    </footer>
  );
}
