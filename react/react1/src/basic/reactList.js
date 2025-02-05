import React from "react";

function Car(props) {
  return <li>key : {props.key} , I am a { props.brand }</li>;
}
  
function Garage() {
  // const cars = ['Ford', 'BMW', 'Audi'];
  const cars = [
    {id : 1 , brand : "aBrand"},
    {id : 2 , brand : "bBrand"},
    {id : 3 , brand : "cBrand"},
    {id : 4 , brand : "dBrand"},
  ];
  
  return (
    <>
        <h1>Who lives in my garage?</h1>
        <ul>
        {/* {cars.map((car) => <Car brand={car} />)} */
          cars.map((car) => <Car key={car.id} brand={car.brand} />)
        }
        </ul> 
    </>
  );
}

export default Garage;