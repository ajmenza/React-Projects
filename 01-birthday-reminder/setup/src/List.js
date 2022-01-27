import React from "react";

// getting the people array (of objects) by destructing prop object
const List = ({ people }) => {
  return (
    <>
      {/* person is an individual people object */}
      {people.map((person) => {
        const { id, name, age, image } = person;
        // Each return represents a different list item (which is a person)
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
