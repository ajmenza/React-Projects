import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// Sets only gets unique values so everytime we loop over an item we won't repeat the item's category in the allCategories array. We use the spread operator to destructure the set so we have an array now rather than a Set object
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    // User chooses a category which changes the state and then filters by checking if the items in the current list match the chosen category
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  } 

  return <main>
    <section className="menu section">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </section>
  </main>
}

export default App;
