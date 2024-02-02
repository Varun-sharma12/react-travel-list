import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Item from "./Item";
import Stats from "./Stats";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 12, packed: false },
];

function App() {
  const [items, setItems] = useState([]);
  // const [packed, setPack] = useState(true);
  function resetItems(){
    const confirmed = window.confirm("Are you sure you want to delete all items?")
    if (confirmed) setItems([]);
  }
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleSetPack(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        handleSetPack={handleSetPack}
        resetItems = {resetItems}
      />
      <Stats items={items} />
    </div>
  );
}


export default App;
