import React from 'react';

export default function Coffees (props) {
  return (
    <div>
        <span class="title">☕️ Brewmaster ☕️</span>
      {
        props.coffees.map( coffee =>{
          return (
            <div key={coffee.name} className="coffee">
              <h2>{coffee.name}</h2>
              <h3>{coffee.origin}</h3>
               <h3> {coffee.variety}</h3>
               <h4>{coffee.notes}</h4>
            </div>
          )
        })
      }
    </div>
  );
}