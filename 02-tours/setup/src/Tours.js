import React from "react";
import Tour from "./Tour";
// import tours prop we named in <Tours> component in App.js
const Tours = ({tours, removeTour}) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          // use spread operator to set each key from tour object to a prop
          return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
        })}
      </div>
    </section>
  );
};

export default Tours;
