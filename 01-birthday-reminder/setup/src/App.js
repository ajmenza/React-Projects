import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  // Setting people to data which is an array of objects
  const [people, setPeople] = useState(data);
  return (
    
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        {/* passing people array as prop in our List component */}
        <List people={people}/>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
}

export default App;
