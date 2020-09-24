import React from 'react';

export default function Coffees (props) {
  return (
    <div>
      {
        props.coffees.map( coffee =>{
          return (
            <div key={coffee.name} className="coffee">
              <h2>{coffee.name}</h2>
              <h3>{coffee.origin}</h3>
               <p> {coffee.variety}</p>
               <small>{coffee.notes}</small>
            </div>
          )
        })
      }
    </div>
  );
}